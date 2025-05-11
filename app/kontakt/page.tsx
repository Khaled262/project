'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageHeader from '@/components/page-header';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Namn måste vara minst 2 tecken.' }),
  email: z.string().email({ message: 'Ogiltig e-postadress.' }),
  subject: z.string().min(2, { message: 'Ämne måste vara minst 2 tecken.' }),
  message: z.string().min(10, { message: 'Meddelande måste vara minst 10 tecken.' }),
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  const { toast } = useToast();
  const [formRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await emailjs.send(
        'service_j59hd6n',
        'template_im8s262',
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: 'edlbyggochkakelab@gmail.com'
        },
        'iVh26UFUxF1SvgkFn'
      );

      toast({
        title: "Meddelande skickat!",
        description: "Vi återkommer till dig så snart som möjligt.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ett fel uppstod",
        description: "Det gick inte att skicka meddelandet. Försök igen senare.",
        variant: "destructive"
      });
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Kontakta oss" 
        description="Vi finns här för att hjälpa dig med ditt nästa byggprojekt"
      />
      
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card rounded-lg overflow-hidden border">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Kontaktinformation</h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-gray-600">076-312 99 69</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">E-post</h3>
                    <p className="text-gray-600">edlbyggochkakelab@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Adress</h3>
                    <p className="text-gray-600">Kårbostigen 42</p>
                    <p className="text-gray-600">212 33 Malmö</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Öppettider</h3>
                    <p className="text-gray-600">Måndag-Fredag: 07:00-19:00</p>
                    <p className="text-gray-600">Lördag-Söndag: 07:00-19:00</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="w-full h-64 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.2934728440544!2d12.9891653!3d55.5805556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a15c7b49816f%3A0x7b2a4b4c8b4b4b4b!2sK%C3%A5rbostigen%2042%2C%20212%2033%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1625581234567!5m2!1ssv!2sse"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-3"
          ref={formRef}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Skicka ett meddelande</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Namn</FormLabel>
                          <FormControl>
                            <Input placeholder="Ditt namn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-post</FormLabel>
                          <FormControl>
                            <Input placeholder="din.email@exempel.se" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ämne</FormLabel>
                        <FormControl>
                          <Input placeholder="Vad gäller ditt meddelande?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meddelande</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Skriv ditt meddelande här..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-chart-2 hover:bg-chart-2/90"
                    >
                      Skicka meddelande
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-[#0D1B2A] text-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Ring oss</h3>
                  <p className="text-sm text-gray-300">
                    Vill du prata direkt med någon? Ring oss på:
                  </p>
                  <p className="font-medium mt-2">076-312 99 69</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Maila oss</h3>
                  <p className="text-sm text-gray-600">
                    Skicka e-post direkt till oss:
                  </p>
                  <p className="font-medium mt-2">edlbyggochkakelab@gmail.com</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Besök oss</h3>
                  <p className="text-sm text-gray-600">
                    Kom förbi vårt kontor:
                  </p>
                  <p className="font-medium mt-2">Kårbostigen 42, Malmö</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}