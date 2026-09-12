'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import api from '@/lib/api'
import { LandingHeader } from '@/components/landing/header'
import { LandingFooter } from '@/components/landing/footer'
import {
  CheckCircle2,
  XCircle,
  Loader2,
  Image as ImageIcon,
  Calendar,
  Clock,
  ShieldCheck,
  Terminal,
  AlertTriangle,
} from 'lucide-react'

interface ReviewData {
  schedule_id?: string
  topic?: string
  content?: string
  image_url?: string
  scheduled_at?: string
  status?: string
  platform?: string
  team_emails?: string[]
  requires_email_verification?: boolean
  review_comments?: string
  error?: string
}

export default function ReviewPage() {
  const params = useParams()
  const router = useRouter()
  const token = params?.token as string

  const [reviewData, setReviewData] = useState<ReviewData | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [comments, setComments] = useState('')
  const [action, setAction] = useState<'approve' | 'reject' | null>(null)
  const [email, setEmail] = useState('')
  const [emailVerified, setEmailVerified] = useState(false)
  const [verifyingEmail, setVerifyingEmail] = useState(false)
  const [requiresEmailVerification, setRequiresEmailVerification] = useState(false)

  useEffect(() => {
    if (token) fetchReviewData()
  }, [token])

  /* ───────────────── EMAIL VERIFY ───────────────── */

  const verifyEmail = async () => {
    if (!email.trim()) return toast.error('Enter your email to continue')

    setVerifyingEmail(true)
    try {
      const { data } = await api.post(`/review/verify-email?token=${token}`, {
        email: email.trim(),
      })
      if (data.verified) {
        toast.success('Identity verified. Access granted.')
        setEmailVerified(true)
        await fetchReviewData(email.trim())
      } else {
        toast.error(data.error || 'Verification failed')
      }
    } catch (e: any) {
      toast.error(e?.response?.data?.error || 'Verification failed')
    } finally {
      setVerifyingEmail(false)
    }
  }

  /* ───────────────── FETCH DATA ───────────────── */

  const fetchReviewData = async (verifiedEmail?: string) => {
    try {
      setLoading(true)
      const url = verifiedEmail
        ? `/review?token=${token}&email=${encodeURIComponent(verifiedEmail)}`
        : `/review?token=${token}`

      const { data } = await api.get(url)

      if (data.requires_email_verification && !emailVerified) {
        setRequiresEmailVerification(true)
        setReviewData(null)
        return
      }

      setReviewData(data)
    } catch (e: any) {
      setReviewData({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  /* ───────────────── ACTION ───────────────── */

  const handleReview = async (type: 'approve' | 'reject') => {
    setSubmitting(true)
    setAction(type)
    try {
      await api.post(`/review?token=${token}`, {
        action: type,
        comments: comments || undefined,
      })
      toast.success(type === 'approve' ? 'Post approved' : 'Post rejected')
      setTimeout(() => router.push('/'), 2000)
    } catch (e: any) {
      toast.error(e?.response?.data?.error || 'Action failed')
    } finally {
      setSubmitting(false)
      setAction(null)
    }
  }

  const formatDate = (d?: string) =>
    d
      ? new Date(d).toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      : 'Not scheduled'

  /* ───────────────── EMAIL GATE ───────────────── */

  if (requiresEmailVerification && !emailVerified) {
    return (
      <div className="min-h-screen bg-background">
        <LandingHeader />
        <div className="flex items-center justify-center pt-28 px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
            <Card className="border border-primary/30 shadow-2xl bg-background/80 backdrop-blur-xl">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  ACCESS_VERIFICATION
                </div>
                <CardTitle className="text-2xl">Verify Identity</CardTitle>
                <CardDescription>
                  This content requires authorized reviewer access.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Input
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={verifyingEmail}
                />

                <Button
                  onClick={verifyEmail}
                  disabled={verifyingEmail}
                  className="w-full bg-gradient-to-r from-primary to-primary/70"
                >
                  {verifyingEmail ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying…
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      Verify & Continue
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <LandingFooter />
      </div>
    )
  }

  /* ───────────────── LOADING ───────────────── */

  if (loading || !reviewData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    )
  }

  if (reviewData.error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6 text-center">
          <AlertTriangle className="mx-auto mb-3 text-destructive" />
          <p>{reviewData.error}</p>
        </Card>
      </div>
    )
  }

  const isProcessed =
    reviewData.status === 'pending' ||
    reviewData.status === 'rejected' ||
    reviewData.status === 'posted'

  /* ───────────────── MAIN UI ───────────────── */

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />

      <div className="pt-28 px-4 pb-16 max-w-4xl mx-auto space-y-6">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="relative overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
            <CardHeader className="relative">
              <div className="flex items-center gap-2 font-mono text-xs text-primary">
                <Terminal className="h-4 w-4" />
                REVIEW_CONSOLE
              </div>
              <CardTitle className="text-3xl">Post Approval</CardTitle>
              <CardDescription>
                Inspect content carefully before execution.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* META */}
        <Card className="border border-border/60 bg-muted/30">
          <CardContent className="flex flex-wrap gap-4 p-4 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {formatDate(reviewData.scheduled_at)}
            </span>
            {reviewData.platform && (
              <span className="font-mono text-muted-foreground">
                PLATFORM: {reviewData.platform.toUpperCase()}
              </span>
            )}
          </CardContent>
        </Card>

        {/* CONTENT */}
        <Card className="border border-border/60">
          <CardHeader>
            <CardTitle>Post Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap leading-relaxed text-sm">
              {reviewData.content}
            </div>
          </CardContent>
        </Card>

        {/* IMAGE */}
        {reviewData.image_url && (
          <Card className="border border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Image Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={reviewData.image_url}
                className="rounded-lg max-h-80 mx-auto"
              />
            </CardContent>
          </Card>
        )}

        {/* ACTION */}
        {!isProcessed && (
          <Card className="border border-border/60">
            <CardContent className="space-y-4 pt-6">
              <Textarea
                placeholder="Optional reviewer comments…"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />

              <div className="flex gap-4">
                <Button
                  onClick={() => handleReview('approve')}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600"
                >
                  {submitting && action === 'approve' ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Approve
                    </>
                  )}
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => handleReview('reject')}
                  className="flex-1"
                >
                  {submitting && action === 'reject' ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <XCircle className="mr-2 h-4 w-4" />
                      Reject
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <LandingFooter />
    </div>
  )
}
