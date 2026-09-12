import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";
import { LinkedInProvider } from "@/contexts/LinkedInContext";
import { SlackProvider } from "@/contexts/SlackContext";
import { Toaster } from "@/components/ui/sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartPostAI - LinkedIn Automation Platform | AI-Powered Content Creation",
  description: "Automate your LinkedIn posts with AI-powered content generation. Create, schedule, and manage LinkedIn content 10x faster with SmartPostAI.",
  keywords: ["LinkedIn automation", "AI content generation", "LinkedIn posts", "social media automation", "content creation"],
  authors: [{ name: "SmartPostAI" }],
  creator: "SmartPostAI",
  publisher: "SmartPostAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://smartpost-backend-786852619137.us-central1.run.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'SmartPostAI - LinkedIn Automation Platform',
    description: 'Automate your LinkedIn posts with AI-powered content generation. Create, schedule, and manage LinkedIn content 10x faster.',
    siteName: 'SmartPostAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartPostAI - LinkedIn Automation Platform',
    description: 'Automate your LinkedIn posts with AI-powered content generation. Create, schedule, and manage LinkedIn content 10x faster.',
    creator: '@smartpostai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d9488' },
    { media: '(prefers-color-scheme: dark)', color: '#0f766e' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <LinkedInProvider>
              <SlackProvider>
                {children}
                <Toaster />
              </SlackProvider>
            </LinkedInProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

