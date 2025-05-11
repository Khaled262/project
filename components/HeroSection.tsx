'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Byggprojekt"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl">
          <div 
            className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Professionell byggfirma i Skåne
            </h1>
            <p className="text-xl text-white/90 mb-8">
              E.D.L Bygg & Kakel AB erbjuder högkvalitativa tjänster inom bygg, renovering och snickeri. Med fokus på kvalitet och kundnöjdhet hjälper vi dig förverkliga dina drömmar.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2/90 text-lg"
              asChild
            >
              <Link href="/offert">
                Begär offert <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg"
              asChild
            >
              <Link href="/referenser">
                Se våra projekt
              </Link>
            </Button>
          </div>
          
          <div 
            className={`flex items-center mt-12 transition-all duration-1000 delay-500 ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mr-4">
              Certifierade hantverkare
            </span>
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mr-4">
              Kostnadsfri offert
            </span>
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
              ROT-avdrag
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;