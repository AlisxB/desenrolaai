'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import styles from './Features.module.css';

const features = [
    {
        image: '/assets/systems.png',
        video: '/assets/videos/systems.mp4',
        imageAlt: 'Visualização de sistemas sob medida integrados e eficientes',
        tag: 'Exclusivo',
        title: 'Sistemas que falam a língua do seu negócio',
        desc: 'Desenvolvemos arquiteturas robustas que escalam com você. Sem gambiarras, apenas engenharia de alta performance pensada para a experiência do usuário.',
        checks: ['Interfaces Intuitivas', 'Integração Total via API', 'Segurança de Dados Bancária'],
    },
    {
        image: '/assets/automation.png',
        video: '/assets/videos/automation.mp4',
        imageAlt: 'Fluxo de automação inteligente otimizando processos manuais repetitivos',
        tag: 'Eficiência',
        title: 'Liberte seu time do trabalho manual',
        desc: 'A automação não substitui pessoas, ela as potencializa. Reduza erros operacionais em até 99% e foque na estratégia enquanto nós cuidamos dos fluxos repetitivos.',
        checks: null,
    },
];

function FeatureVideo({ src, alt }: { src: string; alt: string }) {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.featureVideo}
            poster={alt}
        >
            <source src={src} type="video/mp4" />
        </video>
    );
}

export default function Features() {
    return (
        <section className="section" id="diferenciais">
            <div className="container">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        className="feature-detail"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <div className="feature-image">
                            {feature.video ? (
                                <FeatureVideo src={feature.video} alt={feature.imageAlt} />
                            ) : (
                                <Image
                                    src={feature.image}
                                    alt={feature.imageAlt}
                                    width={600}
                                    height={338}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            )}
                        </div>
                        <div className="feature-content">
                            <span className="tag">{feature.tag}</span>
                            <h2 className={styles.featureTitle}>{feature.title}</h2>
                            <p className={styles.featureDesc}>{feature.desc}</p>
                            {feature.checks && (
                                <ul className={styles.checkList}>
                                    {feature.checks.map((check) => (
                                        <li key={check} className={styles.checkItem}>
                                            <span className={styles.checkIcon}>
                                                <Check size={12} color="var(--accent-blue)" strokeWidth={3} />
                                            </span>
                                            {check}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {!feature.checks && (
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-value">99%</div>
                                        <div className="stat-label">Menos Erros</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-value">10x</div>
                                        <div className="stat-label">Mais Velocidade</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
