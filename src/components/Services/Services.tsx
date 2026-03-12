'use client';

import { useRef, MouseEvent } from 'react';
import styles from './Services.module.css';

const services = [
    { icon: '💻', title: 'Sistemas Sob Medida', text: 'Softwares que se encaixam no seu jeito de trabalhar. Plataformas web e mobile que integram tudo num só lugar.' },
    { icon: '⚡', title: 'Automação de Processos', text: 'Robôs fazem o trabalho chato. Seu time inova. Automatizamos tarefas repetitivas como lançar notas e relatórios.' },
    { icon: '🧠', title: 'Agentes de IA', text: 'Inteligência Artificial que atende, analisa e vende. Assistentes virtuais 24/7 e consultoria estratégica de IA.' },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)';
    };

    return (
        <div
            ref={ref}
            className={`card glass ${styles.card}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                animationDelay: `${index * 100}ms`,
                transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms ease, border-color 200ms ease',
                transformStyle: 'preserve-3d',
            }}
        >
            <div className={`card-icon ${styles.icon}`}>{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-text">{service.text}</p>
            <div className={styles.cardShine} />
        </div>
    );
}

export default function Services() {
    return (
        <section className="section" id="solucoes">
            <div className="container">
                <div className="section-head">
                    <span className="tag">Nossas Soluções</span>
                    <h2 className="section-title">O que a gente desenrola pra você</h2>
                    <p className="section-desc">Soluções inteligentes pensadas no seu lucro e na sua tranquilidade.</p>
                </div>
                <div className="grid-3">
                    {services.map((service, i) => (
                        <ServiceCard key={i} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
