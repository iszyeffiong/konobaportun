import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-gradient-gold mb-8">
            {t(translations.about.heading)}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="font-body text-lg md:text-xl text-foreground/70 leading-relaxed">
            {t(translations.about.text)}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
