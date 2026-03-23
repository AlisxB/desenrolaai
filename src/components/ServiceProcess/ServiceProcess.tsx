'use client';

import { motion } from 'framer-motion';
import { Search, Map, Code, Rocket, Headphones } from 'lucide-react';
import styles from './ServiceProcess.module.css';

const steps = [
    { icon: Search, title: 'Diagnóstico', desc: 'Mapeamos seus processos e identificamos as maiores oportunidades de automação e IA no seu negócio.' },
    { icon: Map, title: 'Planejamento', desc: 'Montamos um roadmap com escopo, cronograma e priorização por impacto — você sabe exatamente o que vem primeiro e por quê.' },
    { icon: Code, title: 'Desenvolvimento', desc: 'Construímos a solução sob medida para a sua realidade, com acompanhamento constante e entregas parciais para validação.' },
    { icon: Rocket, title: 'Implantação', desc: 'Fazemos o lançamento com treinamento da equipe, ajustes finos e transferência de conhecimento para sua operação.' },
    { icon: Headphones, title: 'Suporte Contínuo', desc: 'Não abandonamos depois do lançamento. Acompanhamos os resultados e fazemos ajustes para garantir que a solução continue gerando valor.' },
];

export default function ServiceProcess() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className="tag">Como trabalhamos</span>
                    <h2 className={styles.title}>Do diagnóstico à entrega —<br /> um processo feito para você</h2>
                </div>
                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            className={styles.step}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div className={styles.stepLeft}>
                                <div className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</div>
                                <div className={styles.stepLine} />
                            </div>
                            <div className={styles.stepContent}>
                                <div className={styles.stepIcon}>
                                    <step.icon size={22} />
                                </div>
                                <div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
