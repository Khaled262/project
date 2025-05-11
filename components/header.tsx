'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AlignJustify, X, Phone } from 'lucide-react';
import MobileMenu from '@/components/mobile-menu';
import ThemeToggle from '@/components/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="https://i.ibb.co/gLJGHr7g/edl-logo.png"
              alt="E.D.L Bygg & Kakel Logo"
              width={50}
              height={50}
              className="rounded"
            />
            <span className="text-2xl font-bold">E.D.L Bygg & Kakel AB</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-foreground hover:text-chart-2 transition-colors duration-200"
            >
              Hem
            </Link>
            <Link 
              href="/om-oss" 
              className="text-foreground hover:text-chart-2 transition-colors duration-200"
            >
              Om oss
            </Link>
            <Link 
              href="/tjanster" 
              className="text-foreground hover:text-chart-2 transition-colors duration-200"
            >
              Tjänster
            </Link>
            <Link 
              href="/referenser" 
              className="text-foreground hover:text-chart-2 transition-colors duration-200"
            >
              Referenser
            </Link>
            <Link 
              href="/faq" 
              className="text-foreground hover:text-chart-2 transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="/kontakt" 
              className="text-foreground hover:text-chart-2 transition-colors duration-200"
            >
              Kontakt
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="tel:076-312 99 69" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 
                076-312 99 69
              </Link>
            </Button>
            <Button className="bg-chart-2 hover:bg-chart-2/90" asChild>
              <Link href="/offert">
                Begär offert
              </Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Meny"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <AlignJustify className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;