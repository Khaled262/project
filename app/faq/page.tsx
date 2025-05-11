'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import PageHeader from '@/components/page-header';

const faqItems = [
  {
    question: "Hur går processen till när jag anlitar er för en renovering?",
    answer: "Processen börjar med att du kontaktar oss via telefon, e-post eller vårt kontaktformulär. Vi bokar därefter in ett kostnadsfritt hembesök där vi diskuterar dina önskemål och tar mått. Efter besöket tar vi fram en detaljerad offert. När offerten är godkänd bokar vi in en startdag och tar fram en tidsplan. Under arbetet håller vi dig uppdaterad om projektets framsteg, och när allt är klart gör vi en gemensam slutbesiktning."
  },
  {
    question: "Hur lång tid tar en badrumsrenovering?",
    answer: "En komplett badrumsrenovering tar vanligtvis 3-5 veckor beroende på badrummets storlek, omfattningen av arbetet och om det uppstår oförutsedda problem. Vi strävar alltid efter att hålla tidsplanen och informerar dig omedelbart om något skulle förändras."
  },
  {
    question: "Är ni certifierade för våtrumsarbeten?",
    answer: "Ja, alla våra hantverkare som arbetar med våtrum är certifierade enligt gällande branschregler (GVK och BKR). Vi följer alltid de senaste byggnormerna och branschstandarderna för att säkerställa högsta kvalitet och säkerhet."
  },
  {
    question: "Kan ni hjälpa till med bygglov och andra tillstånd?",
    answer: "Ja, vi har god erfarenhet av bygglovsprocesser och kan hjälpa till med ansökningar för både mindre och större projekt. Vi kan även bistå med ritningar och andra dokument som krävs för att få tillstånd från relevanta myndigheter."
  },
  {
    question: "Lämnar ni garanti på utfört arbete?",
    answer: "Ja, vi lämnar 5 års garanti på utfört arbete. Dessutom gäller konsumenttjänstlagen som ger dig ytterligare skydd. För produkter och material gäller respektive tillverkares garantivillkor, vilka vi naturligtvis hjälper dig att tillvarata om något skulle gå fel."
  },
  {
    question: "Kan jag få ROT-avdrag för arbetet?",
    answer: "Ja, som privatperson kan du i de flesta fall utnyttja ROT-avdraget för våra tjänster. ROT-avdraget ger dig 30% rabatt på arbetskostnaden upp till 50 000 kr per person och år. Vi hanterar administrationen kring ROT-avdraget och drar beloppet direkt på fakturan."
  },
  {
    question: "Arbetar ni bara i Malmö eller tar ni uppdrag i hela Skåne?",
    answer: "Vi är baserade i Malmö men tar uppdrag i hela Skåneregionen, inklusive Lund, Helsingborg, Landskrona, Trelleborg och omgivande områden. För större projekt kan vi även ta uppdrag i andra delar av södra Sverige."
  },
  {
    question: "Hur hanterar ni avfall och miljöfrågor i era projekt?",
    answer: "Vi tar miljöfrågor på stort allvar och arbetar aktivt för att minska vår miljöpåverkan. Allt avfall källsorteras enligt gällande regler, och vi anlitar certifierade avfallshanterare för bortforsling och återvinning. Vi väljer också miljövänliga material när det är möjligt och följer gällande miljölagstiftning."
  },
  {
    question: "Kan jag bo kvar hemma under renoveringen?",
    answer: "Det beror på projektets omfattning. Vid badrumsrenovering blir du vanligtvis utan badrum under renoveringstiden, men om du har flera badrum i bostaden är det oftast inget problem att bo kvar. Vid större ombyggnationer kan det ibland vara nödvändigt att flytta ut tillfälligt. Vi diskuterar detta i detalj under planeringsfasen så att du kan förbereda dig på bästa sätt."
  },
  {
    question: "Har ni referenser från tidigare kunder?",
    answer: "Ja, vi har många nöjda kunder som gärna rekommenderar oss. Du hittar både kundomdömen och bilder från tidigare projekt på vår referenssida. Vi kan även förmedla kontakt med tidigare kunder om du önskar prata direkt med någon som anlitat oss."
  }
];

const categories = [
  { 
    title: "Badrumsrenovering",
    description: "Kontakta oss för en komplett badrumsrenovering med kakel, klinker och installation av sanitetsporslin.",
    link: "/tjanster#badrum"
  },
  { 
    title: "Köksrenovering",
    description: "Från planering till installation - vi hjälper dig med hela köksrenoveringen.",
    link: "/tjanster#kok"
  },
  { 
    title: "Snickeriarbeten",
    description: "Altaner, inredning, dörrar och fönster - våra snickare fixar det mesta.",
    link: "/tjanster#snickeri"
  },
  { 
    title: "Nybyggnation",
    description: "Vi bygger nytt från grunden eller hjälper till med tillbyggnader.",
    link: "/tjanster#nybyggnation"
  }
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Vanliga frågor" 
        description="Svar på de vanligaste frågorna om våra tjänster och arbetssätt"
      />
      
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
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
          
          <div className="mt-12 bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Hittade du inte svar på din fråga?</h2>
            <p className="mb-6">
              Tveka inte att kontakta oss om du har fler frågor eller behöver mer information.
              Vi finns tillgängliga via telefon, e-post eller vårt kontaktformulär.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-chart-2 hover:bg-chart-2/90">
                <Link href="/kontakt">
                  Kontakta oss
                </Link>
              </Button>
              <Button variant="outline">
                <Link href="/offert">
                  Begär offert
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-bold mb-4">Populära tjänster</h2>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <Card key={index} className="overflow-hidden">
                  <Link href={category.link} className="block p-4 hover:bg-muted transition-colors">
                    <h3 className="font-bold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-[#0D1B2A] text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Kontakta oss direkt</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-300">Telefon</p>
                <p className="font-medium">076-312 99 69</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">E-post</p>
                <p className="font-medium">edlbyggochkakelab@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Adress</p>
                <p className="font-medium">Kårbostigen 42, 212 33 Malmö</p>
              </div>
            </div>
            <Button className="w-full mt-6 bg-white text-[#0D1B2A] hover:bg-gray-200">
              <Link href="/offert">
                Kontakta oss
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}