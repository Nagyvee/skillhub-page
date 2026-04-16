import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skillhub.africa"),
  title: {
    default: "SkillHub International | Professional Training South Africa",
    template: "%s | SkillHub International",
  },
  description: "QCTO-accredited short courses and learnerships in supply chain, logistics, procurement, finance, HR, and leadership. Professional training across South Africa since 1999.",
  keywords: "professional training South Africa, short courses, learnerships, supply chain, logistics, procurement, QCTO accredited",
  openGraph: {
    type: "website",
    siteName: "SkillHub International",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630, alt: "SkillHub International" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SkillHub International",
              url: "https://www.skillhub.africa",
              logo: "https://www.skillhub.africa/assets/logo.png",
              foundingDate: "1999",
              description: "QCTO-accredited professional training provider offering short courses and learnerships across South Africa.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  )
}
