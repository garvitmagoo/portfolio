import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, DM_Sans, Fira_Code } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-body',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-code',
})

export const metadata: Metadata = {
  title: {
    default: 'Garvit Magoo — Frontend Technical Architect',
    template: '%s | Garvit Magoo',
  },
  description:
    'Frontend Technical Architect with 9+ years building scalable web apps using React, Next.js, NX Monorepos & Micro-Frontend architectures.',
  keywords: ['Frontend Architect', 'React', 'Next.js', 'TypeScript', 'Micro-Frontend', 'NX'],
  authors: [{ name: 'Garvit Magoo' }],
  openGraph: {
    title: 'Garvit Magoo — Frontend Technical Architect',
    description: 'Building scalable web systems with React, Next.js & Micro-Frontends.',
    type: 'website',
  },
}

// Next.js 15: viewport must be a separate export, not inside metadata
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#03030a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${firaCode.variable} dark-mode`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
