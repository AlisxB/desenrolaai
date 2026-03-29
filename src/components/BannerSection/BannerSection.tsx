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
                    width={1920}
                    height={600}
                    priority={false}
                    className={`${styles.bannerImage} ${styles.bannerDesktop}`}
                    sizes="100vw"
                />
                <Image
                    src="/assets/banner-ia-mobile.webp"
                    alt="A DesenrolaAI conecta inteligência artificial e automação sob medida para o seu negócio deslanchar"
                    width={800}
                    height={400}
                    priority={false}
                    className={`${styles.bannerImage} ${styles.bannerMobile}`}
                    sizes="100vw"
                />
                <div className={styles.bannerOverlay} aria-hidden="true" />
            </div>
        </section>
    );
}
