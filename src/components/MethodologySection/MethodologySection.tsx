'use client';

import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, Brain, Link2, TrendingUp } from 'lucide-react';
import styles from './MethodologySection.module.css';

const stepIcons = [Search, Brain, Link2, TrendingUp];

const methodologySteps = [
    {
        id: 'diagnostico',
        title: 'Diagnóstico',
        description: 'Mapeamos cada gargalo da sua operação atual para identificar onde a automação terá o maior impacto imediato.',
        image: '/assets/methodology/diagnostico_methodology.png',
        color: 'rgba(81, 217, 254, 0.15)'
    },
    {
        id: 'arquitetura',
        title: 'Arquitetura',
        description: 'Desenhamos a infraestrutura de inteligência artificial sob medida para o seu modelo de negócio e tom de voz.',
        image: '/assets/methodology/arquitetura_methodology.png',
        color: 'rgba(188, 207, 28, 0.15)'
    },
    {
        id: 'integracao',
        title: 'Integração',
        description: 'Conectamos a IA nativamente ao seu ecossistema: WhatsApp, CRM, Meios de Pagamento e ERPs.',
        image: '/assets/methodology/integracao_methodology.png',
        color: 'rgba(167, 139, 250, 0.15)'
    },
    {
        id: 'escala',
        title: 'Escala & Otimização',
        description: 'Monitoramento em tempo real e evolução contínua dos modelos para garantir que o resultado só cresça.',
        image: '/assets/methodology/escala_methodology.png',
        color: 'rgba(251, 146, 60, 0.15)'
    }
];

export default function MethodologySection() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const activeIndex = useTransform(scrollYProgress, (pos) => {
        if (pos < 0.25) return 0;
        if (pos < 0.5) return 1;
        if (pos < 0.75) return 2;
        return 3;
    });

    const [step, setStep] = useState(0);

    useEffect(() => {
        const unsubscribe = activeIndex.on('change', (latest) => {
            setStep(latest);
        });
        return () => unsubscribe();
    }, [activeIndex]);

    const bgColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 0.9],
        methodologySteps.map(s => s.color)
    );

    return (
        <section ref={containerRef} className={styles.section} id="metodo">
            <div className={styles.stickyContainer}>
                {/* Background Effects */}
                <div className={styles.backgroundEffects}>
                    <div className={styles.grid} />
                    <motion.div
                        className={styles.radialGlow}
                        style={{ backgroundColor: bgColor }}
                    />
                </div>

                <div className={styles.header}>
                    <span className="tag">
                        <Search size={14} />
                        O MÉTODO
                    </span>
                    <h2 className={styles.title}>
                        Do diagnóstico à <br />
                        <span className={styles.titleAccent}>escala máxima</span>
                    </h2>
                </div>

                <div className={`container ${styles.inner}`}>
                    {/* Main Image Card */}
                    <div className={styles.cardContainer}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                className={styles.card}
                                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className={styles.imagePlaceholder}>
                                    <Image
                                        src={methodologySteps[step].image}
                                        alt={`Passo ${step + 1}: ${methodologySteps[step].title}`}
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: 'cover' }}
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Vertical Steps Sidebar */}
                    <div className={styles.sidebar}>
                        <div className={styles.verticalProgress}>
                            <motion.div
                                className={styles.verticalBar}
                                style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
                            />
                            <div className={styles.dotsContainer}>
                                {[3, 2, 1, 0].map((i) => (
                                    <Dot
                                        key={i}
                                        index={i}
                                        activeIndex={step}
                                        step={methodologySteps[i]}
                                        Icon={stepIcons[i]}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Dot({
    index,
    activeIndex,
    step,
    Icon
}: {
    index: number;
    activeIndex: number;
    step: typeof methodologySteps[0];
    Icon: typeof stepIcons[0];
}) {
    const isActive = activeIndex === index;
    const isPast = activeIndex > index;

    return (
        <motion.div
            className={styles.dotWrapper}
            animate={{ opacity: isActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className={`${styles.dot} ${isActive ? styles.dotActive : ''}`}
                animate={{
                    scale: isActive ? 1.5 : 1,
                    backgroundColor: isPast ? 'var(--accent-blue)' : isActive ? 'var(--accent-blue)' : 'rgba(255,255,255,0.2)'
                }}
            />
            <motion.div
                className={styles.stepInfo}
                initial={false}
                animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className={styles.stepIcon}>
                    <Icon size={16} strokeWidth={2} />
                </div>
                <div className={styles.stepText}>
                    <span className={styles.stepTitle}>{step.title}</span>
                    <span className={styles.stepDesc}>{step.description}</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
