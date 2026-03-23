import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Contact = () => {
  const { t } = useLanguage();

  const items = [
    { icon: MapPin, label: t(translations.contact.addressLabel), value: t(translations.contact.address) },
    { icon: Clock, label: t(translations.contact.hoursLabel), value: t(translations.contact.hours) },
    { icon: Phone, label: t(translations.contact.phoneLabel), value: '+382 680 861 01' },
    { icon: Mail, label: t(translations.contact.emailLabel), value: 'konobaportun@gmail.com' },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl text-gradient-gold text-center mb-12"
        >
          {t(translations.contact.heading)}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-lg p-6 flex items-start gap-4"
            >
              <item.icon className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <p className="font-body text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.icon === Phone ? (
                  <a href={`tel:${item.value.replace(/\s/g, '')}`} className="font-body text-foreground hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : item.icon === Mail ? (
                  <a href={`mailto:${item.value}`} className="font-body text-foreground hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-body text-foreground">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 rounded-lg overflow-hidden glass"
        >
          <iframe
            title="Konoba Portun Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5!2d18.771!3d42.431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI1JzUyLjAiTiAxOMKwNDYnMTYuMCJF!5e0!3m2!1sen!2s!4v1600000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
