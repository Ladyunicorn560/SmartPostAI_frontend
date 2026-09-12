'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  Calendar,
  Zap,
  Globe,
  FileText,
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Writing, Upgraded by AI',
    description:
      'Posts that sound unmistakably like you — sharp, human, and worth reading. No robotic fluff, ever.',
  },
  {
    icon: Calendar,
    title: 'Scheduling That Actually Thinks',
    description:
      'Your content goes live at the right moment, automatically. You stay focused. We handle the timing.',
  },
  {
    icon: FileText,
    title: 'Templates That Scale Your Voice',
    description:
      'Turn high-performing posts into reusable systems. Consistency without creative burnout.',
  },
  {
    icon: Globe,
    title: 'Global Reach, Native Tone',
    description:
      'Create content in 7+ languages while keeping your voice intact — nuance included.',
  },
  {
    icon: Zap,
    title: 'From Idea to Impact — Fast',
    description:
      'Draft, refine, and publish in minutes. Because momentum beats perfection.',
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-28">

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, ease: 'easeOut' }}
            className={index === 0 ? 'lg:col-span-2' : ''}
          >
            <Card className="group h-full border border-border/60 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <CardContent className="flex items-start gap-5 p-6 sm:p-8">
                
                {/* ICON */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]">
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* VISUAL BREAK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-border/80 shadow-2xl"
      >
        <div className="relative aspect-[16/9]">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop"
            alt="Modern workspace for creators"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
      </motion.div>

    </section>
  )
}
