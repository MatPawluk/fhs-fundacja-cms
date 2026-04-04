import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Navbar } from '@/components/Navbar';
import { toast } from 'sonner';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GradientText } from '@/components/GradientText';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { statsTranslations, carouselServicesTranslations } from '@/i18n/contentTranslations';
import { useArtykuly } from '@/hooks/useArtykuly';
import { useProjekty } from '@/hooks/useProjekty';
import { urlFor } from '@/lib/sanityClient';
import { PartnersSection } from '@/components/PartnersSection';
import { ThreeDPhotoBackground } from '@/components/ThreeDPhotoBackground';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Heart, Calendar, Clock, CreditCard } from 'lucide-react';

// Hero Background Images
import hero01 from '@/assets/hero-bg-images/hero-01.webp';
import hero02 from '@/assets/hero-bg-images/hero-02.webp';
import hero03 from '@/assets/hero-bg-images/hero-03.webp';
import hero04 from '@/assets/hero-bg-images/hero-04.webp';
import hero05 from '@/assets/hero-bg-images/hero-05.webp';
import hero06 from '@/assets/hero-bg-images/hero-06.webp';
import hero07 from '@/assets/hero-bg-images/hero-07.webp';
import hero08 from '@/assets/hero-bg-images/hero-08.webp';
import hero09 from '@/assets/hero-bg-images/hero-09.webp';
import hero10 from '@/assets/hero-bg-images/hero-10.webp';
import hero11 from '@/assets/hero-bg-images/hero-11.webp';
import hero12 from '@/assets/hero-bg-images/hero-12.webp';
import hero13 from '@/assets/hero-bg-images/hero-13.webp';
import hero14 from '@/assets/hero-bg-images/hero-14.webp';
import hero15 from '@/assets/hero-bg-images/hero-15.webp';
import hero16 from '@/assets/hero-bg-images/hero-16.webp';
import hero17 from '@/assets/hero-bg-images/hero-17.webp';
import hero18 from '@/assets/hero-bg-images/hero-18.webp';
import hero19 from '@/assets/hero-bg-images/hero-19.webp';

const localHeroImages = [
  hero01, hero02, hero03, hero04, hero05, hero06, hero07, hero08, hero09, hero10,
  hero11, hero12, hero13, hero14, hero15, hero16, hero17, hero18, hero19
];

import wyjazdyOkladka from '@/assets/projects/wyjazdy-okladka.jpg';
import edukacjaOkladka from '@/assets/projects/edukacja-okladka.jpg';
import misjaOkladka from '@/assets/projects/misja-okladka.jpg';
import zbiorkiOkladka from '@/assets/projects/zbiorki-okladka.jpg';
import ministerstwoOkladka from '@/assets/projects/ministerstwo-okladka.jpg';
import wsprzyjNas from '@/assets/wesprzyj-nas.jpg';
import wsprzyjNas2 from '@/assets/Karuzela 19.JPG';
import { DomPolskiGallery } from '@/components/DomPolskiGallery';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import logoP24 from '@/assets/logo-p24.png';
import logoMastercard from '@/assets/logo-mastercard.png';
import logoVisa from '@/assets/logo-visa.png';
import logoBlik from '@/assets/logo-blik.png';

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

const carouselImages = [wyjazdyOkladka, edukacjaOkladka, misjaOkladka, zbiorkiOkladka, ministerstwoOkladka];
const carouselSlugs = ['wyjazdy-wolontariackie', 'wsparcie-edukacyjne', 'wolontariat-misyjny', 'zbiorki-charytatywne', 'wspolpraca-z-ministerstwami'];

const DONATION_AMOUNTS = [5, 10, 20, 50, 100, 200];

