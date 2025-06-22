import React from 'react';
import { Phone, MapPin, Clock, Star, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function Footer() {
  const phoneNumbers = {
    paris: '+33 1 23 45 67 89',
    geneva: '+41 22 123 45 67',
    brussels: '+32 2 123 45 67'
  };

  const cities = [
    {
      name: 'Paris',
      flag: '🇫🇷',
      phone: phoneNumbers.paris,
      zones: ['Tous arrondissements', 'Aéroports CDG/Orly', 'Banlieue parisienne', 'La Défense']
    },
    {
      name: 'Genève',
      flag: '🇨🇭',
      phone: phoneNumbers.geneva,
      zones: ['Centre-ville', 'Aéroport GVA', 'Quartiers résidentiels', 'Zone internationale']
    },
    {
      name: 'Bruxelles',
      flag: '🇧🇪',
      phone: phoneNumbers.brussels,
      zones: ['Tous quartiers', 'Aéroports BRU/CRL', 'Communes environnantes', 'District européen']
    }
  ];

  const guarantees = [
    { icon: Clock, text: 'Réponse en moins de 3 sonneries' },
    { icon: Award, text: 'Chauffeurs professionnels certifiés' },
    { icon: Shield, text: 'Service disponible 24h/24 - 7j/7' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Section CTA Principale */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Besoin d'un Chauffeur Maintenant ?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              <strong>Appelez directement</strong> pour votre réservation immédiate.
              Service premium dans 3 capitales européennes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {cities.map((city, index) => (
                <Button 
                  key={index}
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 h-auto"
                  asChild
                >
                  <a href={`tel:${city.phone}`} className="flex flex-col items-center">
                    <div className="text-2xl mb-1">{city.flag}</div>
                    <div className="font-bold">{city.name}</div>
                    <div className="text-sm flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {city.phone}
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-gray-900 font-bold text-xl">🚗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Transport Premium</h3>
                <p className="text-gray-400 text-sm">3 Capitales Européennes</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre service de transport premium dans 3 capitales européennes. 
              Un seul appel suffit pour votre réservation immédiate.
            </p>
            
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9/5 satisfaction client</span>
            </div>

            <div className="space-y-3">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon;
                return (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <IconComponent className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />
                    {guarantee.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nos 3 villes */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6">Nos Destinations</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cities.map((city, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{city.flag}</div>
                    <div>
                      <h5 className="text-lg font-bold text-white">{city.name}</h5>
                      <Button 
                        size="sm" 
                        className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold mt-2"
                        asChild
                      >
                        <a href={`tel:${city.phone}`} className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          <span className="text-xs">{city.phone}</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h6 className="text-sm font-semibold text-gray-300 mb-2">Zones desservies :</h6>
                    {city.zones.map((zone, zoneIndex) => (
                      <div key={zoneIndex} className="text-xs text-gray-400 flex items-center">
                        <MapPin className="h-3 w-3 mr-2 text-yellow-400 flex-shrink-0" />
                        {zone}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2">
              © 2024 Transport Premium. Service de chauffeur premium.
            </p>
            <p className="text-xs text-gray-500">
              Paris • Genève • Bruxelles | Disponible 24h/24 - 7j/7
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-yellow-400 font-semibold text-sm mb-2">
              Appelez maintenant pour votre réservation :
            </p>
            <div className="flex flex-col sm:flex-row gap-2 text-xs">
              <a href={`tel:${phoneNumbers.paris}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                🇫🇷 Paris: {phoneNumbers.paris}
              </a>
              <a href={`tel:${phoneNumbers.geneva}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                🇨🇭 Genève: {phoneNumbers.geneva}
              </a>
              <a href={`tel:${phoneNumbers.brussels}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                🇧🇪 Bruxelles: {phoneNumbers.brussels}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 