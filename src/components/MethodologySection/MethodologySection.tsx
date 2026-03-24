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
    const [isMobile, setIsMobile] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [desktopStep, setDesktopStep] = useState(0);

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

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 769);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const unsubscribe = activeIndex.on('change', (latest) => {
                setDesktopStep(Math.round(latest));
            });
            return () => unsubscribe();
        }
    }, [activeIndex, isMobile]);

    useEffect(() => {
        if (!isMobile || !containerRef.current) return;

        const container = containerRef.current;
        const scrollHandler = () => {
            const rect = container.getBoundingClientRect();
            const scrollableHeight = rect.height - window.innerHeight;
            const scrolled = -rect.top;
            
            if (scrollableHeight <= 0) return;
            
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
            const step = Math.floor(progress * methodologySteps.length);
            const clampedStep = Math.min(step, methodologySteps.length - 1);
            
            setActiveStep(clampedStep);
        };

        window.addEventListener('scroll', scrollHandler, { passive: true });
        scrollHandler();

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [isMobile]);

    const bgColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 0.9],
        methodologySteps.map(s => s.color)
    );

    const barHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className={styles.section} id="metodo">
            <div className={styles.stickyContainer}>
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
                    <div className={styles.cardContainer}>
                        {isMobile ? (
                            <div className={styles.cardsWrapper}>
                                {methodologySteps.map((s, i) => {
                                    const isActive = i === activeStep;
                                    const isPast = i < activeStep;
                                    
                                    return (
                                        <div
                                            key={s.id}
                                            className={`${styles.cardItem} ${isActive ? styles.cardActive : ''} ${isPast ? styles.cardPast : ''}`}
                                            style={{
                                                '--card-index': i,
                                            } as React.CSSProperties}
                                        >
                                            <div className={styles.cardContent}>
                                                <div className={styles.imageWrapper}>
                                                    <Image
                                                        src={s.image}
                                                        alt={`Passo ${i + 1}: ${s.title}`}
                                                        fill
                                                        sizes="100vw"
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={desktopStep}
                                    className={styles.card}
                                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className={styles.imagePlaceholder}>
                                        <Image
                                            src={methodologySteps[desktopStep].image}
                                            alt={`Passo ${desktopStep + 1}: ${methodologySteps[desktopStep].title}`}
                                            fill
                                            sizes="100vw"
                                            style={{ objectFit: 'cover' }}
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>

                    <div className={styles.sidebar}>
                        {isMobile ? (
                            <div className={styles.dotsContainer}>
                                {methodologySteps.map((s, i) => (
                                    <div
                                        key={s.id}
                                        className={`${styles.dot} ${i === activeStep ? styles.dotActive : ''}`}
                                        aria-label={`Passo ${i + 1}: ${s.title}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.verticalProgress}>
                                <motion.div
                                    className={styles.verticalBar}
                                    style={{ height: barHeight }}
                                />
                                <div className={styles.dotsContainer}>
                                    {[3, 2, 1, 0].map((i) => (
                                        <Dot
                                            key={i}
                                            index={i}
                                            activeIndex={desktopStep}
                                        />
                                    ))}
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={desktopStep}
                                        className={styles.stepInfo}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={styles.stepIcon}>
                                            {(() => {
                                                const Icon = stepIcons[desktopStep];
                                                return <Icon size={16} strokeWidth={2} />;
                                            })()}
                                        </div>
                                        <div className={styles.stepText}>
                                            <span className={styles.stepTitle}>{methodologySteps[desktopStep].title}</span>
                                            <span className={styles.stepDesc}>{methodologySteps[desktopStep].description}</span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Dot({
    index,
    activeIndex,
}: {
    index: number;
    activeIndex: number;
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
        </motion.div>
    );
}
