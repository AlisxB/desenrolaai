import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PortfolioHero from './PortfolioHero';
import PortfolioGrid from '@/components/PortfolioGrid/PortfolioGrid';
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
            <PortfolioGrid />

            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <h2 className={styles.ctaTitle}>Seu negócio pode ser o próximo case de sucesso</h2>
                        <p className={styles.ctaDesc}>
                            Deixe-nos analisar o seu processo e apresentar uma proposta personalizada.
                            Sem compromisso.
                        </p>
                        <Link href="/contato" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Quero ser o próximo
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
