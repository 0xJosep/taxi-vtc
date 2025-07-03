'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const phoneNumbers = {
    paris: '+33 1 85 09 53 99',
    geneva: '+41 22 51 97 227',
    brussels: '+32 2 31 86 38 8'
  }

  // Determine current city based on pathname
  const getCurrentCity = () => {
    console.log('Current pathname:', pathname) // Debug log
    
    if (pathname?.includes('/geneve')) {
      return {
        name: 'Genève',
        flag: '🇨🇭',
        phone: phoneNumbers.geneva,
        key: 'geneva'
      }
    } else if (pathname?.includes('/bruxelles')) {
      return {
        name: 'Bruxelles',
        flag: '🇧🇪',
        phone: phoneNumbers.brussels,
        key: 'brussels'
      }
    } else {
      return {
        name: 'Paris',
        flag: '🇫🇷',
        phone: phoneNumbers.paris,
        key: 'paris'
      }
    }
  }

  const currentCity = getCurrentCity()
  console.log('Current city:', currentCity) // Debug log

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-primary-foreground font-bold text-lg sm:text-xl">🚗</span>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-foreground">drive-me24</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Paris • Genève • Bruxelles</p>
                </div>
              </Link>
            </div>
            <div className="hidden md:block text-center">
                          <p className="text-sm font-semibold text-secondary">
              Besoin d&apos;un chauffeur ? <span className="text-primary">Appelez maintenant !</span>
            </p>
              <p className="text-xs text-muted-foreground">Réponse immédiate • Service 24h/24</p>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Chargement...
              </Button>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">

      {/* Navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="Retour à l'accueil - drive-me24">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-primary-foreground font-bold text-lg sm:text-xl" role="img" aria-label="Icône voiture">🚗</span>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-foreground">drive-me24</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Paris • Genève • Bruxelles</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile quick call button */}
          <div className="flex items-center md:hidden">
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold mr-3 px-3 py-2"
              asChild
            >
              <a href={`tel:${currentCity.phone}`} className="flex items-center" aria-label={`Appeler ${currentCity.name} au ${currentCity.phone}`}>
                <Phone className="h-4 w-4 mr-1" />
                <span className="text-sm">{currentCity.phone}</span>
              </a>
            </Button>
          </div>

          {/* CTA Message Desktop */}
          <div className="hidden md:block text-center">
            <p className="text-sm font-semibold text-black">
              Besoin d&apos;un chauffeur ? <span className="text-primary">Appelez maintenant !</span>
            </p>
            <p className="text-xs text-muted-foreground">Réponse immédiate • Service 24h/24</p>
          </div>

          {/* CTAs desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href={`tel:${currentCity.phone}`} className="flex items-center" aria-label={`Appeler ${currentCity.name} au ${currentCity.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                {currentCity.phone}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="Ouvrir le menu de navigation">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] overflow-y-auto">
                <div className="flex flex-col min-h-full">
                  <SheetHeader className="pb-4">
                    <SheetTitle className="flex items-center justify-start text-base">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
                        <span className="text-primary-foreground font-bold text-lg" role="img" aria-label="Icône voiture">🚗</span>
                      </div>
                      <span className="font-bold">drive-me24</span>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Navigation links mobile */}
                  <div className="space-y-3 mb-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-black mb-3 text-sm">Nos destinations :</h4>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full py-3 h-auto bg-white hover:bg-gray-50 border text-black" 
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/" className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-semibold text-sm text-black">🇫🇷 Paris</div>
                          <div className="text-xs text-black">Page d&apos;accueil</div>
                        </div>
                      </Link>
                    </Button>

                    <Button 
                      variant="outline"
                      className="w-full py-3 h-auto bg-white hover:bg-gray-50 border text-black" 
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/geneve" className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-semibold text-sm text-black">🇨🇭 Genève</div>
                          <div className="text-xs text-black">Service Genève</div>
                        </div>
                      </Link>
                    </Button>

                    <Button 
                      variant="outline"
                      className="w-full py-3 h-auto bg-white hover:bg-gray-50 border text-black" 
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/bruxelles" className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-semibold text-sm text-black">🇧🇪 Bruxelles</div>
                          <div className="text-xs text-black">Service Bruxelles</div>
                        </div>
                      </Link>
                    </Button>
                  </div>

                  <Separator className="my-4" />

                  {/* CTA Message Mobile */}
                  <div className="text-center mb-6 p-4 bg-white rounded-lg border">
                    <h3 className="text-lg font-bold text-black mb-2">
                      Appelez Maintenant !
                    </h3>
                    <p className="text-sm text-black">
                      Réponse immédiate • Service 24h/24
                    </p>
                  </div>

                  {/* Phone Numbers Mobile */}
                  <div className="space-y-3 mb-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-black mb-3 text-sm">Choisissez votre ville :</h4>
                    </div>
                    
                    <Button 
                      className={`w-full py-3 h-auto ${
                        currentCity.key === 'paris' 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                          : 'bg-white hover:bg-gray-50 border text-black'
                      }`}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={`tel:${phoneNumbers.paris}`} className="flex items-center" aria-label={`Appeler Paris au ${phoneNumbers.paris}`}>
                        <Phone className={`h-4 w-4 mr-3 flex-shrink-0 ${
                          currentCity.key === 'paris' ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                        <div className="flex-1 text-left">
                          <div className={`font-semibold text-sm ${
                            currentCity.key === 'paris' ? 'text-primary-foreground' : 'text-black'
                          }`}>🇫🇷 Paris</div>
                          <div className={`text-xs ${
                            currentCity.key === 'paris' ? 'text-primary-foreground opacity-90' : 'text-black'
                          }`}>{phoneNumbers.paris}</div>
                        </div>
                      </a>
                    </Button>

                    <Button 
                      className={`w-full py-3 h-auto ${
                        currentCity.key === 'geneva' 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                          : 'bg-white hover:bg-gray-50 border text-black'
                      }`}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={`tel:${phoneNumbers.geneva}`} className="flex items-center" aria-label={`Appeler Genève au ${phoneNumbers.geneva}`}>
                        <Phone className={`h-4 w-4 mr-3 flex-shrink-0 ${
                          currentCity.key === 'geneva' ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                        <div className="flex-1 text-left">
                          <div className={`font-semibold text-sm ${
                            currentCity.key === 'geneva' ? 'text-primary-foreground' : 'text-black'
                          }`}>🇨🇭 Genève</div>
                          <div className={`text-xs ${
                            currentCity.key === 'geneva' ? 'text-primary-foreground opacity-90' : 'text-black'
                          }`}>{phoneNumbers.geneva}</div>
                        </div>
                      </a>
                    </Button>

                    <Button 
                      className={`w-full py-3 h-auto ${
                        currentCity.key === 'brussels' 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                          : 'bg-white hover:bg-gray-50 border text-black'
                      }`}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={`tel:${phoneNumbers.brussels}`} className="flex items-center" aria-label={`Appeler Bruxelles au ${phoneNumbers.brussels}`}>
                        <Phone className={`h-4 w-4 mr-3 flex-shrink-0 ${
                          currentCity.key === 'brussels' ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                        <div className="flex-1 text-left">
                          <div className={`font-semibold text-sm ${
                            currentCity.key === 'brussels' ? 'text-primary-foreground' : 'text-black'
                          }`}>🇧🇪 Bruxelles</div>
                          <div className={`text-xs ${
                            currentCity.key === 'brussels' ? 'text-primary-foreground opacity-90' : 'text-black'
                          }`}>{phoneNumbers.brussels}</div>
                        </div>
                      </a>
                    </Button>
                  </div>

                  <Separator className="my-4" />

                  {/* Service info mobile */}
                  <div className="text-center text-sm text-black mt-auto">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>Service 24h/7j</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>3 capitales européennes</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 