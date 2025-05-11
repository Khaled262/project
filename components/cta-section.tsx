import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, FileText } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-chart-2/10 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Redo att starta ditt projekt?</h2>
            <p className="text-lg">
              Låt oss hjälpa dig förverkliga dina idéer. Kontakta oss redan idag för en 
              kostnadsfri offert och konsultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ring oss</h3>
                <p className="mb-4 text-muted-foreground">
                  Prata direkt med någon av våra experter
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="tel:076-312 99 69">
                    076-312 99 69
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#0D1B2A] text-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 text-white mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Begär offert</h3>
                <p className="mb-4 text-white/80">
                  Få en kostnadsfri offert på ditt projekt
                </p>
                <Button asChild className="w-full bg-chart-2 hover:bg-chart-2/90">
                  <Link href="/offert">
                    Begär offert
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Maila oss</h3>
                <p className="mb-4 text-muted-foreground">
                  Skicka oss dina frågor eller önskemål
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="mailto:edlbyggochkakelab@gmail.com">
                    edlbyggochkakelab@gmail.com
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Vill du veta mer om våra tjänster innan du kontaktar oss?
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tjanster">
                Utforska våra tjänster
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;