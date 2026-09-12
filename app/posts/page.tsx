'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import api from '@/lib/api'
import { toast } from 'sonner'

import {
  ExternalLink,
  Calendar,
  Link as LinkIcon,
  Loader2,
  Copy,
  CheckCircle2,
  RefreshCw,
  Terminal,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Post {
  id: string
  topic: string
  linkedin_post_url?: string
  linkedin_post_id?: string
  created_at: string
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const { data } = await api.get('/linkedin/posts')
      setPosts(data.posts || [])
    } catch {
      toast.error('Failed to load posts')
    } finally {
      setLoading(false)
    }
  }

  const copyUrl = async (url: string) => {
    await navigator.clipboard.writeText(url)
    setCopied(url)
    toast.success('Copied to clipboard')
    setTimeout(() => setCopied(null), 2000)
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

  /* ───────────────── LOADING ───────────────── */

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="font-mono text-sm text-muted-foreground">
          INITIALIZING_POST_ARCHIVE…
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8 pt-6">

      {/* ───────────── SYSTEM HEADER ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="relative overflow-hidden border border-primary/30 bg-background/80 backdrop-blur-xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

          <CardHeader className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary mb-1">
                  <Terminal className="h-4 w-4" />
                  DATA_NODE::POST_LOGS
                </div>
                <CardTitle className="text-2xl font-bold">
                  Generated Posts
                </CardTitle>
                <CardDescription>
                  All LinkedIn posts created by SmartPostAI
                </CardDescription>
              </div>

              <motion.div whileHover={{ rotate: 90 }}>
                <Button
                  size="sm"
                  onClick={fetchPosts}
                  className="font-mono border border-primary/40 bg-background hover:bg-primary/10"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  SYNC
                </Button>
              </motion.div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* ───────────── EMPTY STATE ───────────── */}
      {posts.length === 0 && (
        <Card className="border border-dashed border-primary/40 bg-background/60">
          <CardContent className="py-20 text-center space-y-4">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <LinkIcon className="h-12 w-12 mx-auto text-primary" />
            </motion.div>

            <p className="font-mono text-sm text-muted-foreground">
              NO_POSTS_FOUND
            </p>
            <p className="text-xs text-muted-foreground">
              Create your first post to activate the feed
            </p>
          </CardContent>
        </Card>
      )}

      {/* ───────────── POSTS GRID ───────────── */}
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <Card className="relative overflow-hidden border border-border/70 bg-background/80 backdrop-blur hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,200,0.08)] transition-all">

              {/* Scanline */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.3)_50%)] bg-[length:100%_4px]" />

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">
                      {post.topic}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-xs font-mono">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.created_at)}
                    </CardDescription>
                  </div>

                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono">
                    POSTED
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">

                {/* URL BLOCK */}
                {post.linkedin_post_url && (
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-primary">
                        LINKEDIN::URL
                      </span>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyUrl(post.linkedin_post_url!)}
                          className="font-mono"
                        >
                          {copied === post.linkedin_post_url ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>

                        <Button
                          asChild
                          size="sm"
                          className="font-mono"
                        >
                          <a
                            href={post.linkedin_post_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            OPEN
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="font-mono text-[11px] break-all bg-background/70 p-2 rounded-md border">
                      {post.linkedin_post_url}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
