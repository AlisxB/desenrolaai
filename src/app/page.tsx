import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import IntegrationsBar from '@/components/IntegrationsBar/IntegrationsBar';
import Founders from '@/components/Founders/Founders';
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase';
import BannerSection from '@/components/BannerSection/BannerSection';
import CasesCarousel from '@/components/CasesCarousel/CasesCarousel';
import MethodologySection from '@/components/MethodologySection/MethodologySection';
import FAQSection from '@/components/FAQSection/FAQSection';
import Features from '@/components/Features/Features';
import Pricing from '@/components/Pricing/Pricing';
import Testimonials from '@/components/Testimonials/Testimonials';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import styles from './page.module.css';

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
