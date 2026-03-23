import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, Clock, Users, User, Phone, Send, Check, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format, startOfDay } from 'date-fns';

const txt = {
  heading: { en: 'Make a Reservation', me: 'Rezervišite Sto' },
  name: { en: 'Your Name', me: 'Vaše Ime' },
  phone: { en: 'Phone Number', me: 'Broj Telefona' },
  email: { en: 'Email Address', me: 'Email Adresa' },
  date: { en: 'Date', me: 'Datum' },
  pickDate: { en: 'Pick a date', me: 'Izaberite datum' },
  time: { en: 'Time', me: 'Vrijeme' },
  guests: { en: 'Guests', me: 'Gosti' },
  note: { en: 'Special Requests (optional)', me: 'Posebni Zahtjevi (opciono)' },
  submit: { en: 'Reserve Now', me: 'Rezervišite Sada' },
  success: { en: 'Reservation request sent! We will confirm shortly.', me: 'Zahtjev za rezervaciju poslat! Potvrdićemo uskoro.' },
  person: { en: 'person', me: 'osoba' },
  people: { en: 'people', me: 'osobe' },
};

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
  '21:00', '22:00', '23:00',
];

const Reservation = () => {
  const { lang } = useLanguage();
  const t = (obj: { en: string; me: string }) => obj[lang];

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: undefined as Date | undefined,
    time: '',
    guests: 2,
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.date || !form.time) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', date: undefined, time: '', guests: 2, note: '' });
    }, 4000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl text-gradient-gold text-center mb-12"
        >
          {t(txt.heading)}
        </motion.h2>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-xl p-10 flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Check size={28} className="text-primary" />
            </div>
            <p className="font-body text-foreground text-lg">{t(txt.success)}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 md:p-8 space-y-5"
          >
            {/* Name & Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-2">
                  <User size={14} /> {t(txt.name)}
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-2">
                  <Phone size={14} /> {t(txt.phone)}
                </label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-2">
                  <Mail size={14} /> {t(txt.email)}
                </label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-2">
                  <CalendarIcon size={14} /> {t(txt.date)}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-body font-normal bg-background border-border h-[42px] hover:bg-background hover:border-primary transition-colors",
                        !form.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {form.date ? format(form.date, "PPP") : <span>{t(txt.pickDate)}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50 bg-background border-border glass" align="start">
                    <Calendar
                      mode="single"
                      selected={form.date}
                      onSelect={(date) => setForm(f => ({ ...f, date }))}
                      disabled={(date) => date < startOfDay(new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-2">
                  <Clock size={14} /> {t(txt.time)}
                </label>
                <select
                  required
                  value={form.time}
                  onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors h-[42px]"
                >
                  <option value="" disabled>--:--</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-2">
                <Users size={14} /> {t(txt.guests)}
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, guests: n }))}
                    className={`w-9 h-9 rounded-lg font-body text-sm transition-all ${
                      form.guests === n
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-2">
                {t(txt.note)}
              </label>
              <textarea
                maxLength={500}
                rows={3}
                value={form.note}
                onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {t(txt.submit)}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Reservation;
