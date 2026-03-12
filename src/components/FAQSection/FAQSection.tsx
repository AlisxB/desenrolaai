'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

const faqs = [
    {
        question: 'Quanto tempo leva para ver os primeiros resultados?',
        answer: 'Dependendo da complexidade dos fluxos, as primeiras automações rodam em 7 dias. O impacto real no faturamento e na economia de tempo costuma ser visível em menos de 14 dias.'
    },
    {
        question: 'A IA vai substituir minha equipe humana?',
        answer: 'De forma alguma. Nosso objetivo é libertar sua equipe das tarefas repetitivas e manuais (como responder "qual o preço?") para que foquem em estratégia, vendas complexas e criatividade.'
    },
    {
        question: 'A solução funciona apenas no WhatsApp?',
        answer: 'O WhatsApp é nossa ferramenta de conversão favorita pela agilidade, mas nossa IA se integra nativamente ao seu CRM, ERP, E-mails e bancos de dados customizados via API.'
    },
    {
        question: 'O sistema é seguro? Meus dados estão protegidos?',
        answer: 'Privacidade é prioridade total. Utilizamos criptografia de ponta a ponta, infraestrutura isolada e seguimos rigorosamente todas as normas da LGPD para garantir que seus dados sejam apenas seus.'
    }
];

function AccordionItem({ item, isOpen, onClick }: { item: typeof faqs[0], isOpen: boolean, onClick: () => void }) {
    return (
        <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`} onClick={onClick}>
            <div className={styles.questionSection}>
                <h3 className={styles.question}>{item.question}</h3>
                <div className={styles.arrowIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
            <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                    <p>{item.answer}</p>
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={styles.section} id="faq">
            <div className={`container ${styles.inner}`}>
                <div className={styles.header}>
                    <span className="tag">❓ PERGUNTAS</span>
                    <h2 className={styles.title}>
                        Dúvidas <br />
                        <span className={styles.titleAccent}>frequentes</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Tudo o que você precisa saber antes de escalar sua operação com a DesenrolaAI.
                    </p>
                </div>

                <div className={styles.accordionGrid}>
                    <div className={styles.accordionContainer}>
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                item={faq}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>

                    <div className={styles.ctaBox}>
                        <div className={styles.ctaCard}>
                            <h4 className={styles.ctaTitle}>Ainda tem dúvidas?</h4>
                            <p className={styles.ctaText}>
                                Fale diretamente com um de nossos estrategistas e descomplique sua empresa hoje.
                            </p>
                            <a href="#contato" className="btn btn-primary">
                                Agendar Conversa
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bgGlow} />
        </section>
    );
}
