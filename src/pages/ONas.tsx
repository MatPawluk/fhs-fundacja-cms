import { motion } from 'framer-motion';
import { WorldDotMap } from '@/components/WorldDotMap';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { oNasTranslations } from '@/i18n/pageTranslations';

import { PartnersSection } from '@/components/PartnersSection';
import { ArrowRight } from 'lucide-react';

import teamDarek from '@/assets/team-darek.jpg';
import teamAdrian from '@/assets/team-adrian.jpg';
import teamAdrian2 from '@/assets/team-adrian-2.jpg';
import teamOlga from '@/assets/team-olga.jpg';
import teamAgata from '@/assets/team-agata.jpg';
import teamMaya from '@/assets/team-maya.jpg';
import teamKebba from '@/assets/team-kebba.jpg';
import teamChe from '@/assets/team-che.jpg';
import teamAdrianNew from '@/assets/Adrian-2-e1753411695887.jpg';

const teamData = {
  pl: [
    { name: 'Dariusz Andrzejczak', role: 'Współzałożyciel, koordynacja lokalna', image: teamDarek },
    { name: 'Olga Dąbrowska', role: 'Wsparcie projektowe', image: teamOlga },
    { name: 'Adrian Nkwamu', role: 'Współzałożyciel, marketing i komunikacja', image: teamAdrian },
    { name: 'Agata Wysocka', role: 'Koordynacja lokalna', image: teamAgata },
    { name: 'Adrian Grudziński', role: 'Wsparcie projektowe', image: teamAdrianNew },
    { name: 'Maya', role: 'Gospodyni domu polskiego w Gambii', image: teamMaya },
    { name: 'Kebba Suso', role: 'Opiekun domu polskiego w Gambii', image: teamKebba },
    { name: 'Che', role: 'Wsparcie operacyjne', image: teamChe },
  ],
  en: [
    { name: 'Dariusz Andrzejczak', role: 'Co-founder, local coordination', image: teamDarek },
    { name: 'Olga Dąbrowska', role: 'Project support', image: teamOlga },
    { name: 'Adrian Nkwamu', role: 'Co-founder, marketing & communication', image: teamAdrian },
    { name: 'Agata Wysocka', role: 'Local coordination', image: teamAgata },
    { name: 'Adrian Grudziński', role: 'Project support', image: teamAdrianNew },
    { name: 'Maya', role: 'Housekeeper of the Polish House in Gambia', image: teamMaya },
    { name: 'Kebba Suso', role: 'Caretaker of the Polish House in Gambia', image: teamKebba },
    { name: 'Che', role: 'Operational support', image: teamChe },
  ],
  nl: [
    { name: 'Dariusz Andrzejczak', role: 'Medeoprichter, lokale coördinatie', image: teamDarek },
    { name: 'Olga Dąbrowska', role: 'Projectondersteuning', image: teamOlga },
    { name: 'Adrian Nkwamu', role: 'Medeoprichter, marketing & communicatie', image: teamAdrian },
    { name: 'Agata Wysocka', role: 'Lokale coördinatie', image: teamAgata },
    { name: 'Adrian Grudziński', role: 'Projectondersteuning', image: teamAdrianNew },
    { name: 'Maya', role: 'Huishoudster van het Poolse Huis in Gambia', image: teamMaya },
    { name: 'Kebba Suso', role: 'Beheerder van het Poolse Huis in Gambia', image: teamKebba },
    { name: 'Che', role: 'Operationele ondersteuning', image: teamChe },
  ],
};

