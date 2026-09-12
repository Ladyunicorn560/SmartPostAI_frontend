'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, Terminal, Lock } from 'lucide-react'

export default function LoginPage() {
  const { login, loading, jwt } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (jwt) router.replace('/')
  }, [jwt, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* BACKGROUND SYSTEM GRID */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,170,0.14),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

        {/* LEFT — SYSTEM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex flex-col justify-center px-24"
        >
          <div className="max-w-xl space-y-8">

            <div className="flex items-center gap-3 font-mono text-sm tracking-widest text-primary">
              <Terminal className="h-4 w-4" />
              SESSION_AVAILABLE
            </div>

            <h1 className="text-6xl font-bold leading-tight tracking-tight">
              Welcome back.
              <br />
              Continue where
              <br />
              you left off.
            </h1>

            <p className="text-lg text-muted-foreground">
              Your content system is waiting.
              Pick up momentum — don’t rebuild it.
            </p>

            <div className="space-y-3 font-mono text-sm text-muted-foreground">
              <div>→ Drafts preserved</div>
              <div>→ Strategy intact</div>
              <div>→ Execution ready</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — TERMINAL LOGIN */}
        <div className="flex items-center justify-center px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl"
          >
            {/* TERMINAL BAR */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 font-mono text-sm">
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                secure-login
              </span>
              <span className="text-muted-foreground">auth.node</span>
            </div>

            {/* LOGIN FORM */}
            <div className="p-6 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold font-mono">
                  Re-enter system
                </h2>
                <p className="text-sm text-muted-foreground">
                  Credentials required to proceed.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="space-y-1">
                  <Label className="font-mono text-xs">EMAIL</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    required
                    className="font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="font-mono text-xs">PASSWORD</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      required
                      className="pr-10 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full font-mono tracking-wide"
                >
                  {loading ? 'AUTHENTICATING…' : 'ACCESS SYSTEM'}
                </Button>
              </form>

              <p className="text-center text-xs text-muted-foreground font-mono">
                New here?{' '}
                <Link href="/signup" className="text-primary hover:underline">
                  REQUEST ACCESS
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
