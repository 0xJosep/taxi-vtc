import React from 'react';
import { Car, Clock, Shield, Star, Phone, Award, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const phoneNumbers = {
    paris: '+33 1 23 45 67 89',
    geneva: '+41 22 123 45 67',
    brussels: '+32 2 123 45 67'
  };

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

  const cities = [
    {
      name: 'Paris',
      flag: '🇫🇷',
      phone: phoneNumbers.paris,
      highlights: ['24h/24 - 7j/7', 'Tous aéroports', 'Tarifs fixes']
    },
    {
      name: 'Genève',
      flag: '🇨🇭',
      phone: phoneNumbers.geneva,
      highlights: ['Service premium', 'Aéroport GVA', 'Ponctualité garantie']
    },
    {
      name: 'Bruxelles',
      flag: '🇧🇪',
      phone: phoneNumbers.brussels,
      highlights: ['Transport rapide', 'Tous quartiers', 'Prix compétitifs']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Primary CTA */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center min-h-[90vh] flex flex-col justify-center py-20">
            <Badge className="mb-6 bg-yellow-500 text-blue-900 mx-auto">
              Transport Premium 24h/24
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Besoin d'un
              <span className="text-yellow-400 block">Chauffeur ?</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-3xl text-blue-100 mb-8 max-w-4xl mx-auto px-4">
              <strong>Appelez maintenant</strong> pour votre transport premium
              <br className="hidden md:block" />
              Paris • Genève • Bruxelles
            </p>
            
            {/* Primary Phone CTA */}
            <div className="mb-12 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 max-w-2xl mx-auto border border-white/20">
                <p className="text-lg sm:text-xl mb-6 text-blue-100 text-center">
                  <strong>Réservation immédiate par téléphone</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {cities.map((city, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl sm:text-3xl mb-2">{city.flag}</div>
                      <div className="text-base sm:text-lg font-semibold text-white mb-2">{city.name}</div>
                      <Button 
                        size="sm"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-sm sm:text-base py-2 sm:py-3 h-auto"
                        asChild
                      >
                        <a href={`tel:${city.phone}`} className="flex flex-col sm:flex-row items-center justify-center">
                          <Phone className="mb-1 sm:mb-0 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-xs sm:text-sm font-semibold">{city.phone}</span>
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-xs sm:text-sm text-blue-200">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">24h/7j</div>
                <div className="text-xs sm:text-sm text-blue-200">Disponibilité</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">2min</div>
                <div className="text-xs sm:text-sm text-blue-200">Réservation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Call Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi Nous Appeler ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Un simple appel suffit pour votre transport premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyCallUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Secondary CTA */}
          <div className="text-center bg-blue-600 rounded-2xl p-6 sm:p-12 text-white mx-4">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Prêt à Réserver ?
            </h3>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Appelez maintenant pour votre transport premium
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
              {cities.map((city, index) => (
                <Button 
                  key={index}
                  size="sm"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold flex-1 py-3 sm:py-4 h-auto"
                  asChild
                >
                  <a href={`tel:${city.phone}`} className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">{city.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Cities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Service premium dans 3 capitales européennes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.map((city, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="text-6xl mb-4">{city.flag}</div>
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    {city.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {city.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center justify-center text-gray-600">
                        <Award className="h-5 w-5 text-blue-600 mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                    asChild
                  >
                    <a href={`tel:${city.phone}`} className="flex items-center justify-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Appeler {city.name}
                    </a>
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">{city.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils Ont Appelé, Ils Recommandent
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie L.',
                role: 'Cadre Paris',
                content: 'Un simple appel et mon chauffeur était là en 10 minutes. Service impeccable !',
                rating: 5
              },
              {
                name: 'Thomas M.',
                role: 'Consultant Genève',
                content: 'Réservation par téléphone super rapide. Chauffeur professionnel, je recommande.',
                rating: 5
              },
              {
                name: 'Sophie D.',
                role: 'Touristes Bruxelles',
                content: 'Parfait pour notre voyage. Un appel et tout était organisé pour l\'aéroport.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ne Perdez Plus de Temps
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Appelez maintenant pour votre transport premium
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{city.flag}</div>
                  <h3 className="text-xl font-bold mb-3">{city.name}</h3>
                  <Button 
                    size="lg" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4"
                    asChild
                  >
                    <a href={`tel:${city.phone}`} className="flex items-center justify-center">
                      <Phone className="mr-2 h-6 w-6" />
                      <span className="text-lg">{city.phone}</span>
                    </a>
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-lg text-blue-100">
                <strong>Réponse immédiate • Devis gratuit • Réservation en 2 minutes</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
