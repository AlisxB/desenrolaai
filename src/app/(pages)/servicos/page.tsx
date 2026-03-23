import type { Metadata } from 'next';
import ServicesHero from './ServicesHero';
import ServiceCards from '@/components/ServiceCard/ServiceCard';
import ServiceProcess from '@/components/ServiceProcess/ServiceProcess';
import ServiceFAQ from '@/components/ServiceFAQ/ServiceFAQ';
import AnimatedCTA from '@/components/AnimatedCTA/AnimatedCTA';
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
            
            <section className={styles.servicesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className="tag">O que fazemos</span>
                        <h2 className={styles.sectionTitle}>Soluções completas para o seu crescimento</h2>
                        <p className={styles.sectionDesc}>
                            Cada negócio é único. Por isso, cada solução é desenvolvida sob medida,
                            com tecnologia de ponta e foco em resultado mensurável.
                        </p>
                    </div>
                </div>
            </section>

            <ServiceCards />
            <ServiceProcess />
            <ServiceFAQ />

            <AnimatedCTA
                title="Pronto para automatizar o seu negócio?"
                description="Agende uma conversa sem compromisso e descubra como a DesenrolaAI pode acelerar os seus resultados com tecnologia."
                buttonText="Solicitar diagnóstico gratuito"
            />
        </>
    );
}