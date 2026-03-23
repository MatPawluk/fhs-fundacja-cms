import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ArrowRight, TrendingUp, ChartBar, Globe } from 'lucide-react';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';

const ArticleDetail = () => {
  const { articleSlug } = useParams();

  // Sample article data - in a real app this would come from a database
  const article = {
    title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach',
    category: 'Analiza',
    date: '10.01.2025',
    readTime: '12 min',
    author: 'Jan Kowalski',
    image: articleCompetition,
    content: `
      <h2>Wprowadzenie</h2>
      <p>Chińskie firmy w ostatniej dekadzie znacząco zwiększyły swoją obecność na globalnych rynkach, w wielu sektorach stając się liderami pod względem skali produkcji, innowacyjności oraz konkurencyjności cenowej. Niniejsza analiza przedstawia kluczowe przewagi konkurencyjne, które umożliwiły ten dynamiczny rozwój.</p>

      <h2>Sektor technologiczny</h2>
      <p>W sektorze technologicznym chińskie firmy wyróżniają się przede wszystkim:</p>
      <ul>
        <li>Skalą inwestycji w R&D, która w przypadku liderów przekracza 15% rocznych przychodów</li>
        <li>Dostępem do ogromnego rynku wewnętrznego, umożliwiającego szybkie skalowanie</li>
        <li>Wsparciem państwowym w ramach strategicznych programów rozwojowych</li>
        <li>Zintegrowanymi łańcuchami dostaw, minimalizującymi koszty produkcji</li>
      </ul>

      <h2>Sektor produkcyjny</h2>
      <p>W sektorze produkcyjnym kluczowe przewagi obejmują:</p>
      <ul>
        <li>Niższe koszty pracy przy jednoczesnym wzroście automatyzacji</li>
        <li>Koncentrację specjalistycznych klastrów przemysłowych</li>
        <li>Elastyczność i szybkość adaptacji do zmieniających się wymagań rynku</li>
        <li>Rozbudowaną infrastrukturę logistyczną i transportową</li>
      </ul>

      <h2>Implikacje dla europejskich firm</h2>
      <p>Rosnąca konkurencyjność chińskich przedsiębiorstw wymaga od firm europejskich strategicznego przemyślenia pozycjonowania rynkowego. Kluczowe rekomendacje obejmują:</p>
      <ol>
        <li>Koncentrację na segmentach premium i niszowych, gdzie chińska konkurencja jest mniej intensywna</li>
        <li>Inwestycje w automatyzację i cyfryzację procesów</li>
        <li>Budowanie partnerstw strategicznych z wiarygodnymi partnerami w Chinach</li>
        <li>Rozwój kompetencji w zakresie zarządzania międzykulturowego</li>
      </ol>

      <h2>Podsumowanie</h2>
      <p>Zrozumienie przewag konkurencyjnych chińskich firm jest niezbędne dla każdej europejskiej organizacji planującej działalność na rynku azjatyckim lub konkurującej z podmiotami z tego regionu. FHS Foundation oferuje kompleksowe analizy sektorowe, pomagające firmom w podejmowaniu świadomych decyzji strategicznych.</p>
    `,
  };

  const relatedArticles = [
    {
      title: 'Chiński system innowacji',
      slug: 'chinski-system-innowacji',
      image: articleInnovation,
    },
    {
      title: 'Automatyzacja w Chinach',
      slug: 'automatyzacja-robotyzacja-chiny',
      image: serviceStrategy,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-28 pb-16 bg-[#f5f3ef] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3ef] via-[#f5f3ef]/90 to-[#f5f3ef]/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link 
            to="/baza-wiedzy"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-lime transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do bazy wiedzy
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime text-gray-900 text-sm font-semibold mb-6">
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              <GradientText>{article.title}</GradientText>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <span>Autor: {article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-[#f5f3ef] text-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                {/* Share buttons */}
                <div className="p-6 bg-white/80 rounded-2xl border border-gray-200/50">
                  <h3 className="font-semibold text-gray-900 mb-4">Udostępnij</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-xl bg-gray-200/50 hover:bg-lime hover:text-gray-900 text-gray-500 flex items-center justify-center transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-gray-200/50 hover:bg-lime hover:text-gray-900 text-gray-500 flex items-center justify-center transition-all duration-300">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Key Stats - Interactive element */}
                <div className="p-6 bg-white/80 rounded-2xl border border-gray-200/50">
                  <h3 className="font-semibold text-gray-900 mb-4">Kluczowe dane</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <p className="text-lime font-bold text-lg">15%+</p>
                        <p className="text-gray-500 text-xs">Inwestycje w R&D</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <p className="text-lime font-bold text-lg">1.4 mld</p>
                        <p className="text-gray-500 text-xs">Rynek wewnętrzny</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-lime/10 rounded-2xl border border-lime/20">
                  <h3 className="font-semibold text-gray-900 mb-3">Potrzebujesz analizy?</h3>
                  <p className="text-gray-500 text-sm mb-4">Przygotujemy dedykowany raport dla Twojej firmy.</p>
                  <Link 
                    to="/kontakt"
                    className="block w-full text-center px-4 py-3 bg-lime text-gray-900 rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300"
                  >
                    Skontaktuj się
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 rounded-3xl overflow-hidden"
              >
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full aspect-video object-cover"
                />
              </motion.div>

              {/* Article body */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg  max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-lime prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Infographic / Visual element */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-white/80 rounded-3xl border border-gray-200/50"
              >
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6 text-center">
                  Kluczowe przewagi chińskich firm
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {['Skala', 'Innowacje', 'Koszty', 'Szybkość'].map((item, index) => (
                    <div key={item} className="text-center p-4 bg-[#f5f3ef]/50 rounded-2xl border border-gray-200/50">
                      <div className="font-display text-4xl font-bold text-lime mb-2">
                        {['50%', '15%', '30%', '2x'][index]}
                      </div>
                      <p className="text-gray-500 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Related Articles */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-8">
                  Powiązane <GradientText>artykuły</GradientText>
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/baza-wiedzy/${related.slug}`}
                      className="group relative rounded-2xl overflow-hidden aspect-video"
                    >
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3ef] via-[#f5f3ef]/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="font-semibold text-gray-900 group-hover:text-lime transition-colors">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-2 text-lime opacity-0 group-hover:opacity-100 transition-opacity mt-2">
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