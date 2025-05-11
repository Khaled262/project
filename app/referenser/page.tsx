'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHeader from '@/components/page-header';
import useEmblaCarousel from 'embla-carousel-react';
import { X, Maximize2, Minimize2 } from 'lucide-react';

// Define project categories
const categories = [
  { id: 'alla', label: 'Alla projekt' },
  { id: 'badrum', label: 'Badrum' },
  { id: 'kok', label: 'Kök' },
  { id: 'nybyggnation', label: 'Nybyggnation' },
  { id: 'utomhus', label: 'Utomhus' }
];

// Define project data
const projects = [
  {
    id: 1,
    title: 'Modern badrumrenovering, Lund',
    category: 'badrum',
    description: 'Totalrenovering av badrum med kakel och klinker. Installation av walk-in dusch och dubbla handfat.',
    mainImage: 'https://i.postimg.cc/3RjsYC64/IMG-20240513-WA0030.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://i.postimg.cc/3RjsYC64/IMG-20240513-WA0030.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/Bbqd6P9h/IMG-20231107-WA0006.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/3NnzDr33/IMG-20231107-WA0000.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/LXFcc0yF/Badrumsrenovering.jpg?auto=compress&cs=tinysrgb&w=1600&h=1200&dpr=2'
    ],
    client: 'Privatperson',
    year: '2023',
    location: 'Lund'
  },
  {
    id: 2,
    title: 'Modern badrumrenovering, Malmö',
    category: 'badrum',
    description: 'Totalrenovering av badrum med kakel och klinker. Installation av walk-in dusch.',
    mainImage: 'https://i.postimg.cc/Y2D4QJbS/IMG-20241226-WA0011.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://i.postimg.cc/Y2D4QJbS/IMG-20241226-WA0011.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/Dyt8M1Vk/kakel-1-jpg.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/Qd1HGVsB/IMG-20240513-WA0015.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/WbDd8XHw/IMG-20231107-WA0016.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/Vvhd1Cdt/IMG-20231107-WA0015.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Privatperson',
    year: '2023',
    location: 'Malmö'
  },
  {
    id: 3,
    title: 'Köksmontage och renovering, Lund',
    category: 'kok',
    description: 'Helrenovering av kök inklusive nya ytskikt, installation av köksö och nya vitvaror.',
    mainImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Bostadsrättsförening Centrum',
    year: '2022',
    location: 'Lund'
  },
  {
    id: 4,
    title: 'Nybyggt enfamiljshus, Staffanstorp',
    category: 'nybyggnation',
    description: 'Nybyggnation av 150 kvm villa i två plan inklusive grund, stomme, tak och samtliga invändiga arbeten.',
    mainImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Familjen Johansson',
    year: '2023',
    location: 'Staffanstorp'
  },
  {
    id: 5,
    title: 'Plattsättning i gården, Malmö',
    category: 'utomhus',
    description: 'Plattsättning av rymlig gårdsyta med dekorativ stenläggning, integrerad belysning, stilren kantavgränsning och trappa som leder ner till trädgården.',
    mainImage: 'https://i.postimg.cc/MKVSzF3T/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://i.postimg.cc/MKVSzF3T/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/8kFG05hL/Snapchat-1399990476.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/Kj30rC3g/Snapchat-17993579.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/zv4PsqYj/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/3xXbqMSX/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/FH5BGFZF/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/tCVchnFm/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/RCY86LJH/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/jjRk08mG/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/k4pjS7Gm/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/43w2J6Tn/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/ZRR70WTH/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/fk4BH5Yq/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/66DKJX0g/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Privatperson',
    year: '2025',
    location: 'Malmö'
  },
   {
    id: 6,
    title: 'Trädgård med pergola och staket, Arlöv',
    category: 'utomhus',
    description: 'En pergola i trädgården skapar en mysig uteplats med skugga och rumskänsla, perfekt för avkoppling eller middagar utomhus. Kombinerat med ett stilrent staket får trädgården både avskildhet och ett enhetligt utseende. I Malmö är pergolor och staket ofta anpassade efter väder och miljö, byggda i hållbara material som trä eller metall för lång livslängd och minimal skötsel.',
    mainImage: 'https://i.postimg.cc/Gm4Sc8mj/IMG-20250501-WA0001.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://i.postimg.cc/Gm4Sc8mj/IMG-20250501-WA0001.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/85mZyLZT/Snapchat-1305324550.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/wxkrFYrD/IMG-20250501-WA0000.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/qMb5VX4R/IMG-20250501-WA0002.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/WzpXxtyg/Snapchat-1026143956.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/g0RSZCRX/Snapchat-385204274.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/Kj9JbxXV/Snapchat-1734060473.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/bNNBBFXW/Snapchat-93720501.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/2Sg93kqN/Snapchat-148089539.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://i.postimg.cc/fLNHj8jH/Snapchat-1226981027.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    client: 'Privatperson',
    year: '2025',
    location: 'Arlöv'
  },
  {
    id: 7,
    title: 'Öppet kök med köksö',
    category: 'kok',
    description: 'Ombyggnad av kök med öppen planlösning, köksö och nya vitvaror. Nytt golv och målade väggar.',
    mainImage: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2418271/pexels-photo-2418271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Privatperson',
    year: '2022',
    location: 'Lund'
  }
];

