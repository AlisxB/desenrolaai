import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
            <WhatsAppButton />
        </>
    );
}
