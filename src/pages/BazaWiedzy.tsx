import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { bazaWiedzyTranslations } from '@/i18n/pageTranslations';
import { Clock, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import { useArtykuly } from '@/hooks/useArtykuly';
import { urlFor } from '@/lib/sanityClient';

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

function getArticleImage(slug: string, mainImage?: { asset: { _ref: string } }): string {
  if (mainImage?.asset?._ref) {
    return urlFor(mainImage).width(600).height(450).fit('crop').auto('format').url();
  }
  return articleImages[slug] || articleCompetition;
}

const BazaWiedzy = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const { language } = useLanguage();
  const pt = bazaWiedzyTranslations[language];
  const categories = pt.categories;

  const { articles, isLoading } = useArtykuly(language);

  const filteredArticles = activeCategoryIndex === 0
    ? articles
    : articles.filter(article => article.category === categories[activeCategoryIndex]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#94c43d]" />
              <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">{pt.badge}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              {pt.title} <span className="text-[#94c43d]">{pt.titleHighlight}</span>
              <br />{pt.titleEnd}
            </h1>
            <p className="text-lg text-gray-500">{pt.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Categories */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-3 mb-10">
            {categories.map((category, idx) => (
              <button
                key={category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategoryIndex === idx
                    ? 'bg-[#94c43d] text-white'
                    : 'text-gray-500 hover:text-gray-900 border border-gray-200/50'
                }`}
                style={activeCategoryIndex !== idx ? { backgroundColor: '#f0ede8' } : {}}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Loading state */}
          {isLoading && (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="w-8 h-8 text-[#94c43d] animate-spin" />
            </div>
          )}

          {/* Articles Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden border border-gray-200/50 hover:border-[#94c43d]/30 hover:shadow-xl hover:shadow-[#94c43d]/5 transition-all duration-500"
                  style={{ backgroundColor: '#f0ede8' }}
                >
                  <Link to={`/baza-wiedzy/${article.slug}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={getArticleImage(article.slug, article.mainImage as any)}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[#94c43d] text-white">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-display font-semibold text-xl mb-3 text-gray-900 group-hover:text-[#94c43d] transition-colors duration-300 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-500 text-sm mb-6 line-clamp-2">{article.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{article.date}</span></div>
                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{article.readTime}</span></div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}

              {/* Brak artykułów */}
              {filteredArticles.length === 0 && (
                <div className="col-span-3 text-center py-16 text-gray-400">
                  Brak artykułów w tej kategorii.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#94c43d]/10 blur-[150px] rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#94c43d]" />
              <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">Zostań z nami</span>
              <div className="w-8 h-px bg-[#94c43d]" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {pt.ctaTitle} <span className="text-[#94c43d]">{pt.ctaTitleHighlight}</span>
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

export default BazaWiedzy;
