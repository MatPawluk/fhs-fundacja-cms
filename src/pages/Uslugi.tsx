import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { uslugiTranslations } from '@/i18n/pageTranslations';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X, Heart, MapPin, GraduationCap, Utensils, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

import adopcjaAlima from '@/assets/adopcja-alima.jpg';
import adopcjaLamin from '@/assets/adopcja-lamin.jpg';
import adopcjaSuna from '@/assets/adopcja-suna.jpg';
import adopcjaElizabeth from '@/assets/adopcja-elizabeth.jpg';
import adopcjaUnique from '@/assets/adopcja-unique.jpg';
import adopcjaMariatou from '@/assets/adopcja-mariatou.jpg';
import adopcjaPeggy from '@/assets/adopcja-peggy.jpg';
import stepChoose from '@/assets/step-choose.jpg';
import stepDeclare from '@/assets/step-declare.jpg';
import stepProgress from '@/assets/step-progress.jpg';
import stepChange from '@/assets/step-change.jpg';

const children = [
  {
    name: 'Alima Sadia',
    age: 7,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    image: adopcjaAlima,
    monthlySupport: 150,
    grade: '1 klasa',
    shortDesc: 'Alima to pilna uczennica, która potrzebuje wsparcia. Jej tata od blisko dwóch lat pozostaje bez pracy.',
    longDesc: 'Alima to pilna uczennica, która potrzebuje wsparcia. Jej tata od blisko dwóch lat pozostaje bez pracy, a drobny biznes prowadzony przez mamę nie przynosi wystarczających dochodów. Z tego powodu rodzina nie jest w stanie opłacić czesnego i zapewnić Alimie ciągłości nauki.',
    needs: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: 'Lamin Ceessay',
    age: 9,
    gender: 'chłopiec',
    country: 'Gambia',
    location: 'Bijilo',
    image: adopcjaLamin,
    monthlySupport: 150,
    grade: '2 klasa',
    shortDesc: 'Lamin to ciekawy świata chłopiec z 2 klasy. Uwielbia matematykę, naukę, sztukę i sport.',
    longDesc: 'Lamin to ciekawy świata chłopiec z 2 klasy. To ambitny uczeń, który z pasją podchodzi do wszystkiego, co robi. Interesuje się matematyką, naukami przyrodniczymi i sztuką, a po lekcjach chętnie gra w piłkę i uczestniczy w zajęciach dodatkowych. Ceni sobie przyjaźń i współpracę - W szkole zawsze można na niego liczyć.',
    needs: ['Edukacja', 'Posiłki', 'Materiały szkolne'],
  },
  {
    name: 'Suna Fai',
    age: 10,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    image: adopcjaSuna,
    monthlySupport: 150,
    grade: '2 klasa',
    shortDesc: 'Suna chodzi do 2 klasy w My Gambia School. Jest bardzo ambitną uczennicą, która kocha czytać i rysować.',
    longDesc: 'Suna chodzi do 2 klasy w My Gambia School. Jest bardzo ambitną uczennicą, która kocha czytać i rysować. Jej mama robi wszystko, by zapewnić jej edukację mimo skromnych dochodów. Suna marzy o tym, by kiedyś zostać nauczycielką.',
    needs: ['Edukacja', 'Posiłki', 'Materiały szkolne'],
  },
  {
    name: 'Elizabeth Christian',
    age: 7,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    image: adopcjaElizabeth,
    monthlySupport: 150,
    grade: '2 klasa',
    shortDesc: 'Elizabeth to radosna, pełna energii dziewczynka, która z pasją podchodzi do nauki.',
    longDesc: 'Elizabeth uczęszcza do 2 klasy w My Gambia School. To radosna, pełna energii dziewczynka, która z pasją podchodzi do nauki. Marzy o tym, by poznawać świat i uczyć się nowych rzeczy, ale potrzebuje wsparcia, by móc kontynuować edukację i rozwijać swoje talenty.',
    needs: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: "Unique J'gin",
    age: 10,
    gender: 'chłopiec',
    country: 'Gambia',
    location: 'Bijilo',
    image: adopcjaUnique,
    monthlySupport: 150,
    grade: '8 klasa',
    shortDesc: 'Unique to bystry i kreatywny chłopiec, który z dużą ciekawością odkrywa świat.',
    longDesc: 'Unique to bystry i kreatywny chłopiec, który z dużą ciekawością odkrywa świat. Mimo młodego wieku uczy się już w 8 klasie, co świadczy o jego dużych możliwościach i szybkim rozwoju. Interesuje się nauką, sztuką, muzyką oraz sportem. Jest otwarty, pełen energii i znany z radosnego usposobienia.',
    needs: ['Edukacja', 'Materiały szkolne', 'Posiłki'],
  },
  {
    name: 'Mariatou Kanteh',
    age: 14,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    image: child6,
    monthlySupport: 150,
    grade: '8 klasa',
    shortDesc: 'Mariatou to serdeczna i pełna energii dziewczynka, która z ciekawością poznaje świat.',
    longDesc: 'Mariatou to serdeczna i pełna energii dziewczynka, która z ciekawością poznaje świat i chętnie się uczy. Ma 14 lat i obecnie uczęszcza do 8 klasy. Jest osobą otwartą, życzliwą i łatwo nawiązuje relacje z innymi. Ceni przyjaźń, wsparcie i poczucie bezpieczeństwa.',
    needs: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: 'Peggy',
    age: 6,
    gender: 'dziewczynka',
    country: 'Gambia',
    location: 'Bijilo',
    image: child1,
    monthlySupport: 150,
    grade: '1 klasa',
    shortDesc: 'Peggy to urocza i pełna energii dziewczynka, która uczęszcza do 1 klasy.',
    longDesc: 'Peggy to urocza i pełna energii dziewczynka, która uczęszcza do 1 klasy. Jest pogodna, serdeczna i chętnie nawiązuje relacje z innymi. Lubi spędzać czas z rówieśnikami i ceni przyjaźń oraz życzliwość. Dzięki swojej otwartości i radosnemu usposobieniu z entuzjazmem odkrywa świat i stawia pierwsze kroki w szkolnej przygodzie.',
    needs: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
];

const needIcons: Record<string, React.ReactNode> = {
  'Edukacja': <GraduationCap className="w-4 h-4" />,
  'Posiłki': <Utensils className="w-4 h-4" />,
  'Opieka medyczna': <Stethoscope className="w-4 h-4" />,
  'Materiały szkolne': <GraduationCap className="w-4 h-4" />,
};

const STEPS = [
  {
    id: '01',
    title: 'Wybierz dziecko',
    description: 'Przejrzyj profile dzieci i wybierz to, które chcesz wesprzeć. Każde z nich ma swoją unikalną historię, marzenia i potrzeby. Poznaj je bliżej i zdecyduj, komu chcesz pomóc.',
    image: stepChoose,
  },
  {
    id: '02',
    title: 'Zadeklaruj wsparcie',
    description: 'Wybierz formę wsparcia dopasowaną do swoich możliwości - jednorazową lub regularną. Możesz również rozszerzyć pomoc o konkretne potrzeby, takie jak edukacja, zajęcia rozwojowe czy opieka zdrowotna.',
    image: stepDeclare,
  },
  {
    id: '03',
    title: 'Obserwuj postępy',
    description: 'Otrzymuj regularne raporty, zdjęcia i wiadomości od dziecka. Śledź jego rozwój, buduj relację i zobacz, jak Twoje wsparcie zmienia jego codzienność.',
    image: stepProgress,
  },
  {
    id: '04',
    title: 'Zmieniaj życie',
    description: 'Zobacz, jak Twoja pomoc realnie wpływa na przyszłość dziecka. Edukacja, posiłki, opieka medyczna — to wszystko jest możliwe dzięki Tobie.',
    image: stepChange,
  },
];

const AUTO_PLAY_DURATION = 5000;

function HowItWorksVerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % STEPS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + STEPS.length) % STEPS.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setUserInteracted(true);
  };

  useEffect(() => {
    if (userInteracted) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, userInteracted, handleNext]);

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, y: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  };

  return (
    <section className="py-24" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Tabs */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-3">Jak to działa</span>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
                    Cztery proste <GradientText>kroki</GradientText>
                  </h2>
                </div>
                <span className="text-gray-300 font-display text-sm tracking-wider hidden md:block">({String(activeIndex + 1).padStart(2, '0')}/{String(STEPS.length).padStart(2, '0')})</span>
              </div>

              <div className="flex flex-col">
                {STEPS.map((step, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={step.id}
                      onClick={() => handleTabClick(index)}
                      className={cn(
                        'group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-gray-200/50 first:border-0',
                        isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'
                      )}
                    >
                      <div className="relative w-1 self-stretch rounded-full bg-gray-200/50 overflow-hidden flex-shrink-0">
                        {isActive && !userInteracted && (
                          <motion.div
                            className="absolute inset-x-0 top-0 bg-[#94c43d] rounded-full"
                            initial={{ height: '0%' }}
                            animate={{ height: '100%' }}
                            transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: 'linear' }}
                            key={activeIndex}
                          />
                        )}
                        {isActive && userInteracted && (
                          <div className="absolute inset-x-0 top-0 bottom-0 bg-[#94c43d] rounded-full" />
                        )}
                      </div>

                      <span className={cn(
                        'font-display text-sm font-semibold transition-colors duration-300 mt-0.5 flex-shrink-0',
                        isActive ? 'text-[#94c43d]' : 'text-gray-300'
                      )}>
                        /{step.id}
                      </span>

                      <div className="flex flex-col gap-2 min-w-0">
                        <h3 className={cn(
                          'font-display text-xl md:text-2xl font-bold transition-colors duration-300',
                          isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                        )}>
                          {step.title}
                        </h3>
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-gray-500 text-sm md:text-base leading-relaxed pr-4">
                                {step.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative flex items-start justify-center pt-8 lg:pt-12">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-gray-100">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.img
                    key={activeIndex}
                    src={STEPS[activeIndex].image}
                    alt={STEPS[activeIndex].title}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </AnimatePresence>

                <div className="absolute bottom-5 right-5 flex gap-2 z-10">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); setUserInteracted(true); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 flex items-center justify-center text-gray-700 hover:bg-white transition-all active:scale-90"
                    aria-label="Poprzedni"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); setUserInteracted(true); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 flex items-center justify-center text-gray-700 hover:bg-white transition-all active:scale-90"
                    aria-label="Następny"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChildDetailPopup({ selectedChild, onClose }: { selectedChild: number | null; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);

  // Reset image index when child changes
  useEffect(() => {
    setImgIndex(0);
  }, [selectedChild]);

  if (selectedChild === null) return null;

  const child = children[selectedChild];
  // For now each child has one image repeated — in future add multiple per child
  const images = [child.image, child.image, child.image];

  const prevImg = () => setImgIndex((p) => (p - 1 + images.length) % images.length);
  const nextImg = () => setImgIndex((p) => (p + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          <div className="grid md:grid-cols-[45%_55%] h-full max-h-[90vh]">
            {/* Left: Image carousel */}
            <div className="relative h-64 md:h-full bg-gray-100">
              <img
                src={images[imgIndex]}
                alt={child.name}
                className="w-full h-full object-cover"
              />

              {/* Location badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#94c43d] text-white text-xs font-semibold shadow-lg">
                  <MapPin className="w-3 h-3" /> {child.location}, {child.country}
                </span>
              </div>

              {/* Image navigation arrows */}
              <button
                onClick={prevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-md"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      i === imgIndex ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/70'
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="overflow-y-auto p-8 md:p-10 flex flex-col">
              <div className="flex-1">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">{child.name}</h2>
                <div className="flex items-center gap-2 text-gray-400 text-base mb-5">
                  <span>{child.age} lat</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{child.grade}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{child.gender}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 italic">
                  Aby poznać więcej historii dzieci oraz dowiedzieć się o ich aktualnych potrzebach, zapraszamy do kontaktu z nami.
                </p>

                {/* Story */}
                <div className="space-y-3 mb-6">
                  {child.longDesc.split('\n\n').map((p, i) => (
                    <p key={i} className="text-gray-600 text-base leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Needs */}
                <div className="mb-6">
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">Potrzeby</p>
                  <div className="flex flex-wrap gap-2">
                    {child.needs.map((need) => (
                      <span key={need} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium border border-gray-200/50">
                        {needIcons[need]} {need}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom: Support info + CTA */}
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <div className="flex items-center justify-between mb-4 p-4 rounded-2xl bg-[#f5f3ef]">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">Miesięczne wsparcie</p>
                    <p className="font-display font-bold text-2xl text-gray-900">{child.monthlySupport} <span className="text-sm font-semibold text-gray-500">zł/mies.</span></p>
                  </div>
                  <Heart className="w-8 h-8 text-[#94c43d]/30" />
                </div>

                <Link
                  to="/#wesprzyj"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#94c43d] text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)] active:scale-[0.98]"
                  onClick={onClose}
                >
                  <Heart className="w-5 h-5" /> Wesprzyj {child.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const CHILDREN_PER_PAGE = 9;

const Uslugi = () => {
  const [selectedChild, setSelectedChild] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [faqOpen, setFaqOpen] = useState<Set<number>>(new Set());
  const { language } = useLanguage();
  const pt = uslugiTranslations[language];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl text-center mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-semibold uppercase tracking-wider mb-6">Wirtualna adopcja</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Zmień życie <GradientText>dziecka</GradientText>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Wybierz dziecko, które chcesz wesprzeć. Twoja regularna pomoc zapewni mu edukację, posiłki i opiekę medyczną.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Children Grid — 3 columns, 9 per page */}
      <section id="children-grid" className="py-16 scroll-mt-8" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {children.slice((currentPage - 1) * CHILDREN_PER_PAGE, currentPage * CHILDREN_PER_PAGE).map((child, index) => {
              const globalIndex = (currentPage - 1) * CHILDREN_PER_PAGE + index;
              return (
              <motion.div
                key={child.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setSelectedChild(globalIndex)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-[#94c43d]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#94c43d] text-white text-xs font-semibold shadow-lg">
                      <MapPin className="w-3 h-3" /> {child.location}, {child.country}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display font-bold text-2xl text-white mb-1 drop-shadow-lg">{child.name}</h3>
                    <p className="text-white/80 text-sm">{child.age} lat · {child.grade}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{child.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {child.needs.map((need) => (
                      <span key={need} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#94c43d]/8 text-[#6b8f2b] text-xs font-medium">
                        {needIcons[need]} {need}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div>
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium">Miesięczne wsparcie</p>
                      <p className="font-display font-bold text-2xl text-gray-900">{child.monthlySupport} <span className="text-base font-semibold">zł</span></p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#94c43d] text-white rounded-full text-sm font-semibold group-hover:shadow-[0_8px_24px_-6px_rgba(148,196,61,0.5)] transition-all duration-300">
                      <Heart className="w-4 h-4" /> Wesprzyj
                    </span>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>

          {/* Pagination */}
          {(() => {
            const totalPages = Math.ceil(children.length / CHILDREN_PER_PAGE);
            if (totalPages <= 1) return null;
            const handlePageChange = (page: number) => {
              setCurrentPage(page);
              document.getElementById('children-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            return (
              <div className="flex items-center justify-center gap-2 mt-12">
                {currentPage > 1 && (
                  <button onClick={() => handlePageChange(currentPage - 1)} className="w-9 h-9 rounded-full text-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={cn(
                      'w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
                      currentPage === page
                        ? 'bg-[#94c43d] text-white'
                        : 'text-gray-400 hover:bg-gray-200'
                    )}
                  >
                    {page}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button onClick={() => handlePageChange(currentPage + 1)} className="w-9 h-9 rounded-full text-gray-400 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Child Detail Popup */}
      <ChildDetailPopup
        selectedChild={selectedChild}
        onClose={() => setSelectedChild(null)}
      />

      {/* How it works — Vertical Tabs */}
      <HowItWorksVerticalTabs />

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-4">FAQ</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
              Najczęściej zadawane <GradientText>pytania</GradientText>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-0">
            {[
              { q: 'Na czym polega wirtualna adopcja?', a: 'To forma regularnego wsparcia konkretnego dziecka, które dzięki Tobie zyskuje dostęp do edukacji, posiłków, opieki medycznej i innych podstawowych potrzeb. Nie adoptujesz go fizycznie - ale realnie zmieniasz jego życie.' },
              { q: 'Dlaczego warto zaangażować się w pomoc?', a: 'Bo to coś więcej niż darowizna - to realna zmiana w życiu konkretnego dziecka. Masz pewność, że Twoje wsparcie trafia tam, gdzie jest naprawdę potrzebne. Dzięki regularnym raportom, zdjęciom i wiadomościom widzisz, jak Twoja pomoc przekłada się na codzienne życie i rozwój dziecka.' },
              { q: 'Jak wygląda proces adopcji krok po kroku?', a: 'Wybierasz dziecko i deklarujesz miesięczne wsparcie. My dopasowujemy formę pomocy do Twoich możliwości. Regularnie otrzymujesz informacje o postępach dziecka. Obserwujesz, jak Twoje wsparcie zmienia jego codzienność i przyszłość.' },
              { q: 'Ile kosztuje wirtualna adopcja?', a: 'Wsparcie zaczyna się od 150 zł miesięcznie - to orientacyjna kwota, która pozwala pokryć podstawowe potrzeby dziecka. Możesz jednak samodzielnie zdecydować, ile i jak często chcesz pomagać. Każda, nawet najmniejsza regularna wpłata, naprawdę ma znaczenie.' },
              { q: 'Czy mogę mieć kontakt z dzieckiem, które wspieram?', a: 'Tak - to jeden z najpiękniejszych aspektów wirtualnej adopcji. Regularnie otrzymujesz zdjęcia, wiadomości i raporty o postępach dziecka. W ten sposób możesz śledzić jego rozwój, budować relację i zobaczyć, jak realnie zmienia się jego życie dzięki Twojemu wsparciu.' },
            ].map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="border-b border-gray-300">
                <button onClick={() => setFaqOpen(prev => { const next = new Set(prev); if (next.has(index)) next.delete(index); else next.add(index); return next; })} className="w-full flex items-center justify-between py-6 text-left group">
                  <span className="font-display text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#94c43d] transition-colors duration-300 pr-4">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-[#94c43d] transition-all duration-300 flex-shrink-0 ${faqOpen.has(index) ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {faqOpen.has(index) && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="text-gray-600 pb-6 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#94c43d]/10 blur-[150px] rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Twoja pomoc może <GradientText>zacząć się dziś</GradientText>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Wystarczy jeden krok, aby realnie zmienić czyjeś życie.</p>
            <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
              Skontaktuj się
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