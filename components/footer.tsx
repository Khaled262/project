import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">E.D.L Bygg & Kakel AB</h3>
            <p className="text-gray-300 mb-6">
              Professionella bygg- och renoverings­tjänster i Malmö och hela Skåne. Vi hjälper dig från idé till färdigt resultat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-chart-2 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-chart-2 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-chart-2 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Tjänster</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tjanster#badrum" className="text-gray-300 hover:text-white transition-colors">
                  Badrumsrenovering
                </Link>
              </li>
              <li>
                <Link href="/tjanster#kok" className="text-gray-300 hover:text-white transition-colors">
                  Köksrenovering
                </Link>
              </li>
              <li>
                <Link href="/tjanster#snickeri" className="text-gray-300 hover:text-white transition-colors">
                  Snickeri
                </Link>
              </li>
              <li>
                <Link href="/tjanster#nybyggnation" className="text-gray-300 hover:text-white transition-colors">
                  Nybyggnation
                </Link>
              </li>
              <li>
                <Link href="/tjanster#fastighet" className="text-gray-300 hover:text-white transition-colors">
                  Fastighetsskötsel
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="text-chart-2 hover:underline">
                  Se alla tjänster
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Telefon</p>
                  <a href="tel:076-312 99 69" className="text-white hover:underline">076-312 99 69</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">E-post</p>
                  <a href="mailto:edlbyggochkakelab@gmail.com" className="text-white hover:underline">edlbyggochkakelab@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-chart-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Adress</p>
                  <p className="text-white">Kårbostigen 42, 212 33 Malmö</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Nyhetsbrev</h3>
            <p className="text-gray-300 mb-4">
              Prenumerera på vårt nyhetsbrev för tips, inspiration och erbjudanden.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Din e-postadress" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-chart-2 hover:bg-chart-2/90">
                Prenumerera
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} E.D.L Bygg & Kakel AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/integritetspolicy" className="hover:text-white transition-colors">
                Integritetspolicy
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/villkor" className="hover:text-white transition-colors">
                Villkor
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;