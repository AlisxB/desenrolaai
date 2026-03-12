import Image from 'next/image';
import styles from './BannerSection.module.css';

export default function BannerSection() {
    return (
        <section className={styles.bannerSection} aria-label="DesenrolaAI — Conectando IA e automação ao seu negócio">
            <div className={styles.bannerGlow} aria-hidden="true" />
            <div className={styles.bannerWrapper}>
                <Image
                    src="/assets/banner-ia.webp"
                    alt="A DesenrolaAI conecta inteligência artificial e automação sob medida para o seu negócio deslanchar"
                    width={1440}
                    height={600}
                    priority={false}
                    className={styles.bannerImage}
                    sizes="100vw"
                />
                <div className={styles.bannerOverlay} aria-hidden="true" />
            </div>
        </section>
    );
}
