'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function TechSupportSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-background"
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-14 p-8 sm:p-12 md:p-16">

          {/* LEFT — STATEMENT */}
          <div className="flex flex-col justify-center space-y-6">
            <span className="inline-block w-fit rounded-full border px-4 py-1 text-xs tracking-wide text-muted-foreground">
              Built to scale with you
            </span>

            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Serious tools
              <br />
              for people who
              <br />
              post with intent
            </h2>

            <p className="max-w-xl text-lg text-muted-foreground">
              SmartPostAI isn’t a hack or a shortcut.
              It’s a calm, reliable system for creators
              who want consistency without chaos.
            </p>
          </div>

          {/* RIGHT — ACTION PANEL */}
          <div className="relative flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border bg-background/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl"
            >
              <p className="text-sm text-muted-foreground mb-6">
                Start without friction
              </p>

              <div className="flex flex-col gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full group">
                    Create your first post
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center">
                  Free to try · No credit card
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
