import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GradientText } from '@/components/GradientText';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { statsTranslations, carouselServicesTranslations, articlesTranslations } from '@/i18n/contentTranslations';
import { PartnersSection } from '@/components/PartnersSection';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Heart, Calendar, Clock } from 'lucide-react';

import sgStrategia from '@/assets/sg-strategia.png';
import sgAnalizy from '@/assets/sg-analizy.png';
import sgWejscie from '@/assets/sg-wejscie.png';
import sgImport from '@/assets/sg-import.png';
import sgMarketing from '@/assets/sg-marketing.png';
import sgMisje from '@/assets/sg-misje.png';
import wsprzyjNas from '@/assets/wesprzyj-nas.jpg';
import domPolskiGambia from '@/assets/dom-polski-gambia.jpg';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';

const articleImages: Record<string, string> = {
  'gdzie-znika-twoja-marza': articleCompetition,
  'chinski-nowy-rok-2026': articleInnovation,
  'przewagi-konkurencyjne-chinskich-firm': articleCompetition,
  'chinski-system-innowacji': articleInnovation,
  'przygotowanie-do-wspolpracy': serviceStrategy,
  'przed-podpisaniem-umowy': articleCompetition,
  'chiny-konkurent-technologiczny': articleInnovation,
  'automatyzacja-robotyzacja-chiny': serviceStrategy,
};

