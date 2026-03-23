'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './ServiceFAQ.module.css';

const faqs = [
    {
        question: 'Quanto tempo leva para implementar um agente de IA?',
        answer: 'Depende da complexidade, mas agentes de IA funcionais podem estar no ar em 2 a 4 semanas. Projetos mais complexos, com integrações múltiplas, levam de 4 a 8 semanas.',
    },
    {
        question: 'Vocês fazem automação em sistemas que já uso?',
        answer: 'Sim. Trabalhamos com integrações via API, RPA e webhooks. Se o seu sistema tem acesso a dados (mesmo que por planilha), conseguimos automatizar fluxos nele.',
    },
    {
        question: 'Preciso ter equipe de TI para manter as soluções?',
        answer: 'Não. Uma das nossas propostas é justamente entregar soluções que funcionam de forma autônoma. Fornecemos documentação e treinamento para sua equipe operacional.',
    },
    {
        question: 'Como funciona o pagamento?',
        answer: 'Projetos têm pagamento em etapas (início, entrega parcial, entrega final). Para manutenção e suporte, trabalhamos com planos mensais. Tudo é combinado antes do início.',
    },
    {
        question: 'Vocês atendem empresas fora de Fortaleza?',
        answer: 'Sim. Atendemos clientes em todo o Brasil de forma remota. Para projetos que exigem imersão presencial, avaliamos caso a caso.',
    },
];

export default function ServiceFAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className="tag">Dúvidas frequentes</span>
                    <h2 className={styles.title}>Perguntas que nossos clientes mais fazem</h2>
                </div>
                <div className={styles.list}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={styles.item}>
                            <button
                                className={styles.question}
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                            >
                                {faq.question}
                                <motion.span
                                    className={styles.icon}
                                    animate={{ rotate: open === i ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown size={20} />
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        className={styles.answer}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
