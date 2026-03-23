import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { uslugiTranslations } from '@/i18n/pageTranslations';
import { statsTranslations, serviceCategoriesTranslations } from '@/i18n/contentTranslations';
import { ArrowRight, ChevronDown } from 'lucide-react';
import statsBg from '@/assets/stats-bg.jpg';
import worldMap from '@/assets/world-map.jpg';

// Service cover images
import uAnalizaWplywu from '@/assets/u-analiza-wplywu.png';
import uDecyzjeWejscia from '@/assets/u-decyzje-wejscia.png';
import uScenariuszeStrategiczne from '@/assets/u-scenariusze-strategiczne.png';
import uBriefingiDecyzyjne from '@/assets/u-briefingi-decyzyjne.png';
import uAnalizySektorow from '@/assets/u-analizy-sektorow.png';
import uAnalizaRegulacyjna from '@/assets/u-analiza-regulacyjna.png';
import uWeryfikacjaKontrahenta from '@/assets/u-weryfikacja-kontrahenta.png';
import uRozszerzonaWeryfikacja from '@/assets/u-rozszerzona-weryfikacja.png';
import uWyborModelu from '@/assets/u-wybor-modelu.png';
import uWsparcieFormalne from '@/assets/u-wsparcie-formalne.png';
import uIdentyfikacjaPartnerow from '@/assets/u-identyfikacja-partnerow.png';
import uWsparcieNegocjacyjne from '@/assets/u-wsparcie-negocjacyjne.png';
import uPrzygotowanieStruktur from '@/assets/u-przygotowanie-struktur.png';
import uAudytyWeryfikacja from '@/assets/u-audyty-weryfikacja.png';
import uProjektowanieLancucha from '@/assets/u-projektowanie-lancucha.png';
import uNadzorProdukcji from '@/assets/u-nadzor-produkcji.png';
import uOrganizacjaTransportu from '@/assets/u-organizacja-transportu.png';
import uKompleksowaRealizacja from '@/assets/u-kompleksowa-realizacja.png';
import uLokalnePozycjonowanie from '@/assets/u-lokalne-pozycjonowanie.png';
import uStrategieKomunikacji from '@/assets/u-strategie-komunikacji.png';
import uAdaptacjaKomunikacji from '@/assets/u-adaptacja-komunikacji.png';
import uMaterialySprzedazowe from '@/assets/u-materialy-sprzedazowe.png';
import uWsparcieMarketingowe from '@/assets/u-wsparcie-marketingowe.png';
import uOrganizacjaMisji from '@/assets/u-organizacja-misji.png';
import uAranzacjaSpotkan from '@/assets/u-aranzacja-spotkan.png';
import uSzkoleniaSystem from '@/assets/u-szkolenia-system.png';
import uSzkoleniaKultura from '@/assets/u-szkolenia-kultura.png';

// Sub-service slugs (stable across languages)
const serviceCategorySlugs = [
  {
    slug: 'strategia-wobec-chin',
    count: 4,
    subServices: [
      { slug: 'analiza-wplywu', image: uAnalizaWplywu },
      { slug: 'decyzje-strategiczne', image: uDecyzjeWejscia },
      { slug: 'scenariusze-mapy-ryzyk', image: uScenariuszeStrategiczne },
      { slug: 'briefingi-decyzyjne', image: uBriefingiDecyzyjne },
    ],
  },
  {
    slug: 'analizy-rynku',
    count: 4,
    subServices: [
      { slug: 'analizy-sektorow-klastrow', image: uAnalizySektorow },
      { slug: 'analiza-regulacyjna-bariery', image: uAnalizaRegulacyjna },
      { slug: 'weryfikacja-kontrahenta-desktop', image: uWeryfikacjaKontrahenta },
      { slug: 'due-diligence-partner', image: uRozszerzonaWeryfikacja },
    ],
  },
  {
    slug: 'wejscie-na-rynek',
    count: 5,
    subServices: [
      { slug: 'wybor-modelu-wejscia', image: uWyborModelu },
      { slug: 'wsparcie-formalne-regulacyjne', image: uWsparcieFormalne },
      { slug: 'identyfikacja-selekcja-partnerow', image: uIdentyfikacjaPartnerow },
      { slug: 'wsparcie-negocjacyjne-relacyjne', image: uWsparcieNegocjacyjne },
      { slug: 'struktury-handlowe-partnerskie', image: uPrzygotowanieStruktur },
    ],
  },
  {
    slug: 'import-eksport',
    count: 5,
    subServices: [
      { slug: 'audyty-weryfikacja-dostawcow', image: uAudytyWeryfikacja },
      { slug: 'optymalizacja-lancucha-dostaw', image: uProjektowanieLancucha },
      { slug: 'nadzor-produkcji-jakosc', image: uNadzorProdukcji },
      { slug: 'transport-miedzynarodowy', image: uOrganizacjaTransportu },
      { slug: 'realizacja-projekt-end-to-end', image: uKompleksowaRealizacja },
    ],
  },
  {
    slug: 'marketing-pozycjonowanie',
    count: 5,
    subServices: [
      { slug: 'lokalne-pozycjonowanie-marki', image: uLokalnePozycjonowanie },
      { slug: 'strategia-komunikacji', image: uStrategieKomunikacji },
      { slug: 'adaptacja-komunikacji-rynek', image: uAdaptacjaKomunikacji },
      { slug: 'materialy-sprzedazowe-wizerunkowe', image: uMaterialySprzedazowe },
      { slug: 'wsparcie-marketing-leady', image: uWsparcieMarketingowe },
    ],
  },
  {
    slug: 'misje-szkolenia',
    count: 4,
    subServices: [
      { slug: 'misje-biznesowe-technologiczne', image: uOrganizacjaMisji },
      { slug: 'matchmaking-b2b-partnerow', image: uAranzacjaSpotkan },
      { slug: 'szkolenia-system-gospodarczy', image: uSzkoleniaSystem },
      { slug: 'szkolenia-kultura-negocjacje', image: uSzkoleniaKultura },
    ],
  },
];

