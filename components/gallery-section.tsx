'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Modern badrumrenovering",
    category: "Badrum",
    image: "https://i.postimg.cc/qqPdYbS9/Badrumsrenovering.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Modern badrumrenovering",
    category: "Badrum",
    image: "https://i.postimg.cc/Y2D4QJbS/IMG-20241226-WA0011.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Köksmontage och renovering",
    category: "Kök",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Nybyggt enfamiljshus",
    category: "Nybyggnation",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Plattsättning i gården",
    category: "Utomhus",
    image: "https://i.postimg.cc/MKVSzF3T/image.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
   {
    id: 6,
    title: "Trädgård med pergola och staket",
    category: "Utomhus",
    image: "https://i.postimg.cc/Gm4Sc8mj/IMG-20250501-WA0001.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    title: "Öppet kök med köksö",
    category: "Kök",
    image: "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  
  const openImage = (id: number) => {
    setSelectedImage(id);
  };
  
  const closeImage = () => {
    setSelectedImage(null);
  };
  
  const currentImage = galleryItems.find(item => item.id === selectedImage);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Våra senaste projekt</h2>
          <p className="text-lg text-muted-foreground">
            Ta en titt på några av våra senaste arbeten. Varje projekt genomförs med högsta kvalitet och noggrannhet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer shadow-md"
              onClick={() => openImage(item.id)}
            >
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white/80 text-sm">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/referenser">
              Se alla våra projekt
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Lightbox dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeImage()}>
        {currentImage && (
          <DialogContent className="max-w-5xl p-0 overflow-hidden">
            <VisuallyHidden>
              <DialogTitle>{currentImage.title}</DialogTitle>
            </VisuallyHidden>
            <div className="relative h-[80vh]">
              <Image 
                src={currentImage.image} 
                alt={currentImage.title}
                fill
                className="object-contain"
              />
              <button 
                onClick={closeImage}
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="text-white text-xl font-bold">{currentImage.title}</h3>
                <p className="text-white/80">{currentImage.category}</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default GallerySection;