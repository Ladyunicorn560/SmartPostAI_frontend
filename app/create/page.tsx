'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLinkedIn } from '@/contexts/LinkedInContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import api from '@/lib/api'
import { Send, Terminal, ImageIcon } from 'lucide-react'

export default function CreatePostPage() {
  const { connected } = useLinkedIn()
  const [text, setText] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [log, setLog] = useState<Array<{ msg: string; type: string; ts: string }>>([])

  const pushLog = (msg: string, type: string = 'info') => {
    setLog((l) => [...l, { msg, type, ts: new Date().toLocaleTimeString() }])
  }

  const executePost = async () => {
    setLoading(true)

    try {
      if (!text.trim()) {
        toast.error('Write something first')
        pushLog('Missing post content', 'warning')
        setLoading(false)
        return
      }

      if (!connected) {
        toast.error('Connect LinkedIn first')
        pushLog('LinkedIn not connected', 'warning')
        setLoading(false)
        return
      }

      if (image) {
        pushLog('Reading image…')

        const reader = new FileReader()
        reader.onloadend = async () => {
          try {
            pushLog('Uploading image to storage…')
            const upload = await api.post('/linkedin/upload-image', {
              image_base64: reader.result,
            })

            if (!upload.data.image_url) {
              throw new Error('Upload failed')
            }

            pushLog('Image uploaded ✔')
            await api.post('/linkedin/post', {
              text,
              imageUrl: upload.data.image_url,
            })

            pushLog('Post published successfully ✔', 'success')
            toast.success('Posted to LinkedIn!')
            setText('')
            setImage(null)
            setLoading(false)
          } catch (e: any) {
            const msg = e?.response?.data?.error || e.message
            pushLog(msg, 'error')
            toast.error(msg)
            setLoading(false)
          }
        }
        reader.readAsDataURL(image)
      } else {
        pushLog('Sending text-only post…')
        await api.post('/linkedin/post', { text })
        pushLog('Post published successfully ✔', 'success')
        toast.success('Posted to LinkedIn!')
        setText('')
        setLoading(false)
      }
    } catch (e: any) {
      pushLog(e.message, 'error')
      toast.error(e.message)
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">

      {/* ───── HEADER ───── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="relative overflow-hidden border border-primary/30 bg-background/80 backdrop-blur-xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-3 font-mono text-xs text-primary mb-1">
              <Terminal className="h-4 w-4" />
              POST_CONSOLE
            </div>
            <CardTitle className="text-3xl font-bold">
              Create LinkedIn Post
            </CardTitle>
            <CardDescription>
              Write, attach, and publish — fast and clean.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      {/* ───── POST EDITOR ───── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <Card className="border border-border/70 bg-background/80 backdrop-blur">
          <CardContent className="space-y-5 pt-6">

            <div className="space-y-2">
              <Label className="font-mono text-xs text-muted-foreground">
                POST_BODY
              </Label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={6}
                placeholder="Share a thought, lesson, or insight…"
                className="resize-none text-base"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-mono text-xs text-muted-foreground">
                OPTIONAL_IMAGE
              </Label>
              <label className="flex items-center gap-3 cursor-pointer border border-dashed border-border rounded-lg px-4 py-3 hover:bg-muted/40 transition">
                <ImageIcon className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  {image ? image.name : 'Attach image'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            <Button
              onClick={executePost}
              disabled={loading}
              size="lg"
              className="w-full font-mono"
            >
              <Send className="h-4 w-4 mr-2" />
              {loading ? 'EXECUTING…' : 'DEPLOY_POST'}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* ───── ACTIVITY LOG ───── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border border-border/70 bg-background/80">
          <CardHeader>
            <CardTitle className="font-mono text-sm">
              ACTIVITY_LOG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-xs bg-muted/40 rounded-lg p-4 max-h-56 overflow-auto space-y-1">
              {!log.length ? (
                <span className="text-muted-foreground">
                  Waiting for commands…
                </span>
              ) : (
                log.map((l, i) => (
                  <div
                    key={i}
                    className={
                      l.type === 'error'
                        ? 'text-red-400'
                        : l.type === 'success'
                        ? 'text-emerald-400'
                        : 'text-muted-foreground'
                    }
                  >
                    [{l.ts}] {l.msg}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
