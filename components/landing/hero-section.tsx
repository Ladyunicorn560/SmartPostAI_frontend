'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Coins } from 'lucide-react'
import { FloatingShapes } from './svg-animations'

export function HeroSection() {
  return (
    <section className="relative container mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-8 sm:pb-10 md:pb-12">
      <FloatingShapes />

      <div className="relative z-10 mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="px-2 sm:px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight">
            Post Smarter. Turn ideas into{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              LinkedIn posts — instantly
            </span>
          </h1>

          <p className="mx-auto max-w-2xl px-2 sm:px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground">
            Built to run your entire LinkedIn content game.
          </p>

          <div className="mx-auto mt-4 sm:mt-6 max-w-2xl rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-3 sm:p-4 md:p-5">
            <div className="flex items-start gap-2 sm:gap-3">
              <Coins className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
              <div className="flex-1 text-left min-w-0">
                <p className="font-semibold">
                  AI-Powered Content Creation
                </p>
                <p className="text-sm text-muted-foreground">
                  Create engaging LinkedIn content with advanced AI technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA placeholder intentionally empty */}
        <div />
      </div>
    </section>
  )
}
