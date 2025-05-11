'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-background mt-16">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-4">
          {[
            { href: '/', label: 'Hem' },
            { href: '/om-oss', label: 'Om oss' },
            { href: '/tjanster', label: 'Tjänster' },
            { href: '/referenser', label: 'Referenser' },
            { href: '/faq', label: 'FAQ' },
            { href: '/kontakt', label: 'Kontakt' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between py-3 border-b border-border"
              onClick={onClose}
            >
              <span className="text-lg font-medium">{item.label}</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            asChild
          >
            <Link href="tel:076-312 99 69" className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 
              076-312 99 69
            </Link>
          </Button>
          
          <Button 
            className="w-full bg-chart-2 hover:bg-chart-2/90" 
            asChild
          >
            <Link href="/offert">
              Begär offert
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;