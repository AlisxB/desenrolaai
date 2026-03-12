import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import IntegrationsBar from '@/components/IntegrationsBar/IntegrationsBar';
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase';
import BannerSection from '@/components/BannerSection/BannerSection';
import CasesCarousel from '@/components/CasesCarousel/CasesCarousel';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import FAQSection from '@/components/FAQSection/FAQSection';
import Features from '@/components/Features/Features';
import Pricing from '@/components/Pricing/Pricing';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntegrationsBar />
      <main>
        {/* Intro */}
        <section className="section">
          <div className="container">
            <div className="glass" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
              <span className="tag">O Desafio</span>
              <h2 className="section-title">Tecnologia não precisa ser um bicho de sete cabeças.</h2>
              <p className="section-desc">
                A DesenrolaAI nasceu pra traduzir código em resultado. Não vendemos robôs complicados,
                vendemos soluções que resolvem problemas reais: mais vendas, menos retrabalho,
                equipe focada no que importa.
              </p>
            </div>
          </div>
        </section>

        <ProductShowcase />
        <ProcessSection />
        <CasesCarousel />
        <Testimonials />
        <FAQSection />
        <BannerSection />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
