'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Database, Zap, Shield, Coins, Globe } from 'lucide-react'
import Image from 'next/image'
import { MermaidDiagram } from '@/components/mermaid-diagram'

export default function TechStackPage() {

  const techStack = [
    {
      category: 'Frontend',
      items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui', 'Sonner Toast'],
      icon: Code2,
      color: 'text-blue-500',
    },
    {
      category: 'Backend',
      items: ['Python 3.10', 'uAgents Framework', 'LangChain Agent', 'REST APIs', 'Async/Await', 'aiohttp', 'Pydantic', 'Azure Container Apps'],
      icon: Zap,
      color: 'text-yellow-500',
    },
    {
      category: 'Blockchain & Payments',
      items: ['MNEE SDK', 'MNEE Stablecoin', '1Sat Ordinals', 'Bitcoin SV', 'WIF Keys', 'WhatsonChain Explorer'],
      icon: Coins,
      color: 'text-orange-500',
    },
    {
      category: 'Database',
      items: ['Supabase', 'PostgreSQL', 'Row Level Security', 'Real-time Subscriptions', 'JWT Auth'],
      icon: Database,
      color: 'text-green-500',
    },
    {
      category: 'AI & Services',
      items: ['Google Gemini 2.0 Flash', 'LangChain Agent', 'Agent-to-Agent Communication', 'Image Generation Agent', 'LinkedIn API'],
      icon: Globe,
      color: 'text-purple-500',
    },
    {
      category: 'Security & Auth',
      items: ['JWT Authentication', 'OAuth 2.0 (LinkedIn)', 'CORS Protection', 'Payment Verification', 'Session Management'],
      icon: Shield,
      color: 'text-red-500',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative w-24 h-12 sm:w-32 sm:h-16">
              <Image
                src="https://mnee.io/logo-dark.svg"
                alt="MNEE Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Technology Stack
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
            Built with modern technologies for scalability, security, and performance
          </p>
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:shadow-lg transition-all">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <tech.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${tech.color}`} />
                    <CardTitle className="text-lg sm:text-xl">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Simple Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <Card className="border-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">System Overview</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                High-level architecture of SmartPostAI platform
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <MermaidDiagram
                chart={`graph TD
    A[User Browser] -->|HTTPS| B[Next.js Frontend]
    B -->|REST API| C[Python uAgents Backend]
    C -->|SQL| D[(Supabase Database)]
    C -->|OAuth| E[LinkedIn API]
    C -->|AI API| F[Google Gemini AI]
    C -->|MNEE SDK| G[MNEE Blockchain]
    G -->|BSV Network| H[Bitcoin SV]
    
    style A fill:#3b82f6,stroke:#2563eb,color:#fff
    style B fill:#3b82f6,stroke:#2563eb,color:#fff
    style C fill:#f59e0b,stroke:#d97706,color:#fff
    style D fill:#10b981,stroke:#059669,color:#fff
    style E fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style F fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style G fill:#f97316,stroke:#ea580c,color:#fff
    style H fill:#f97316,stroke:#ea580c,color:#fff`}
                id="architecture-diagram"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Flow - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <Card className="border-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">Payment Flow</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How users access and use services
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <MermaidDiagram
                chart={`sequenceDiagram
    User->>Frontend: Click Service
    Frontend->>Frontend: Show Payment Modal
    User->>Frontend: Approve Payment
    Frontend->>MNEE SDK: Create Transaction
    MNEE SDK->>Backend: Submit Transaction
    Backend->>MNEE API: Send Transaction
    MNEE API->>Blockchain: Broadcast to BSV
    Blockchain-->>MNEE API: Transaction ID
    MNEE API-->>Backend: Ticket ID
    Backend-->>Frontend: Payment Status
    Backend->>Database: Save Payment Record
    Frontend->>Frontend: Execute Service`}
                id="payment-flow-diagram"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Service Execution - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-8 sm:mb-12"
        >
          <Card className="border-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">Service Execution</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How services work after payment verification
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <MermaidDiagram
                chart={`flowchart TD
    Start([User Requests Service]) --> Check{Payment<br/>Paid?}
    Check -->|Yes| Execute[Execute Service]
    Check -->|No| Pay[Request Payment]
    Pay --> Execute
    
    Execute --> Type{Service Type}
    Type -->|AI Post| AI[Generate with Gemini AI]
    Type -->|LinkedIn| LI[Post to LinkedIn]
    Type -->|Schedule| Sched[Save Schedule]
    Type -->|Templates| Temp[Save Template]
    
    AI --> Save[(Save to Database)]
    LI --> Save
    Sched --> Save
    Temp --> Save
    
    Save --> Done([Service Complete])
    
    style Start fill:#3b82f6,stroke:#2563eb,color:#fff
    style Execute fill:#10b981,stroke:#059669,color:#fff
    style Save fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style Done fill:#10b981,stroke:#059669,color:#fff`}
                id="service-flow-diagram"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Backend Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-8 sm:mb-12"
        >
          <Card className="border-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">Backend Services</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Main services and their responsibilities
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <MermaidDiagram
                chart={`graph LR
    API[REST API Server] --> Auth[Auth Service]
    API --> Payment[Payment Service]
    API --> LinkedIn[LinkedIn Service]
    API --> AI[AI Service]
    API --> Scheduler[Scheduler Service]
    API --> Analytics[Analytics Service]
    
    Payment --> MNEE[MNEE Service]
    LinkedIn --> LI_API[LinkedIn API]
    AI --> Gemini[Gemini AI]
    Scheduler --> Cron[Background Jobs]
    Auth --> DB[(Supabase)]
    Payment --> DB
    LinkedIn --> DB
    AI --> DB
    Scheduler --> DB
    Analytics --> DB
    
    style API fill:#f59e0b,stroke:#d97706,color:#fff
    style DB fill:#10b981,stroke:#059669,color:#fff
    style MNEE fill:#f97316,stroke:#ea580c,color:#fff
    style LI_API fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style Gemini fill:#8b5cf6,stroke:#7c3aed,color:#fff`}
                id="backend-services-diagram"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Data Storage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-8 sm:mb-12"
        >
          <Card className="border-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">Data Storage</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How data is stored in Supabase
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <MermaidDiagram
                chart={`graph TD
    App[Application] --> DB[(Supabase PostgreSQL)]
    DB --> Users[users table]
    DB --> Payments[payments table]
    DB --> Posts[generated_posts table]
    DB --> Schedules[scheduled_posts table]
    DB --> LinkedIn[linkedin_connections table]
    DB --> Wallets[user_wallets table]
    DB --> Templates[templates table]
    
    Users --> RLS[Row Level Security]
    Payments --> RLS
    Posts --> RLS
    Schedules --> RLS
    LinkedIn --> RLS
    Wallets --> RLS
    Templates --> RLS
    
    style DB fill:#10b981,stroke:#059669,color:#fff
    style RLS fill:#ef4444,stroke:#dc2626,color:#fff`}
                id="data-storage-diagram"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* MNEE Usage Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <Card className="border-2">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">MNEE Stablecoin Usage</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                How MNEE is used across different services and technologies
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <MermaidDiagram
                chart={`graph TB
    subgraph "MNEE Payment Flow"
        User[User] -->|0.01 MNEE| Payment[Payment Service]
        Payment -->|Verify| MNEE_API[MNEE API]
        MNEE_API -->|Blockchain| BSV[Bitcoin SV Network]
    end
    
    subgraph "Services Using MNEE"
        Payment -->|Payment Verified| AI[AI Post Generation]
        Payment -->|Payment Verified| LinkedIn[LinkedIn Posting]
        Payment -->|Payment Verified| Schedule[Post Scheduling]
        Payment -->|Payment Verified| URL[URL to Post]
        Payment -->|Payment Verified| Template[Template Management]
        Payment -->|Payment Verified| Dashboard[Dashboard Access]
    end
    
    subgraph "Technologies"
        AI -->|Uses| LangChain[LangChain Agent]
        AI -->|Uses| Gemini[Google Gemini AI]
        LinkedIn -->|Uses| LinkedIn_API[LinkedIn API]
        Schedule -->|Uses| Cron[Cron Jobs]
        URL -->|Uses| LangChain
        Template -->|Uses| Supabase[(Supabase DB)]
        Dashboard -->|Uses| Supabase
    end
    
    subgraph "Backend Infrastructure"
        LangChain -->|Deployed on| Azure[Azure Container Apps]
        LinkedIn_API -->|Deployed on| Azure
        Cron -->|Deployed on| Azure
        Supabase -->|Hosted on| Azure
    end
    
    style User fill:#3b82f6,stroke:#2563eb,color:#fff
    style Payment fill:#f97316,stroke:#ea580c,color:#fff
    style MNEE_API fill:#f97316,stroke:#ea580c,color:#fff
    style BSV fill:#f97316,stroke:#ea580c,color:#fff
    style AI fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style LinkedIn fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style Schedule fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style URL fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style Template fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style Dashboard fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style LangChain fill:#10b981,stroke:#059669,color:#fff
    style Gemini fill:#10b981,stroke:#059669,color:#fff
    style Azure fill:#0078d4,stroke:#005a9e,color:#fff
    style Supabase fill:#10b981,stroke:#059669,color:#fff`}
                id="mnee-usage-diagram"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
