'use client';

import { useState, type FormEvent } from 'react';
import { Mail } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        if (!data.name || !data.email) {
            setStatus('error');
            return;
        }

        console.log('Form submitted:', data);
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section className="section" id="contato">
            <div className="container">
                <div className={`glass ${styles.contactWrapper}`}>
                    <div className={styles.contactInfo}>
                        <span className="tag">Crescimento</span>
                        <h2 className={styles.infoTitle}>Bora desenrolar seu negócio?</h2>
                        <p className={styles.infoDesc}>
                            Agende uma conversa estratégica e descubra como a tecnologia pode parar de te
                            dar dor de cabeça e começar a te dar lucro.
                        </p>
                        <div className={styles.contactDetail}>
                            <Mail size={18} />
                            <span>oi@desenrolaai.com.br</span>
                        </div>
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            className={styles.input}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className={styles.input}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Como podemos te ajudar?"
                            rows={4}
                            className={styles.textarea}
                        />
                        {status === 'success' && (
                            <p className={styles.successMsg}>Mensagem enviada com sucesso! Retornaremos em breve.</p>
                        )}
                        {status === 'error' && (
                            <p className={styles.errorMsg}>Preencha todos os campos obrigatórios.</p>
                        )}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
