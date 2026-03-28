import Link from 'next/link';
import { Linkedin, Instagram } from 'lucide-react';
import styles from './Footer.module.css';
import CookieSettingsButton from '@/components/CookieConsent/CookieSettingsButton';
import { LINKS } from '@/lib/links';

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
                        <div className={styles.social}>
                            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Plataforma</h4>
                        <Link href={LINKS.servicos} className={styles.link}>Serviços</Link>
                        <Link href={LINKS.portfolio} className={styles.link}>Portfólio</Link>
                        <Link href={LINKS.diferenciais} className={styles.link}>Diferenciais</Link>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Empresa</h4>
                        <Link href={LINKS.sobre} className={styles.link}>Sobre Nós</Link>
                        <Link href={LINKS.contato} className={styles.link}>Contato</Link>
                    </div>
                    <div>
                        <h4 className={styles.heading}>Legal</h4>
                        <Link href={LINKS.termosDeUso} className={styles.link}>Termos de Uso</Link>
                        <Link href={LINKS.politicaPrivacidade} className={styles.link}>Política de Privacidade</Link>
                        <Link href={`${LINKS.politicaPrivacidade}#cookies`} className={styles.link}>Cookies</Link>
                        <CookieSettingsButton />
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div>© {year} DesenrolaAI Soluções Inteligentes LTDA. Todos os direitos reservados.</div>
                    <div className={styles.legal}>
                        <Link href={LINKS.termosDeUso} className={styles.legalLink}>Termos de Uso</Link>
                        <Link href={LINKS.politicaPrivacidade} className={styles.legalLink}>Política de Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
