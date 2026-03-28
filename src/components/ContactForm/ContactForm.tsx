'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactForm } from '@/lib/contact-api';
import styles from './ContactForm.module.css';

const interests = [
    'Agentes de IA',
    'Automação de Processos',
    'Sistemas Sob Medida',
    'Consultoria em IA',
    'Outro',
];

function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '');
    
    if (digits.length <= 2) {
        return `(${digits}`;
    }
    if (digits.length <= 3) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length <= 7) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3)}`;
    }
    if (digits.length <= 11) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

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
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        
        let formattedValue = value;
        if (name === 'phone') {
            formattedValue = formatPhone(value);
        }
        
        setForm((prev) => ({ ...prev, [name]: formattedValue }));
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const errors: string[] = [];
        
        if (!form.name.trim()) {
            errors.push('Nome é obrigatório');
        }
        if (!form.email.trim()) {
            errors.push('E-mail é obrigatório');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errors.push('E-mail inválido');
        }
        if (!form.phone.trim()) {
            errors.push('Telefone é obrigatório');
        }
        if (!form.interest) {
            errors.push('Selecione uma área de interesse');
        }
        if (!form.message.trim()) {
            errors.push('Mensagem é obrigatória');
        }
        
        if (errors.length > 0) {
            setError(errors[0]);
            return;
        }
        
        setLoading(true);
        setError(null);

        try {
            await sendContactForm({
                name: form.name,
                email: form.email,
                company: form.company || undefined,
                phone: form.phone || undefined,
                interest: form.interest || undefined,
                message: form.message,
            });
            setSubmitted(true);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Erro ao enviar formulário';
            setError(message);
        } finally {
            setLoading(false);
        }
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
            {error && (
                <div className={styles.error}>
                    <AlertCircle size={18} />
                    <span>{error}</span>
                </div>
            )}
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Nome completo<span className={styles.labelRequired}>*</span></label>
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
                    <label htmlFor="email" className={styles.label}>E-mail<span className={styles.labelRequired}>*</span></label>
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
                    <label htmlFor="phone" className={styles.label}>Telefone / WhatsApp<span className={styles.labelRequired}>*</span></label>
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
                <label htmlFor="interest" className={styles.label}>Área de interesse<span className={styles.labelRequired}>*</span></label>
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
                <label htmlFor="message" className={styles.label}>Mensagem<span className={styles.labelRequired}>*</span></label>
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
