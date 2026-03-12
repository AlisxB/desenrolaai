'use client';

import { useRef, MouseEvent } from 'react';
import styles from './Pricing.module.css';

const plans = [
    {
        name: 'Starter',
        tag: 'Para começar',
        price: 'Sob consulta',
        priceNote: 'projeto único',
        features: [
            'Diagnóstico de processos',
            '1 automação personalizada',
            'Integração com 2 ferramentas',
            'Suporte por 30 dias',
            'Entrega em até 3 semanas',
        ],
        cta: 'Falar com especialista',
        highlighted: false,
    },
    {
        name: 'Pro',
        tag: '✦ Mais popular',
        price: 'Sob consulta',
        priceNote: 'implementação completa',
        features: [
            'Tudo do Starter',
            'Automações ilimitadas',
            'Agente de IA sob medida',
            'Integrações sem limite',
            'Painel de monitoramento',
            'Suporte por 90 dias',
            'Treinamento do time',
        ],
        cta: 'Quero o Pro',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        tag: 'Para escalar',
        price: 'Personalizado',
        priceNote: 'para sua operação',
        features: [
            'Tudo do Pro',
            'Arquitetura dedicada',
            'SLA garantido',
            'Equipe residente',
            'Roadmap estratégico',
            'Suporte 24/7',
        ],
        cta: 'Falar com o time',
        highlighted: false,
    },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    };

    return (
        <div
            ref={cardRef}
            className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ animationDelay: `${index * 120}ms` }}
        >
            {plan.highlighted && <div className={styles.popularBadge}>{plan.tag}</div>}

            <div className={styles.cardHeader}>
                {!plan.highlighted && <span className={styles.planTag}>{plan.tag}</span>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceBlock}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.priceNote}>{plan.priceNote}</span>
                </div>
            </div>

            <ul className={styles.featureList}>
                {plan.features.map((feat, i) => (
                    <li key={i} className={styles.featureItem}>
                        <span className={styles.checkIcon}>✓</span>
                        {feat}
                    </li>
                ))}
            </ul>

            <a
                href="#contato"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'} ${styles.ctaBtn}`}
            >
                {plan.cta}
            </a>

            {plan.highlighted && <div className={styles.glowBorder} />}
        </div>
    );
}

export default function Pricing() {
    return (
        <section className={`section ${styles.section}`} id="planos">
            <div className={styles.bgOrb} />

            <div className="container">
                <div className="section-head">
                    <span className="tag">Planos & Investimento</span>
                    <h2 className="section-title">Escolha como a gente vai<br />desenrolar seu negócio</h2>
                    <p className="section-desc">
                        Cada projeto é único. Mas nossos modelos de engajamento foram feitos para
                        se encaixar na sua realidade e no seu momento.
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <PricingCard key={i} plan={plan} index={i} />
                    ))}
                </div>

                <p className={styles.footnote}>
                    Não encontrou o que precisa? <a href="#contato">Fale com a gente</a> — cada projeto começa com uma conversa.
                </p>
            </div>
        </section>
    );
}
