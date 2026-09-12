import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_BASE ||
  process.env.BACKEND_URL ||
  'https://smartpost-backend-786852619137.us-central1.run.app'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return handleRequest(request, path, 'GET')
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return handleRequest(request, path, 'POST')
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return handleRequest(request, path, 'PUT')
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return handleRequest(request, path, 'DELETE')
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  return handleRequest(request, path, 'PATCH')
}

async function handleRequest(
  request: NextRequest,
  pathSegments: string[],
  method: string
) {
  try {
    let path = pathSegments.join('/').replace(/^\/+|\/+$/g, '')
    const backendUrl = BACKEND_URL.replace(/\/+$/, '')
    
    // If no path provided, forward to backend root
    if (!path) {
      const url = new URL(backendUrl)
      request.nextUrl.searchParams.forEach((value, key) => {
        url.searchParams.append(key, value)
      })
      
      const response = await fetch(url.toString(), {
        method: request.method,
        headers: Object.fromEntries(request.headers),
        body: ['POST', 'PUT', 'PATCH'].includes(request.method) ? await request.text() : undefined,
      })
      
      const data = await response.text()
      return new NextResponse(data, { status: response.status })
    }
    
    // Handle Slack endpoints - backend expects /slack/... not /api/slack/...
    if (path.startsWith('slack/')) {
      // Keep as is - backend has /slack/status, /slack/connect, etc.
      path = path
    }
    // Handle MNEE transaction lookup endpoints (/v1/tx/{txid})
    else if (path.startsWith('v1/tx/')) {
      // Extract transaction ID
      const txId = path.replace('v1/tx/', '').split('?')[0]
      const authToken = request.nextUrl.searchParams.get('auth_token') || ''
      
      // Call MNEE API directly (server-side, no CORS issues)
      const mneeApiBase = process.env.NEXT_PUBLIC_MNEE_ENV === 'production' 
        ? 'https://proxy-api.mnee.net'
        : 'https://sandbox-proxy-api.mnee.net'
      
      const mneeUrl = `${mneeApiBase}/v1/tx/${txId}${authToken ? `?auth_token=${authToken}` : ''}`
      
      const mneeResponse = await fetch(mneeUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
      
      if (!mneeResponse.ok) {
        const errorText = await mneeResponse.text()
        return NextResponse.json(
          { error: `MNEE API error: ${errorText}` },
          { status: mneeResponse.status }
        )
      }
      
      const data = await mneeResponse.json()
      return NextResponse.json(data, { status: 200 })
    }
    // Handle other MNEE v1/v2 API endpoints - these should be intercepted by fetch patching
    // but if they reach here, we can't handle them (backend doesn't have direct proxies)
    else if (path.startsWith('v1/') || path.startsWith('v2/')) {
      // Return 404 for unhandled MNEE API endpoints
      return NextResponse.json(
        { error: `MNEE API endpoint ${path} should be intercepted by fetch patching` },
        { status: 404 }
      )
    }
    
    const url = new URL(`${backendUrl}/${path}`)

    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.append(key, value)
    })

    let body: string | undefined
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      body = await request.text()
    }

    const headers: Record<string, string> = {}
    request.headers.forEach((value, key) => {
      const lowerKey = key.toLowerCase()
      if (!['host', 'connection', 'content-length'].includes(lowerKey)) {
        headers[key] = value
      }
    })

    if (body && !headers['content-type']) {
      headers['Content-Type'] = 'application/json'
    }

    const response = await fetch(url.toString(), {
      method,
      headers,
      body,
    })

    const contentType = response.headers.get('content-type') || ''
    const data = contentType.includes('application/json')
      ? await response.json()
      : await response.text()

    const nextResponse = contentType.includes('application/json')
      ? NextResponse.json(data, { status: response.status })
      : new NextResponse(data, { status: response.status })

    response.headers.forEach((value, key) => {
      if (!['content-length', 'transfer-encoding'].includes(key.toLowerCase())) {
        nextResponse.headers.set(key, value)
      }
    })

    return nextResponse
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Proxy error' },
      { status: 500 }
    )
  }
}
