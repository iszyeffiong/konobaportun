import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { translations } from '@/data/translations';
import { foodMenu, wineMenu, drinksMenu, type MenuCategory, type MenuItem } from '@/data/menu';

type Tab = 'food' | 'wine' | 'drinks';

const tabData: Record<Tab, MenuCategory[]> = {
  food: foodMenu,
  wine: wineMenu,
  drinks: drinksMenu,
};

const AddButton = ({ item }: { item: MenuItem }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={handleAdd}
      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
        added
          ? 'bg-green-500/20 text-green-400'
          : 'bg-primary/10 text-primary hover:bg-primary/20'
      }`}
    >
      {added ? <Check size={16} /> : <Plus size={16} />}
    </button>
  );
};

const CategoryNav = ({ categories, activeCategory, onSelect }: {
  categories: MenuCategory[];
  activeCategory: number | null;
  onSelect: (index: number) => void;
}) => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide"
    >
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`px-3 py-1.5 rounded-full text-xs font-body whitespace-nowrap transition-all border ${
            activeCategory === i
              ? 'bg-primary/20 text-primary border-primary/40'
              : 'border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
          }`}
        >
          {t(cat.category)}
        </button>
      ))}
    </div>
  );
};

const MenuSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('food');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const tabs: Tab[] = ['food', 'wine', 'drinks'];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setActiveCategory(null);
  };

  const handleCategorySelect = (index: number) => {
    setActiveCategory(index);
    const key = `${activeTab}-${index}`;
    const el = categoryRefs.current[key];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl text-gradient-gold text-center mb-12"
        >
          {t(translations.menu.heading)}
        </motion.h2>

        <div className="sticky top-16 md:top-20 z-30 -mx-4 px-4 bg-background/95 backdrop-blur-md pt-4 pb-2">
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-2 rounded-full font-body text-sm uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground'
                    : 'glass text-foreground/60 hover:text-foreground'
                }`}
              >
                {t(translations.menu.tabs[tab])}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CategoryNav
                categories={tabData[activeTab]}
                activeCategory={activeCategory}
                onSelect={handleCategorySelect}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Menu items list */}
        <div className="mt-8">
          {tabData[activeTab].map((category, ci) => (
            <div
              key={ci}
              ref={(el) => { categoryRefs.current[`${activeTab}-${ci}`] = el; }}
              className="mb-10 scroll-mt-48 md:scroll-mt-56"
            >
                <h3 className="font-heading text-xl text-primary mb-6 border-b border-border pb-2">
                  {t(category.category)}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.id} className="glass rounded-lg p-4 flex items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <h4 className="font-body font-medium text-foreground">{t(item.name)}</h4>
                          {item.weight && (
                            <span className="text-xs text-muted-foreground shrink-0">({item.weight})</span>
                          )}
                        </div>
                        <p className="font-body text-sm text-muted-foreground mt-0.5">{t(item.description)}</p>
                      </div>
                      <span className="font-heading text-primary text-lg whitespace-nowrap">{item.priceLabel}</span>
                      <AddButton item={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
