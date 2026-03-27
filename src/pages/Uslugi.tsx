import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { uslugiTranslations } from '@/i18n/pageTranslations';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X, Heart, MapPin, GraduationCap, Utensils, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

import child1 from '@/assets/child-1.jpg';
import child2 from '@/assets/child-2.jpg';
import child3 from '@/assets/child-3.jpg';
import child4 from '@/assets/child-4.jpg';
import child5 from '@/assets/child-5.jpg';
import child6 from '@/assets/child-6.jpg';
import stepChoose from '@/assets/step-choose.jpg';
import stepDeclare from '@/assets/step-declare.jpg';
import stepProgress from '@/assets/step-progress.jpg';
import stepChange from '@/assets/step-change.jpg';

const children = [
  {
    name: 'Lamin Ceessay',
    age: 9,
    country: 'Gambia',
    image: child1,
    monthlySupport: 150,
    grade: '2 klasa',
    dream: 'Zostać inżynierem',
    shortDesc: 'Lamin to ciekawy świata chłopiec z 2 klasy. Uwielbia matematykę, naukę, sztukę i sport.',
    longDesc: 'Lamin to ambitny uczeń, który z pasją podchodzi do wszystkiego, co robi. Interesuje się matematyką, naukami przyrodniczymi i sztuką, a po lekcjach chętnie gra w piłkę i uczestniczy w zajęciach dodatkowych. Ceni sobie przyjaźń i współpracę – w szkole zawsze można na niego liczyć.\n\nWirtualna adopcja Lamina to szansa, by pomóc mu rozwijać się i osiągać kolejne cele. Twoja obecność może dodać mu odwagi, motywacji i wiary, że marzenia naprawdę się spełniają.',
    needs: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: 'Aminata Jallow',
    age: 7,
    country: 'Gambia',
    image: child2,
    monthlySupport: 150,
    grade: '1 klasa',
    dream: 'Zostać nauczycielką',
    shortDesc: 'Aminata to radosna dziewczynka, która marzy o zostaniu nauczycielką.',
    longDesc: 'Aminata to pogodna, pełna energii dziewczynka, która uwielbia się uczyć. Jej ulubione przedmioty to język angielski i rysowanie. Marzy o tym, by pewnego dnia zostać nauczycielką i pomagać innym dzieciom w swojej wiosce.\n\nDzięki wirtualnej adopcji Aminata może kontynuować naukę, otrzymywać posiłki w szkole i rozwijać swoje talenty. Twoje wsparcie daje jej szansę na lepszą przyszłość.',
    needs: ['Edukacja', 'Posiłki', 'Materiały szkolne'],
  },
  {
    name: 'Ousman Sanneh',
    age: 10,
    country: 'Gambia',
    image: child3,
    monthlySupport: 150,
    grade: '3 klasa',
    dream: 'Zostać lekarzem',
    shortDesc: 'Ousman jest utalentowanym sportowcem i pilnym uczniem trzeciej klasy.',
    longDesc: 'Ousman to chłopiec o wielkim sercu i zaraźliwym uśmiechu. Jest jednym z najlepszych uczniów w swojej klasie i uwielbia grać w piłkę nożną po lekcjach. Marzy o tym, by zostać lekarzem i pomagać ludziom w swojej społeczności.\n\nTwoje wsparcie w ramach wirtualnej adopcji pozwoli Ousmanowi kontynuować edukację, rozwijać swoje pasje i budować przyszłość, o której marzy. Każda wpłata to krok bliżej jego marzeń.',
    needs: ['Edukacja', 'Opieka medyczna', 'Posiłki'],
  },
  {
    name: 'Fatou Touray',
    age: 8,
    country: 'Gambia',
    image: child4,
    monthlySupport: 150,
    grade: '2 klasa',
    dream: 'Podróżować po świecie',
    shortDesc: 'Fatou uwielbia śpiewać i tańczyć. Jest uczennicą drugiej klasy.',
    longDesc: 'Fatou to dziewczynka pełna radości i talentu. Uwielbia muzykę, taniec i spędzanie czasu z przyjaciółkami. W szkole wyróżnia się kreatywnością i chęcią pomocy innym. Jej marzeniem jest podróżowanie i poznawanie nowych kultur.\n\nWirtualna adopcja Fatou to szansa na zapewnienie jej stabilnej edukacji, codziennych posiłków i opieki medycznej. Twoje wsparcie może zmienić jej życie na zawsze.',
    needs: ['Edukacja', 'Posiłki', 'Opieka medyczna'],
  },
  {
    name: 'Modou Bah',
    age: 11,
    country: 'Gambia',
    image: child5,
    monthlySupport: 150,
    grade: '4 klasa',
    dream: 'Zostać pilotem',
    shortDesc: 'Modou to pracowity chłopiec, który marzy o lataniu. Uwielbia naukę i przyrodę.',
    longDesc: 'Modou jest jednym z najstarszych uczniów w swojej klasie i naturalnym liderem. Pomaga młodszym dzieciom w nauce i organizuje mecze piłki nożnej. Fascynuje go przyroda i samoloty – marzy o tym, by pewnego dnia zostać pilotem.\n\nDzięki Twojemu wsparciu Modou może kontynuować naukę, rozwijać swoje zainteresowania i zbliżać się do swoich marzeń. Każdy miesiąc wsparcia to nowa szansa na lepsze jutro.',
    needs: ['Edukacja', 'Materiały szkolne', 'Posiłki'],
  },
  {
    name: 'Isatou Camara',
    age: 6,
    country: 'Gambia',
    image: child6,
    monthlySupport: 150,
    grade: 'Przedszkole',
    dream: 'Zostać piosenkarką',
    shortDesc: 'Isatou to najmłodsza w grupie. Uwielbia śpiewać i bawić się z innymi dziećmi.',
    longDesc: 'Isatou to mała dziewczynka o ogromnym sercu i zaraźliwym śmiechu. Dopiero zaczyna swoją przygodę z edukacją, ale już teraz widać, jak bardzo chłonie wiedzę. Uwielbia kolorować, śpiewać i bawić się z rówieśnikami.\n\nWirtualna adopcja Isatou to szansa na zapewnienie jej bezpiecznego startu w edukacji, regularnych posiłków i podstawowej opieki zdrowotnej. Twoje wsparcie może dać jej fundament na całe życie.',
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
    description: 'Zdecyduj o kwocie miesięcznego wsparcia — już od 150 zł. Wybierz formę płatności i częstotliwość. Każda regularna wpłata ma ogromne znaczenie.',
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
  const [isPaused, setIsPaused] = useState(false);

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
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

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
                        {isActive && (
                          <motion.div
                            className="absolute inset-x-0 top-0 bg-[#94c43d] rounded-full"
                            initial={{ height: '0%' }}
                            animate={{ height: '100%' }}
                            transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: 'linear' }}
                            key={activeIndex}
                          />
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
            <div className="relative">
              <div
                className="relative aspect-[3/4] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
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

                {/* Navigation arrows */}
                <div className="absolute bottom-5 right-5 flex gap-2 z-10">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 flex items-center justify-center text-gray-700 hover:bg-white transition-all active:scale-90"
                    aria-label="Poprzedni"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
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

const Uslugi = () => {
  const [selectedChild, setSelectedChild] = useState<number | null>(null);
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

      {/* Children Grid — 3 columns, spacious cards */}
      <section className="py-16" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {children.map((child, index) => (
              <motion.div
                key={child.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setSelectedChild(index)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-[#94c43d]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Location badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#94c43d] text-white text-xs font-semibold shadow-lg">
                      <MapPin className="w-3 h-3" /> {child.country}
                    </span>
                  </div>
                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display font-bold text-2xl text-white mb-1 drop-shadow-lg">{child.name}</h3>
                    <p className="text-white/80 text-sm">{child.age} lat · {child.grade}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{child.shortDesc}</p>

                  {/* Needs tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {child.needs.map((need) => (
                      <span key={need} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#94c43d]/8 text-[#6b8f2b] text-xs font-medium">
                        {needIcons[need]} {need}
                      </span>
                    ))}
                  </div>

                  {/* Support + CTA */}
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
            ))}
          </div>
        </div>
      </section>

      {/* Child Detail Popup — full-screen overlay with spacious layout */}
      <AnimatePresence>
        {selectedChild !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedChild(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedChild(null)}
                className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="grid md:grid-cols-[45%_55%] h-full max-h-[90vh]">
                {/* Left: Full image */}
                <div className="relative h-64 md:h-full">
                  <img
                    src={children[selectedChild].image}
                    alt={children[selectedChild].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#94c43d] text-white text-xs font-semibold shadow-lg">
                      <MapPin className="w-3 h-3" /> {children[selectedChild].country}
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="overflow-y-auto p-8 md:p-10 flex flex-col">
                  <div className="flex-1">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">{children[selectedChild].name}</h2>
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-gray-400 text-lg">{children[selectedChild].age} lat</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-gray-400 text-lg">{children[selectedChild].grade}</span>
                    </div>

                    {/* Story */}
                    <div className="space-y-4 mb-8">
                      {children[selectedChild].longDesc.split('\n\n').map((p, i) => (
                        <p key={i} className="text-gray-600 text-base leading-relaxed">{p}</p>
                      ))}
                    </div>

                    {/* Dream */}
                    <div className="mb-8 p-5 rounded-2xl bg-[#94c43d]/5 border border-[#94c43d]/10">
                      <p className="text-[#6b8f2b] text-sm font-semibold mb-1">💫 Marzenie</p>
                      <p className="text-gray-700 font-medium">{children[selectedChild].dream}</p>
                    </div>

                    {/* Needs */}
                    <div className="mb-8">
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">Potrzeby</p>
                      <div className="flex flex-wrap gap-2">
                        {children[selectedChild].needs.map((need) => (
                          <span key={need} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                            {needIcons[need]} {need}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      Aby poznać więcej historii dzieci oraz dowiedzieć się o ich aktualnych potrzebach, zapraszamy do kontaktu z nami.
                    </p>
                  </div>

                  {/* Bottom: Support + CTA */}
                  <div className="border-t border-gray-100 pt-6 space-y-4">
                    <div className="p-5 rounded-2xl bg-[#f5f3ef]">
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest font-medium mb-1">Miesięczne wsparcie</p>
                      <p className="font-display font-bold text-3xl text-gray-900">{children[selectedChild].monthlySupport} <span className="text-lg font-semibold text-gray-500">zł</span></p>
                    </div>

                    <Link
                      to="/kontakt"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#94c43d] text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]"
                      onClick={() => setSelectedChild(null)}
                    >
                      <Heart className="w-5 h-5" /> Wesprzyj {children[selectedChild].name.split(' ')[0]}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* How it works — Vertical Tabs */}
      <HowItWorksVerticalTabs />

      {/* FAQ Section */}
      <section className="py-24" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-4">FAQ</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane <GradientText>pytania</GradientText>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Na czym polega wirtualna adopcja?', a: 'To forma regularnego wsparcia konkretnego dziecka, które dzięki Tobie zyskuje dostęp do edukacji, posiłków, opieki medycznej i innych podstawowych potrzeb. Nie adoptujesz go fizycznie - ale realnie zmieniasz jego życie.' },
              { q: 'Dlaczego warto zaangażować się w pomoc?', a: 'Bo to coś więcej niż darowizna - to realna zmiana w życiu konkretnego dziecka. Masz pewność, że Twoje wsparcie trafia tam, gdzie jest naprawdę potrzebne. Dzięki regularnym raportom, zdjęciom i wiadomościom widzisz, jak Twoja pomoc przekłada się na codzienne życie i rozwój dziecka.' },
              { q: 'Jak wygląda proces adopcji krok po kroku?', a: 'Wybierasz dziecko i deklarujesz miesięczne wsparcie. My dopasowujemy formę pomocy do Twoich możliwości. Regularnie otrzymujesz informacje o postępach dziecka. Obserwujesz, jak Twoje wsparcie zmienia jego codzienność i przyszłość.' },
              { q: 'Ile kosztuje wirtualna adopcja?', a: 'Wsparcie zaczyna się od 150 zł miesięcznie - to orientacyjna kwota, która pozwala pokryć podstawowe potrzeby dziecka. Możesz jednak samodzielnie zdecydować, ile i jak często chcesz pomagać. Każda, nawet najmniejsza regularna wpłata, naprawdę ma znaczenie.' },
              { q: 'Czy mogę mieć kontakt z dzieckiem, które wspieram?', a: 'Tak - to jeden z najpiękniejszych aspektów wirtualnej adopcji. Regularnie otrzymujesz zdjęcia, wiadomości i raporty o postępach dziecka. W ten sposób możesz śledzić jego rozwój, budować relację i zobaczyć, jak realnie zmienia się jego życie dzięki Twojemu wsparciu.' },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-[#94c43d]/30 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-display font-semibold text-lg text-gray-900 group-hover:text-[#94c43d] transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.a}</div>
              </motion.details>
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
