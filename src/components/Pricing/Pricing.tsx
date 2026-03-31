'use client';

import { useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';
import { CTAS } from '@/lib/ctas';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/links';

const plans = [
    {
        level: 'Nível 1',
        name: 'Começando com IA',
        description: 'Para empresas que querem explorar o potencial da automação.',
        features: [
            'Diagnóstico de processos',
            'Identificação de oportunidades',
            'Primeira automação ou agente de IA',
            'Integração inicial com ferramentas',
            'Roadmap de automação',
        ],
        outcome: 'Clareza sobre onde a IA pode gerar impacto.',
        cta: 'Agendar diagnóstico',
        whatsappMsg: WHATSAPP_MESSAGES.contact,
        highlighted: false,
    },
    {
        level: 'Nível 2',
        name: 'Estruturando IA',
        description: 'Para empresas que querem integrar IA nos processos da operação.',
        features: [
            'Diagnóstico profundo',
            '3 automações ou agentes',
            'Integração com ERP/CRM',
            'Dashboard de resultados',
            'Treinamento de equipe',
        ],
        outcome: 'Operação mais eficiente e team productivity.',
        cta: 'Quero implementar IA',
        whatsappMsg: WHATSAPP_MESSAGES.budget,
        highlighted: true,
    },
    {
        level: 'Nível 3',
        name: 'Escalando com IA',
        description: 'Para empresas que querem transformar a operação com IA.',
        features: [
            'Arquitetura dedicada',
            'Novas automações contínuas',
            'Otimização de processos',
            'Roadmap estratégico',
            'Suporte prioritário',
        ],
        outcome: 'IA integrada à operação e crescimento escalável.',
        cta: 'Falar com especialista',
        whatsappMsg: WHATSAPP_MESSAGES.contact,
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
            {plan.highlighted && <div className={styles.popularBadge}>Recomendado</div>}

            <div className={styles.cardHeader}>
                <span className={styles.levelTag}>{plan.level}</span>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.description}>{plan.description}</p>
            </div>

            <ul className={styles.featureList}>
                {plan.features.map((feat, i) => (
                    <li key={i} className={styles.featureItem}>
                        <span className={styles.checkIcon}>
                            <Check size={14} strokeWidth={3} />
                        </span>
                        {feat}
                    </li>
                ))}
            </ul>

            <div className={styles.outcomeBlock}>
                <span className={styles.outcomeLabel}>Resultado</span>
                <p className={styles.outcomeText}>{plan.outcome}</p>
            </div>

            <a
                href={plan.whatsappMsg ? getWhatsAppUrl(plan.whatsappMsg) : CTAS.pricing.whatsapp}
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
                    <span className="tag">Modelos de parceria</span>
                    <h2 className="section-title">Qual formato faz mais sentido para sua empresa</h2>
                    <p className="section-desc">
                        Cada empresa está em um estágio diferente de adoção de IA. Estes são os formatos mais comuns de colaboração com nossos clientes.
                    </p>
                </div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12 } },
                    }}
                >
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
                            }}
                        >
                            <PricingCard plan={plan} index={i} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className={styles.bottomCta}>
                    <p className={styles.microcopy}>Todos os projetos são adaptados à realidade de cada empresa.</p>
                </div>

                <p className={styles.footnote}>
                    Não encontrou o que precisa? <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.budget)}>Fale com a gente</a> — cada projeto começa com uma conversa.
                </p>
            </div>
        </section>
    );
}
