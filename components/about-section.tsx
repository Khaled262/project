import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">Om E.D.L Bygg & Kakel AB</h2>
            <p className="text-lg text-muted-foreground mb-6">
              E.D.L Bygg & Kakel AB är ett byggföretag med säte i Malmö som erbjuder kvalitativa tjänster inom bygg, 
              renovering och snickeri. Vi har över 15 års erfarenhet i branschen och är stolta över vårt goda rykte 
              och nöjda kunder.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Vår vision är att leverera högkvalitativa byggprojekt som överträffar våra kunders förväntningar, 
              och vi gör det genom vårt engagemang för kvalitet, pålitlighet och professionalism i allt vi gör.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Professionella hantverkare",
                "Kundanpassade lösningar",
                "Certifierade för våtrum",
                "Miljömedvetna materialval",
                "Prisvärt och hög kvalitet",
                "Alltid fasta priser",
                "Kostnadsfri offert",
                "Fokus på kundnöjdhet"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-chart-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button asChild>
              <Link href="/om-oss" className="inline-flex items-center">
                Läs mer om oss <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="E.D.L Bygg & Kakel - Byggprojekt"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-chart-2 text-white py-3 px-6 rounded-lg shadow-lg">
              <p className="text-xl font-bold">15+ års erfarenhet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;