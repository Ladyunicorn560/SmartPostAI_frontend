'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLinkedIn } from '@/contexts/LinkedInContext'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Zap,
  Bot,
  Calendar,
  FileText,
  Link as LinkIcon,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { formatIST } from '@/lib/utils'

export default function DashboardPage() {
  const { connected } = useLinkedIn()

  return (
    <div className="pt-8 sm:pt-10 lg:pt-12 space-y-14">

      {/* ───────── HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome back 👋
          </h1>
          <p className="text-sm text-muted-foreground">
            {formatIST(new Date())} · Let’s build something today
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {connected ? (
            <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              LinkedIn connected
            </Badge>
          ) : (
            <Badge variant="secondary">LinkedIn not connected</Badge>
          )}
        </motion.div>
      </motion.div>

      {/* ───────── MAIN GRID */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">

        {/* LEFT — YOUR WORK */}
        <motion.section
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-border/70 bg-background/80 backdrop-blur shadow-sm hover:shadow-xl transition-all"
        >
          <div className="px-6 py-5 border-b border-border/60 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Your workspace</h2>
              <p className="text-sm text-muted-foreground">
                Drafts, ideas, and scheduled content
              </p>
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button size="sm">New post</Button>
            </motion.div>
          </div>

          <div className="p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="rounded-xl border border-dashed border-border/60 p-10 text-center hover:border-primary/40 transition"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <Zap className="mx-auto h-10 w-10 text-primary mb-4" />
              </motion.div>

              <p className="font-medium">Nothing here yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Start with a post, an idea, or AI assistance
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* RIGHT — QUICK TOOLS */}
        <motion.section
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold">Quick actions</h2>

          <div className="space-y-3">
            {[
              { href: '/create', label: 'Write a post', icon: FileText },
              { href: '/ai', label: 'Generate with AI', icon: Bot },
              { href: '/schedule', label: 'Schedule posts', icon: Calendar },
              { href: '/url-to-post', label: 'Turn link into post', icon: LinkIcon },
              // { href: '/ideas', label: 'Get post ideas', icon: Sparkles },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Link href={item.href}>
                  <div className="group rounded-xl border border-border/70 px-5 py-4 flex items-center justify-between bg-background/70 hover:bg-background hover:shadow-lg hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* ───────── ACTIVITY */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -3 }}
        className="rounded-2xl border border-border/70 bg-background/80 shadow-sm hover:shadow-lg transition-all"
      >
      
      </motion.section>

    </div>
  )
}
