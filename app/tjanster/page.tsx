import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, Bath, Wrench, Building, PenTool as Tool, Droplet, Paintbrush, Ruler } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/page-header";

const services = [
  {
    title: "Badrumsrenovering",
    description: "Totalrenovering av badrum med kakel, klinker och VVS-installation. Vi hjälper dig från idé till färdigt badrum.",
    icon: <Bath className="h-12 w-12 text-chart-2" />,
    image: "https://i.postimg.cc/qqPdYbS9/Badrumsrenovering.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Kakel & klinker", "Golvvärme", "Dusch & badkar", "VVS-installation"]
  },
  {
    title: "Snickeri",
    description: "Allt från mindre reparationer till större snickeriarbeten. Vi bygger altaner, renoverar kök och mycket mer.",
    icon: <Tool className="h-12 w-12 text-chart-1" />,
    image: "https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Köksmontage", "Altanbygge", "Dörrmontering", "Fönsterbyten"]
  },
  {
    title: "Nybyggnation",
    description: "Byggnation av nya hus och tillbyggnader. Vi tar hand om hela processen från grund till färdigt hus.",
    icon: <Building className="h-12 w-12 text-chart-3" />,
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Husbyggnation", "Tillbyggnader", "Garage", "Bygglovshantering"]
  },
  {
    title: "Fastighetsskötsel",
    description: "Löpande underhåll och service av fastigheter för bostadsrättsföreningar och fastighetsägare.",
    icon: <Home className="h-12 w-12 text-chart-4" />,
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Reparationer", "Målning", "Yttre underhåll", "Vinterskötsel"]
  },
  {
    title: "VVS-arbeten",
    description: "Installation och reparation av vatten, värme och avlopp i badrum, kök och andra utrymmen.",
    icon: <Droplet className="h-12 w-12 text-chart-5" />,
    image: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Rördragning", "Värmesystem", "Golvvärme", "Avloppsinstallation"]
  },
  {
    title: "Måleri",
    description: "Invändigt och utvändigt måleri för privatpersoner och företag. Vi arbetar med alla typer av ytor.",
    icon: <Paintbrush className="h-12 w-12 text-chart-2" />,
    image: "https://images.pexels.com/photos/6368/art-wall-brush-painting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Invändig målning", "Fasadmålning", "Tapetsering", "Spackling"]
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Våra tjänster" 
        description="Vi erbjuder ett brett utbud av tjänster inom bygg och renovering"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4" style={{ borderTopColor: `hsl(var(--chart-${(index % 5) + 1}))` }}>
            <div className="relative h-48">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-background -mt-12 shadow-lg border-4 border-white">
                  {service.icon}
                </div>
              </div>
              <CardTitle className="text-2xl mt-2">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {service.description}
              </CardDescription>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-chart-2 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Link href="/offert" className="w-full">
                  Begär offert
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-20 bg-muted rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Arbetsgång</h2>
            <p className="text-lg mb-6">
              Så här ser vår process ut från idé till färdigt projekt. Vi lägger stor vikt vid kvalitet 
              och noggrannhet i varje steg för att du ska bli nöjd med slutresultatet.
            </p>
            
            <ol className="space-y-6">
              {[
                { step: 1, title: "Offertförfrågan", description: "Kontakta oss med dina önskemål och krav." },
                { step: 2, title: "Platsbesök", description: "Vi kommer ut och tittar på objektet för att kunna ge en korrekt offert." },
                { step: 3, title: "Detaljerad offert", description: "Du får en tydlig offert med specificerade kostnader." },
                { step: 4, title: "Projektplanering", description: "Vi planerar projektet noggrant och säkerställer tillgång till material." },
                { step: 5, title: "Genomförande", description: "Vi utför arbetet enligt överenskommen tidsplan." },
                { step: 6, title: "Besiktning", description: "Tillsammans går vi igenom det färdiga resultatet." }
              ].map((item) => (
                <li key={item.step} className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-chart-2 text-white font-bold">
                    {item.step}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Byggprocess"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <Button size="lg" className="bg-chart-2 hover:bg-chart-2/90">
          <Link href="/kontakt">
            Kontakta oss för en offert
          </Link>
        </Button>
      </div>
    </div>
  );
}