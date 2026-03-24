import { motion } from 'framer-motion';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />
      
      {/* Main Content */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lime/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-lime/3 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
                  {pt.badge}
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {pt.title}
                  <br />
                  <GradientText>{pt.titleHighlight}</GradientText>
                </h1>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`group flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200/50 ${method.hoverBorder} transition-all duration-300`}
                    style={{ backgroundColor: '#f0ede8' }}
                  >
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-3xl p-8 border border-gray-200/50" style={{ backgroundColor: '#f0ede8' }}>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  {pt.formTitle}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {pt.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">{pt.nameLabel}</label>
                      <input
                        type="text"
                        placeholder={pt.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                        style={{ backgroundColor: '#e8e5e0' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">{pt.emailLabel}</label>
                      <input
                        type="email"
                        placeholder={pt.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                        style={{ backgroundColor: '#e8e5e0' }}
                      />
                    </div>
                  </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">{pt.topicLabel}</label>
                    <input
                      type="text"
                      placeholder={pt.topicPlaceholder}
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                      style={{ backgroundColor: '#e8e5e0' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">{pt.messageLabel}</label>
                    <textarea
                      placeholder={pt.messagePlaceholder}
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300 resize-none"
                      style={{ backgroundColor: '#e8e5e0' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#94c43d] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]"
                  >
                    {pt.submitButton}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section - consistent dark bg */}
      <section className="py-16" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-display font-semibold text-2xl text-gray-900 mb-6">
              {pt.locationsTitle} <GradientText>{pt.locationsTitleHighlight}</GradientText>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl border border-gray-200/50 hover:border-lime/30 transition-colors duration-300" style={{ backgroundColor: '#f0ede8' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e8e5e0' }}>
                  <MapPin className="w-5 h-5 text-lime" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Warszawa</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ul. Chmielna 73<br />
                  00-801 Warszawa<br />
                  Polska
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200/50 hover:border-lime/30 transition-colors duration-300" style={{ backgroundColor: '#f0ede8' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#e8e5e0' }}>
                  <MapPin className="w-5 h-5 text-lime" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Shanghai</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  696 Weihai Road<br />
                  Jing'an District<br />
                  Shanghai 200041<br />
                  China
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-gray-200/50"
          >
            <iframe
              src="https://embed.apple.com/maps/place?address=Chmielna%2069,%2000-801%20Warsaw,%20Poland&h=400&colorScheme=dark"
              width="100%"
              height="400"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji Warszawa"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
