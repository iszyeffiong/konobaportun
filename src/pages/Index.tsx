import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import MenuSection from '@/components/MenuSection';
import Reservation from '@/components/Reservation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <Hero />
          <About />
          <MenuSection />
          <Gallery />
          <Reservation />
          <Contact />
          <Footer />
          <ChatBot />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
