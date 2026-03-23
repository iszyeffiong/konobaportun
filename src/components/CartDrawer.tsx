import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, Truck, Store } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

type OrderType = 'delivery' | 'pickup' | null;

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, totalItems } = useCart();
  const { lang } = useLanguage();
  const [orderType, setOrderType] = useState<OrderType>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const txt = {
    title: { en: 'Your Order', me: 'Vaša narudžba' },
    empty: { en: 'Your cart is empty', me: 'Vaša korpa je prazna' },
    total: { en: 'Total', me: 'Ukupno' },
    chooseType: { en: 'How would you like to receive your order?', me: 'Kako želite da primite narudžbu?' },
    delivery: { en: 'Delivery', me: 'Dostava' },
    pickup: { en: 'Pickup', me: 'Preuzimanje' },
    placeOrder: { en: 'Place Order', me: 'Poruči' },
    orderSuccess: { en: 'Order placed! We will contact you shortly.', me: 'Narudžba je poslata! Kontaktiraćemo vas uskoro.' },
    close: { en: 'Close', me: 'Zatvori' },
    deliveryNote: { en: 'We will call to confirm delivery address.', me: 'Pozvaćemo vas za potvrdu adrese dostave.' },
    pickupNote: { en: 'Your order will be ready for pickup.', me: 'Vaša narudžba će biti spremna za preuzimanje.' },
    items: { en: 'items', me: 'stavki' },
  };

  const t = (obj: { en: string; me: string }) => obj[lang];

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderType(null);
      setOrderPlaced(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-heading text-lg text-foreground">{t(txt.title)}</h2>
                {totalItems > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                    {totalItems} {t(txt.items)}
                  </span>
                )}
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5">
              {orderPlaced ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <ShoppingBag size={28} className="text-primary" />
                  </div>
                  <p className="font-body text-foreground">{t(txt.orderSuccess)}</p>
                </motion.div>
              ) : items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
                  <ShoppingBag size={48} className="opacity-30" />
                  <p className="font-body">{t(txt.empty)}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(({ item, quantity }) => (
                    <div key={item.id} className="glass rounded-lg p-3 flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm text-foreground truncate">{item.name[lang]}</p>
                        <p className="font-body text-xs text-muted-foreground">{item.priceLabel}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-body text-foreground w-6 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-md flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors ml-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && !orderPlaced && (
              <div className="border-t border-border p-5 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="font-body text-muted-foreground">{t(txt.total)}</span>
                  <span className="font-heading text-xl text-primary">€{totalPrice.toFixed(2)}</span>
                </div>

                {/* Order type selection */}
                <div>
                  <p className="font-body text-sm text-muted-foreground mb-3">{t(txt.chooseType)}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setOrderType('delivery')}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                        orderType === 'delivery'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      <Truck size={20} />
                      <span className="font-body text-sm">{t(txt.delivery)}</span>
                    </button>
                    <button
                      onClick={() => setOrderType('pickup')}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                        orderType === 'pickup'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      <Store size={20} />
                      <span className="font-body text-sm">{t(txt.pickup)}</span>
                    </button>
                  </div>
                  {orderType && (
                    <p className="text-xs text-muted-foreground mt-2 font-body">
                      {orderType === 'delivery' ? t(txt.deliveryNote) : t(txt.pickupNote)}
                    </p>
                  )}
                </div>

                {/* Place order button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={!orderType}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {t(txt.placeOrder)}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
