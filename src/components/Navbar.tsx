import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { translations } from '@/data/translations';
import CartDrawer from '@/components/CartDrawer';

const navItems = ['home', 'about', 'menu', 'gallery', 'reservation', 'contact'] as const;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 h-full">
            <img src="/logo.png" alt="Konoba Portun Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm font-body text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {t(translations.nav[item])}
              </button>
            ))}

            {/* Cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-foreground/70 hover:text-primary transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-body font-medium">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-2 glass rounded-full px-1 py-1">
              <button
                onClick={() => setLang('en')}
                className={`text-xs px-3 py-1 rounded-full transition-all ${
                  lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('me')}
                className={`text-xs px-3 py-1 rounded-full transition-all ${
                  lang === 'me' ? 'bg-primary text-primary-foreground' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                ME
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Cart button mobile */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-foreground/70 hover:text-primary transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-body font-medium">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="flex items-center gap-1 glass rounded-full px-1 py-1">
              <button
                onClick={() => setLang('en')}
                className={`text-xs px-2 py-0.5 rounded-full transition-all ${
                  lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground/60'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('me')}
                className={`text-xs px-2 py-0.5 rounded-full transition-all ${
                  lang === 'me' ? 'bg-primary text-primary-foreground' : 'text-foreground/60'
                }`}
              >
                ME
              </button>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm font-body text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {t(translations.nav[item])}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
