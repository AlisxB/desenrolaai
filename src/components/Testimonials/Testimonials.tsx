'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 0,
        name: 'Rafael Mendonça',
        role: 'Dono de clínica odontológica',
        location: 'São Paulo, SP',
        quote: '"Antes eu perdia paciente todo dia por falta de follow-up. Hoje minha agenda tá sempre cheia e eu nem precisei contratar ninguém."',
        shortQuote: 'Agenda sempre cheia sem esforço manual',
        result: '+R$22k/mês',
        category: 'Clínica & Saúde',
        accent: '#51D9FE',
        image: '/testimonials/rafael.png',
        tag: 'Destaque do Mês'
    },
    {
        id: 1,
        name: 'Camila Torres',
        role: 'Fundadora de e-commerce',
        location: 'Belo Horizonte, MG',
        quote: '"Em menos de 2 semanas o robô já tinha recuperado mais de R$14 mil em carrinhos abandonados. Pensei que era mentira."',
        shortQuote: 'R$14k recuperados em tempo recorde',
        result: 'ROI de 8x',
        category: 'E-commerce',
        accent: '#BCCF1C',
        image: '/testimonials/camila.png',
        tag: 'Sucesso em Vendas'
    },
    {
        id: 2,
        name: 'Diego Furtado',
        role: 'Consultor de Estratégia',
        location: 'Curitiba, PR',
        quote: '"Entrego mais resultado pro meu cliente e não preciso ficar respondendo lead manualmente. A IA faz isso 24 horas."',
        shortQuote: 'Atendimento 24/7 sem intervenção humana',
        result: '3x mais leads',
        category: 'Marketing',
        accent: '#A78BFA',
        image: '/testimonials/diego.png',
        tag: 'Inovação Digital'
    },
    {
        id: 3,
        name: 'Patrícia Souza',
        role: 'Proprietária de Negócio',
        location: 'Florianópolis, SC',
        quote: '"Minha maior dor era nota fiscal manual e lembretes de banho. Hoje tudo é automático e sobra tempo pra cuidar dos bichos."',
        shortQuote: 'Processos 100% automatizados',
        result: '-4h/dia',
        category: 'Serviços',
        accent: '#FB923C',
        image: '/testimonials/patricia.png',
        tag: 'Eficiência Operacional'
    },
    {
        id: 4,
        name: 'Lucas Viana',
        role: 'CEO de Tech Startup',
        location: 'Recife, PE',
        quote: '"O onboarding dos nossos clientes foi de 5 horas para 15 minutos. Literalmente. A equipe ficou chocada com a agilidade."',
        shortQuote: 'Onboarding de 5h para 15 minutos',
        result: 'Churn -22%',
        category: 'SaaS',
        accent: '#34D399',
        image: '/testimonials/lucas.png',
        tag: 'Escalabilidade'
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const hero = testimonials[active];

    const handleSwitch = (index: number) => {
        if (index === active) return;
        setIsExiting(true);
        setTimeout(() => {
            setActive(index);
            setIsExiting(false);
        }, 300);
    };

    return (
        <section className={styles.section} id="depoimentos">
            <div className={`container ${styles.inner}`}>
                {/* Intro Header */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span className="tag">📂 NOSSOS CLIENTES</span>
                        <h2 className={styles.title}>
                            Cada cliente é um <br />
                            <span className={styles.titleAccent}>parceiro estratégico</span>
                        </h2>
                    </div>
                    <div className={styles.headerRight}>
                        <p className={styles.desc}>
                            Grandes estrategistas e experts confiam na DesenrolaAI para automatizar seus processos, centralizar dados e escalar resultados.
                        </p>
                        <button className={styles.talkButton}>
                            <span>💬 Falar com um consultor</span>
                        </button>
                    </div>
                </div>

                {/* Main Hero Showcase */}
                <div className={`${styles.showcase} ${isExiting ? styles.fadeOut : styles.fadeIn}`}>
                    <div className={styles.showcaseContent}>
                        <div className={styles.tagBadge} style={{ '--accent': hero.accent } as React.CSSProperties}>
                            {hero.tag}
                        </div>
                        <h3 className={styles.heroQuote}>{hero.quote}</h3>

                        <div className={styles.heroFooter}>
                            <div className={styles.authorInfo}>
                                <strong className={styles.authorName}>{hero.name}</strong>
                                <span className={styles.authorRole}>{hero.role}</span>
                                <p className={styles.authorDetail}>{hero.location} • Faturamento: {hero.result}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.showcaseImage}>
                        <Image
                            src={hero.image}
                            alt={hero.name}
                            fill
                            className={styles.pfp}
                            priority
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </div>

                {/* Thumbnails Grid */}
                <div className={styles.thumbsGrid}>
                    {testimonials.map((t, i) => (
                        <button
                            key={t.id}
                            className={`${styles.thumbCard} ${i === active ? styles.thumbActive : ''}`}
                            onClick={() => handleSwitch(i)}
                        >
                            <div className={styles.thumbImageWrapper}>
                                <Image src={t.image} alt={t.name} fill className={styles.thumbPfp} />
                                <div className={styles.thumbOverlay} />
                            </div>
                            <div className={styles.thumbInfo}>
                                <strong className={styles.thumbName}>{t.name}</strong>
                                <span className={styles.thumbRole}>{t.category}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Dots indicator for mobile */}
                <div className={styles.dots}>
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                            onClick={() => handleSwitch(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className={styles.ambientGlow} style={{ '--accent': hero.accent } as React.CSSProperties} />
        </section>
    );
}

