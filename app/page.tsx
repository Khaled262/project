import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import GallerySection from '@/components/gallery-section';
import TestimonialsSection from '@/components/testimonials-section';
import CtaSection from '@/components/cta-section';
import FaqSection from '@/components/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}