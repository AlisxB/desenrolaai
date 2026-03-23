'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import styles from './MissionVision.module.css';

const items = [
    {
        icon: Target,
        label: 'Missão',
        text: 'Traduzir tecnologia complexa em soluções que geram resultado real para empresas brasileiras — do pequeno ao médio porte.',
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

export default function MissionVision() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {items.map((item, i) => (
                        <motion.div
                            key={item.label}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div className={styles.iconWrapper}>
                                <item.icon size={24} />
                            </div>
                            <h3 className={styles.label}>{item.label}</h3>
                            <p className={styles.text}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
