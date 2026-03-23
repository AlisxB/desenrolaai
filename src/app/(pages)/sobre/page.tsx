import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import AboutHero from './AboutHero';
import MissionVision from '@/components/MissionVision/MissionVision';
import AboutStats from '@/components/AboutStats/AboutStats';
import Founders from '@/components/Founders/Founders';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Sobre | DesenrolaAI — Tecnologia que descomplica sua empresa',
    description:
        'Conheça a história da DesenrolaAI: missão, visão, valores e a equipe por trás das soluções de IA e automação que transformam negócios em Fortaleza/CE.',
    keywords: ['sobre a DesenrolaAI', 'empresa de IA Fortaleza', 'automação de processos', 'time DesenrolaAI'],
    openGraph: {
        title: 'Sobre | DesenrolaAI',
        description: 'Conheça a história e os valores da DesenrolaAI.',
        images: [{ url: '/assets/og-image.png' }],
    },
};

export default function SobrePage() {
    return (
        <>
            <AboutHero />

            <MissionVision />

            <AboutStats />

            <Founders />

            <section className={styles.story}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyLeft}>
                            <span className="tag">
                                <Calendar size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                                Nossa história
                            </span>
                            <h2 className={styles.storyTitle}>
                                De uma ideia na sala de estar à referência em automação no Nordeste
                            </h2>
                        </div>
                        <div className={styles.storyRight}>
                            <p>
                                Tudo começou com uma frustração comum: ver empresas perdendo tempo em tarefas
                                que poderiam ser resolvidas em minutos com a ferramenta certa. A DesenrolaAI
                                nasceu como resposta a isso — uma empresa que coloca o resultado do cliente
                                acima de qualquer complexidade técnica.
                            </p>
                            <p>
                                Hoje, com mais de 120 projetos entregues e clientes em todo o Brasil,
                                continuamos com o mesmo DNA de origem: proximidade, transparência e
                                tecnologia que realmente resolve problemas do dia a dia.
                            </p>
                            <Link href="/contato" className={`btn btn-primary ${styles.ctaBtn}`}>
                                Fale com nossa equipe
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <h2 className={styles.ctaTitle}>Quer fazer parte da nossa história?</h2>
                        <p className={styles.ctaDesc}>
                            Estamos sempre em busca de clientes parceiros que acreditam no poder da tecnologia
                            como acelerador de resultados.
                        </p>
                        <Link href="/contato" className={`btn btn-primary ${styles.ctaBtn}`}>
                            Vamos conversar
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
