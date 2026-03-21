import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Serif, League_Spartan } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import PageTransition from '@/components/PageTransition/PageTransition';
import CookieConsentWrapper from '@/components/CookieConsent';

const archivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-archivo', display: 'swap' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['500'], variable: '--font-ibm-plex-serif', display: 'swap' });
const leagueSpartan = League_Spartan({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-league-spartan', display: 'swap' });

export const metadata: Metadata = {
  title: 'DesenrolaAI | Tecnologia que descomplica sua empresa',
  description:
    'Automação inteligente, Sistemas Sob Medida e Agentes de IA que aceleram seus resultados. Transforme processos manuais em alta performance tecnológica.',
  keywords: ['IA', 'automação', 'inteligência artificial', 'sistemas sob medida', 'desenvolvimento web', 'agentes inteligentes'],
  authors: [{ name: 'DesenrolaAI' }],
  metadataBase: new URL('https://desenrola.ai'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://desenrola.ai',
    title: 'DesenrolaAI | Tecnologia que descomplica',
    description: 'Automação inteligente e Sistemas Sob Medida com IA para o seu negócio deslanchar.',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
    locale: 'pt_BR',
    siteName: 'DesenrolaAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DesenrolaAI | Tecnologia que descomplica',
    description: 'Automação inteligente e Sistemas Sob Medida com IA para o seu negócio deslanchar.',
    images: ['/assets/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${ibmPlexSerif.variable} ${leagueSpartan.variable}`}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />
        <PageTransition>
          {children}
        </PageTransition>
        <CookieConsentWrapper />
      </body>
    </html>
  );
}
