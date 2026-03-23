'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Stethoscope, Code2, Heart, Building2, Briefcase } from 'lucide-react';
import Image from 'next/image';
import styles from './PortfolioGrid.module.css';

interface PortfolioCardProps {
    client: string;
    category: string;
    result: string;
    description: string;
    icon: typeof ShoppingCart;
    accent: string;
    index: number;
}

const cases = [
    {
        client: 'Clínica Odonto Excellence',
        category: 'Clínica & Saúde',
        result: '+R$22k/mês',
        description: 'Automação de follow-up e agendamento via WhatsApp. A clínica recuperou pacientes perdidos e triplicou a taxa de confirmação de consultas.',
        icon: Stethoscope,
        accent: '#51D9FE',
        image: '/testimonials/rafael.png',
    },
    {
        client: 'E-commerce Moda Feminina',
        category: 'E-commerce',
        result: 'ROI de 8x',
        description: 'Robô de recuperação de carrinhos abandonados. Em 2 semanas, mais de R$14 mil recuperados sem intervenção manual.',
        icon: ShoppingCart,
        accent: '#BCCF1C',
        image: '/testimonials/camila.png',
    },
    {
        client: 'Agência de Marketing Digital',
        category: 'Marketing',
        result: '3x mais leads',
        description: 'Agente de IA para pré-atendimento e qualificação de leads 24/7. Equipe focada em fechamento enquanto a IA faz a triagem.',
        icon: Code2,
        accent: '#A78BFA',
        image: '/testimonials/diego.png',
    },
    {
        client: 'Pet Shop Amigo Fiel',
        category: 'Serviços',
        result: '-4h/dia',
        description: 'Automação de notas fiscais, lembretes de banho e confirmação de horários. Dono focado em atender bichos, não em planilha.',
        icon: Heart,
        accent: '#FB923C',
        image: '/testimonials/patricia.png',
    },
    {
        client: 'Startup SaaS B2B',
        category: 'SaaS',
        result: 'Churn -22%',
        description: 'Onboarding automatizado: de 5 horas para 15 minutos. Redução drástica de churn com onboarding guiado por IA.',
        icon: Building2,
        accent: '#34D399',
        image: '/testimonials/lucas.png',
    },
    {
        client: 'Escritório de Advocacia',
        category: 'Serviços',
        result: '+60% produtividade',
        description: 'Automação de triage de clientes e agendamento de reuniões. Advogados focados em casos, não em WhatsApp.',
        icon: Briefcase,
        accent: '#F472B6',
        image: '/testimonials/rafael.png',
    },
];

const categories = ['Todos', 'Clínica & Saúde', 'E-commerce', 'Marketing', 'Serviços', 'SaaS'];

function Card({ client, category, result, description, icon: Icon, accent, index }: PortfolioCardProps) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.08, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={cases[index % cases.length].image}
                    alt={client}
                    fill
                    className={styles.image}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.category} style={{ '--accent': accent } as React.CSSProperties}>
                    <Icon size={14} />
                    {category}
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.result} style={{ color: accent }}>{result}</span>
                </div>
                <h3 className={styles.client}>{client}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </motion.div>
    );
}

export default function PortfolioGrid() {
    const [active, setActive] = useState('Todos');

    const filtered = active === 'Todos' ? cases : cases.filter((c) => c.category === active);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.filters}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className={styles.grid}>
                    {filtered.map((c, i) => (
                        <Card key={`${c.client}-${i}`} {...c} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
