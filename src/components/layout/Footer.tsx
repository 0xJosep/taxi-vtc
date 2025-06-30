import React from 'react';
import { Clock, Star, Award, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';


export default function Footer() {




  const guarantees = [
    { icon: Clock, text: 'Réponse en moins de 3 sonneries' },
    { icon: Award, text: 'Chauffeurs professionnels certifiés' },
    { icon: Shield, text: 'Service disponible 24h/24 - 7j/7' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">


      {/* Contenu principal du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          {/* Informations entreprise */}
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-xl" role="img" aria-label="Icône voiture">🚗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">drive-me24</h3>
                <p className="text-muted-foreground text-sm">3 Capitales Européennes</p>
              </div>
            </div>
            
            <p className="text-muted mb-6 leading-relaxed">
              Votre service de transport premium dans 3 capitales européennes. 
              Un seul appel suffit pour votre réservation immédiate.
            </p>
            
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex text-primary" aria-label="Note de 4.9 étoiles sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 satisfaction client</span>
            </div>

            <div className="space-y-3">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon;
                return (
                  <div key={index} className="flex items-center justify-center text-sm text-muted">
                    <IconComponent className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {guarantee.text}
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </div>

      <Separator className="bg-border" />

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 text-center">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm mb-2">
              © 2024 drive-me24. Service de chauffeur premium.
            </p>
            <p className="text-xs text-muted-foreground">
              Paris • Genève • Bruxelles | Disponible 24h/24 - 7j/7
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Email: <a href="mailto:contact@drive-me24.com" className="text-primary hover:text-primary/80">contact@drive-me24.com</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
} 