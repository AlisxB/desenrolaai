import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import PageTransition from '@/components/PageTransition/PageTransition';

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
    <html lang="pt-BR">
      <body>
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
