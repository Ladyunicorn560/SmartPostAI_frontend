import { ProtectedRoute } from '@/components/protected-route'
import { AppSidebar } from '@/components/app-sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="relative min-h-screen flex bg-background text-foreground overflow-hidden">

        {/* GRID OVERLAY */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <AppSidebar />

        <main className="relative z-10 flex-1 pt-[56px] sm:pt-[64px] md:pt-0 px-4 sm:px-6 lg:px-10 py-6 overflow-auto">
          <div className="mx-auto max-w-[1600px] w-full">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
