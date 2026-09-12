'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className="relative w-full px-6 sm:px-10 lg:px-[180px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background shadow-2xl"
      >
        {/* Ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />

        {/* Glow accents */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-14 lg:px-20 py-20 sm:py-28 lg:py-32 text-center">
          <h2 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Stop guessing.
            <br />
            Start posting smarter.
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              SmartPostAI
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Create, refine, and publish LinkedIn posts with clarity,
            confidence, and consistency — without overthinking.
          </p>

          <Link href="/signup">
            <Button
              size="lg"
              className="px-12 py-6 text-lg sm:text-xl rounded-full"
            >
              Try SmartPostAI
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
