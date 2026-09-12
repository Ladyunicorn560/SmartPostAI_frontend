'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, Terminal, ShieldCheck } from 'lucide-react'

export default function SignupPage() {
  const { signup, loading, jwt } = useAuth()
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [updates, setUpdates] = useState(false)

  useEffect(() => {
    if (jwt) router.replace('/onboarding')
  }, [jwt, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signup(name, email, password)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* BACKGROUND GRID / GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,170,0.12),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

        {/* LEFT — HACKER STATEMENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex flex-col justify-center px-24"
        >
          <div className="space-y-8 max-w-xl">

            <div className="flex items-center gap-3 text-primary font-mono text-sm tracking-widest">
              <Terminal className="h-4 w-4" />
              ACCESS_GRANTED
            </div>

            <h1 className="text-6xl font-bold leading-tight tracking-tight">
              Stop writing
              <br />
              like everyone
              <br />
              else.
            </h1>

            <p className="text-lg text-muted-foreground">
              SmartPostAI is a content system for people who want
              leverage — not templates.
            </p>

            <div className="space-y-3 font-mono text-sm text-muted-foreground">
              <div>→ Built for LinkedIn dominance</div>
              <div>→ Trained for clarity & authority</div>
              <div>→ No noise. No fluff.</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — TERMINAL FORM */}
        <div className="flex items-center justify-center px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-2xl"
          >
            {/* TERMINAL HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 font-mono text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                secure-session
              </span>
              <span className="text-muted-foreground">v1.0</span>
            </div>

            {/* FORM */}
            <div className="p-6 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold font-mono">
                  Create access
                </h2>
                <p className="text-muted-foreground text-sm">
                  This takes less than a minute.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="space-y-1">
                  <Label className="font-mono text-xs">NAME</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="font-mono"
                  />
                </div>

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
                      placeholder="**********"
                      minLength={10}
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

                <div className="flex items-start gap-2">
                  <Checkbox
                    checked={updates}
                    onCheckedChange={(v) => setUpdates(v === true)}
                  />
                  <span className="text-xs text-muted-foreground font-mono">
                    Receive system updates
                  </span>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full font-mono tracking-wide"
                >
                  {loading ? 'INITIALIZING…' : 'ENTER SYSTEM'}
                </Button>
              </form>

              <p className="text-center text-xs text-muted-foreground font-mono">
                Already inside?{' '}
                <Link href="/login" className="text-primary hover:underline">
                  LOGIN
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
