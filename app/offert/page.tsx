'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CalendarIcon, UploadCloud } from 'lucide-react';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { useToast } from '@/hooks/use-toast';
import PageHeader from '@/components/page-header';
import emailjs from '@emailjs/browser';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = {
  'application/pdf': ['.pdf'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png']
};

const formSchema = z.object({
  name: z.string().min(2, { message: 'Namn måste vara minst 2 tecken.' }),
  email: z.string().email({ message: 'Ogiltig e-postadress.' }),
  phone: z.string().min(6, { message: 'Telefonnummer måste vara minst 6 tecken.' }),
  address: z.string().min(5, { message: 'Adress måste vara minst 5 tecken.' }),
  city: z.string().min(2, { message: 'Ort måste vara minst 2 tecken.' }),
  service: z.string({
    required_error: "Välj en tjänst.",
  }),
  projectType: z.enum(['private', 'commercial'], {
    required_error: "Välj typ av projekt.",
  }),
  startDate: z.date({
    required_error: "Välj önskat startdatum.",
  }),
  budget: z.string().optional(),
  description: z.string().min(10, { message: 'Beskrivning måste vara minst 10 tecken.' }),
  files: z.array(z.any()).optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "Du måste godkänna vår integritetspolicy.",
  }),
});

export default function QuotePage() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      projectType: 'private',
      budget: '',
      description: '',
      consent: false,
      files: [],
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ACCEPTED_FILE_TYPES,
    maxSize: MAX_FILE_SIZE,
    onDrop: (acceptedFiles) => {
      form.setValue('files', acceptedFiles);
    },
    onDropRejected: (fileRejections) => {
      fileRejections.forEach((rejection) => {
        rejection.errors.forEach((error) => {
          if (error.code === 'file-too-large') {
            toast({
              title: "Fel vid filuppladdning",
              description: "Filen är för stor. Max storlek är 10MB.",
              variant: "destructive"
            });
          } else {
            toast({
              title: "Fel vid filuppladdning",
              description: "Ogiltigt filformat. Accepterade format är PDF, JPG, och PNG.",
              variant: "destructive"
            });
          }
        });
      });
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const filesData = await Promise.all(
        values.files?.map(async (file: File) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve({
                name: file.name,
                type: file.type,
                size: file.size,
                base64: reader.result
              });
            };
            reader.readAsDataURL(file);
          });
        }) || []
      );

      await emailjs.send(
        'service_3ww11qn',
        'template_6i0t1ih',
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          address: values.address,
          city: values.city,
          service: values.service,
          project_type: values.projectType,
          start_date: format(values.startDate, 'yyyy-MM-dd'),
          budget: values.budget,
          description: values.description,
          files: filesData,
          to_email: 'edlbyggochkakelab@gmail.com'
        },
        'iVh26UFUxF1SvgkFn'
      );

      toast({
        title: "Offertförfrågan skickad!",
        description: "Vi återkommer till dig så snart som möjligt med en offert.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ett fel uppstod",
        description: "Det gick inte att skicka offertförfrågan. Försök igen senare.",
        variant: "destructive"
      });
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Begär offert" 
        description="Fyll i formuläret nedan för att få en kostnadsfri offert på ditt projekt"
      />
      
      <motion.div 
        className="mt-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <motion.div 
              className="bg-muted p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Personuppgifter</h2>
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
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input placeholder="07X-XXX XX XX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adress</FormLabel>
                      <FormControl>
                        <Input placeholder="Gatugatan 1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ort</FormLabel>
                      <FormControl>
                        <Input placeholder="Malmö" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-muted p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4">Projektinformation</h2>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Typ av projekt</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="private" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Privatperson
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="commercial" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Företag/Bostadsrättsförening
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tjänst</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Välj en tjänst" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Badrumsrenovering">Badrumsrenovering</SelectItem>
                          <SelectItem value="Köksrenovering">Köksrenovering</SelectItem>
                          <SelectItem value="Snickeri">Snickeri</SelectItem>
                          <SelectItem value="construction">Nybyggnation</SelectItem>
                          <SelectItem value="Nybyggnation">Fastighetsskötsel</SelectItem>
                          <SelectItem value="VVS-arbeten">VVS-arbeten</SelectItem>
                          <SelectItem value="Måleri">Måleri</SelectItem>
                          <SelectItem value="Annat">Annat</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Önskat startdatum</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: sv })
                              ) : (
                                <span>Välj ett datum</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                            locale={sv}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget (valfritt)</FormLabel>
                      <FormControl>
                        <Input placeholder="Budget i SEK" {...field} />
                      </FormControl>
                      <FormDescription>
                        En uppskattad budget hjälper oss att anpassa offerten.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Projektbeskrivning</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Beskriv ditt projekt i detalj"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Ju mer information du kan ge, desto bättre kan vi anpassa vår offert.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="files"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bilagor (valfritt)</FormLabel>
                      <FormControl>
                        <div
                          {...getRootProps()}
                          className={cn(
                            "border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors",
                            isDragActive ? "border-chart-2 bg-chart-2/10" : "hover:bg-secondary/50"
                          )}
                        >
                          <input {...getInputProps()} />
                          <UploadCloud className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm font-medium">
                            {isDragActive
                              ? "Släpp filerna här..."
                              : "Dra och släpp filer här eller klicka för att bläddra"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Stöder PDF, bilder (max 10MB)
                          </p>
                          {(field.value ?? []).length > 0 && (
                            <div className="mt-4">
                              <p className="font-medium">Valda filer:</p>
                              <ul className="text-sm">
                                {Array.from(field.value ?? []).map((file: File, index) => (
                                  <li key={index} className="text-muted-foreground">
                                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormDescription>
                        Ladda upp bilder, ritningar eller andra relevanta dokument.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Jag godkänner att E.D.L Bygg & Kakel AB behandlar mina personuppgifter enligt dataskyddspolicyn
                        </FormLabel>
                        <FormDescription>
                          Läs vår <a href="#" className="text-chart-2 hover:underline">dataskyddspolicy</a> för mer information.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  className="w-full bg-chart-2 hover:bg-chart-2/90"
                >
                  Skicka offertförfrågan
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}