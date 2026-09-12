'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import api from '@/lib/api'
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Users,
  Zap,
  Calendar,
  Loader2,
  Activity,
  Cpu,
  Flame,
} from 'lucide-react'

interface AnalyticsData {
  total_posts: number
  total_spent: number
  total_earned: number
  engagement_rate: number
  avg_engagement: number
  posts_by_service: Array<{ service: string; count: number; spent: number }>
  recent_payments: Array<{
    id: string
    service: string
    amount: string
    status: string
    created_at: string
    tx_hash?: string
  }>
}

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | 'all'>('30d')

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      const { data } = await api.get(`/analytics?range=${timeRange}`)
      if (data?.error) toast.error(data.error)
      else setAnalytics(data)
    } catch {
      toast.error('Analytics core unreachable')
    } finally {
      setLoading(false)
    }
  }

  /* ───────────────── LOADING ───────────────── */

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        >
          <Loader2 className="h-10 w-10 text-primary" />
        </motion.div>
      </div>
    )
  }

  if (!analytics) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground font-mono">
          ANALYTICS_STREAM_EMPTY
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-10 pt-4">

      {/* ───────────────── CORE HEADER ───────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="
          relative overflow-hidden
          border border-primary/20
          bg-background/70 backdrop-blur-xl
          shadow-2xl
        ">
          {/* gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5" />
          <div className="absolute -top-24 -left-24 h-96 w-96 bg-primary/20 blur-[120px]" />

          <CardHeader className="relative z-10 p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-primary">
              <Cpu className="h-4 w-4" />
              ANALYTICS_CORE :: LIVE
            </div>

            <CardTitle className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Performance Intelligence
            </CardTitle>

            <CardDescription className="max-w-2xl">
              Real-time insight into content output, engagement signals,
              and MNEE economy activity — decoded for humans.
            </CardDescription>

            {/* range selector */}
            <div className="flex gap-2 pt-4">
              {(['7d', '30d', 'all'] as const).map((range) => (
                <motion.button
                  key={range}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wide transition-all
                    ${
                      timeRange === range
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted/60 text-muted-foreground hover:bg-muted'
                    }
                  `}
                >
                  {range === '7d' ? 'LAST_7_DAYS' : range === '30d' ? 'LAST_30_DAYS' : 'ALL_TIME'}
                </motion.button>
              ))}
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* ───────────────── SIGNAL GRID ───────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {[
          {
            label: 'POSTS_EXECUTED',
            value: analytics.total_posts,
            icon: BarChart3,
            accent: 'text-primary',
          },
          // {
          //   label: 'MNEE_SPENT',
          //   value: analytics.total_spent.toFixed(2),
          //   icon: DollarSign,
          //   accent: 'text-red-500',
          // },
          // {
          //   label: 'MNEE_EARNED',
          //   value: analytics.total_earned.toFixed(2),
          //   icon: TrendingUp,
          //   accent: 'text-emerald-500',
          // },
          // {
          //   label: 'ENGAGEMENT_RATE',
          //   value: `${analytics.engagement_rate.toFixed(1)}%`,
          //   icon: Users,
          //   accent: 'text-cyan-400',
          // },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="
              relative overflow-hidden
              border border-border/60
              bg-background/80 backdrop-blur
              hover:border-primary/40
              hover:shadow-xl
              transition-all
            ">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition" />

              <CardContent className="relative z-10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {m.label}
                    </p>
                    <p className="text-2xl font-bold mt-1">
                      {m.value}
                    </p>
                  </div>
                  <m.icon className={`h-6 w-6 ${m.accent}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      
    </div>
  )
}
