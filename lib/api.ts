import axios from 'axios'
import { tokenStore } from './token-store'

// Get API base URL directly (both frontend and backend use HTTPS, CORS enabled on backend)
function getApiBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE || 'https://smartpost-backend.onrender.com'
}

const api = axios.create({ 
  baseURL: getApiBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 360000, // 360 seconds (6 minutes) timeout for image generation
})

api.interceptors.request.use((config) => {
  const token = tokenStore.get()
  if (token && token !== 'null' && token !== 'undefined' && token.trim() !== '') {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    // Don't set Authorization header if token is invalid
    delete config.headers.Authorization
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default api
