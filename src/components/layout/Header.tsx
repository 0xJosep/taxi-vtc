'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumbers = {
    paris: '+33 1 23 45 67 89',
    geneva: '+41 22 123 45 67',
    brussels: '+32 2 123 45 67'
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      {/* Mobile info bar */}
      <div className="block md:hidden bg-blue-900 text-white">
        <div className="px-4">
          <div className="flex items-center justify-between py-2 text-xs">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Service 24h/24</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-3 w-3 mr-1" />
              <span className="text-yellow-400 font-semibold">Appelez maintenant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop info bar */}
      <div className="hidden md:block bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Service 24h/7j - Paris • Genève • Bruxelles</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Réponse immédiate - Réservation en 2 minutes</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400 font-semibold">Appelez maintenant :</span>
              <a href={`tel:${phoneNumbers.paris}`} className="flex items-center hover:text-yellow-400 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span className="font-semibold">Paris</span>
              </a>
              <a href={`tel:${phoneNumbers.geneva}`} className="flex items-center hover:text-yellow-400 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span className="font-semibold">Genève</span>
              </a>
              <a href={`tel:${phoneNumbers.brussels}`} className="flex items-center hover:text-yellow-400 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span className="font-semibold">Bruxelles</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-gray-900 font-bold text-lg sm:text-xl">🚗</span>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900">Transport Premium</h1>
                  <p className="text-xs text-gray-600 hidden sm:block">Paris • Genève • Bruxelles</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile quick call button */}
          <div className="flex items-center md:hidden">
            <Button 
              size="sm" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold mr-3 px-3 py-2"
              asChild
            >
              <a href={`tel:${phoneNumbers.paris}`} className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span className="text-sm">Paris</span>
              </a>
            </Button>
          </div>

          {/* CTA Message Desktop */}
          <div className="hidden md:block text-center">
            <p className="text-sm font-semibold text-blue-900">
              Besoin d'un chauffeur ? <span className="text-yellow-600">Appelez maintenant !</span>
            </p>
            <p className="text-xs text-gray-600">Réponse immédiate • Service 24h/24</p>
          </div>

          {/* CTAs desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${phoneNumbers.paris}`} className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Paris
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${phoneNumbers.geneva}`} className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Genève
              </a>
            </Button>
            <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900" asChild>
              <a href={`tel:${phoneNumbers.brussels}`} className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Bruxelles
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <SheetHeader className="pb-4">
                    <SheetTitle className="flex items-center justify-start text-base">
                      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-gray-900 font-bold text-lg">🚗</span>
                      </div>
                      <span className="font-bold">Transport Premium</span>
                    </SheetTitle>
                  </SheetHeader>

                  {/* CTA Message Mobile */}
                  <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Appelez Maintenant !
                    </h3>
                    <p className="text-sm text-gray-600">
                      Réponse immédiate • Service 24h/24
                    </p>
                  </div>

                  {/* Phone Numbers Mobile */}
                  <div className="space-y-3 mb-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Choisissez votre ville :</h4>
                    </div>
                    
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 h-auto" 
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={`tel:${phoneNumbers.paris}`} className="flex items-center">
                        <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-sm">🇫🇷 Paris</div>
                          <div className="text-xs opacity-90">{phoneNumbers.paris}</div>
                        </div>
                      </a>
                    </Button>

                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 h-auto" 
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={`tel:${phoneNumbers.geneva}`} className="flex items-center">
                        <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-sm">🇨🇭 Genève</div>
                          <div className="text-xs opacity-90">{phoneNumbers.geneva}</div>
                        </div>
                      </a>
                    </Button>

                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 h-auto" 
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={`tel:${phoneNumbers.brussels}`} className="flex items-center">
                        <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-sm">🇧🇪 Bruxelles</div>
                          <div className="text-xs opacity-90">{phoneNumbers.brussels}</div>
                        </div>
                      </a>
                    </Button>
                  </div>

                  <Separator className="my-4" />

                  {/* Service info mobile */}
                  <div className="text-center text-sm text-gray-600 mt-auto">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Service 24h/7j</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-2" />
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