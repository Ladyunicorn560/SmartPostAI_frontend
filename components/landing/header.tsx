'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Link2, Menu, X, User, Terminal } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { jwt, user, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* GLASS + GRADIENT BAR */}
      <div className="bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl">

            {/* subtle hacker glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-60" />

            <div className="relative flex items-center justify-between px-4 py-3">
              {/* LOGO */}
              <Link href="/" className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 blur-md bg-primary/40 rounded-xl" />
                    <div className="relative h-9 w-9 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-lg">
                      <Terminal className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="leading-tight">
                    <div className="text-sm sm:text-base font-bold tracking-wide">
                      SmartPostAI
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      content engine
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* DESKTOP ACTIONS */}
              <div className="hidden md:flex items-center gap-3">
                <ThemeToggle />

                {jwt ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="gap-2 rounded-full border border-border/50 hover:bg-muted/60"
                      >
                        <Avatar className="h-7 w-7">
                          <AvatarImage src={user?.picture} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium max-w-[120px] truncate">
                          {user?.name || 'Operator'}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>
                        <p className="text-sm font-semibold">
                          {user?.name || 'Authenticated'}
                        </p>
                        {user?.email && (
                          <p className="text-xs text-muted-foreground">
                            {user.email}
                          </p>
                        )}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard">Command Center</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={logout}>
                        Disconnect
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="ghost" className="rounded-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="rounded-full bg-primary shadow-lg hover:shadow-primary/40 transition-shadow">
                        Start Free
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* MOBILE */}
              <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </Button>
              </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="md:hidden border-t border-border/40 px-4 py-4 space-y-3"
                >
                  {jwt ? (
                    <>
                      <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full justify-start rounded-xl">
                          Command Center
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        className="w-full justify-start rounded-xl"
                        onClick={() => {
                          logout()
                          setMobileMenuOpen(false)
                        }}
                      >
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full rounded-xl">
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full rounded-xl bg-primary">
                          Start Free
                        </Button>
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </header>
  )
}
