'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-7xl relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl border-2 border-primary/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Image: full width on mobile, left column on desktop */}
        {/* <div className="relative min-h-[200px] sm:min-h-[240px] lg:min-h-[320px] lg:col-span-5 order-1">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a1d1c77d8f6?q=80&w=1200&auto=format&fit=crop"
            alt="Professional creating content"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 500px"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        </div> */}
        {/* Content: below image on mobile, right column on desktop */}
        {/* <div className="relative z-10 flex flex-col justify-center text-center lg:text-left p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 lg:col-span-7 order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            Ready to save time?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8">
            Start creating better LinkedIn content in minutes, not hours.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-fit mx-auto lg:mx-0">
              Try SmartPostAI for free
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">No credit card required</p>
        </div> */}
      </motion.div>
    </section>
  )
}

