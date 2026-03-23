import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Konoba Portun" className="h-8 w-auto brightness-0 invert" />
          <span className="font-heading text-lg text-gradient-gold">Konoba Portun</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/KonobaPortun1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/konobaportun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:konobaportun@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+38268086101"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Konoba Portun. {t(translations.footer.rights)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
