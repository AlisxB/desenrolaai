'use client';

import { motion, type Variants } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import styles from './MissionVision.module.css';

const items = [
    {
        icon: Target,
        label: 'Missão',
        text: 'Traduzir tecnologia complexa em soluções que geram resultado real para empresas brasileiras do pequeno ao médio porte.',
    },
    {
        icon: Eye,
        label: 'Visão',
        text: 'Ser referência nacional em automação inteligente e sistemas sob medida, tornando a transformação digital acessível e descomplicada.',
    },
    {
        icon: Heart,
        label: 'Valores',
        text: 'Transparência, resultado acima de tudo, simplicidade como princípio, e parceria de verdade com cada cliente.',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function MissionVision() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.container}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {items.map((item, i) => (
                        <motion.div
                            key={item.label}
                            className={styles.item}
                            variants={itemVariants}
                        >
                            <motion.div
                                className={styles.iconWrapper}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: i * 0.15 + 0.2,
                                    type: 'spring' as const,
                                    stiffness: 260,
                                    damping: 20,
                                }}
                            >
                                <item.icon size={22} />
                            </motion.div>
                            <h3 className={styles.label}>{item.label}</h3>
                            <p className={styles.text}>{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
