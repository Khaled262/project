import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath, Home, PenTool, Building } from 'lucide-react';

const servicesData = [
  {
    title: "Badrumsrenovering",
    description: "Totalrenovering av badrum med kakel, klinker och VVS-installation.",
    IconComponent: Bath,
    image: "https://i.postimg.cc/qqPdYbS9/Badrumsrenovering.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "border-chart-2",
    link: "/tjanster#badrum"
  },
  {
    title: "Köksrenovering",
    description: "Designa och bygg ditt drömkök med hjälp av våra erfarna snickare.",
    IconComponent: Home,
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "border-chart-1",
    link: "/tjanster#kok"
  },
  {
    title: "Snickeri",
    description: "Allt från mindre reparationer till större snickeriarbeten.",
    IconComponent: PenTool,
    image: "https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "border-chart-3",
    link: "/tjanster#snickeri"
  },
  {
    title: "Nybyggnation",
    description: "Byggnation av nya hus och tillbyggnader från grund till tak.",
    IconComponent: Building,
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "border-chart-4",
    link: "/tjanster#nybyggnation"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Våra tjänster</h2>
          <p className="text-lg text-muted-foreground">
            Vi erbjuder ett brett utbud av tjänster inom bygg och renovering för att möta alla dina behov.
            Från mindre reparationer till kompletta nybyggnationer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.IconComponent;
            return (
              <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 ${service.color}`}>
                <div className="relative h-48">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="mr-3 text-chart-2">
                      <Icon className="h-10 w-10" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={service.link}>
                      Läs mer
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-chart-2 hover:bg-chart-2/90" asChild>
            <Link href="/tjanster">
              Se alla våra tjänster
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;