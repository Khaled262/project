import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Medal, Clock, ThumbsUp } from 'lucide-react';
import PageHeader from '@/components/page-header';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Om oss" 
        description="Lär känna E.D.L Bygg & Kakel AB och vårt dedikerade team av hantverkare."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Vår historia</h2>
          <p className="text-lg text-gray-700">
            E.D.L Bygg & Kakel AB grundades med en vision om att leverera högkvalitativa hantverkstjänster 
            med fokus på kundnöjdhet. Sedan starten har vi vuxit till att bli en pålitlig partner för 
            både privatpersoner och företag i Malmö och hela Skåneregionen.
          </p>
          <p className="text-lg text-gray-700">
            Med vår mångåriga erfarenhet och hantverksskicklighet tar vi oss an projekt av alla storlekar, 
            från mindre reparationer till omfattande renoveringar och nybyggnationer.
          </p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Våra värderingar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-chart-1">
                <CardContent className="p-4 flex items-start">
                  <ThumbsUp className="h-6 w-6 text-chart-1 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Kvalitet</h4>
                    <p className="text-sm text-gray-600">Vi kompromissar aldrig med kvaliteten i vårt arbete.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-chart-2">
                <CardContent className="p-4 flex items-start">
                  <Clock className="h-6 w-6 text-chart-2 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Punktlighet</h4>
                    <p className="text-sm text-gray-600">Vi respekterar dina tidsramar och håller våra deadlines.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-chart-3">
                <CardContent className="p-4 flex items-start">
                  <Medal className="h-6 w-6 text-chart-3 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Professionalitet</h4>
                    <p className="text-sm text-gray-600">Yrkesstolthet genomsyrar allt vi gör.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-chart-4">
                <CardContent className="p-4 flex items-start">
                  <Users className="h-6 w-6 text-chart-4 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold">Kundservice</h4>
                    <p className="text-sm text-gray-600">Din nöjdhet är vår främsta prioritet.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="E.D.L Bygg & Kakel teamet" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vårt team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ahmad Smaiel",
              role: "VD & Projektledare",
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Med över 15 års erfarenhet av byggprojekt leder Ahmed företaget med stort engagemang och expertis."
            },
            {
              name: "Mohammad Samail",
              role: "Badrumsspecialist",
              image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Mohammad är vår expert på kakel, klinker och badrumsrenoveringar med ett öga för detaljer och design."
            },
            {
              name: "Khaled Alsmail",
              role: "Snickare",
              image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              description: "Khaled har gedigen erfarenhet inom snickeri och tar sig an allt från mindre reparationer till större byggnationer."
            }
          ].map((member, i) => (
            <Card key={i} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-chart-2 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <Button size="lg" className="bg-chart-2 hover:bg-chart-2/90">
           <Link href="/kontakt">
          Kontakta vårt team
           </Link>
        </Button>
      </div>
    </div>
  );
}