import Link from 'next/link';
import styles from './Footer.module.css';
import CookieSettingsButton from '@/components/CookieConsent/CookieSettingsButton';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerTop}>
                    <div>
                        <div className={styles.logo}>Desenrola<span>AI</span></div>
                        <p className={styles.tagline}>
                            Tecnologia que descomplica.<br />
                            Soluções sob medida para empresas que visam o futuro.
                        </p>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Plataforma</h4>
                        <Link href="#solucoes" className={styles.link}>Soluções</Link>
                        <Link href="#diferenciais" className={styles.link}>Diferenciais</Link>
                        <Link href="#resultados" className={styles.link}>Resultados</Link>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Empresa</h4>
                        <Link href="#" className={styles.link}>Sobre Nós</Link>

                        <Link href="#contato" className={styles.link}>Contato</Link>
                        <Link href="/termos-de-uso" className={styles.link}>Termos de Uso</Link>
                        <Link href="/politica-de-privacidade" className={styles.link}>Política de Privacidade</Link>
                        <Link href="/politica-de-privacidade#cookies" className={styles.link}>Cookies</Link>
                        <CookieSettingsButton />
                    </div>
                    <div>
                        <h4 className={styles.heading}>Social</h4>
                        <a href="#" className={styles.link}>LinkedIn</a>
                        <a href="#" className={styles.link}>Instagram</a>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div>© {year} DesenrolaAI. Todos os direitos reservados.</div>
                    <div className={styles.legal}>
                        <Link href="/termos-de-uso" className={styles.legalLink}>Termos de Uso</Link>
                        <Link href="/politica-de-privacidade" className={styles.legalLink}>Política de Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
