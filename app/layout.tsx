import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CookieConsent from '@/components/cookie-consent';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://edlbygg.se'),
  title: {
    default: 'E.D.L Bygg & Kakel AB | Professionell byggfirma i Malmö',
    template: '%s | E.D.L Bygg & Kakel AB'
  },
  description: 'E.D.L Bygg & Kakel AB erbjuder högkvalitativa tjänster inom snickeri, badrumsrenovering och byggprojekt i Malmö och Skåne.',
  keywords: ['snickare Malmö', 'badrumsrenovering Skåne', 'byggföretag Malmö', 'kakel och klinker', 'renovering', 'byggfirma Malmö'],
  authors: [{ name: 'E.D.L Bygg & Kakel AB' }],
  creator: 'E.D.L Bygg & Kakel AB',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://edlbygg.se',
    siteName: 'E.D.L Bygg & Kakel AB',
    title: 'E.D.L Bygg & Kakel AB | Professionell byggfirma i Malmö',
    description: 'E.D.L Bygg & Kakel AB erbjuder högkvalitativa tjänster inom snickeri, badrumsrenovering och byggprojekt i Malmö och Skåne.',
    images: [{
      url: 'https://edlbygg.se/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'E.D.L Bygg & Kakel AB'
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://edlbygg.se'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'E.D.L Bygg & Kakel AB',
  image: 'https://edlbygg.se/logo.jpg',
  '@id': 'https://edlbygg.se',
  url: 'https://edlbygg.se',
  telephone: '076-312 99 69',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kårbostigen 42',
    addressLocality: 'Malmö',
    postalCode: '212 33',
    addressCountry: 'SE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.5805556,
    longitude: 12.9891653
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '07:00',
    closes: '19:00'
  },
  sameAs: [
    'https://www.facebook.com/edlbygg',
    'https://www.instagram.com/edlbygg'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}