export default function ReferencesPage() {
  const [selectedTab, setSelectedTab] = useState('alla');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'center'
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, selectedProject]);
  
  // Filter projects based on selected category
  const filteredProjects = selectedTab === 'alla' 
    ? projects 
    : projects.filter(project => project.category === selectedTab);
  
  // Get the currently selected project
  const currentProject = selectedProject !== null 
    ? projects.find(p => p.id === selectedProject) 
    : null;

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      const galleryElement = document.getElementById('gallery-container');
      if (galleryElement) {
        galleryElement.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (emblaApi) {
      if (e.key === 'ArrowLeft') {
        emblaApi.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        emblaApi.scrollNext();
      }
    }
  }, [emblaApi]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Referenser" 
        description="Utforska våra tidigare projekt och se vad vi kan göra för dig"
      />
      
      <Tabs defaultValue="alla" value={selectedTab} onValueChange={setSelectedTab} className="mt-16">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value={selectedTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer overflow-hidden rounded-lg border border-border transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.mainImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" className="text-white bg-black/60 hover:bg-black/80">
                      Visa projekt
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.location}, {project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Project lightbox dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {currentProject && (
          <DialogContent className="max-w-7xl w-[95vw] p-0 overflow-hidden">
            <DialogTitle className="sr-only">
              {currentProject.title}
            </DialogTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 h-[90vh]">
              <div id="gallery-container" className="col-span-2 relative bg-black">
                <div className="h-full" ref={emblaRef}>
                  <div className="flex h-full">
                    {currentProject.images.map((img, idx) => (
                      <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image 
                            src={img} 
                            alt={`${currentProject.title} - Bild ${idx + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
                            quality={100}
                            priority={idx === 0}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFullscreen();
                    }}
                    className="bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="h-6 w-6" />
                    ) : (
                      <Maximize2 className="h-6 w-6" />
                    )}
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {currentProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === 0 ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        emblaApi?.scrollTo(idx);
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto bg-background">
                <h2 className="text-2xl font-bold mb-2">{currentProject.title}</h2>
                <p className="text-muted-foreground mb-4">{currentProject.location}, {currentProject.year}</p>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2">Beskrivning</h3>
                  <p className="text-gray-700">{currentProject.description}</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-2">Detaljer</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Kund:</span>
                      <span>{currentProject.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plats:</span>
                      <span>{currentProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">År:</span>
                      <span>{currentProject.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Kategori:</span>
                      <span>{categories.find(c => c.id === currentProject.category)?.label}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full bg-chart-2 hover:bg-chart-2/90">
                    <Link href="/offert">
                      Begär liknande projekt
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}