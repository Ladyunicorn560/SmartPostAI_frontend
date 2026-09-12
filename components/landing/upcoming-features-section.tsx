'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Youtube, Twitter, Slack, MessageSquare, Clock } from 'lucide-react'

const platforms = [
  {
    name: 'YouTube',
    icon: Youtube,
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
]

export function UpcomingFeaturesSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 space-y-14">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <Badge variant="outline">Coming soon</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          SmartPostAI, beyond LinkedIn
        </h2>
        <p className="text-muted-foreground text-lg">
          The same AI workflow you love — expanding to more platforms.
        </p>
      </motion.div>

      {/* Platforms */}
      <div className="grid md:grid-cols-2 gap-6">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48">
                <Image
                  src={platform.image}
                  alt={platform.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>

              <CardContent className="p-5 flex items-center gap-3">
                <platform.icon className="h-6 w-6" />
                <div className="flex-1">
                  <p className="font-semibold text-lg">{platform.name}</p>
                  <p className="text-sm text-muted-foreground">
                    AI-powered content creation & scheduling
                  </p>
                </div>
                <Badge variant="secondary">Soon</Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Slack + WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border bg-muted/30 p-6 text-center space-y-3"
      >
        <div className="flex justify-center gap-3">
          <Slack className="h-6 w-6" />
          <MessageSquare className="h-6 w-6" />
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold">
          Slack & WhatsApp integrations
        </h3>

        <p className="text-muted-foreground">
          Create and manage content directly from your daily tools.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          Expected launch: March 2025
        </div>
      </motion.div>
    </section>
  )
}
