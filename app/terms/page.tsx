'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <Card className="border-2">
            <CardHeader className="p-6 sm:p-8">
              <CardTitle className="text-2xl sm:text-3xl font-bold">Terms & Conditions</CardTitle>
              <CardDescription className="text-sm sm:text-base mt-2">
                Last updated: January 2026
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 space-y-6 text-sm sm:text-base">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using SmartPostAI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Service Access</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartPostAI uses secure authentication for service access. All services require proper authentication. By using the Service, you acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li>All services require proper authentication and verification</li>
                  <li>You are responsible for maintaining the security of your account</li>
                  <li>We use industry-standard security practices</li>
                  <li>Service availability may vary based on demand</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Service Usage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartPostAI provides AI-powered LinkedIn content automation services. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li>Use the Service only for lawful purposes</li>
                  <li>Not violate LinkedIn's Terms of Service</li>
                  <li>Not create spam, misleading, or harmful content</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to reverse engineer or compromise the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartPostAI integrates with third-party services including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li><strong>LinkedIn API:</strong> Subject to LinkedIn's Terms of Service</li>
                  <li><strong>Google Gemini AI:</strong> Subject to Google Cloud Terms of Service</li>
                  <li><strong>Supabase:</strong> Subject to Supabase Terms of Service</li>
                  <li><strong>MNEE SDK:</strong> Subject to MNEE SDK license terms</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Your use of these third-party services is subject to their respective terms and conditions. We are not responsible for the availability or functionality of third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartPostAI provides AI-powered LinkedIn content automation services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li>Dashboard Access - Full access to all features</li>
                  <li>AI Post Generation - Generate engaging posts with AI</li>
                  <li>LinkedIn Posting - Direct posting to LinkedIn</li>
                  <li>Post Scheduling - Schedule posts for optimal timing</li>
                  <li>URL to Post - Convert URLs into LinkedIn posts</li>
                  <li>Templates - Save and reuse post templates</li>
                  <li>Post Ideas - Generate creative post ideas (FREE)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Service availability and features may change over time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content generated by the Service, including AI-generated posts, remains your property. However, you grant SmartPostAI a license to use, store, and process your content for the purpose of providing the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Privacy & Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect and store:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li>User account information (email, password)</li>
                  <li>LinkedIn profile data (with your consent)</li>
                  <li>Encrypted wallet information (WIF keys encrypted with Fernet)</li>
                  <li>Generated content and posts</li>
                  <li>Payment transaction records</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We do not share your personal data with third parties except as necessary to provide the Service. Wallet keys are encrypted and stored securely in Supabase.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SmartPostAI is provided "as is" without warranties of any kind. We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li>Loss of funds due to wallet compromise or user error</li>
                  <li>Content generated by AI that may be inaccurate or inappropriate</li>
                  <li>LinkedIn account restrictions or bans</li>
                  <li>Service interruptions or downtime</li>
                  <li>Blockchain network issues affecting payments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Open Source License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This project is licensed under the MIT License. The source code is available at:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li>Frontend: <a href="https://github.com/gautammanak1/mnee-frontend" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/gautammanak1/mnee-frontend</a></li>
                  <li>Backend: <a href="https://github.com/gautammanak1/mnee-backend" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/gautammanak1/mnee-backend</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms & Conditions, please contact us through the GitHub repository issues.
                </p>
              </section>

              <div className="pt-6 border-t">
                <p className="text-xs text-muted-foreground">
                  By using SmartPostAI, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions and the Devpost Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

