'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "Hur går processen till när jag anlitar er för en renovering?",
    answer: "Processen börjar med att du kontaktar oss via telefon, e-post eller vårt kontaktformulär. Vi bokar därefter in ett kostnadsfritt hembesök där vi diskuterar dina önskemål och tar mått. Efter besöket tar vi fram en detaljerad offert. När offerten är godkänd bokar vi in en startdag och tar fram en tidsplan."
  },
  {
    question: "Hur lång tid tar en badrumsrenovering?",
    answer: "En komplett badrumsrenovering tar vanligtvis 3-5 veckor beroende på badrummets storlek, omfattningen av arbetet och om det uppstår oförutsedda problem. Vi strävar alltid efter att hålla tidsplanen och informerar dig omedelbart om något skulle förändras."
  },
  {
    question: "Lämnar ni garanti på utfört arbete?",
    answer: "Ja, vi lämnar 5 års garanti på utfört arbete. Dessutom gäller konsumenttjänstlagen som ger dig ytterligare skydd. För produkter och material gäller respektive tillverkares garantivillkor, vilka vi naturligtvis hjälper dig att tillvarata om något skulle gå fel."
  },
  {
    question: "Kan jag få ROT-avdrag för arbetet?",
    answer: "Ja, som privatperson kan du i de flesta fall utnyttja ROT-avdraget för våra tjänster. ROT-avdraget ger dig 30% rabatt på arbetskostnaden upp till 50 000 kr per person och år. Vi hanterar administrationen kring ROT-avdraget och drar beloppet direkt på fakturan."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Vanliga frågor</h2>
          <p className="text-lg text-muted-foreground">
            Har du frågor om våra tjänster? Här hittar du svar på några av de vanligaste frågorna vi får.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="text-lg font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-card-foreground/80 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/faq">
                Se alla vanliga frågor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;