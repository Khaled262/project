'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Anna Svensson",
    role: "Privatperson",
    quote: "E.D.L Bygg & Kakel renoverade vårt badrum och resultatet överträffade alla våra förväntningar. Professionellt arbete från början till slut!",
    rating: 5,
  },
  {
    id: 2,
    name: "Johan Nilsson",
    role: "Bostadsrättsförening Centrum",
    quote: "Vi anlitade E.D.L för renovering av samtliga badrum i vår fastighet. De höll tidsplanen, var noggranna och kommunikationen var utmärkt.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Eriksson",
    role: "Privatperson",
    quote: "Vårt nya kök blev precis som vi hade drömt om. Hantverkarna var kunniga, noggranna och städade efter sig varje dag. Rekommenderas varmt!",
    rating: 5,
  },
  {
    id: 4,
    name: "Anders Lindgren",
    role: "Fastighetsägare",
    quote: "E.D.L har utfört flera arbeten åt mig genom åren. De håller alltid hög kvalitet, kommer i tid och slutför projekten enligt plan.",
    rating: 4,
  },
  {
    id: 5,
    name: "Sofia Bergman",
    role: "Privatperson",
    quote: "Vår badrumsrenovering blev perfekt utförd. Snyggt och professionellt arbete. Kommer definitivt anlita E.D.L igen för framtida projekt.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);
  
  const nextTestimonial = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vad våra kunder säger</h2>
          <p className="text-lg text-white/80">
            Vi är stolta över vårt arbete och våra nöjda kunder. Här är några kommentarer från personer som anlitat oss.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="w-full"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl">
                  <CardContent className="p-8">
                    <Quote className="h-12 w-12 text-chart-2 mb-6 opacity-80" />
                    <p className="text-lg md:text-xl mb-8 leading-relaxed min-h-[80px] max-w-3xl">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 ${
                              i < testimonials[activeIndex].rating 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="font-bold text-xl mb-1">{testimonials[activeIndex].name}</p>
                        <p className="text-white/70">{testimonials[activeIndex].role}</p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-4 items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-chart-2 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;