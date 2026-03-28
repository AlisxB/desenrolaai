'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Shield, Code2, Database, Cloud } from 'lucide-react';
import styles from './Features.module.css';

const features = [
    {
        icon: Code2,
        title: 'Arquitetura de Sistemas',
        description: 'Desenvolvemos estruturas robustaspensadas para escala. Microsserviços, APIs RESTful eGraphQL, caches distributed, e desacoplamento real.',
        details: [
            'Clean Architecture (DDD)',
            'Rate Limiting & Throttling',
            'Circuit Breaker Patterns',
            'Versionamento de API',
        ],
        image: '/assets/systems.png',
        imageAlt: 'Arquitetura de microsserviços escalável',
    },
    {
        icon: Database,
        title: 'Dados & Infraestrutura',
        description: 'Bancos de dados otimizados, pipelines de dados robustos, e infraestrutura que suporta milhões de requisições sem gargalo.',
        details: [
            'PostgreSQL & Redis',
            'Data Warehousing',
            'Replication & Failover',
            'Backup Automatizado',
        ],
        image: '/assets/automation.png',
        imageAlt: 'Infraestrutura de dados',
    },
    {
        icon: Shield,
        title: 'Segurança Enterprise',
        description: 'Protocolos de segurança bancária, criptografia end-to-end, e compliance com LGPD/GDPR. Seus dados protegidos em todas as camadas.',
        details: [
            'OAuth 2.0 / JWT',
            'Criptografia AES-256',
            'Audit Logs Completos',
            '2FA / MFA',
        ],
        image: '/assets/systems.png',
        imageAlt: 'Segurança de dados',
    },
    {
        icon: Cloud,
        title: 'Integrações & APIs',
        description: 'Conectamos seu sistema a qualquer serviço externo. ERPs, CRMs, gateways de pagamento, e webhooks em tempo real.',
        details: [
            'ERP (Totvs, Sankhya, Senior)',
            'CRM (Salesforce, HubSpot)',
            'Pagamentos (Stripe, Mercado Pago)',
            'Webhooks & Event-Driven',
        ],
        image: '/assets/automation.png',
        imageAlt: 'Integrações de sistemas',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const Icon = feature.icon;
    
    return (
        <motion.div
            className={styles.featureCard}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
        >
            <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                    <Icon size={24} />
                </div>
                <span className={styles.cardIndex}>0{index + 1}</span>
            </div>
            
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDescription}>{feature.description}</p>
            
            <ul className={styles.detailsList}>
                {feature.details.map((detail) => (
                    <li key={detail} className={styles.detailItem}>
                        <span className={styles.detailDot} />
                        {detail}
                    </li>
                ))}
            </ul>
            
            <div className={styles.cardVisual}>
                <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.cardImage}
                />
                <div className={styles.imageOverlay} />
            </div>
        </motion.div>
    );
}

export default function Features() {
    return (
        <section className="section" id="diferenciais">
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionLabel}> Diferenciais Técnicos</span>
                    <h2 className="section-title">
                        Engenharia que <span className={styles.highlight}>funciona</span>
                    </h2>
                    <p className="section-desc">
                        Não prometemos números vazios. Entregamos sistemas que rodam em produção,escalam quando necessário, e mantêm seus dados seguros.
                    </p>
                </motion.div>
                
                <motion.div
                    className={styles.featuresGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
