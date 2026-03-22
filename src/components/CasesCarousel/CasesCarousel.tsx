'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Stethoscope, Code2, Heart, Building2, Briefcase } from 'lucide-react';
import styles from './CasesCarousel.module.css';

const cases = [
    {
        segment: 'E-commerce',
        Icon: ShoppingCart,
        accent: '#51D9FE',
        tag: 'Automação de Vendas',
        title: 'Recuperação de Carrinho via WhatsApp',
    },
    {
        segment: 'Clínicas & Saúde',
        Icon: Stethoscope,
        accent: '#51D9FE',
        tag: 'Gestão de Pacientes',
        title: 'Follow-up de Consultas Automatizado',
    },
    {
        segment: 'SaaS & Tech',
        Icon: Code2,
        accent: '#51D9FE',
        tag: 'Automação de Processos',
        title: 'Onboarding de Clientes Escalável',
    },
    {
        segment: 'Pet Shops',
        Icon: Heart,
        accent: '#51D9FE',
        tag: 'Fidelização',
        title: 'Reativação de Clientes Inativos',
    },
    {
        segment: 'Imobiliárias',
        Icon: Building2,
        accent: '#51D9FE',
        tag: 'Qualificação de Leads',
        title: 'Qualificação 24/7 com IA',
    },
];

// Extra scroll height consumed per slide (in vh). Higher = more scroll room = slower feel.
const SCROLL_PER_SLIDE = 100;

// Lerp factor: lower = smoother/lazier, higher = snappier. 0.07 = silky.
const LERP_FACTOR = 0.12;