const carouselImages = [sgStrategia, sgAnalizy, sgWejscie, sgImport, sgMarketing, sgMisje];
const carouselSlugs = ['strategia-wobec-chin', 'analizy-rynku', 'wejscie-na-rynek', 'import-eksport', 'marketing-pozycjonowanie', 'misje-szkolenia'];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isCarouselInView = useInView(carouselRef, { amount: 0.3 });
  const { t, language } = useLanguage();
  const stats = statsTranslations[language];
  const articles = articlesTranslations[language].slice(0, 3);
  const carouselServices = carouselServicesTranslations[language].map((s, i) => ({
    ...s,
    image: carouselImages[i],
    slug: carouselSlugs[i],
  }));

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselServices.length);
    }, 12000);
  }, [carouselServices.length]);

  useEffect(() => {
    if (!isCarouselInView) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    resetAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isCarouselInView, resetAutoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselServices.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselServices.length) % carouselServices.length);
    resetAutoplay();
  };

  const getPrevIndex = () => (currentSlide - 1 + carouselServices.length) % carouselServices.length;
  const getNextIndex = () => (currentSlide + 1) % carouselServices.length;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-[#94c43d]/5 via-transparent to-[#94c43d]/10"
          />
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#94c43d]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#94c43d]/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 lg:pt-40">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-[#94c43d] font-display italic text-lg mb-6">
              For Hope and Smile
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t.hero.title}<br /><span className="text-[#94c43d]">{t.hero.titleHighlight}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
              {t.hero.subtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col items-center gap-4">
              <Link to="/kontakt" className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#94c43d] text-white rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-52 md:bottom-56 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white/40">
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Carousel Section */}
      <section ref={carouselRef} className="relative -mt-32 sm:-mt-40 md:-mt-48 pt-8 pb-24 z-10" style={{ backgroundColor: 'transparent' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-[#f5f3ef]/60 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
              <div className="flex items-center justify-center gap-4 lg:gap-8 perspective-[1500px]">
                <motion.div key={`prev-${getPrevIndex()}`} className="hidden lg:block flex-shrink-0 cursor-pointer" onClick={prevSlide} whileHover={{ scale: 1.02 }} style={{ transform: 'perspective(1000px) rotateY(15deg) scale(0.85)', transformOrigin: 'right center' }}>
                  <div className="relative w-[220px] rounded-2xl overflow-hidden aspect-[3/4] opacity-40 hover:opacity-60 transition-opacity border border-gray-300/30">
                    <img src={carouselServices[getPrevIndex()].image} alt="" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4"><p className="text-white/60 text-sm font-medium truncate">{carouselServices[getPrevIndex()].title}</p></div>
                  </div>
                </motion.div>

                <div className="flex-shrink-0 w-full max-w-3xl overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.div key={currentSlide} initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="relative rounded-3xl overflow-hidden aspect-[16/10] lg:aspect-[2/1] border border-gray-300/30 shadow-2xl group">
                      <motion.img initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} src={carouselServices[currentSlide].image} alt={carouselServices[currentSlide].title} className={`absolute inset-0 w-full h-full object-cover ${carouselServices[currentSlide].slug === 'strategia-wobec-chin' ? 'scale-[1.15]' : ''}`} style={carouselServices[currentSlide].slug === 'strategia-wobec-chin' ? { objectPosition: '60% 55%' } : undefined} />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent" />
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#94c43d] via-[#94c43d]/50 to-transparent" />
                      <div className="absolute inset-0 flex items-center p-8 sm:p-12 lg:p-16">
                        <motion.div key={`content-${currentSlide}`} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="max-w-xl">
                          <span className="inline-block px-3 py-1 rounded-full bg-[#94c43d]/20 text-[#94c43d] text-xs font-medium mb-4">{currentSlide + 1} / {carouselServices.length}</span>
                          <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">{carouselServices[currentSlide].title}</h3>
                          <p className="text-gray-400 text-base lg:text-lg mb-8 hidden sm:block leading-relaxed">{carouselServices[currentSlide].description}</p>
                          <Link to={`/uslugi#${carouselServices[currentSlide].slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#94c43d] text-white rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300">
                            <span>{t.services.learnMore}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <motion.div key={`next-${getNextIndex()}`} className="hidden lg:block flex-shrink-0 cursor-pointer" onClick={nextSlide} whileHover={{ scale: 1.02 }} style={{ transform: 'perspective(1000px) rotateY(-15deg) scale(0.85)', transformOrigin: 'left center' }}>
                  <div className="relative w-[220px] rounded-2xl overflow-hidden aspect-[3/4] opacity-40 hover:opacity-60 transition-opacity border border-gray-300/30">
                    <img src={carouselServices[getNextIndex()].image} alt="" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4"><p className="text-white/60 text-sm font-medium truncate">{carouselServices[getNextIndex()].title}</p></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="flex items-center justify-center mt-10 gap-4 sm:gap-6">
              <button onClick={prevSlide} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#94c43d]/50 hover:bg-gray-50 transition-all duration-300 group">
                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-[#94c43d]" />
              </button>
              <div className="flex gap-2">
                {carouselServices.map((_, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-[#94c43d]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#94c43d]/50 hover:bg-gray-50 transition-all duration-300 group">
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#94c43d]" />
              </button>
            </div>

            <div className="text-center mt-8">
              <Link to="/uslugi" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#94c43d] transition-colors duration-300 text-sm">
                {t.services.viewAll}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Poznaj Fundację Section */}
      <section className="py-20" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-gray-900" />
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">Poznaj Fundację</h2>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-6">
                Główne cele działalności fundacji zbudowane są na wartościach, które stanowią fundament nowoczesnego i dobrze sytuowanego społeczeństwa. Każda z tych wartości zrodziła się w sercu Omeny w wyniku jej doświadczeń życiowych i dziś wyznacza główne kierunki działalności fundacji. A są nimi: edukacja, tolerancja i współpraca.
              </p>
              <Link to="/o-nas" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:border-[#94c43d] hover:text-[#94c43d] transition-all duration-300 text-sm font-medium">
                O Fundacji <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Carousel - Nasze Projekty */}
      <PhotoCarousel />

      {/* Aktualności Section */}
      <section className="py-20" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gray-900" />
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">Aktualności</h2>
            </div>
            <Link to="/baza-wiedzy" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:border-[#94c43d] hover:text-[#94c43d] transition-all duration-300 text-sm font-medium">
              Wszystkie aktualności <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article key={article.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <Link to={`/baza-wiedzy/${article.slug}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <img src={articleImages[article.slug] || articleCompetition} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#94c43d] text-white text-xs font-semibold">{article.category}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 group-hover:text-[#94c43d] transition-colors duration-300 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{article.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</div>
                    <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Wesprzyj Nas Section */}
      <section className="py-20" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img src={wsprzyjNas} alt="Wesprzyj nas" className="w-full h-auto object-cover" loading="lazy" width={800} height={1024} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-4">Wesprzyj</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Jak możesz <GradientText>pomóc</GradientText>?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Twoje wsparcie zmienia życie dzieci w Afryce. Każda wpłata, nawet najmniejsza, trafia bezpośrednio tam, gdzie jest najbardziej potrzebna — na edukację, posiłki i opiekę medyczną.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#94c43d]" />
                  <span className="text-gray-700">Wirtualna adopcja — od 150 zł/mies.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#94c43d]" />
                  <span className="text-gray-700">Jednorazowa darowizna</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#94c43d]" />
                  <span className="text-gray-700">Wolontariat w Gambii</span>
                </div>
              </div>
              <Link to="/uslugi" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#94c43d] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
                Wesprzyj misję
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dom Polski w Gambii */}
      <section className="py-20" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-4">Dom Polski</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nasze miejsce spotkań, kultury i odpoczynku
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Dom Polski w Gambii to serce Fundacji FHS – wyjątkowa przestrzeń, w której polska gościnność spotyka się z afrykańskim słońcem i lokalną społecznością. To miejsce stworzone z myślą o wolontariuszach, podróżnikach z misją i wszystkich, którzy chcą doświadczyć prawdziwej wspólnoty, odpocząć i poczuć się jak w domu. Z basenem, bujną zielenią i klimatycznym zapleczem noclegowym.
              </p>
              <Link to="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-[#94c43d] hover:text-[#94c43d] transition-all duration-300 text-sm font-medium">
                Sprawdź dostępność! <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img src={domPolskiGambia} alt="Dom Polski w Gambii" className="w-full h-auto object-cover" loading="lazy" width={1024} height={768} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Twoja pomoc realnie zmienia życie - Parallax */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={wsprzyjNas} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white italic mb-4">Twoja pomoc realnie zmienia życie</h2>
            <div className="w-12 h-1 bg-[#94c43d] mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { value: '200 PLN', desc: 'Średnia pensja miesięczna w Gambii' },
              { value: '130 PLN', desc: 'Miesięczny koszt dodatkowych lekcji angielskiego dla dziecka' },
              { value: '100 PLN', desc: 'Podstawowe leczenie stomatologiczne u dentysty' },
              { value: '170 PLN', desc: 'Miesięczne utrzymanie na studiach: czesne, akademik, wyżywienie' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-6 text-center backdrop-blur-md bg-white/90 border border-[#94c43d]/20 shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#94c43d]/5 to-transparent pointer-events-none" />
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-3 relative z-10">{item.value}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* FAQ Section */}
      <HomeFAQSection />

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="relative max-w-5xl mx-auto rounded-[1.5rem] overflow-hidden border border-gray-200/50" style={{ background: 'linear-gradient(135deg, #2a2a2a 0%, #333333 50%, rgba(148,196,61,0.15) 100%)' }}>
            <div className="absolute bottom-0 right-0 w-[300px] h-[250px] bg-[#94c43d]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative p-8 lg:p-12 text-center">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">{t.cta.title}</h2>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight"><GradientText>{t.cta.titleHighlight}</GradientText></h2>
              <p className="text-gray-300 text-base mb-8 max-w-md mx-auto">{t.cta.subtitle}</p>
              <Link to="/kontakt" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#94c43d] text-white rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
                {t.cta.button}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
