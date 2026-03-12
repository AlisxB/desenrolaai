'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './CasesCarousel.module.css';

const cases = [
    {
        segment: 'E-commerce',
        emoji: '🛍️',
        accent: '#51D9FE',
        problem: 'Carrinho abandonado em 72% das visitas',
        solution: 'Agente WhatsApp reativando em até 30min',
        result: '+R$18.400',
        resultLabel: 'recuperados/mês',
        tag: 'Automação de Vendas',
        details: [
            { label: 'Taxa de recuperação', value: '34%' },
            { label: 'Tempo de resposta', value: '< 1min' },
            { label: 'ROI no 1º mês', value: '6,2x' },
        ],
    },
    {
        segment: 'Clínicas & Saúde',
        emoji: '🏥',
        accent: '#BCCF1C',
        problem: '40% das consultas sem retorno agendado',
        solution: 'Agente de follow-up + agendamento automático',
        result: '+112',
        resultLabel: 'consultas/mês',
        tag: 'Gestão de Pacientes',
        details: [
            { label: 'Retornos agendados', value: '+112%' },
            { label: 'Faltas reduzidas', value: '-38%' },
            { label: 'Horas economizadas', value: '60h/mês' },
        ],
    },
    {
        segment: 'SaaS & Tech',
        emoji: '💻',
        accent: '#A78BFA',
        problem: 'Onboarding manual consumia 5h por cliente',
        solution: 'Fluxo automatizado e integrado com o CRM',
        result: '5h → 15min',
        resultLabel: 'por onboarding',
        tag: 'Automação de Processos',
        details: [
            { label: 'Churn no 1º mês', value: '-22%' },
            { label: 'NPS médio', value: '+41pts' },
            { label: 'Capacidade', value: '10x mais clientes' },
        ],
    },
    {
        segment: 'Pet Shops & Serviços',
        emoji: '🐾',
        accent: '#FB923C',
        problem: 'Agenda lotada, mas sem controle de retorno',
        solution: 'Bot de reativação + NF-e automática',
        result: '+67%',
        resultLabel: 'em receita mensal',
        tag: 'Fidelização de Clientes',
        details: [
            { label: 'Clientes reativos', value: '+210' },
            { label: 'NF-e emitidas auto', value: '100%' },
            { label: 'Tempo admin', value: '-4h/dia' },
        ],
    },
    {
        segment: 'Imobiliárias',
        emoji: '🏠',
        accent: '#34D399',
        problem: 'Leads perdidos por falta de resposta rápida',
        solution: 'IA qualificando e agendando visitas 24/7',
        result: '3x mais',
        resultLabel: 'visitas por corretor',
        tag: 'Qualificação de Leads',
        details: [
            { label: 'Tempo de resposta', value: '< 2min' },
            { label: 'Leads qualificados', value: '+245%' },
            { label: 'Custo por lead', value: '-58%' },
        ],
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
                    <span className="tag">📂 Cases Reais</span>
                    <h2 className={styles.title}>
                        Resultado de verdade,<br />
                        <span className={styles.titleAccent}>em cada segmento</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Role, arraste ou use as setas para explorar os cases.
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
                                {/* Card header */}
                                <div className={styles.cardHeader}>
                                    <div className={styles.segmentBadge}>
                                        <span className={styles.segmentEmoji}>{c.emoji}</span>
                                        <span>{c.segment}</span>
                                    </div>
                                    <span className={styles.tagBadge}>{c.tag}</span>
                                </div>

                                {/* Problem → Solution */}
                                <div className={styles.flowBlock}>
                                    <div className={styles.flowItem}>
                                        <span className={styles.flowLabel}>❌ Problema</span>
                                        <p className={styles.flowText}>{c.problem}</p>
                                    </div>
                                    <div className={styles.flowArrow}>
                                        <div className={styles.arrowLine} />
                                        <span>↓</span>
                                    </div>
                                    <div className={styles.flowItem}>
                                        <span className={styles.flowLabel}>✅ Solução</span>
                                        <p className={styles.flowText}>{c.solution}</p>
                                    </div>
                                </div>

                                {/* Result */}
                                <div className={styles.resultBlock}>
                                    <span className={styles.resultValue}>{c.result}</span>
                                    <span className={styles.resultLabel}>{c.resultLabel}</span>
                                </div>

                                {/* Detail metrics */}
                                <div className={styles.detailsRow}>
                                    {c.details.map((d, di) => (
                                        <div key={di} className={styles.detailItem}>
                                            <span className={styles.detailValue}>{d.value}</span>
                                            <span className={styles.detailLabel}>{d.label}</span>
                                        </div>
                                    ))}
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
                                background: `linear-gradient(90deg, var(--accent-blue), ${currentCase.accent})`,
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
                                aria-label={`Ir para case ${c.segment}`}
                                style={{ '--dot-accent': c.accent } as React.CSSProperties}
                            >
                                <span className={styles.dotLabel}>{c.segment}</span>
                            </button>
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
