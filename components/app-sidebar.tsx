'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { useLinkedIn } from '@/contexts/LinkedInContext'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  LayoutDashboard,
  PenSquare,
  Bot,
  Calendar,
  LogOut,
  Link2,
  Link2Off,
  Loader2,
  CheckCircle2,
  User,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  FileText,
  BarChart3,
  Terminal,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/create', icon: PenSquare, label: 'Create Post' },
  { href: '/ai', icon: Bot, label: 'AI Generator' },
  { href: '/schedule', icon: Calendar, label: 'Scheduler' },
  { href: '/posts', icon: FileText, label: 'My Posts' },
  { href: '/analytics', icon: BarChart3, label: 'Analytics' },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()
  const { connected, checking, profile, connect, disconnect } = useLinkedIn()

  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  /* ───────────────── SIDEBAR CONTENT ───────────────── */

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
    <div className="flex flex-col h-full relative">

      {/* ───── BRAND HEADER ───── */}
      {!mobile && (
        <div
          className={cn(
            'relative px-4 py-5 border-b border-border/40',
            'bg-gradient-to-br from-primary/20 via-background to-background'
          )}
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(0,255,200,0.15),transparent_60%)]" />

          <div className={cn(
            'relative flex items-center gap-3',
            collapsed ? 'justify-center' : 'justify-between'
          )}>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 min-w-0"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 grid place-items-center shadow-lg">
                  <Zap className="h-5 w-5 text-black" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold tracking-tight text-base">
                    SmartPostAI
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    automation.core
                  </div>
                </div>
              </motion.div>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="h-8 w-8 hover:bg-primary/10"
            >
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
        </div>
      )}

      {/* ───── NAVIGATION ───── */}
      <div className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">

        {!collapsed && (
          <div className="px-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Control Panel
          </div>
        )}

        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full h-11 gap-3 rounded-xl transition-all',
                      active
                        ? 'bg-gradient-to-r from-primary to-primary/70 text-primary-foreground shadow-lg'
                        : 'hover:bg-muted/60 text-muted-foreground hover:text-foreground',
                      collapsed && !mobile ? 'justify-center px-0' : 'justify-start px-3'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && (
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                    )}
                  </Button>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        {/* ───── LINKEDIN STATUS ───── */}
        <Card className="relative overflow-hidden border border-border/40 bg-background/80 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
          <div className="relative p-3 space-y-3">

            {!collapsed && (
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Terminal className="h-3 w-3" />
                LINKEDIN.STATUS
              </div>
            )}

            {checking ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                {!collapsed && 'Checking connection'}
              </div>
            ) : connected ? (
              <>
                {!collapsed && profile && (
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/40">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={profile.picture} />
                      <AvatarFallback>
                        {profile.name?.[0] || <User className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate">
                        {profile.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground truncate">
                        {profile.email}
                      </div>
                    </div>
                  </div>
                )}

                <Badge
                  className="w-full justify-center gap-2 bg-emerald-500/15 text-emerald-400 border-emerald-400/20"
                >
                  <CheckCircle2 className="h-3 w-3" />
                  {!collapsed && 'Connected'}
                </Badge>

                <Button
                  onClick={disconnect}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <Link2Off className="h-4 w-4" />
                  {!collapsed && <span className="ml-2">Disconnect</span>}
                </Button>
              </>
            ) : (
              <Button onClick={connect} className="w-full">
                <Link2 className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Connect LinkedIn</span>}
              </Button>
            )}
          </div>
        </Card>
      </div>

      {/* ───── FOOTER ───── */}
      <div className="px-3 py-3 border-t border-border/40 space-y-2">
        <div className={cn(
          'flex items-center gap-2',
          collapsed && !mobile && 'justify-center'
        )}>
          <ThemeToggle />
          <Button
            onClick={logout}
            variant="ghost"
            className={cn(
              'flex-1 gap-2',
              collapsed && !mobile ? 'justify-center px-0' : 'justify-start'
            )}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && 'Logout'}
          </Button>
        </div>
      </div>
    </div>
  )

  /* ───────────────── MOBILE WRAPPER ───────────────── */

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/40">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 grid place-items-center">
              <Zap className="h-4 w-4 text-black" />
            </div>
            <span className="font-bold">SmartPostAI</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          'hidden md:flex h-screen sticky top-0 border-r border-border/40 bg-card/80 backdrop-blur-xl transition-all',
          collapsed ? 'w-16' : 'w-[280px]'
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed left-0 top-[56px] h-[calc(100vh-56px)] w-[280px] bg-card/95 backdrop-blur-xl z-50"
            >
              <SidebarContent mobile />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
