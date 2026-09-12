'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useLinkedIn } from '@/contexts/LinkedInContext'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Link2,
  Link2Off,
  Bot,
  Calendar,
  CheckCircle2,
  Terminal,
  LayoutDashboard,
} from 'lucide-react'

const steps = [
  {
    key: 'linkedin',
    icon: Link2,
    label: 'LINKEDIN_CONNECTION',
    description: 'Authorize account access for publishing & scheduling.',
  },
  {
    key: 'ai',
    icon: Bot,
    label: 'AI_POST_ENGINE',
    description: 'Enable automated post generation & optimization.',
  },
  {
    key: 'schedule',
    icon: Calendar,
    label: 'SCHEDULER',
    description: 'Configure recurring publishing cadence.',
  },
]

export default function OnboardingPage() {
  const { connected, connect, disconnect } = useLinkedIn()
  const router = useRouter()

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">

      {/* SYSTEM GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,170,0.14),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 space-y-14">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center items-center gap-2 font-mono text-sm tracking-widest text-primary">
            <Terminal className="h-4 w-4" />
            SYSTEM_INITIALIZATION
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Provisioning your
            <br />
            content engine
          </h1>

          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Complete the steps below to unlock full automation.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isLinkedInStep = step.key === 'linkedin'
            const completed = isLinkedInStep ? connected : false

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl border border-border/60 bg-background/70 backdrop-blur-xl px-6 py-5 flex items-start gap-5`}
              >
                <div
                  className={`h-12 w-12 rounded-lg grid place-items-center shrink-0 ${
                    completed
                      ? 'bg-green-500/15 text-green-500'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {completed ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm tracking-widest">
                      {step.label}
                    </span>
                    {completed && (
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                        ACTIVE
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ACTION PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-border/70 bg-background/80 backdrop-blur-xl p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-mono">
                LINKEDIN_CONNECTION
              </h2>
              <p className="text-muted-foreground">
                {connected
                  ? 'Account authorized. Posting enabled.'
                  : 'Authorization required to proceed.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {connected ? (
                <Button
                  variant="outline"
                  onClick={disconnect}
                  className="font-mono"
                >
                  <Link2Off className="mr-2 h-4 w-4" />
                  REVOKE ACCESS
                </Button>
              ) : (
                <Button onClick={connect} className="font-mono">
                  <Link2 className="mr-2 h-4 w-4" />
                  AUTHORIZE
                </Button>
              )}

              <Button
                variant="secondary"
                onClick={() => router.push('/dashboard')}
                className="font-mono"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                ENTER DASHBOARD
              </Button>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <p className="text-center text-xs text-muted-foreground font-mono">
          SYSTEM STATUS SAVED · SETTINGS MODIFIABLE LATER
        </p>
      </div>
    </div>
  )
}
