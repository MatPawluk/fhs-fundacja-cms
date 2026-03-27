import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { uslugiTranslations } from '@/i18n/pageTranslations';
import { ArrowRight, ChevronDown, X, Heart, MapPin } from 'lucide-react';

import child1 from '@/assets/child-1.jpg';
import child2 from '@/assets/child-2.jpg';
import child3 from '@/assets/child-3.jpg';
import child4 from '@/assets/child-4.jpg';

const children = [
  {
    name: 'Lamin Ceessay',
    age: 9,
    country: 'Gambia',
    image: child1,
    monthlySupport: 150,
    shortDesc: 'Lamin to ciekawy świata chłopiec z 2 klasy. Uwielbia matematykę, naukę, sztukę i sport.',
    longDesc: 'Lamin to ambitny uczeń, który z pasją podchodzi do wszystkiego, co robi. Interesuje się matematyką, naukami przyrodniczymi i sztuką, a po lekcjach chętnie gra w piłkę i uczestniczy w zajęciach dodatkowych. Ceni sobie przyjaźń i współpracę – w szkole zawsze można na niego liczyć.\n\nWirtualna adopcja Lamina to szansa, by pomóc mu rozwijać się i osiągać kolejne cele. Twoja obecność może dodać mu odwagi, motywacji i wiary, że marzenia naprawdę się spełniają.',
  },
  {
    name: 'Aminata Jallow',
    age: 7,
    country: 'Gambia',
    image: child2,
    monthlySupport: 150,
    shortDesc: 'Aminata to radosna dziewczynka, która marzy o zostaniu nauczycielką.',
    longDesc: 'Aminata to pogodna, pełna energii dziewczynka, która uwielbia się uczyć. Jej ulubione przedmioty to język angielski i rysowanie. Marzy o tym, by pewnego dnia zostać nauczycielką i pomagać innym dzieciom w swojej wiosce.\n\nDzięki wirtualnej adopcji Aminata może kontynuować naukę, otrzymywać posiłki w szkole i rozwijać swoje talenty. Twoje wsparcie daje jej szansę na lepszą przyszłość.',
  },
  {
    name: 'Ousman Sanneh',
    age: 10,
    country: 'Gambia',
    image: child3,
    monthlySupport: 150,
    shortDesc: 'Ousman jest utalentowanym sportowcem i pilnym uczniem trzeciej klasy.',
    longDesc: 'Ousman to chłopiec o wielkim sercu i zaraźliwym uśmiechu. Jest jednym z najlepszych uczniów w swojej klasie i uwielbia grać w piłkę nożną po lekcjach. Marzy o tym, by zostać lekarzem i pomagać ludziom w swojej społeczności.\n\nTwoje wsparcie w ramach wirtualnej adopcji pozwoli Ousmanowi kontynuować edukację, rozwijać swoje pasje i budować przyszłość, o której marzy. Każda wpłata to krok bliżej jego marzeń.',
  },
  {
    name: 'Fatou Touray',
    age: 8,
    country: 'Gambia',
    image: child4,
    monthlySupport: 150,
    shortDesc: 'Fatou uwielbia śpiewać i tańczyć. Jest uczennicą drugiej klasy.',
    longDesc: 'Fatou to dziewczynka pełna radości i talentu. Uwielbia muzykę, taniec i spędzanie czasu z przyjaciółkami. W szkole wyróżnia się kreatywnością i chęcią pomocy innym. Jej marzeniem jest podróżowanie i poznawanie nowych kultur.\n\nWirtualna adopcja Fatou to szansa na zapewnienie jej stabilnej edukacji, codziennych posiłków i opieki medycznej. Twoje wsparcie może zmienić jej życie na zawsze.',
  },
];

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

      {/* Children Grid */}
      <section className="py-16" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {children.map((child, index) => (
              <motion.div
                key={child.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedChild(index)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-200/50 hover:border-[#94c43d]/30 hover:shadow-lg transition-all duration-300 bg-white/80"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={child.image} alt={child.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#94c43d] text-white text-xs font-medium">
                      <MapPin className="w-3 h-3" /> {child.country}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-1">{child.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{child.age} lat</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{child.shortDesc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Miesięczne wsparcie</p>
                      <p className="font-display font-bold text-xl text-gray-900">{child.monthlySupport} zł</p>
                    </div>
                    <button className="px-4 py-2 bg-[#94c43d] text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                      Wesprzyj
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Child Detail Popup */}
      <AnimatePresence>
        {selectedChild !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedChild(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedChild(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[3/4] md:aspect-auto">
                  <img src={children[selectedChild].image} alt={children[selectedChild].name} className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#94c43d] text-white text-xs font-medium">
                      <MapPin className="w-3 h-3" /> {children[selectedChild].country}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">{children[selectedChild].name}</h2>
                  <p className="text-gray-400 mb-6">{children[selectedChild].age} lat</p>

                  <div className="prose prose-sm max-w-none mb-8">
                    {children[selectedChild].longDesc.split('\n\n').map((p, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm mb-6">
                    Aby poznać więcej historii dzieci oraz dowiedzieć się o ich aktualnych potrzebach, zapraszamy do kontaktu z nami.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#f5f3ef] mb-6">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Miesięczne wsparcie</p>
                    <p className="font-display font-bold text-2xl text-gray-900">{children[selectedChild].monthlySupport} zł</p>
                  </div>

                  <Link
                    to="/kontakt"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#94c43d] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]"
                    onClick={() => setSelectedChild(null)}
                  >
                    <Heart className="w-5 h-5" /> Wesprzyj {children[selectedChild].name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
