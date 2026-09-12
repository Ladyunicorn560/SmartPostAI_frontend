'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Sparkles,
  Lightbulb,
  MessageSquare,
  Brain,
  Globe,
} from 'lucide-react'

const tones = [
  { label: 'Inspirational', icon: Sparkles },
  { label: 'Educational', icon: Brain, active: true },
  { label: 'Reflective', icon: MessageSquare },
]

const languages = [
  'English',
  'French',
  'Spanish',
  'Italian',
  'German',
  'Portuguese',
  'Dutch',
]

export function AIFeaturesSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 space-y-28">

      {/* SECTION INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <Badge className="mx-auto w-fit">AI that understands LinkedIn</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Create content that feels human,
          <br className="hidden sm:block" />
          performs like strategy
        </h2>
        <p className="text-lg text-muted-foreground">
          SmartPostAI helps you think, write, and publish with clarity —
          without burning hours on content.
        </p>
      </motion.div>

      {/* FEATURE 1 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold">
            From idea to post — instantly
          </h3>
          <p className="text-muted-foreground text-lg">
            Start with a thought, a lesson, or a question.
            SmartPostAI structures it into a LinkedIn-ready post
            designed for clarity and engagement.
          </p>
          <p className="text-muted-foreground">
            No templates. No robotic tone. Just clean, confident writing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 space-y-3">
              <p className="font-medium">Draft preview</p>
              <div className="rounded-lg border bg-muted/40 p-4 text-sm leading-relaxed">
                Great LinkedIn posts don’t start with writing.
                <br />
                They start with clarity.
                <br /><br />
                Here’s how to turn everyday insights into content
                people actually stop to read.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* FEATURE 2 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 space-y-3">
              <p className="font-medium">Choose your intent</p>
              <div className="space-y-2">
                {tones.map((tone, i) => (
                  <Button
                    key={i}
                    variant={tone.active ? 'default' : 'outline'}
                    className="w-full justify-start"
                  >
                    <tone.icon className="h-4 w-4 mr-2" />
                    {tone.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Say the same idea — the right way
          </h3>
          <p className="text-muted-foreground text-lg">
            Educational, inspirational, or reflective —
            your tone shapes how your message lands.
          </p>
          <p className="text-muted-foreground">
            SmartPostAI adapts without losing your voice.
          </p>
        </motion.div>
      </div>

      {/* FEATURE 3 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Ideas on demand
          </h3>
          <p className="text-muted-foreground text-lg">
            When consistency matters, inspiration shouldn’t slow you down.
          </p>
          <p className="text-muted-foreground">
            Generate post ideas tailored to your expertise,
            audience, and goals — in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span className="font-semibold">Suggested post ideas</span>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border bg-muted/40 p-4">
                  <p className="font-medium mb-1">
                    Why consistency beats virality on LinkedIn
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A short breakdown on sustainable growth over short-term spikes.
                  </p>
                </div>

                <div className="rounded-xl border bg-muted/40 p-4">
                  <p className="font-medium mb-1">
                    The hidden cost of overthinking content
                  </p>
                  <p className="text-sm text-muted-foreground">
                    How hesitation quietly kills visibility and momentum.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* FEATURE 4 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="font-semibold">Available languages</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span
                    key={lang}
                    className={`rounded-full border px-4 py-1.5 text-sm
                      ${index === 0
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted/40 hover:bg-muted/60'}
                    `}
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Write naturally for different regions without rewriting or losing tone.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold">
            One message. Many languages.
          </h3>
          <p className="text-muted-foreground text-lg">
            Reach a global audience without rewriting everything from scratch.
          </p>
          <p className="text-muted-foreground">
            SmartPostAI preserves tone and clarity across languages.
          </p>
        </motion.div>
      </div>

    </section>
  )
}
