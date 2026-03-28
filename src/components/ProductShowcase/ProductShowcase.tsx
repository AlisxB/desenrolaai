'use client';

import { useEffect, useRef, useState } from 'react';
import {
    Bot, Link2, FileText, BarChart3, ShoppingCart, Flame,
    Home, Settings, Mail, Zap
} from 'lucide-react';
import styles from './ProductShowcase.module.css';
import { CTAS } from '@/lib/ctas';

const features = [
    { Icon: Bot, title: 'Agente 24/7 no WhatsApp', text: 'Atende, qualifica e fecha vendas enquanto você dorme.' },
    { Icon: Link2, title: 'Funil 100% conectado', text: 'Do primeiro clique até o pagamento, sem gaps.' },
    { Icon: FileText, title: 'Notas fiscais automáticas', text: 'Emissão e envio automático a cada venda confirmada.' },
    { Icon: BarChart3, title: 'Dashboard de lucro real', text: 'Métricas que importam, em tempo real, sem planilhas.' },
];

const navIcons = [Home, Bot, Link2, BarChart3, FileText, Settings];

function ChatMsg({ text, side, delay }: { text: React.ReactNode; side: 'left' | 'right'; delay: number }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(t);
    }, [delay]);

    return (
        <div
            className={`${styles.chatMsg} ${styles[side]}`}
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)', transition: 'all 400ms ease' }}
        >
            {text}
        </div>
    );
}

function MiniChart() {
    const bars = [40, 68, 55, 82, 73, 95, 88];
    const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];
    return (
        <div className={styles.chart}>
            {bars.map((h, i) => (
                <div key={i} className={styles.barWrap}>
                    <div
                        className={styles.bar}
                        style={{ height: `${h}%`, animationDelay: `${i * 80 + 400}ms` }}
                    />
                    <span className={styles.barLabel}>{days[i]}</span>
                </div>
            ))}
        </div>
    );
}

export default function ProductShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.25 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section ${styles.section}`} id="como-funciona" ref={sectionRef}>
            <div className={styles.bgGlow} />

            <div className={`container ${styles.inner}`}>
                {/* LEFT — Copy */}
                <div className={`${styles.copy} ${inView ? styles.copyVisible : ''}`}>
                    <span className="tag">
                        <Zap size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                        Veja em ação
                    </span>
                    <h2 className={styles.headline}>
                        Todo o seu negócio,<br />
                        <span className={styles.headlineAccent}>automatizado</span> num<br />
                        único fluxo.
                    </h2>
                    <p className={styles.desc}>
                        Chega de sistemas desconectados e retrabalho manual. A DesenrolaAI entrega
                        uma operação que roda sozinha — do atendimento até o financeiro.
                    </p>

                    <ul className={styles.features}>
                        {features.map(({ Icon, title, text }, i) => (
                            <li
                                key={i}
                                className={styles.featureItem}
                                style={{
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? 'translateX(0)' : 'translateX(-16px)',
                                    transition: `all 500ms cubic-bezier(0.4,0,0.2,1) ${200 + i * 100}ms`,
                                }}
                            >
                                <span className={styles.featureIcon}>
                                    <Icon size={18} strokeWidth={2} />
                                </span>
                                <div>
                                    <strong className={styles.featureTitle}>{title}</strong>
                                    <p className={styles.featureText}>{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <a href={CTAS.productShowcase.href} className="btn btn-primary" style={{ marginTop: '8px', width: 'fit-content' }}>
                        Quero ver funcionando
                    </a>
                </div>

                {/* RIGHT — Product mockup */}
                <div className={`${styles.mockupWrap} ${inView ? styles.mockupVisible : ''}`}>
                    {/* Main window frame */}
                    <div className={styles.mockupFrame}>
                        {/* Window chrome */}
                        <div className={styles.windowBar}>
                            <div className={styles.windowDots}>
                                <span /><span /><span />
                            </div>
                            <span className={styles.windowTitle}>DesenrolaAI — Painel de Automações</span>
                        </div>

                        {/* Dashboard content */}
                        <div className={styles.dashboardBody}>
                            {/* Side nav */}
                            <div className={styles.sideNav}>
                                {navIcons.map((Icon, i) => (
                                    <div key={i} className={`${styles.navIcon} ${i === 1 ? styles.navActive : ''}`}>
                                        <Icon size={16} strokeWidth={2} />
                                    </div>
                                ))}
                            </div>

                            {/* Main panel */}
                            <div className={styles.mainPanel}>
                                {/* Top metrics row */}
                                <div className={styles.metricsRow}>
                                    <div className={styles.metricBadge}>
                                        <span className={styles.metricLabel}>Receita Recuperada</span>
                                        <span className={styles.metricValue}>R$ 12.329,97</span>
                                        <span className={styles.metricDelta}>↑ 18% este mês</span>
                                    </div>
                                    <div className={`${styles.metricBadge} ${styles.metricHighlight}`}>
                                        <span className={styles.metricLabel}>Lead para Venda</span>
                                        <span className={styles.metricValue}>34,7%</span>
                                        <span className={styles.metricDelta}>↑ 2,3x da média</span>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div className={styles.chartCard}>
                                    <span className={styles.chartTitle}>Conversões por dia</span>
                                    <MiniChart />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating chat card */}
                    <div className={`${styles.floatingCard} ${styles.chatCard} ${inView ? styles.floatIn : ''}`}>
                        <div className={styles.chatHeader}>
                            <div className={styles.chatAvatar}>
                                <Bot size={18} />
                            </div>
                            <div>
                                <div className={styles.chatName}>Agente DesenrolaAI</div>
                                <div className={styles.chatStatus}><span className={styles.onlineDot} />Online agora</div>
                            </div>
                        </div>
                        <div className={styles.chatMessages}>
                            <ChatMsg text={<><ShoppingCart size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Olá! Vi que você deixou itens no carrinho</>} side="left" delay={inView ? 600 : 99999} />
                            <ChatMsg text="Posso te ajudar a finalizar?" side="left" delay={inView ? 1200 : 99999} />
                            <ChatMsg text={<><Flame size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Sim! Quero o desconto</>} side="right" delay={inView ? 2000 : 99999} />
                            <ChatMsg text="Perfeito! Gerando seu link exclusivo..." side="left" delay={inView ? 2800 : 99999} />
                        </div>
                    </div>

                    {/* Floating automation pill */}
                    <div className={`${styles.floatingCard} ${styles.automationPill} ${inView ? styles.floatIn : ''}`}
                        style={{ animationDelay: '300ms' }}>
                        <div className={styles.pillFlow}>
                            <div className={styles.pillStep}>
                                <FileText size={12} strokeWidth={2.5} />
                                Venda
                            </div>
                            <div className={styles.pillArrow}>→</div>
                            <div className={styles.pillStep}>
                                <FileText size={12} strokeWidth={2.5} />
                                NF-e
                            </div>
                            <div className={styles.pillArrow}>→</div>
                            <div className={styles.pillStep}>
                                <Mail size={12} strokeWidth={2.5} />
                                Email
                            </div>
                        </div>
                        <div className={styles.pillLabel}>Automação ativa • 0s delay</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
