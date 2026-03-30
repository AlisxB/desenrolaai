'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';
import styles from './AboutStats.module.css';

const stats = [
    { icon: TrendingUp, value: 50, suffix: '+', label: 'Projetos Entregues' },
    { icon: Users, value: 67, suffix: '+', label: 'Clientes Atendidos' },
    { icon: Clock, value: 14000, suffix: 'h', label: 'Horas Economizadas' },
    { icon: Star, value: 98, suffix: '%', label: 'NPS dos Clientes' },
];

function useCountUp(target: number, duration = 2000, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(interval);
    }, [target, duration, start]);

    return count;
}

function StatCard({ icon: Icon, value, suffix, label, index }: typeof stats[0] & { index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);
    const count = useCountUp(value, 2000, started);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={ref}
            className={styles.card}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
                delay: index * 0.15, 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1] 
            }}
        >
            <motion.div
                className={styles.iconWrapper}
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    delay: index * 0.15 + 0.2, 
                    type: 'spring', 
                    stiffness: 260, 
                    damping: 20 
                }}
            >
                <Icon size={22} />
            </motion.div>
            <div className={styles.value}>
                {count.toLocaleString('pt-BR')}{suffix}
            </div>
            <div className={styles.label}>{label}</div>
        </motion.div>
    );
}

export default function AboutStats() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} {...stat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
