import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { foodMenu, wineMenu, drinksMenu } from '@/data/menu';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState<'idle' | 'name' | 'date' | 'guests' | 'phone'>('idle');
  const [bookingData, setBookingData] = useState({ name: '', date: '', guests: '', phone: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t(translations.chatbot.welcome) }]);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const generateResponse = (userMsg: string): string => {
    const lower = userMsg.toLowerCase();
    const isMe = /[čćžšđ]/.test(lower) || ['želim', 'mogu', 'molim', 'hvala', 'dobar', 'zdravo', 'meni', 'hrana', 'vino', 'rezervacija'].some(w => lower.includes(w));
    const respLang = isMe ? 'me' : lang;

    // Reservation flow
    if (step === 'name') {
      setBookingData(prev => ({ ...prev, name: userMsg }));
      setStep('date');
      return respLang === 'me' 
        ? `Drago mi je, ${userMsg}! Za koji datum i vrijeme želite rezervaciju? (npr. sutra u 19:00)` 
        : `Nice to meet you, ${userMsg}! For what date and time would you like the reservation? (e.g., tomorrow at 7 PM)`;
    }

    if (step === 'date') {
      // Simulate checking schedule
      const timeMatch = userMsg.match(/(\d{1,2})[:.](\d{2})/);
      const requestedHour = timeMatch ? parseInt(timeMatch[1]) : 19;
      
      // Pseudo-random "busy" check: say it's full if hour is 20:00 (prime time)
      if (requestedHour === 20) {
        return respLang === 'me'
          ? `Nažalost, termin u 20:00 je već popunjen. Mogu vam ponuditi 19:00 ili 21:00?`
          : `Unfortunately, the 8 PM slot is already fully booked. I can offer you 7:00 PM or 9:00 PM instead?`;
      }

      setBookingData(prev => ({ ...prev, date: userMsg }));
      setStep('guests');
      return respLang === 'me' ? 'Odlično, to je dostupno! Koliko osoba će biti?' : 'Great, that slot is available! How many guests will be there?';
    }

    if (step === 'guests') {
      setBookingData(prev => ({ ...prev, guests: userMsg }));
      setStep('phone');
      return respLang === 'me' ? 'Hvala. Još samo vaš broj telefona kako bismo potvrdili rezervaciju?' : 'Thank you. And finally, your phone number so we can confirm the reservation?';
    }

    if (step === 'phone') {
      const finalBooking = { ...bookingData, phone: userMsg };
      setBookingData({ name: '', date: '', guests: '', phone: '' });
      setStep('idle');
      
      return respLang === 'me' 
        ? `Hvala vam, ${finalBooking.name}! Vaša rezervacija je zabilježena:\n📅 ${finalBooking.date}\n👥 ${finalBooking.guests} osoba\n📱 ${userMsg}\n\nUpravo sam poslao rezime vama i našem timu. Takođe, poslaćemo vam podsjetnik 24h prije dolaska. Vidimo se!`
        : `Thank you, ${finalBooking.name}! Your reservation has been noted:\n📅 ${finalBooking.date}\n👥 ${finalBooking.guests} guests\n📱 ${userMsg}\n\nI have sent a summary of this chat to both you and our manager. We will also send you a reminder 24 hours before your reservation. See you soon!`;
    }

    // Keyword detection
    if (['reserv', 'rezerv', 'book', 'table', 'sto'].some(w => lower.includes(w))) {
      setStep('name');
      return respLang === 'me'
        ? 'Naravno! Da bismo započeli, kako se zovete?'
        : 'Of course! To get started, what is your name?';
    }

    if (['wine', 'vino', 'recommend', 'preporuk'].some(w => lower.includes(w))) {
      const wines = wineMenu.flatMap(c => c.items);
      const pick = wines[Math.floor(Math.random() * wines.length)];
      return respLang === 'me'
        ? `Preporučujem ${pick.name.me} — ${pick.description.me}. Cijena: ${pick.priceLabel}. Odlično se slaže sa svježom ribom.`
        : `I recommend the ${pick.name.en} — ${pick.description.en}. Price: ${pick.priceLabel}. It pairs excellently with fresh fish.`;
    }

    if (['fish', 'seafood', 'riba', 'plodovi', 'morsk'].some(w => lower.includes(w))) {
      return respLang === 'me'
        ? 'Specijalizovani smo za svježu ribu i plodove mora koji se svakodnevno nabavljaju od lokalnih ribara. Naša preporuka je riba u soli ili na gradelama.'
        : 'We specialize in fresh fish and seafood sourced daily from local fishermen. Our recommendation is fish in salt or grilled.';
    }

    if (['menu', 'meni', 'food', 'hrana', 'eat', 'jelo', 'dish'].some(w => lower.includes(w))) {
      const highlights = foodMenu[3].items.slice(0, 3).map(i => `• ${i.name[respLang]} (${i.priceLabel})`).join('\n');
      return respLang === 'me'
        ? `Evo nekih od naših specijaliteta:\n${highlights}\n\nNaš meni nudi širok izbor pasti, rižota i svježe ulovljene ribe.`
        : `Here are some of our specialties:\n${highlights}\n\nOur menu offers a wide selection of pasta, risotto, and freshly caught fish.`;
    }

    if (['parking', 'parkira', 'kola', 'auto'].some(w => lower.includes(w))) {
      return respLang === 'me'
        ? 'Imamo obezbijeđen parking za naše goste u neposrednoj blizini restorana.'
        : 'We provide parking for our guests in the immediate vicinity of the restaurant.';
    }

    if (['hour', 'open', 'close', 'radno', 'vrijeme', 'sati'].some(w => lower.includes(w))) {
      return respLang === 'me'
        ? 'Radimo svakog dana od 09:00 do 00:00. Kuhinja prima porudžbine do 23:00.'
        : 'We are open daily from 09:00 to 00:00. The kitchen takes orders until 23:00.';
    }

    if (['location', 'address', 'adresa', 'gdje', 'lokacija', 'map'].some(w => lower.includes(w))) {
      return respLang === 'me'
        ? 'Nalazimo se u Dobroti (Kotor), na samoj obali mora. Možete nas naći na mapi u donjem dijelu sajta.'
        : 'We are located in Dobrota (Kotor), right on the waterfront. You can find us on the map at the bottom of the site.';
    }

    return respLang === 'me'
      ? 'Hvala na poruci! Mogu vam pomoći sa rezervacijama, detaljima o meniju, parkingu ili preporukama. Šta vas zanima?'
      : 'Thank you for your message! I can help with reservations, menu details, parking information, or recommendations. What would you like to know?';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Add a slight delay for the "checking schedule" feel
    const delay = step === 'date' ? 2000 : 800;

    setTimeout(() => {
      const response = generateResponse(userMsg.content);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:brightness-110 transition-all"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] h-[480px] glass rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle size={16} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-foreground">{t(translations.chatbot.title)}</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm font-body whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                        : 'bg-muted text-foreground rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground px-3 py-2 rounded-xl rounded-bl-sm text-sm">
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t(translations.chatbot.placeholder)}
                className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:brightness-110 transition-all shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
