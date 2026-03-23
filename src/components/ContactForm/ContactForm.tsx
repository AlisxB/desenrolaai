'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

const interests = [
    'Agentes de IA',
    'Automação de Processos',
    'Sistemas Sob Medida',
    'Consultoria em IA',
    'Outro',
];

interface FormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    interest: string;
    message: string;
}

export default function ContactForm() {
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.success}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Mensagem enviada!</h3>
                <p className={styles.successDesc}>
                    Recebemos seu contato e retornaremos em até 24h úteis.
                    Obrigado pelo interesse na DesenrolaAI!
                </p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Nome completo *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={styles.input}
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>E-mail *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.input}
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="company" className={styles.label}>Empresa</label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        className={styles.input}
                        placeholder="Nome da sua empresa"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Telefone / WhatsApp</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={styles.input}
                        placeholder="(00) 99999-9999"
                        value={form.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className={styles.field}>
                <label htmlFor="interest" className={styles.label}>Área de interesse</label>
                <select
                    id="interest"
                    name="interest"
                    className={styles.select}
                    value={form.interest}
                    onChange={handleChange}
                >
                    <option value="">Selecione um serviço</option>
                    {interests.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            </div>
            <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Mensagem *</label>
                <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Conte-nos sobre o seu projeto ou desafio..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={loading}>
                {loading ? (
                    <span className={styles.loading} />
                ) : (
                    <>
                        Enviar mensagem
                        <Send size={16} />
                    </>
                )}
            </button>
        </form>
    );
}
