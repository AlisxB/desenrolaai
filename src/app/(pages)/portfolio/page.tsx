import type { Metadata } from 'next';
import PortfolioHero from './PortfolioHero';
import PortfolioGrid from '@/components/PortfolioGrid/PortfolioGrid';
import AnimatedCTA from '@/components/AnimatedCTA/AnimatedCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Portfólio | DesenrolaAI — Cases de Sucesso com IA e Automação',
    description:
        'Veja os resultados reais de clientes da DesenrolaAI: automação de clínicas, e-commerces, agências de marketing e muito mais. Casos de sucesso com IA e automação.',
    keywords: ['portfólio DesenrolaAI', 'cases de sucesso', 'automação de processos', 'agentes de IA'],
    openGraph: {
        title: 'Portfólio | DesenrolaAI',
        description: 'Resultados reais de clientes transformados com IA e automação.',
        images: [{ url: '/assets/og-image.png' }],
    },
};

export default function PortfolioPage() {
    return (
        <>
            <PortfolioHero />

            <section className={styles.portfolioSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className="tag">Nossos resultados</span>
                        <h2 className={styles.sectionTitle}>Projetos que fizeram diferença</h2>
                        <p className={styles.sectionDesc}>
                            Cada case representa um negócio transformado. Veja como empresas brasileiras
                            estão economizando tempo, aumentando faturamento e crescendo com tecnologia.
                        </p>
                    </div>
                </div>
            </section>

            <PortfolioGrid />

            <AnimatedCTA
                title="Seu negócio pode ser o próximo case de sucesso"
                description="Deixe-nos analisar o seu processo e apresentar uma proposta personalizada. Sem compromisso."
                buttonText="Quero ser o próximo"
            />
        </>
    );
}