import type { Metadata } from 'next';
import ContactHero from './ContatoHero';
import ContactInfo from '@/components/ContactInfo/ContactInfo';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Contato | DesenrolaAI — Fale com nossa equipe',
    description:
        'Entre em contato com a DesenrolaAI. Agende uma conversa sem compromisso e descubra como podemos ajudar a automatizar e digitalizar o seu negócio.',
    keywords: ['contato DesenrolaAI', 'falar com equipe', 'orçamento automação', 'consultoria IA'],
    openGraph: {
        title: 'Contato | DesenrolaAI',
        description: 'Fale com a equipe da DesenrolaAI e descubra como podemos ajudar.',
        images: [{ url: '/assets/og-image.png' }],
    },
};

export default function ContatoPage() {
    return (
        <>
            <ContactHero />
            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </>
    );
}
