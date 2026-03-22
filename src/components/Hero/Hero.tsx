'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Zap } from 'lucide-react';
import styles from './Hero.module.css';
import NeuralPulse from './NeuralPulse';
import HolographicScanner from './HoloScanner';
import { onLenisScroll } from '@/components/SmoothScroll/SmoothScroll';

export default function Hero() {
    const dashboardRef = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLDivElement>(null);
    const profileRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = (scrollPos: number) => {
            const scrolled = scrollPos;

            if (dashboardRef.current && scrolled < 1200) {
                const tiltFactor = Math.max(0, 25 - scrolled * 0.05);
                const riseFactor = Math.max(0, 50 - scrolled * 0.35);
                dashboardRef.current.style.transform =
                    `rotateX(${tiltFactor}deg) translateY(${riseFactor}px)`;
                dashboardRef.current.style.filter =
                    `brightness(${1 + scrolled * 0.0003})`;
            }

            const totalBlur = Math.min(20, scrolled * 0.04);
            const fadeOut = Math.max(0, 1 - scrolled / 800);

            if (heroTextRef.current) {
                heroTextRef.current.style.filter = `blur(${totalBlur}px)`;
                heroTextRef.current.style.opacity = String(fadeOut);
                heroTextRef.current.style.transform = `translateY(${-scrolled * 0.2}px)`;
            }

            const rotateYs = [-25, 25, 35, -35];
            const rotateXs = [15, 15, -15, -15];
            const rotateZs = [-8, 10, -12, 14];
            const baseZ = [50, 40, 80, 70];

            profileRefs.current.forEach((profile, index) => {
                if (!profile) return;
                const sideFactor = index % 2 === 0 ? 1 : -1;
                const translateX = scrolled * 0.6 * sideFactor;
                const translateY = scrolled * 0.45;
                const translateZ = baseZ[index] - scrolled * 2;
                const scale = Math.max(0.3, 1 - scrolled * 0.002);

                profile.style.transform = `
                    translateX(${translateX}px)
                    translateY(${translateY}px)
                    translateZ(${translateZ}px)
                    rotateY(${rotateYs[index]}deg)
                    rotateX(${rotateXs[index]}deg)
                    rotateZ(${rotateZs[index]}deg)
                    scale(${scale})
                `;
                profile.style.filter = `blur(${totalBlur * 1.5}px)`;
                profile.style.opacity = String(Math.max(0, 1 - scrolled / 600));
                profile.style.visibility = scrolled > 650 ? 'hidden' : 'visible';
            });
        };

        const unsubscribe = onLenisScroll(handleScroll);
        return unsubscribe;
    }, []);

    const profiles = [
        { src: '/assets/profile_2.png', alt: 'Perfil de Yan Pedro - Especialista DesenrolaAI', name: 'Yan Pedro', className: styles.p1 },
        { src: '/assets/profile_3.png', alt: 'Perfil de Maya - Consultora de IA', name: 'Maya', className: styles.p2 },
        { src: '/assets/profile_1.png', alt: 'Perfil de Bruna Ferrari - Desenvolvedora Senior', name: 'Bruna Ferrari', className: styles.p3 },
        { src: '/assets/profile_4.png', alt: 'Perfil de Igor - Arquiteto de Software', name: 'Igor', className: styles.p4 },
    ];

    return (
        <header className={styles.hero}>
            {/* Neural Pulse */}
            <NeuralPulse />

            {/* Holographic Scanner */}
            <HolographicScanner />

            {/* Ambient Floating Elements */}
            <div className={styles.ambientContainer} aria-hidden="true">
                <div className={`${styles.floatElement} ${styles.floatCircle1}`} />
                <div className={`${styles.floatElement} ${styles.floatCircle2}`} />
                <div className={`${styles.floatElement} ${styles.floatHexagon}`} />
                <div className={`${styles.floatElement} ${styles.floatCircle3}`} />
                <div className={`${styles.floatElement} ${styles.floatCircle4}`} />
            </div>

            {/* Floating Profile Cards */}
            <div className={styles.floatingProfiles}>
                {profiles.map((profile, i) => (
                    <div
                        key={i}
                        className={`${styles.profileCard} ${profile.className}`}
                        ref={(el) => { profileRefs.current[i] = el; }}
                    >
                        <Image src={profile.src} alt={profile.alt} fill sizes="(max-width: 768px) 0px, 240px" style={{ objectFit: 'cover' }} priority={i < 2} />
                        <span>{profile.name}</span>
                    </div>
                ))}
            </div>

            {/* Hero Content */}
            <div className={`container ${styles.heroContent} animate-entrance`}>
                <div className={styles.heroHeaderContent} ref={heroTextRef} id="hero-text">
                    <div className="hero-badge">
                        <Zap size={12} />
                        Tecnologia de Ponta
                    </div>
                    <h1 className={styles.heroTitle}>
                        Tecnologia que descomplica. <br /> Resultados que aceleram.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Chega de sistemas que não conversam e processos travados. Criamos soluções sob
                        medida com automação e IA para o seu negócio deslanchar.
                    </p>
                    <div className={styles.heroButtons}>
                        <a href="#contato" className="btn btn-primary">Quero desenrolar meu negócio</a>
                        <a href="#solucoes" className="btn btn-outline">Ver soluções</a>
                    </div>
                </div>

                {/* Dashboard */}
                <div className={styles.heroVisual}>
                    <div className={styles.dashboardPerspective} ref={dashboardRef} id="dashboard">
                        <Image
                            src="/assets/hero-v2.png"
                            alt="Interface do Dashboard DesenrolaAI mostrando métricas de conversão e receita"
                            width={1100}
                            height={620}
                            priority
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
