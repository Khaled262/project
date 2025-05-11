'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-4xl mx-auto border shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle>Vi använder cookies</CardTitle>
          <CardDescription>
            För att förbättra din upplevelse på vår webbplats använder vi cookies och liknande tekniker.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Vi använder cookies för att analysera trafik, anpassa innehåll och annonser samt för att förbättra 
            webbplatsens funktionalitet. Genom att klicka på "Acceptera alla" godkänner du vår användning av cookies. 
            Du kan också välja att bara acceptera nödvändiga cookies. Läs mer i vår{' '}
            <Link href="/integritetspolicy" className="text-chart-2 hover:underline">
              integritetspolicy
            </Link>.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-end">
          <Button variant="outline" onClick={handleAcceptNecessary}>
            Endast nödvändiga
          </Button>
          <Button className="bg-chart-2 hover:bg-chart-2/90" onClick={handleAcceptAll}>
            Acceptera alla
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CookieConsent;