const Index = () => {
  const { t, language } = useLanguage();

  const indexTranslations = {
    pl: {
      poznajBadge: 'Poznaj Fundację',
      poznajTitle: 'Poznaj Fundację',
      poznajP1: 'Fundacja FHS to organizacja non-profit działająca od 2022 roku, której misją jest poprawa warunków życia i edukacji w społecznościach Afryki Zachodniej.',
      poznajP2: 'Nasze działania koncentrują się wokół edukacji, opieki zdrowotnej, rozwoju infrastruktury oraz wspierania lokalnych inicjatyw przedsiębiorczych.',
      poznajCta: 'O Fundacji',
      aktualnosci: 'Aktualności',
      aktWszystkie: 'Wszystkie aktualności',
      wsprzyjBadge: 'Wesprzyj',
      wsprzyjTitle: 'Jak możesz',
      wsprzyjHighlight: 'pomóc?',
      wsprzyjDesc: 'Twoje wsparcie zmienia życie dzieci w Afryce. Każda wpłata, nawet najmniejsza, trafia bezpośrednio tam, gdzie jest najbardziej potrzebna - na edukację, posiłki i opiekę medyczną.',
      wsprzyjAdopcja: 'Wirtualna adopcja - od 150 zł/mies.',
      wsprzyjJednorazowa: 'Jednorazowa darowizna',
      wsprzyjWolontariat: 'Wolontariat w Gambii',
      wsprzyjCta: 'Wesprzyj misję',
      donacjaTitle: 'Wpłać darowiznę',
      donacjaDesc: 'Tylko dzięki Twojemu wsparciu możemy rozwijać się i prowadzić nasze działania!',
      donacjaKwota: 'Dowolna kwota (zł)',
      donacjaCta: 'Wspieram!',
      parallaxTitle: 'Twoja pomoc realnie zmienia życie',
      parallaxItems: [
        { value: '200 PLN', desc: 'Średnia pensja miesięczna w Gambii' },
        { value: '130 PLN', desc: 'Miesięczny koszt dodatkowych lekcji angielskiego dla dziecka' },
        { value: '100 PLN', desc: 'Podstawowe leczenie stomatologiczne u dentysty' },
        { value: '170 PLN', desc: 'Miesięczne utrzymanie na studiach: czesne, akademik, wyżywienie' },
      ],
      domPolskiBadge: 'Dom Polski',
      domPolskiTitle: 'Nasze miejsce spotkań, kultury i odpoczynku',
      domPolskiDesc: 'Dom Polski w Gambii to serce Fundacji FHS – wyjątkowa przestrzeń, w której polska gościnność spotyka się z afrykańskim słońcem i lokalną społecznością. To miejsce stworzone z myślą o wolontariuszach, podróżnikach z misją i wszystkich, którzy chcą doświadczyć prawdziwej wspólnoty, odpocząć i poczuć się jak w domu. Z basenem, bujną zielenią i klimatycznym zapleczem noclegowym.',
      domPolskiCta: 'Sprawdź dostępność!',
    },
    en: {
      poznajBadge: 'About Foundation',
      poznajTitle: 'About Foundation',
      poznajP1: 'FHS Foundation is a non-profit organization operating since 2022, whose mission is to improve living conditions and education in West African communities.',
      poznajP2: 'Our activities focus on education, healthcare, infrastructure development and supporting local entrepreneurial initiatives.',
      poznajCta: 'About Foundation',
      aktualnosci: 'News',
      aktWszystkie: 'All news',
      wsprzyjBadge: 'Support',
      wsprzyjTitle: 'How you can',
      wsprzyjHighlight: 'help?',
      wsprzyjDesc: 'Your support changes children\'s lives in Africa. Every donation, even the smallest, goes directly where it\'s needed most - education, meals and medical care.',
      wsprzyjAdopcja: 'Virtual adoption - from 150 PLN/month',
      wsprzyjJednorazowa: 'One-time donation',
      wsprzyjWolontariat: 'Volunteering in The Gambia',
      wsprzyjCta: 'Support the mission',
      donacjaTitle: 'Make a donation',
      donacjaDesc: 'Only thanks to your support can we grow and continue our activities!',
      donacjaKwota: 'Custom amount (PLN)',
      donacjaCta: 'I support!',
      parallaxTitle: 'Your help truly changes lives',
      parallaxItems: [
        { value: '200 PLN', desc: 'Average monthly salary in The Gambia' },
        { value: '130 PLN', desc: 'Monthly cost of extra English lessons for a child' },
        { value: '100 PLN', desc: 'Basic dental treatment' },
        { value: '170 PLN', desc: 'Monthly university costs: tuition, dormitory, food' },
      ],
      domPolskiBadge: 'Polish House',
      domPolskiTitle: 'Our meeting place of culture and rest',
      domPolskiDesc: 'The Polish House in The Gambia is the heart of FHS Foundation - a unique space where Polish hospitality meets African sun and local community. A place created for volunteers, travelers with a mission and everyone who wants to experience real community, rest and feel at home. With a pool, lush greenery and atmospheric accommodation.',
      domPolskiCta: 'Check availability!',
    },
    nl: {
      poznajBadge: 'Over de Stichting',
      poznajTitle: 'Over de Stichting',
      poznajP1: 'FHS Foundation is een non-profitorganisatie die sinds 2022 actief is en als missie heeft de levensomstandigheden en het onderwijs in West-Afrikaanse gemeenschappen te verbeteren.',
      poznajP2: 'Onze activiteiten richten zich op onderwijs, gezondheidszorg, infrastructuurontwikkeling en het ondersteunen van lokale ondernemersinitiatieven.',
      poznajCta: 'Over de Stichting',
      aktualnosci: 'Nieuws',
      aktWszystkie: 'Alle nieuws',
      wsprzyjBadge: 'Steun',
      wsprzyjTitle: 'Hoe u kunt',
      wsprzyjHighlight: 'helpen',
      wsprzyjDesc: 'Uw steun verandert het leven van kinderen in Afrika. Elke donatie, zelfs de kleinste, gaat direct waar het het meest nodig is - onderwijs, maaltijden en medische zorg.',
      wsprzyjAdopcja: 'Virtuele adoptie - vanaf 150 PLN/maand',
      wsprzyjJednorazowa: 'Eenmalige donatie',
      wsprzyjWolontariat: 'Vrijwilligerswerk in Gambia',
      wsprzyjCta: 'Steun de missie',
      donacjaTitle: 'Doe een donatie',
      donacjaDesc: 'Alleen dankzij uw steun kunnen wij groeien en onze activiteiten voortzetten!',
      donacjaKwota: 'Vrij bedrag (PLN)',
      donacjaCta: 'Ik steun!',
      parallaxTitle: 'Uw hulp verandert echt levens',
      parallaxItems: [
        { value: '200 PLN', desc: 'Gemiddeld maandsalaris in Gambia' },
        { value: '130 PLN', desc: 'Maandelijkse kosten van extra Engelse lessen voor een kind' },
        { value: '100 PLN', desc: 'Basis tandheelkundige behandeling' },
        { value: '170 PLN', desc: 'Maandelijkse universiteitskosten: collegegeld, slaapzaal, eten' },
      ],
      domPolskiBadge: 'Pools Huis',
      domPolskiTitle: 'Onze ontmoetingsplek van cultuur en rust',
      domPolskiDesc: 'Het Poolse Huis in Gambia is het hart van de FHS Foundation - een unieke ruimte waar Poolse gastvrijheid de Afrikaanse zon en de lokale gemeenschap ontmoet. Een plek gemaakt voor vrijwilligers, reizigers met een missie en iedereen die echte gemeenschap wil ervaren.',
      domPolskiCta: 'Controleer beschikbaarheid!',
    },
  };

  const ix = indexTranslations[language];

  const heroRef = useRef<HTMLDivElement>(null);
  const taxSectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(20);
  const [customAmount, setCustomAmount] = useState('20,00');
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [donorEmail, setDonorEmail] = useState('');
  const [donateToName, setDonateToName] = useState<string | null>(null);
  const isCarouselInView = useInView(carouselRef, { amount: 0.3 });
  const stats = statsTranslations[language];
  const { articles: allArticles } = useArtykuly(language);
  const articles = allArticles.slice(0, 3);

  const { projekty } = useProjekty(language);

  const baseServices = projekty.length > 0
    ? projekty.map(p => ({
      title: p.title,
      description: p.description,
      slug: p.slug,
      image: urlFor(p.mainImage).url(),
    }))
    : carouselServicesTranslations[language].map((s, i) => ({
      ...s,
      image: carouselImages[i],
      slug: carouselSlugs[i],
    }));

  // Carousel state
  const logicalIndex = selectedIndex;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const { scrollYProgress: taxScrollY } = useScroll({
    target: taxSectionRef,
    offset: ["start end", "end start"]
  });

  const taxBgY = useTransform(taxScrollY, [0, 1], ["60%", "40%"]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isCarouselInView || !emblaApi) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isCarouselInView, emblaApi]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toFixed(2).replace('.', ','));
  };

  // Pre-fill from URL if coming from Uslugi
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlAmount = params.get('amount');
    const donateTo = params.get('donateTo');

    if (urlAmount) {
      const numAmount = parseFloat(urlAmount);
      if (!isNaN(numAmount)) {
        setSelectedAmount(numAmount);
        setCustomAmount(numAmount.toFixed(2).replace('.', ','));
      }
    }

    if (donateTo) {
      setDonateToName(donateTo);
    }

    // Explicit scroll to #wesprzyj if params are present
    if (donateTo || urlAmount || window.location.hash === '#wesprzyj') {
      setTimeout(() => {
        const element = document.getElementById('wesprzyj');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Initiating donation process...', { donorEmail, customAmount });

    if (!donorEmail || !donorEmail.includes('@')) {
      toast.error('Proszę podać poprawny adres e-mail');
      return;
    }

    const donationAmount = parseFloat(customAmount.replace(',', '.'));
    if (isNaN(donationAmount) || donationAmount <= 0) {
      toast.error('Proszę podać poprawną kwotę');
      return;
    }

    setIsPaymentLoading(true);
    try {
      const donateTo = new URLSearchParams(window.location.search).get('donateTo');
      const description = donateTo ? `Wirtualna adopcja - ${donateTo}` : 'Darowizna dla Fundacji FHS';

      console.log('Calling API /api/create-transaction...', { donationAmount, description });

      const response = await fetch('/api/create-transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: donationAmount,
          email: donorEmail,
          description
        }),
      });

      console.log('API Response status:', response.status);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Endpoint /api nie został znaleziony. Jeśli testujesz lokalnie, uruchom projekt komendą: npx vercel dev');
        }
        const errData = await response.json();
        throw new Error(errData.error || `Błąd serwera (${response.status})`);
      }

      const data = await response.json();
      console.log('API Response data:', data);

      if (data.redirectUrl) {
        console.log('Redirecting to P24:', data.redirectUrl);
        window.location.href = data.redirectUrl;
      } else {
        throw new Error(data.error || 'Błąd serwera (brak URL przekierowania)');
      }
    } catch (error: any) {
      console.error('Payment failure detail:', error);
      toast.error(`Wystąpił błąd: ${error.message}`);
    } finally {
      setIsPaymentLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#0a0a0a] w-full max-w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <ThreeDPhotoBackground images={localHeroImages} />
          </motion.div>
        </AnimatePresence>


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
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed px-4">
              {t.hero.subtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col items-center gap-4">
              <a href="#poznaj" className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#94c43d] text-white rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
                {t.hero.cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
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
      <section ref={carouselRef} className="relative py-24 overflow-hidden" style={{ backgroundColor: '#040404' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="w-full pl-6 lg:pl-[calc(max(1.5rem,(100vw-1400px)/2+3rem))]">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column: Heading & Navigation - YinYang Gradient Overlay */}
            <div className="lg:w-1/3 flex-shrink-0 pr-6 lg:pr-12 lg:sticky lg:top-32 lg:pb-12 z-30 pointer-events-none">
              {/* Solid-to-transparent fade protection for text - purely for depth now */}
              <div className="absolute inset-0 z-0 lg:-ml-24 lg:-my-24 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 pointer-events-auto"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[#94c43d]" />
                  <span className="text-white font-display font-medium tracking-wider uppercase text-sm">{t.services.viewAll}</span>
                  <div className="w-8 h-0.5 bg-[#94c43d]" />
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Nasze działania <br />
                  <span className="text-[#94c43d]">w Afryce</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 max-w-sm leading-relaxed">
                  Realizujemy projekty, które realnie zmieniają przyszłość lokalnych społeczności w Gambii.
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={scrollPrev}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#94c43d] hover:border-[#94c43d] transition-all duration-300 group"
                  >
                    <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#94c43d] hover:border-[#94c43d] transition-all duration-300 group"
                  >
                    <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="mt-12">
                  <div className="flex gap-2">
                    {baseServices.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-1 rounded-full transition-all duration-500 ${index === logicalIndex ? 'w-12 bg-[#94c43d]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div
              className="flex-1 w-full overflow-hidden"
              ref={emblaRef}
            >
              <div className="flex ml-[-24px]">
                {baseServices.map((service, index) => {
                  const displayNum = index + 1;

                  return (
                    <div
                      key={`${index}-${service.slug}`}
                      className="flex-[0_0_280px] sm:flex-[0_0_340px] pl-6"
                    >
                      <div className="group relative h-[480px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-gray-900 shadow-2xl">
                        {/* Image Layer */}
                        <div className="absolute inset-0">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                        </div>

                        {/* Large background number */}
                        <div className="absolute top-8 left-8 select-none">
                          <span className="font-display font-black text-8xl text-white/5 tracking-tighter leading-none inline-block transform -translate-x-2 -translate-y-2">
                            {String(displayNum).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Content Layer */}
                        <div className="relative h-full flex flex-col justify-end p-8 sm:p-10">
                          <div>
                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#94c43d] transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {service.description}
                            </p>
                            <Link
                              to={`/uslugi/${service.slug}`}
                              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-[#94c43d] hover:border-[#94c43d] hover:text-white transition-all duration-300 uppercase tracking-wide group/btn"
                            >
                              <span>Dowiedz się więcej</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poznaj Fundację Section */}
      <section id="poznaj" className="py-20 scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#94c43d]" />
                <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">{ix.poznajBadge}</span>
                <div className="w-8 h-0.5 bg-[#94c43d]" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Poznaj <br />
                <span className="text-[#94c43d]">Fundację</span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>{ix.poznajP1.split(' ').slice(0, 3).join(' ')}</strong> {ix.poznajP1.split(' ').slice(3).join(' ')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {ix.poznajP2}
              </p>
              <Link to="/o-nas" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:border-[#94c43d] hover:text-[#94c43d] transition-all duration-300 text-sm font-medium">
                {ix.poznajCta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <PhotoCarousel />

      {/* Aktualności Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#94c43d]" />
                <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">{ix.aktualnosci}</span>
                <div className="w-8 h-0.5 bg-[#94c43d]" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Nasze <br />
                <span className="text-[#94c43d]">Aktualności</span>
              </h2>
            </div>
            <Link to="/baza-wiedzy" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:border-[#94c43d] hover:text-[#94c43d] transition-all duration-300 text-sm font-medium">
              {ix.aktWszystkie} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article key={article.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <Link to={`/baza-wiedzy/${article.slug}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <img
                      src={(article.mainImage as any)?.asset?._ref ? urlFor(article.mainImage as any).width(500).height(375).fit('crop').auto('format').url() : (articleImages[article.slug] || articleCompetition)}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
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
      <section id="wesprzyj" className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#94c43d]" />
                <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">{ix.wsprzyjBadge}</span>
                <div className="w-8 h-0.5 bg-[#94c43d]" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {ix.wsprzyjTitle} <br />
                <span className="text-[#94c43d]">{ix.wsprzyjHighlight}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {ix.wsprzyjDesc}
              </p>
              <div className="mb-10 space-y-4">
                <p className="text-gray-500 font-display font-medium text-sm uppercase tracking-wider">Wesprzyj nas i przekaż 1.5% podatku</p>
                <div className="flex items-center gap-3 text-gray-500 font-display font-medium text-sm uppercase tracking-wider">
                  <span className="opacity-70">KRS</span>
                  <span className="text-[#94c43d] font-bold">0001104851</span>
                </div>
                <div>
                  <p className="text-gray-900 font-display font-bold text-sm uppercase tracking-wider">
                    CEL SZCZEGÓŁOWY 1,5%:<br/>
                    <span className="text-[#94c43d] leading-relaxed block mt-1">WOLONTARIAT MEDYCZNY W AFRYCE</span>
                  </p>
                </div>
              </div>

              <div ref={taxSectionRef} className="relative mb-16 group">
                <div className="absolute -inset-4 bg-[#94c43d]/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <motion.span className="block font-display font-black text-[12rem] lg:text-[15rem] leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-cover bg-center select-none pb-4"
                    style={{
                      backgroundImage: `url(${wsprzyjNas})`,
                      WebkitBackgroundClip: 'text',
                      backgroundPositionY: taxBgY,
                      filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.1))'
                    }}>
                    1.5%
                  </motion.span>
                  <div className="absolute -bottom-6 right-4 lg:right-30">

                  </div>
                </div>
              </div>

            </motion.div>

            {/* Payment Gateway Placeholder */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl p-8 border border-gray-200/50">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#94c43d]/10 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-7 h-7 text-[#94c43d]" />
                  </div>

                  {/* "Supporting" badge */}
                  {donateToName && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#94c43d] text-white text-xs font-bold mb-4 shadow-sm"
                    >
                      <Heart className="w-3 h-3 fill-white" />
                      Wspierasz: {donateToName}
                    </motion.div>
                  )}

                  <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{ix.donacjaTitle}</h3>
                  <p className="text-gray-500 text-sm">{ix.donacjaDesc}</p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {DONATION_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedAmount === amount
                        ? 'bg-[#94c43d] text-white shadow-md'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-[#94c43d]/50'
                        }`}
                    >
                      {amount} zł
                    </button>
                  ))}
                </div>

                <form onSubmit={handleDonation}>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-500 mb-2">Twój e-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="email@przyklad.pl"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-[#94c43d] focus:border-transparent transition-all"
                      style={{ backgroundColor: '#e8e5e0' }}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-gray-500 mb-2">{ix.donacjaKwota}</label>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/50 text-gray-900 text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#94c43d] focus:border-transparent transition-all"
                      style={{ backgroundColor: '#e8e5e0' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPaymentLoading}
                    className="w-full py-4 bg-[#94c43d] text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isPaymentLoading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        {ix.donacjaCta} <span className="text-xl"></span>
                      </>
                    )}
                  </button>
                </form>

                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 p-4 rounded-2xl bg-gray-50/50 border border-gray-200/30">
                  <img src={logoP24} alt="Przelewy24" className="h-8 w-auto grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                  <img src={logoBlik} alt="BLIK" className="h-12 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                  <img src={logoVisa} alt="VISA" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                  <img src={logoMastercard} alt="Mastercard" className="h-16 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Twoja pomoc realnie zmienia życie - Parallax */}
      <section className="relative py-24 overflow-hidden" style={{ clipPath: 'inset(0)' }}>
        <div className="fixed inset-0 -z-10">
          <img src={wsprzyjNas2} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white italic mb-4">{ix.parallaxTitle}</h2>
            <div className="w-12 h-1 bg-[#94c43d] mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {ix.parallaxItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-6 text-center backdrop-blur-md bg-white/85 border border-white/30 shadow-lg cursor-default group hover:bg-white/95 hover:shadow-2xl hover:border-[#94c43d]/40 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#94c43d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-[#94c43d] transition-colors duration-300">{item.value}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 overflow-hidden w-full max-w-full">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#94c43d]" />
                <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">{ix.domPolskiBadge}</span>
                <div className="w-8 h-0.5 bg-[#94c43d]" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Nasz dom <br />
                <span className="text-[#94c43d]">w Gambii</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {ix.domPolskiDesc}
              </p>
              <Link to="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-[#94c43d] hover:text-[#94c43d] transition-all duration-300 text-sm font-medium">
                {ix.domPolskiCta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <DomPolskiGallery />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* FAQ Section */}
      <HomeFAQSection />

      {/* CTA Section */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#94c43d]/10 blur-[150px] rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="relative p-12 lg:p-20 rounded-[4rem] bg-[#94c43d]/5 border border-[#94c43d]/10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#94c43d]/15 blur-[100px] rounded-full pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="relative z-10 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#94c43d]" />
                <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">Zostań z nami</span>
                <div className="w-8 h-0.5 bg-[#94c43d]" />
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight text-balance text-center mx-auto">
                {t.cta.title} <span className="text-[#94c43d]">{t.cta.titleHighlight}</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed">{t.cta.subtitle}</p>
              <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
                {t.cta.button}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;