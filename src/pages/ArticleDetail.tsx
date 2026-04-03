import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ArrowRight, Loader2 } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { useArtykul } from '@/hooks/useArtykuly';
import { urlFor } from '@/lib/sanityClient';
import { useLanguage } from '@/contexts/LanguageContext';
import { articlesTranslations } from '@/i18n/contentTranslations';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';

const staticImages: Record<string, string> = {
  'gdzie-znika-twoja-marza': articleCompetition,
  'chinski-nowy-rok-2026': articleInnovation,
  'przewagi-konkurencyjne-chinskich-firm': articleCompetition,
  'chinski-system-innowacji': articleInnovation,
  'przygotowanie-do-wspolpracy': serviceStrategy,
  'przed-podpisaniem-umowy': articleCompetition,
  'chiny-konkurent-technologiczny': articleInnovation,
  'automatyzacja-robotyzacja-chiny': serviceStrategy,
};

// Portable Text components stylizowane pod design FHS
const portableTextComponents = {
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children }: any) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children }: any) => <h2 className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children }: any) => <h3 className="font-display text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#94c43d] pl-6 my-6 italic text-gray-500">{children}</blockquote>
    ),
  },
  list: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">{children}</ul>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-600">{children}</ol>,
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    em: ({ children }: any) => <em className="italic">{children}</em>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ value, children }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#94c43d] hover:underline">
        {children}
      </a>
    ),
  },
};

const ArticleDetail = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const { language } = useLanguage();
  const [shareSuccess, setShareSuccess] = useState(false);

  const { article, isLoading } = useArtykul(articleSlug || '', language);

  // Fallback — statyczny artykuł ze statycznych danych
  const staticArticles = articlesTranslations[language];
  const staticMatch = staticArticles.find(a => a.slug === articleSlug);

  // Powiązane artykuły — pierwsze 2 z tego samego slug'u (static)
  const relatedArticles = staticArticles
    .filter(a => a.slug !== articleSlug)
    .slice(0, 2)
    .map(a => ({
      title: a.title,
      slug: a.slug,
      image: staticImages[a.slug] || articleCompetition,
    }));

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch {
      // fallback
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
        <Loader2 className="w-10 h-10 text-[#94c43d] animate-spin" />
      </div>
    );
  }

  // Scal dane Sanity z fallback static
  const displayArticle = article || (staticMatch ? {
    _id: staticMatch.slug,
    slug: staticMatch.slug,
    category: staticMatch.category,
    title: staticMatch.title,
    description: staticMatch.description,
    date: staticMatch.date,
    readTime: staticMatch.readTime,
    featured: staticMatch.featured,
    content: undefined,
    mainImage: undefined,
  } : null);

  if (!displayArticle) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-6 pt-40 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Artykuł nie został znaleziony</h1>
          <Link to="/baza-wiedzy" className="text-[#94c43d] hover:underline">Wróć do aktualności</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const heroImage = displayArticle.mainImage?.asset?._ref
    ? urlFor(displayArticle.mainImage).width(1200).height(675).fit('crop').auto('format').url()
    : staticImages[displayArticle.slug] || articleCompetition;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link to="/baza-wiedzy" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#94c43d] transition-colors duration-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Wróć do aktualności
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#94c43d]" />
              <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">{displayArticle.category}</span>
              <div className="w-8 h-0.5 bg-[#94c43d]" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">{displayArticle.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{displayArticle.date}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{displayArticle.readTime}</span></div>
              <span>Autor: Fundacja FHS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-0.5 bg-[#94c43d]" />
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Udostępnij</h3>
                    <div className="w-4 h-0.5 bg-[#94c43d]" />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleShare}
                      title={shareSuccess ? 'Skopiowano!' : 'Kopiuj link'}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        shareSuccess ? 'bg-[#94c43d] text-white' : 'bg-gray-100 hover:bg-[#94c43d] hover:text-white text-gray-500'
                      }`}
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#94c43d] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                  {shareSuccess && <p className="text-xs text-[#94c43d] mt-2">Link skopiowany!</p>}
                </div>

                <div className="p-6 bg-[#94c43d]/10 rounded-2xl border border-[#94c43d]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-0.5 bg-[#94c43d]" />
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Chcesz pomóc?</h3>
                    <div className="w-4 h-0.5 bg-[#94c43d]" />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Wesprzyj naszą misję i pomagaj dzieciom w Afryce.</p>
                  <Link to="/kontakt" className="block w-full text-center px-4 py-3 bg-[#94c43d] text-white rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300">
                    Skontaktuj się
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              {/* Hero image */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 rounded-3xl overflow-hidden shadow-md">
                <img src={heroImage} alt={displayArticle.title} className="w-full aspect-video object-cover" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {/* Jeśli jest Portable Text z Sanity */}
                {displayArticle.content && displayArticle.content.length > 0 ? (
                  <PortableText
                    value={displayArticle.content}
                    components={portableTextComponents}
                  />
                ) : (
                  /* Fallback — opis statyczny */
                  <div>
                    <p className="text-gray-600 leading-relaxed text-lg">{displayArticle.description}</p>
                    <div className="mt-8 p-6 bg-[#94c43d]/5 rounded-2xl border border-[#94c43d]/20">
                      <p className="text-gray-500 text-sm italic">
                        Pełna treść artykułu jest dostępna po dodaniu jej w Sanity Studio.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Powiązane artykuły */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-0.5 bg-[#94c43d]" />
                  <h3 className="font-display font-bold text-2xl text-gray-900">
                    Powiązane <span className="text-[#94c43d]">artykuły</span>
                  </h3>
                  <div className="w-8 h-0.5 bg-[#94c43d]" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} to={`/baza-wiedzy/${related.slug}`} className="group relative rounded-2xl overflow-hidden aspect-video shadow-md">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="font-semibold text-white group-hover:text-[#94c43d] transition-colors">{related.title}</h4>
                        <div className="flex items-center gap-2 text-[#94c43d] opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                          <span className="text-sm">Czytaj więcej</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
