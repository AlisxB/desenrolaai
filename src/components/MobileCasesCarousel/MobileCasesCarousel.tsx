'use client';

import { useRef, useState, useEffect } from 'react';
import { ShoppingCart, Stethoscope, Code2, Heart, Building2, Briefcase } from 'lucide-react';
import styles from './MobileCasesCarousel.module.css';
import { CTAS } from '@/lib/ctas';

const cases = [
    {
        segment: 'E-commerce',
        Icon: ShoppingCart,
        tag: 'Automação de Vendas',
        title: 'Recuperação de Carrinho via WhatsApp',
    },
    {
        segment: 'Clínicas & Saúde',
        Icon: Stethoscope,
        tag: 'Gestão de Pacientes',
        title: 'Follow-up de Consultas Automatizado',
    },
    {
        segment: 'SaaS & Tech',
        Icon: Code2,
        tag: 'Automação de Processos',
        title: 'Onboarding de Clientes Escalável',
    },
    {
        segment: 'Pet Shops',
        Icon: Heart,
        tag: 'Fidelização',
        title: 'Reativação de Clientes Inativos',
    },
    {
        segment: 'Imobiliárias',
        Icon: Building2,
        tag: 'Qualificação de Leads',
        title: 'Qualificação 24/7 com IA',
    },
];

export default function MobileCasesCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollTo = (index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const cards = track.querySelectorAll(`.${styles.card}`);
        if (!cards[index]) return;
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        setActiveIndex(index);
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleScroll = () => {
            const scrollLeft = track.scrollLeft;
            const cardWidth = track.querySelector(`.${styles.card}`)?.clientWidth ?? 300;
            const gap = 16;
            const index = Math.round(scrollLeft / (cardWidth + gap));
            setActiveIndex(Math.min(Math.max(0, index), cases.length - 1));
        };

        track.addEventListener('scroll', handleScroll, { passive: true });
        return () => track.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className="tag">
                    <Briefcase size={14} />
                    Cases Reais
                </span>
                <h2 className={styles.title}>
                    Resultado de verdade,<br />
                    <span className={styles.titleAccent}>em cada segmento</span>
                </h2>
                <p className={styles.subtitle}>
                    Explore como transformamos negócios através da inteligência artificial.
                </p>
            </div>

            <div ref={trackRef} className={styles.track}>
                {cases.map((c, i) => (
                    <div
                        key={i}
                        className={`${styles.card} ${i === activeIndex ? styles.cardActive : ''}`}
                        onClick={() => scrollTo(i)}
                    >
                        <div className={styles.cardInner}>
                            <div className={styles.iconWrapper}>
                                <c.Icon size={40} strokeWidth={1.5} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.segment}>{c.segment}</span>
                                <span className={styles.tagBadge}>{c.tag}</span>
                                <h3 className={styles.cardTitle}>{c.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <div className={styles.dots}>
                    {cases.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => scrollTo(i)}
                            aria-label={`Ir para case ${i + 1}`}
                        />
                    ))}
                </div>
                <a href={CTAS.portfolio.href} className="btn btn-primary">
                    Ver todos os cases
                </a>
            </div>
        </section>
    );
}
