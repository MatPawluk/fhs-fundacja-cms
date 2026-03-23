import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { WorldDotMap } from '@/components/WorldDotMap';
import { GradientText } from '@/components/GradientText';
import { FloatingDots } from '@/components/FloatingDots';
import { TeamCarousel } from '@/components/TeamCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { oNasTranslations } from '@/i18n/pageTranslations';
import { statsTranslations, oNasFaqTranslations } from '@/i18n/contentTranslations';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

// Assets
import onasAdrian from '@/assets/onas-adrian.png';
import onasHugo from '@/assets/onas-hugo.png';
import onasMaksymilian from '@/assets/onas-maksymilian.jpg';
import onasLiuWenhao from '@/assets/onas-liu-wenhao.jpeg';
import onasZhangRui from '@/assets/onas-zhang-rui.png';
import onasSara from '@/assets/onas-sara.png';
import shanghaiHeroBg from '@/assets/shanghai-hero-bg.jpg';
import heroAirplane from '@/assets/hero-airplane.png';
import heroTruck from '@/assets/hero-truck.png';
import heroContainer from '@/assets/hero-container.png';

const team = [
  { name: 'Adrian Nkwamu', role: 'Co-Founder & Managing Partner', image: onasAdrian },
  { name: 'Hugo Przybyła', role: 'Co-Founder & Poland Market Lead', image: onasHugo },
  { name: 'Maksymilian Szabatin', role: 'Partner, Strategy & Intelligence', image: onasMaksymilian },
  { name: 'Liu Wenhao', role: 'Senior China Market Analyst', image: onasLiuWenhao },
  { name: 'Zhang Rui', role: 'Logistics & Supply Chain Coordinator', image: onasZhangRui },
  { name: 'Sara Chen', role: 'Head of China Operations & International Relations', image: onasSara },
];

const ONas = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const pt = oNasTranslations[language];
  const stats = statsTranslations[language];
  const faqs = oNasFaqTranslations[language];
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a1a1a' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img src={shanghaiHeroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#1a1a1a]/80 to-[#1a1a1a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#1a1a1a_80%)]" />
        </motion.div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute top-[15%] left-[5%] font-display text-[12vw] font-bold text-white/[0.04] blur-[2px] tracking-wider">LOGISTICS</div>
          <div className="absolute top-[35%] right-[5%] font-display text-[10vw] font-bold text-white/[0.05] blur-[2px] tracking-wider">PL—CN</div>
          <div className="absolute bottom-[30%] left-[10%] font-display text-[8vw] font-bold text-white/[0.03] blur-[2px] tracking-wider">CONNECTED</div>
          <div className="absolute bottom-[15%] right-[15%] font-display text-[6vw] font-bold text-white/[0.04] blur-[2px] tracking-wider">BRIDGE</div>
        </div>
        
        <FloatingDots count={40} />
        
        {/* Transport elements */}
        <motion.div initial={{ opacity: 0, x: 100, y: -50 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }} className="absolute top-16 right-[5%] lg:right-[0%] w-[280px] md:w-[380px] lg:w-[460px] pointer-events-none z-20">
          <img src={heroAirplane} alt="" className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]" style={{ filter: 'drop-shadow(0 0 20px rgba(196, 255, 0, 0.15))' }} />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, z: -100, scale: 0.8 }} animate={{ opacity: 1, z: 0, scale: 1 }} transition={{ delay: 1, duration: 1.2, ease: "easeOut" }} className="absolute bottom-[2%] left-[0%] lg:left-[2%] w-[350px] md:w-[420px] lg:w-[500px] pointer-events-none z-40">
          <img src={heroTruck} alt="" className="w-full h-auto drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]" style={{ filter: 'drop-shadow(0 0 20px rgba(196, 255, 0, 0.15))' }} />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }} className="absolute top-[2%] left-[2%] lg:left-[5%] w-[280px] md:w-[380px] lg:w-[480px] pointer-events-none z-10 hidden md:block">
          <img src={heroContainer} alt="" className="w-full h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)]" style={{ filter: 'drop-shadow(0 0 30px rgba(196, 255, 0, 0.12))' }} />
        </motion.div>

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-30 container mx-auto px-6 lg:px-12 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              {pt.badge}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
              {pt.title} <GradientText>{pt.titleHighlight}</GradientText>
              <br />{pt.subtitle}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">{pt.description}</p>
          </motion.div>

          {/* Stats Row */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto relative z-20">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1 }} className="p-6 lg:p-8 rounded-2xl bg-[#f0ede8]/80 backdrop-blur-lg border border-gray-800/50 hover:border-lime/30 transition-all duration-300">
                <div className="font-display text-3xl lg:text-4xl font-bold text-lime mb-2">
                  {stat.isText ? <span>{stat.suffix}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">{pt.teamBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{pt.teamTitle} <GradientText>{pt.teamTitleHighlight}</GradientText></h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {team.slice(0, 3).map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-white">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.slice(3, 6).map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index + 3) * 0.1 }} className="group">
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-white">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamCarousel />

      {/* World Dot Map */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">{pt.connectionBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Warszawa ↔ <GradientText>Shanghai</GradientText>
            </h2>
          </motion.div>
          <div className="max-w-5xl mx-auto"><WorldDotMap /></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-lime/8 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">{pt.faqBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{pt.faqTitle} <GradientText>{pt.faqTitleHighlight}</GradientText></h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-0">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="border-b border-gray-800">
                <button
                  onClick={() => {
                    setOpenIndices(prev => {
                      const next = new Set(prev);
                      if (next.has(index)) { next.delete(index); } else { next.add(index); }
                      return next;
                    });
                  }}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-display text-lg md:text-xl font-semibold text-white group-hover:text-lime transition-colors duration-300 pr-4">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-500 group-hover:text-lime transition-all duration-300 flex-shrink-0 ${openIndices.has(index) ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndices.has(index) && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="text-gray-400 pb-6 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute bottom-10 left-10 opacity-[0.06] pointer-events-none">
          <span className="font-display text-[10rem] font-bold text-[#94c43d] leading-none"></span>
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">{t.cta.title} <GradientText>{t.cta.titleHighlight}</GradientText></h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
            <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
              {t.cta.button}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ONas;