// Polish grammar helper for "usługi/usług"
const getServicesCountLabel = (count: number, language: string): string => {
  if (language === 'pl') {
    // 2-4: usługi, 5+: usług
    return count >= 2 && count <= 4 ? 'usługi' : 'usług';
  }
  if (language === 'en') return count === 1 ? 'service' : 'services';
  if (language === 'cn') return '项服务';
  return 'usług';
};

const Uslugi = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  const { language, t } = useLanguage();
  const pt = uslugiTranslations[language];
  const stats = statsTranslations[language];
  const translatedCategories = serviceCategoriesTranslations[language];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src={worldMap} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3ef]/80 via-[#f5f3ef]/90 to-[#f5f3ef]" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
        </div>
        

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl text-center mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-semibold uppercase tracking-wider mb-6">{pt.badge}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {pt.title} <GradientText>{pt.titleHighlight}</GradientText>
              <br />{pt.subtitle}
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">{pt.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Categories Accordion Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f5f3ef] to-transparent z-[1]" />
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="space-y-0">
            {serviceCategorySlugs.map((catMeta, index) => {
              const translated = translatedCategories[index];
              return (
                <motion.div
                  key={catMeta.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                    className="w-full flex items-center justify-between py-6 group"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-lime transition-colors duration-300">
                        {translated.title}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/80 text-gray-500 text-xs">
                        {catMeta.count} {getServicesCountLabel(catMeta.count, language)}
                      </span>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-gray-500 group-hover:text-lime transition-all duration-300 ${expandedCategory === index ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {expandedCategory === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                          {catMeta.subServices.map((subService, subIndex) => (
                            <motion.div
                              key={subService.slug}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                            >
                              <Link to={`/uslugi/${catMeta.slug}/${subService.slug}`} className="group relative block h-full">
                                <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200/50 bg-[#f0ede8]/80 hover:border-lime/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime/5">
                                  <div className="aspect-[4/3] relative overflow-hidden">
                                    <img src={subService.image} alt={translated.subServices[subIndex]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                  </div>
                                  <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-white text-base font-semibold leading-tight group-hover:text-[#94c43d] transition-colors mb-2">
                                      {translated.subServices[subIndex]}
                                    </h3>
                                    <div className="flex items-center gap-2 text-lime">
                                      <span className="text-sm">{pt.learnMore}</span>
                                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ backgroundImage: `url(${statsBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm" />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ x: ['-20%', '20%', '-20%'], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime/20 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">{t.stats.badge}</span>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="font-display text-5xl lg:text-6xl font-bold text-lime mb-3">
                  {stat.isText ? <span>{stat.suffix}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">
            {t.trust.title}
          </motion.p>
        </div>
        <LogoMarquee />
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute bottom-10 left-10 opacity-[0.06] pointer-events-none">
          <span className="font-display text-[10rem] font-bold text-[#94c43d] leading-none"></span>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-lime/8 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {pt.ctaTitle} <GradientText>{pt.ctaTitleHighlight}</GradientText>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">{pt.ctaSubtitle}</p>
            <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
              {pt.ctaButton}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Uslugi;