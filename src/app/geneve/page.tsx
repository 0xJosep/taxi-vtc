import React from 'react';
import { Car, Clock, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GenevePage() {
  const phoneNumber = '+41 22 51 97 227';

  const whyCallUs = [
    {
      icon: Clock,
      title: 'Réponse Immédiate',
      description: 'Décrochez maintenant, nous répondons en moins de 3 sonneries'
    },
    {
      icon: Car,
      title: 'Devis Instantané',
      description: 'Obtenez votre prix et réservez en 2 minutes au téléphone'
    },
    {
      icon: Shield,
      title: 'Service Garanti',
      description: 'Chauffeur professionnel, véhicule premium, ponctualité assurée'
    }
  ];

  // Structured data for SEO - Geneva specific
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "drive-me24 Genève",
    "description": "Service de transport premium avec chauffeur à Genève",
    "url": "https://drive-me24.com/geneve",
    "email": "contact@drive-me24.com",
    "telephone": phoneNumber,
    "serviceType": "Transport et Chauffeur Privé",
    "areaServed": {
      "@type": "City",
      "name": "Genève",
      "addressCountry": "CH"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Transport à Genève",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "drive-me24 Genève",
            "description": "Service de chauffeur premium disponible 24h/24 à Genève"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150"
    },
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Primary CTA */}
        <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-secondary text-secondary-foreground overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/mick-haupt-K98zAhXLl8c-unsplash.jpg')"
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center min-h-[90vh] flex flex-col justify-center py-20">
              <Badge className="mb-6 bg-primary text-primary-foreground mx-auto">
                drive-me24 Genève • 24h/24
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Besoin d&apos;un
                <span className="text-primary block">Chauffeur à Genève ?</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-3xl text-white mb-8 max-w-4xl mx-auto px-4">
                <strong>Appelez maintenant</strong> pour votre transport premium
                <br />
                Service 24h/24 dans toute la région genevoise
              </p>
              
              {/* Primary Phone CTA */}
              <div className="mb-12 px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 max-w-2xl mx-auto border border-primary">
                  <p className="text-lg sm:text-xl mb-6 text-white text-center">
                    <strong>Réservation immédiate par téléphone</strong>
                  </p>
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-4">🇨🇭</div>
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg sm:text-xl py-4 sm:py-6 px-8 sm:px-12 h-auto"
                      asChild
                    >
                      <a href={`tel:${phoneNumber}`} className="flex items-center justify-center" aria-label={`Appeler Genève au ${phoneNumber}`}>
                        <Phone className="mr-3 h-6 w-6 sm:h-8 sm:w-8" />
                        <span className="font-bold">{phoneNumber}</span>
                      </a>
                    </Button>
                    <p className="mt-4 text-sm sm:text-base text-white">
                      Aéroport GVA • Gares • ONU • Business
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-xs sm:text-sm text-white">Satisfaction client</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">24h/7j</div>
                  <div className="text-xs sm:text-sm text-white">Disponibilité</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">2 min</div>
                  <div className="text-xs sm:text-sm text-white">Réservation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Call Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-6">
                Pourquoi Nous Appeler ?
              </h2>
              <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
                Un service de chauffeur premium à Genève, ville internationale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyCallUs.map((item, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas in Geneva */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Zones de Service à Genève
              </h2>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Nous couvrons toute la région genevoise et ses environs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Aéroport', items: ['Aéroport GVA', 'Cointrin', 'Terminal privé'] },
                { title: 'Gares', items: ['Gare Cornavin', 'Gare Eaux-Vives', 'Gare Annemasse'] },
                { title: 'International', items: ['ONU', 'CERN', 'WTO'] },
                { title: 'Business', items: ['Centre-ville', 'Carouge', 'Meyrin'] }
              ].map((area, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-black">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="text-black">{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt pour votre trajet à Genève ?
            </h2>
            <p className="text-xl mb-8 text-muted">
              Appelez maintenant et soyez pris en charge dans les meilleurs délais
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-6 px-12"
              asChild
            >
              <a href={`tel:${phoneNumber}`} className="flex items-center" aria-label={`Appeler ${phoneNumber}`}>
                <Phone className="mr-3 h-6 w-6" />
                {phoneNumber}
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
} 