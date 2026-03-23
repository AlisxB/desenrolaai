'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, Code2, Lightbulb } from 'lucide-react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    icon: typeof Bot;
    title: string;
    description: string;
    features: string[];
    index: number;
}

const services = [
    {
        icon: Bot,
        title: 'Agentes de IA',
        description:
            'Bots inteligentes que funcionam 24 horas, 7 dias por semana. Respondem clientes, qualification leads, agendam compromissos e integraram com seu CRM — sem precisar de atendimento humano para tarefas repetitivas.',
        features: [
            'Atendimento ao cliente 24/7 com IA conversacional',
            'Qualificação automática de leads',
            'Agendamento e confirmação de consultas',
            'Integração com WhatsApp, Instagram e CRM',
        ],
    },
    {
        icon: Zap,
        title: 'Automação de Processos',
        description:
            'Eliminamos tarefas manuais que consomem horas da sua equipe todos os dias. RPA sob medida para o seu fluxo de trabalho — de preenchimento de formulários a envios de e-mail e atualização de planilhas.',
        features: [
            'Automação de tarefas repetitivas',
            'Integração entre sistemas (ERP, CRM, planilhas)',
            'Envio automático de e-mails e notificações',
            'Geração de relatórios e dashboards',
        ],
    },
    {
        icon: Code2,
        title: 'Sistemas Sob Medida',
        description:
            'Desenvolvemos sistemas web e APIs personalizados para resolver problemas específicos do seu negócio.-stack moderna, código limpo e escalável — desde dashboards de gestão até plataformas completas.',
        features: [
            'Sistemas web personalizados',
            'APIs e microsserviços',
            'Dashboards de gestão e BI',
            'Sistemas ERP e CRM sob medida',
        ],
    },
    {
        icon: Lightbulb,
        title: 'Consultoria em IA',
        description:
            'Antes de implementar, diagnosticamos. Mapeamos seus processos, identificamos oportunidades de automação e criamos um roadmap tecnológico com priorização por impacto e esforço.',
        features: [
            'Diagnóstico tecnológico do seu negócio',
            'Roadmap de implementação priorizado',
            'Seleção de ferramentas e plataformas',
            'Treinamento e suporte na adoção',
        ],
    },
];

function Card({ icon: Icon, title, description, features, index }: ServiceCardProps) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className={styles.iconWrapper}>
                <Icon size={28} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.features}>
                {features.map((f) => (
                    <li key={f} className={styles.feature}>
                        <span className={styles.featureDot} />
                        {f}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default function ServiceCards() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <Card key={s.title} {...s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
