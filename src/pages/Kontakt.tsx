import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { MapPin, Send, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { kontaktTranslations } from '@/i18n/pageTranslations';
import gmailLogo from '@/assets/gmail-logo.png';
import whatsappLogo from '@/assets/whatsapp-logo.png';
import googleMeetLogo from '@/assets/google-meet-logo.png';

const contactMethods = [
  {
    icon: gmailLogo,
    title: 'Napisz do nas',
    subtitle: 'fundacja@fhspolska.com',
    hoverBorder: 'hover:border-red-500',
    hoverText: 'group-hover:text-red-500',
    href: 'mailto:fundacja@fhspolska.com',
  },
  {
    icon: whatsappLogo,
    title: 'Porozmawiaj z nami',
    subtitle: 'WhatsApp',
    hoverBorder: 'hover:border-green-500',
    hoverText: 'group-hover:text-green-500',
    href: 'https://wa.me/48698451498',
  },
  {
    icon: googleMeetLogo,
    title: 'Umów spotkanie',
    subtitle: 'Google Meet',
    hoverBorder: 'hover:border-blue-500',
    hoverText: 'group-hover:text-blue-500',
    href: 'https://calendar.google.com',
  },
];

const Kontakt = () => {
  const { language } = useLanguage();
  const pt = kontaktTranslations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  const locations = [
    {
      id: 'warszawa',
      name: 'Warszawa',
      address: 'ul. Nowogrodzka 31\n00-511 Warszawa\nPolska',
      mapUrl: "https://maps.google.com/maps?q=Nowogrodzka%2031,%20Warszawa&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: 'gambia',
      name: 'Gambia',
      address: 'Bandżul\nGambia',
      mapUrl: "https://maps.google.com/maps?q=Banjul,%20Gambia&t=&z=13&ie=UTF8&iwloc=&output=embed"
    }
  ];

  const [activeLocation, setActiveLocation] = useState(locations[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Main Content */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[#94c43d]" />
                  <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">{pt.badge}</span>
                  <div className="w-8 h-0.5 bg-[#94c43d]" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {pt.title || 'Masz pytania?'} <br />
                  <span className="text-[#94c43d]">{pt.titleHighlight || 'Napisz do nas!'}</span>
                </h1>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a key={method.title} href={method.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + index * 0.1 }} className={`group flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200/50 ${method.hoverBorder} transition-all duration-300`}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden p-2" style={{ backgroundColor: '#e8e5e0' }}>
                      <img src={method.icon} alt={method.title} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-grow">
                      <p className={`text-gray-900 font-semibold ${method.hoverText} transition-colors duration-300`}>{method.title}</p>
                      <p className="text-gray-500 text-sm">{method.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="rounded-3xl p-8 border border-gray-200/50">
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">{pt.formTitle}</h3>
                <p className="text-gray-500 text-sm mb-6">{pt.formSubtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">{pt.nameLabel}</label>
                      <input type="text" placeholder={pt.namePlaceholder} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#94c43d] focus:border-transparent transition-all duration-300" style={{ backgroundColor: '#e8e5e0' }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">{pt.emailLabel}</label>
                      <input type="email" placeholder={pt.emailPlaceholder} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#94c43d] focus:border-transparent transition-all duration-300" style={{ backgroundColor: '#e8e5e0' }} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">{pt.topicLabel}</label>
                    <input type="text" placeholder={pt.topicPlaceholder} value={formData.topic} onChange={(e) => setFormData({ ...formData, topic: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#94c43d] focus:border-transparent transition-all duration-300" style={{ backgroundColor: '#e8e5e0' }} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">{pt.messageLabel}</label>
                    <textarea placeholder={pt.messagePlaceholder} rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#94c43d] focus:border-transparent transition-all duration-300 resize-none" style={{ backgroundColor: '#e8e5e0' }} />
                  </div>

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#94c43d] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
                    {pt.submitButton}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#94c43d]" />
              <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">Adresy</span>
              <div className="w-8 h-0.5 bg-[#94c43d]" />
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {pt.locationsTitle} <span className="text-[#94c43d]">{pt.locationsTitleHighlight}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocation(loc)}
                  className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${activeLocation.id === loc.id
                      ? 'border-[#94c43d] bg-white shadow-lg shadow-[#94c43d]/5'
                      : 'border-gray-200/50 hover:border-[#94c43d]/30 bg-white/50'
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${activeLocation.id === loc.id ? 'bg-[#94c43d]/10' : 'bg-[#e8e5e0]'
                    }`}>
                    <MapPin className={`w-5 h-5 ${activeLocation.id === loc.id ? 'text-[#94c43d]' : 'text-gray-400'}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{loc.name}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {loc.address}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[2.5rem] overflow-hidden border border-white/50 shadow-2xl shadow-gray-400/20 bg-white"
          >
            <div className="relative h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <iframe
                    src={activeLocation.mapUrl}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa lokalizacji ${activeLocation.name}`}
                    className="w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
