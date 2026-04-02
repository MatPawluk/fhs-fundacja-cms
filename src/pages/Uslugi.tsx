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
import { sanityClient, urlFor } from '@/lib/sanityClient';

import stepChoose from '@/assets/step-choose.jpg';
import stepDeclare from '@/assets/step-declare.jpg';
import stepProgress from '@/assets/step-progress.jpg';
import stepChange from '@/assets/step-change.jpg';

interface Child {
  _id: string;
  name: string;
  age: number;
  gender: 'chłopiec' | 'dziewczynka';
  country: string;
  location: string;
  image: any;
  monthlySupport: number;
  grade: string;
  isAdopted: boolean;
  shortDescPl: string;
  shortDescEn?: string;
  shortDescNl?: string;
  longDescPl: string;
  longDescEn?: string;
  longDescNl?: string;
  needsPl: string[];
  needsEn?: string[];
  needsNl?: string[];
}

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Tabs */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-[#94c43d]" />
                    <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">Jak to działa</span>
                  </div>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Cztery proste <br />
                    <span className="text-[#94c43d]">kroki</span>
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
            <div className="relative flex justify-center lg:pt-0 py-8 lg:py-0">
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

function ChildDetailPopup({ 
  selectedChild, 
  onClose,
  children 
}: { 
  selectedChild: number | null; 
  onClose: () => void;
  children: Child[];
}) {
  const { language } = useLanguage();
  const [imgIndex, setImgIndex] = useState(0);

  // Reset image index when child changes
  useEffect(() => {
    setImgIndex(0);
  }, [selectedChild]);

  if (selectedChild === null) return null;

  const child = children[selectedChild];
  if (!child) return null;

  // Translation helpers
  const getLongDesc = () => {
    if (language === 'en' && child.longDescEn) return child.longDescEn;
    if (language === 'nl' && child.longDescNl) return child.longDescNl;
    return child.longDescPl;
  };

  const getNeeds = () => {
    if (language === 'en' && child.needsEn) return child.needsEn;
    if (language === 'nl' && child.needsNl) return child.needsNl;
    return child.needsPl;
  };

  const getGender = () => {
    if (language === 'en') return child.gender === 'chłopiec' ? 'boy' : 'girl';
    if (language === 'nl') return child.gender === 'chłopiec' ? 'jongen' : 'meisje';
    return child.gender;
  };

  const ageText = language === 'en' ? 'years' : language === 'nl' ? 'jaar' : 'lat';

  const images = [urlFor(child.image).url()]; 

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
                  <span>{child.age} {ageText}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{child.grade}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{getGender()}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 italic">
                  Aby poznać więcej historii dzieci oraz dowiedzieć się o ich aktualnych potrzebach, zapraszamy do kontaktu z nami.
                </p>

                {/* Story */}
                <div className="space-y-3 mb-6">
                  {getLongDesc().split('\n\n').map((p, i) => (
                    <p key={i} className="text-gray-600 text-base leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Needs */}
                <div className="mb-6">
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-3">Potrzeby</p>
                  <div className="flex flex-wrap gap-2">
                    {getNeeds().map((need) => (
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
                  to={`/?donateTo=${encodeURIComponent(child.name)}&amount=${child.monthlySupport}#wesprzyj`}
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

const CHILDREN_PER_PAGE = 6;

const Uslugi = () => {
  const [children, setChildren] = useState<Child[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChild, setSelectedChild] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [faqOpen, setFaqOpen] = useState<Set<number>>(new Set());
  const { language } = useLanguage();
  const pt = uslugiTranslations[language];

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const query = `*[_type == "dziecko"] | order(_createdAt asc)`;
        const data = await sanityClient.fetch(query);
        setChildren(data);
      } catch (error) {
        console.error('Error fetching children:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChildren();
  }, []);

  const getShortDesc = (child: Child) => {
    if (language === 'en' && child.shortDescEn) return child.shortDescEn;
    if (language === 'nl' && child.shortDescNl) return child.shortDescNl;
    return child.shortDescPl;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />

      {isLoading ? (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#94c43d] border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-gray-500 font-display animate-pulse">Pobieranie profilów dzieci...</p>
        </div>
      ) : (
        <>
          {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl text-center mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#94c43d]" />
              <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">Wirtualna adopcja</span>
              <div className="w-8 h-px bg-[#94c43d]" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Zmień życie <span className="text-[#94c43d]">dziecka</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Wybierz dziecko, które chcesz wesprzeć. Twoja regularna pomoc zapewni mu edukację, posiłki i opiekę medyczną.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Children Grid — 3 columns, 6 per page */}
      <section id="children-grid" className="py-16 scroll-mt-8" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {children.slice((currentPage - 1) * CHILDREN_PER_PAGE, currentPage * CHILDREN_PER_PAGE).map((child, index) => {
              const globalIndex = (currentPage - 1) * CHILDREN_PER_PAGE + index;
              return (
                <motion.div
                  key={child._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setSelectedChild(globalIndex)}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-[#94c43d]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative"
                >
                  {/* Status badge if adopted */}
                  {child.isAdopted && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#94c43d] text-[10px] font-bold uppercase tracking-wider shadow-sm border border-[#94c43d]/20">
                        Adoptowane
                      </span>
                    </div>
                  )}

                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img
                      src={urlFor(child.image).url()}
                      alt={child.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                      <div className="flex items-center gap-2 text-white/80 text-[10px] uppercase tracking-wider font-semibold mb-2">
                        <span>{child.age} {language === 'en' ? 'years' : language === 'nl' ? 'jaar' : 'lat'}</span>
                        <span className="w-1 h-1 rounded-full bg-white/40" />
                        <span>{child.location}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold">{child.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 h-10 text-left">
                      {getShortDesc(child)}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1 text-left">Miesięcznie</p>
                        <p className="font-display font-medium text-gray-900 border-b-2 border-[#94c43d] inline-block">{child.monthlySupport} zł</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#fdfdfd] border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#94c43d] group-hover:text-white group-hover:border-[#94c43d] transition-all duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
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
        children={children}
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#94c43d]" />
              <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">FAQ</span>
              <div className="w-8 h-px bg-[#94c43d]" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Najczęściej zadawane <br />
              <span className="text-[#94c43d]">pytania</span>
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#94c43d]" />
              <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">Zacznij pomagać</span>
              <div className="w-8 h-px bg-[#94c43d]" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Twoja pomoc może <br />
              <span className="text-[#94c43d]">zacząć się dziś</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Wystarczy jeden krok, aby realnie zmienić czyjeś życie.</p>
            <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
              Skontaktuj się
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

        </>
      )}

      <Footer />
    </div>
  );
};

export default Uslugi;