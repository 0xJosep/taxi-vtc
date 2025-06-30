import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'drive-me24 Paris - Réservation Chauffeur Privé | Service Premium 24h/7j',
    template: '%s | drive-me24'
  },
  description: 'Service de transport premium avec chauffeur à Paris. Réservation immédiate par téléphone 24h/7j. Tous aéroports, gares, événements. Tarifs transparents, véhicules haut de gamme.',
  keywords: ['drive-me24', 'transport premium', 'chauffeur privé', 'VTC', 'taxi', 'Paris', 'Genève', 'Bruxelles', 'réservation chauffeur', 'transport aéroport', 'service premium'],
  authors: [{ name: 'drive-me24' }],
  creator: 'drive-me24',
  publisher: 'drive-me24',
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://drive-me24.com',
    siteName: 'drive-me24',
    title: 'drive-me24 Paris - Chauffeur Privé | Service Premium 24h/7j',
    description: 'Service de transport premium avec chauffeur à Paris. Réservation immédiate par téléphone 24h/7j.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'drive-me24 - Service de Chauffeur Privé',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'drive-me24 Paris - Chauffeur Privé',
    description: 'Service de transport premium avec chauffeur à Paris. Réservation immédiate par téléphone 24h/7j.',
    images: ['/twitter-image.jpg'],
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
  verification: {
    // Add your verification IDs when available
    // google: 'your-google-verification-id',
    // bing: 'your-bing-verification-id',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
