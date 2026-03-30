import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import IntegrationsBar from '@/components/IntegrationsBar/IntegrationsBar';
import Founders from '@/components/Founders/Founders';
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase';
import MethodologySection from '@/components/MethodologySection/MethodologySection';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import styles from './page.module.css';

const BannerSection = dynamic(() => import('@/components/BannerSection/BannerSection'), {
  ssr: true,
});

const CasesCarousel = dynamic(() => import('@/components/CasesCarousel/CasesCarousel'), {
  ssr: true,
});

const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'), {
  ssr: true,
});

const FAQSection = dynamic(() => import('@/components/FAQSection/FAQSection'), {
  ssr: true,
});

const Features = dynamic(() => import('@/components/Features/Features'), {
  ssr: true,
});

const Pricing = dynamic(() => import('@/components/Pricing/Pricing'), {
  ssr: true,
});

const FinalCTA = dynamic(() => import('@/components/FinalCTA/FinalCTA'), {
  ssr: true,
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntegrationsBar />
      <main>
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introCard}>
              <span className="tag">O Desafio</span>
              <h2 className={styles.introTitle}>Tecnologia não precisa ser um bicho de sete cabeças.</h2>
              <p className={styles.introDesc}>
                A DesenrolaAI nasceu pra traduzir código em resultado. Não vendemos robôs complicados,
                vendemos soluções que resolvem problemas reais: mais vendas, menos retrabalho,
                equipe focada no que importa.
              </p>
            </div>
          </div>
        </section>

        <Founders />
        <ProductShowcase />
        <MethodologySection />
        <CasesCarousel />
        <Testimonials />
        <FAQSection />
        <BannerSection />
        <Features />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
