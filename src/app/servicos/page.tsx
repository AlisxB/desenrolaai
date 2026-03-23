import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServicesHero from './ServicesHero';
import ServiceCards from '@/components/ServiceCard/ServiceCard';
import ServiceProcess from '@/components/ServiceProcess/ServiceProcess';
import ServiceFAQ from '@/components/ServiceFAQ/ServiceFAQ';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Serviços | DesenrolaAI — Agentes de IA, Automação e Sistemas Sob Medida',
    description:
        'Conheça os serviços da DesenrolaAI: Agentes de IA, Automação de Processos, Sistemas Sob Medida e Consultoria em IA. Soluções que geram resultado real.',
    keywords: ['serviços de IA', 'automação de processos', 'sistemas sob medida', 'consultoria em IA', 'agentes chatbots'],
    openGraph: {
        title: 'Serviços | DesenrolaAI',
        description: 'Agentes de IA, automação e sistemas sob medida para o seu negócio.',
        images: [{ url: '/assets/og-image.png' }],
    },
};

export default function ServicosPage() {
    return (
        <>
            <ServicesHero />
            <ServiceCards />
            <ServiceProcess />
            <ServiceFAQ />

            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <h2 className={styles.ctaTitle}>Pronto para automatizar o seu negócio?</h2>
                        <p className={styles.ctaDesc}>
                            Agende uma conversa sem compromisso e descubra como a DesenrolaAI pode
                            acelerar os seus resultados com tecnologia.
                        </p>
                        <Link href="/contato" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Solicitar diagnóstico gratuito
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
