'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ProcessSection.module.css';

const steps = [
    {
        number: '01',
        title: 'Mergulho & Diagnóstico',
        description: 'Mapeamos cada gargalo da sua operação atual para identificar onde a automação terá o maior impacto imediato.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
        ),
        accent: '#51D9FE'
    },
    {
        number: '02',
        title: 'Arquitetura Customizada',
        description: 'Desenhamos a infraestrutura de inteligência artificial sob medida para o seu modelo de negócio e tom de voz.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
        ),
        accent: '#BCCF1C'
    },
    {
        number: '03',
        title: 'Implementação & Integração',
        description: 'Conectamos a IA nativamente ao seu ecossistema: WhatsApp, CRM, Meios de Pagamento e ERPs.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
            </svg>
        ),
        accent: '#A78BFA'
    },
    {
        number: '04',
        title: 'Escala & Otimização',
        description: 'Monitoramento em tempo real e evolução contínua dos modelos para garantir que o resultado só cresça.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20" /><path d="m17 7-5-5-5 5" /><path d="m17 17-5 5-5-5" />
            </svg>
        ),
        accent: '#FB923C'
    }
];

export default function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} ref={sectionRef} id="metodo">
            <div className={`container ${styles.inner}`}>
                <div className={styles.header}>
                    <span className="tag">⚙️ O MÉTODO</span>
                    <h2 className={styles.title}>
                        Do diagnóstico à <br />
                        <span className={styles.titleAccent}>escala máxima</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`${styles.stepCard} ${isVisible ? styles.animateIn : ''}`}
                            style={{ '--delay': `${i * 150}ms`, '--accent': step.accent } as React.CSSProperties}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {step.icon}
                                </div>
                                <span className={styles.number}>{step.number}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>

                            {/* Connective line for desktop */}
                            {i < steps.length - 1 && (
                                <div className={styles.connector}>
                                    <div className={styles.connectorLine} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.footerGlow} />
            </div>
        </section>
    );
}