const heroTranslations = {
  pl: {
    badge: 'O nas',
    title: 'Kim',
    titleHighlight: 'jesteśmy',
    titleEnd: '?',
    p1: 'Fundacja FHS to organizacja non-profit działająca od 2022 roku, której misją jest poprawa warunków życia i edukacji w społecznościach Afryki Zachodniej.',
    p2: 'Nasze działania koncentrują się wokół edukacji, opieki zdrowotnej, rozwoju infrastruktury oraz wspierania lokalnych inicjatyw przedsiębiorczych.',
    p3: 'Wierzymy, że przez empatię, zaangażowanie i wspólne działanie możemy tworzyć trwałe zmiany, które przekształcą życie całych społeczności.',
    stat1: 'Dzieci pod opieką',
    stat2: 'Projektów',
    globeTitle: 'Gdzie',
    globeHighlight: 'działamy',
    globeDesc: 'Łączymy Polskę z Gambią - wspólnie budujemy lepszą przyszłość',
  },
  en: {
    badge: 'About us',
    title: 'Who',
    titleHighlight: 'we are',
    titleEnd: '?',
    p1: 'FHS Foundation is a non-profit organization operating since 2022, whose mission is to improve living conditions and education in West African communities.',
    p2: 'Our activities focus on education, healthcare, infrastructure development and supporting local entrepreneurial initiatives.',
    p3: 'We believe that through empathy, commitment and collective action, we can create lasting changes that transform the lives of entire communities.',
    stat1: 'Children in care',
    stat2: 'Projects',
    globeTitle: 'Where we',
    globeHighlight: 'operate',
    globeDesc: 'We connect Poland with The Gambia - together building a better future',
  },
  nl: {
    badge: 'Over ons',
    title: 'Wie',
    titleHighlight: 'zijn wij',
    titleEnd: '?',
    p1: 'FHS Foundation is een non-profitorganisatie die sinds 2022 actief is en als missie heeft om de levensomstandigheden en het onderwijs in West-Afrikaanse gemeenschappen te verbeteren.',
    p2: 'Onze activiteiten richten zich op onderwijs, gezondheidszorg, infrastructuurontwikkeling en het ondersteunen van lokale ondernemersinitiatieven.',
    p3: 'Wij geloven dat we door empathie, betrokkenheid en gezamenlijke actie blijvende veranderingen kunnen creëren die het leven van hele gemeenschappen transformeren.',
    stat1: 'Kinderen onder zorg',
    stat2: 'Projecten',
    globeTitle: 'Waar wij',
    globeHighlight: 'werken',
    globeDesc: 'We verbinden Polen met Gambia - samen bouwen aan een betere toekomst',
  },
};

const ONas = () => {
  const { language, t } = useLanguage();
  const pt = oNasTranslations[language];
  const hero = heroTranslations[language];
  const team = teamData[language];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />

      {/* Hero / Kim jesteśmy */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-6">{hero.badge}</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {hero.title} <GradientText>{hero.titleHighlight}</GradientText>{hero.titleEnd}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{hero.p1}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{hero.p2}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{hero.p3}</p>

              <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-[#94c43d] mb-1">
                    <AnimatedCounter end={370} suffix="+" />
                  </div>
                  <p className="text-gray-500 text-sm">{hero.stat1}</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-[#94c43d] mb-1">
                    <AnimatedCounter end={17} suffix="+" />
                  </div>
                  <p className="text-gray-500 text-sm">{hero.stat2}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#94c43d]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#94c43d]/15 rounded-full blur-xl" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-[48%] h-[45%] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={teamDarek} alt="Fundacja" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 w-[48%] h-[48%] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={teamAdrian} alt="Fundacja" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[5%] right-0 w-[48%] h-[90%] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={teamAdrian2} alt="Fundacja" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-4">{pt.teamBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
              {pt.teamTitle || 'Poznaj'} <GradientText>{pt.teamTitleHighlight || 'nas'}</GradientText>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {team.map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group">
                  <div className="relative mb-3 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-display font-bold text-sm md:text-base lg:text-lg text-gray-900">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />

      {/* Globe Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">{hero.globeTitle} <GradientText>{hero.globeHighlight}</GradientText></h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">{hero.globeDesc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <WorldDotMap className="max-w-4xl mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.cta.title} <GradientText>{t.cta.titleHighlight}</GradientText></h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
            <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
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