export default function CasesCarousel() {
    // `active` (rounded) drives UI state (dots, progress bar, accent color, CTA)
    const [active, setActive] = useState(0);
    // `activeFloat` drives card positions for smooth continuous movement
    const [activeFloat, setActiveFloat] = useState(0);

    const wrapperRef = useRef<HTMLDivElement>(null);

    // Refs for the lerp loop — avoids stale closures
    const targetRef = useRef(0);          // raw scroll target (float)
    const currentRef = useRef(0);         // current lerped value
    const rafRef = useRef<number>(0);

    // Drag / swipe
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef<number | null>(null);
    const dragDelta = useRef(0);

    const goTo = useCallback((index: number) => {
        const clamped = Math.max(0, Math.min(cases.length - 1, index));
        targetRef.current = clamped;
        setActive(clamped);
    }, []);

    // ── Lerp animation loop ─────────────────────────────────────────────────
    useEffect(() => {
        const animate = () => {
            const target = targetRef.current;
            const curr = currentRef.current;
            const next = curr + (target - curr) * LERP_FACTOR;

            // Snap when close enough to avoid infinite micro-updates
            const settled = Math.abs(next - target) < 0.0005;
            currentRef.current = settled ? target : next;

            setActiveFloat(currentRef.current);
            setActive(Math.round(currentRef.current));

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    // ── Scroll-driven: update target only, lerp loop does the animation ─────
    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current) return;

            const rect = wrapperRef.current.getBoundingClientRect();
            const totalScrollable = wrapperRef.current.offsetHeight - window.innerHeight;
            if (totalScrollable <= 0) return;

            const scrolled = Math.max(0, Math.min(totalScrollable, -rect.top));
            const progress = scrolled / totalScrollable; // 0..1

            // Map progress to slide index (float)
            targetRef.current = progress * (cases.length - 1);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ── Keyboard navigation ─────────────────────────────────────────────────
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goTo(Math.round(targetRef.current) - 1);
            if (e.key === 'ArrowRight') goTo(Math.round(targetRef.current) + 1);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [goTo]);

    // ── Drag / swipe ────────────────────────────────────────────────────────
    const onPointerDown = (e: React.PointerEvent) => {
        dragStart.current = e.clientX;
        dragDelta.current = 0;
        setIsDragging(true);
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging || dragStart.current === null) return;
        dragDelta.current = e.clientX - dragStart.current;
    };
    const onPointerUp = () => {
        const curr = Math.round(targetRef.current);
        if (dragDelta.current < -60) goTo(curr + 1);
        else if (dragDelta.current > 60) goTo(curr - 1);
        dragStart.current = null;
        dragDelta.current = 0;
        setIsDragging(false);
    };

    const currentCase = cases[active];
    const wrapperHeight = `calc(100vh + ${(cases.length - 1) * SCROLL_PER_SLIDE}vh)`;

    return (
        <div ref={wrapperRef} style={{ height: wrapperHeight }} id="cases">
            <div className={styles.stickyPanel}>
                {/* Ambient glow — colour follows active slide */}
                <div
                    className={styles.bgGlow}
                    style={{ '--glow-color': currentCase.accent } as React.CSSProperties}
                />

                {/* Header */}
                <div className={`container ${styles.header}`}>
                    <span className="tag">
                        <Briefcase size={14} />
                        Cases Reais
                    </span>
                    <h2 className={styles.title}>
                        Resultado de verdade,<br />
                        <span className={styles.titleAccent}>em cada segmento</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Explore como transformamos negócios através da inteligência artificial.
                    </p>
                </div>

                {/* Carousel track */}
                <div
                    className={`${styles.track} ${isDragging ? styles.dragging : ''}`}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                >
                    {cases.map((c, i) => {
                        // Use the float offset for smooth positioning
                        const offset = i - activeFloat;
                        const absOffset = Math.abs(offset);

                        // Hide cards that are too far away
                        if (absOffset > 2.5) return null;

                        // Smooth scale & opacity interpolated from float offset
                        const scale = 1 - Math.min(absOffset, 1) * 0.13;
                        const opacity = absOffset < 0.5
                            ? 1
                            : absOffset < 1.5
                                ? 1 - (absOffset - 0.5) * 0.6
                                : 0.1;

                        const isActive = Math.round(activeFloat) === i;

                        return (
                            <div
                                key={i}
                                className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                                style={{
                                    '--card-accent': c.accent,
                                    // translateX uses the float offset — no discrete jumps
                                    transform: `translateX(calc(${offset} * var(--card-gap))) scale(${scale})`,
                                    opacity,
                                    zIndex: Math.round(10 - absOffset * 3),
                                    pointerEvents: isActive ? 'auto' : 'none',
                                    // No CSS transition on transform — the RAF lerp handles it
                                    transition: 'opacity 300ms ease, box-shadow 400ms ease, border-color 400ms ease',
                                } as React.CSSProperties}
                                onClick={() => !isActive && goTo(i)}
                            >
                                {/* Visual Placeholder / Image Area */}
                                <div className={styles.imageArea}>
                                    <div className={styles.imagePlaceholder}>
                                        <c.Icon size={48} strokeWidth={1.5} className={styles.placeholderIcon} />
                                        <span className={styles.placeholderText}>Espaço para imagem</span>
                                    </div>
                                    <div className={styles.imageOverlay}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.segmentBadge}>
                                                <span>{c.segment}</span>
                                            </div>
                                            <span className={styles.tagBadge}>{c.tag}</span>
                                        </div>
                                        <h3 className={styles.cardTitle}>{c.title}</h3>
                                    </div>
                                </div>

                                <div className={styles.cardGlow} />
                            </div>
                        );
                    })}
                </div>

                {/* Progress + dots + arrows */}
                <div className={`container ${styles.progressWrap}`}>
                    {/* Smooth continuous progress bar using activeFloat */}
                    <div className={styles.progressTrack}>
                        <div
                            className={styles.progressFill}
                            style={{
                                width: `${((activeFloat) / (cases.length - 1)) * 100}%`,
                                background: 'var(--accent-blue)',
                                transition: 'background 600ms ease',
                            }}
                        />
                    </div>

                    <div className={styles.dots}>
                        {cases.map((c, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                                onClick={() => goTo(i)}
                                aria-label={`Ir para case ${i + 1}`}
                                style={{ '--dot-accent': c.accent } as React.CSSProperties}
                            />
                        ))}
                    </div>


                </div>

                {/* Scroll hint — first slide */}
                {active === 0 && (
                    <div className={styles.scrollHint}>
                        <div className={styles.scrollMouse}>
                            <div className={styles.scrollWheel} />
                        </div>
                        <span>Role para explorar</span>
                    </div>
                )}

                {/* CTA — last slide */}
                {active === cases.length - 1 && (
                    <div className={styles.ctaWrap}>
                        <a href="#contato" className="btn btn-primary">
                            Quero um case como esse
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
