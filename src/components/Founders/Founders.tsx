'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Founders.module.css';

interface Founder {
    name: string;
    role: string;
    image: string;
}

const founders: Founder[] = [
    {
        name: 'Yan Pedro',
        role: 'CEO & Fundador',
        image: '/assets/profile_2.png',
    },
    {
        name: 'Maya',
        role: 'Diretora de IA',
        image: '/assets/profile_3.png',
    },
    {
        name: 'Bruna Ferrari',
        role: 'CTO & Dev Senior',
        image: '/assets/profile_1.png',
    },
    {
        name: 'Igor',
        role: 'Arquiteto de Software',
        image: '/assets/profile_4.png',
    },
    {
        name: 'Alison Santos',
        role: 'Diretor de Automações',
        image: '/assets/profile_2.png',
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Founders() {
    return (
        <section className={styles.section} id="fundadores" aria-label="Fundadores da DesenrolaAI">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                >
                    <span className="tag">A EQUIPE</span>
                    <h2 className={styles.title}>Pessoas por trás da DesenrolaAI</h2>
                </motion.div>

                <motion.div
                    className={styles.row}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                >
                    {founders.map((founder) => (
                        <motion.div key={founder.name} className={styles.item} variants={itemVariants}>
                            <div className={styles.avatar}>
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    sizes="200px"
                                />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.name}>{founder.name}</span>
                                <span className={styles.role}>{founder.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
