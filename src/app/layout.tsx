import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Transport Premium - Réservation Chauffeur Privé',
    template: '%s | Transport Premium'
  },
  description: 'Service de transport premium avec chauffeur. Réservation en ligne 24h/7j. Tarifs transparents, véhicules haut de gamme, chauffeurs professionnels.',
  keywords: ['transport', 'chauffeur', 'réservation', 'premium', 'privé'],
  authors: [{ name: 'Transport Premium' }],
  creator: 'Transport Premium',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://transport-premium.com',
    siteName: 'Transport Premium',
    title: 'Transport Premium - Chauffeur Privé',
    description: 'Service de transport premium avec chauffeur. Réservation en ligne 24h/7j.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport Premium - Chauffeur Privé',
    description: 'Service de transport premium avec chauffeur. Réservation en ligne 24h/7j.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
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
