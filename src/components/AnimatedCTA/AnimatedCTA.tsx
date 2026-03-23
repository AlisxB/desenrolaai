'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './AnimatedCTA.module.css';

interface AnimatedCTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref?: string;
}

export default function AnimatedCTA({ title, description, buttonText, buttonHref = '/contato' }: AnimatedCTAProps) {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.inner}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.h2
                        className={styles.title}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
                        }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        className={styles.desc}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 } }
                        }}
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 } }
                        }}
                    >
                        <Link href={buttonHref} className={`btn btn-primary ${styles.button}`}>
                            {buttonText}
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <div className={styles.glow} />
        </section>
    );
}