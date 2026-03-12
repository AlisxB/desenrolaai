import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className="section" id="contato">
            <div className="container">
                <div className={`glass ${styles.contactWrapper}`}>
                    <div className={styles.contactInfo}>
                        <span className="tag">Crescimento</span>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Bora desenrolar seu negócio?</h2>
                        <p className="section-desc" style={{ textAlign: 'left', margin: '24px 0' }}>
                            Agende uma conversa estratégica e descubra como a tecnologia pode parar de te
                            dar dor de cabeça e começar a te dar lucro.
                        </p>
                        <div className={styles.contactDetail}>
                            <span>📧 oi@desenrolaai.com.br</span>
                        </div>
                    </div>
                    <form className={styles.contactForm}>
                        <input type="text" placeholder="Nome" className={styles.input} required />
                        <input type="email" placeholder="E-mail" className={styles.input} required />
                        <textarea placeholder="Como podemos te ajudar?" rows={4} className={styles.textarea} />
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
