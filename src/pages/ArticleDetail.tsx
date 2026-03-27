import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ArrowRight, Plus, X } from 'lucide-react';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';

const ArticleDetail = () => {
  const { articleSlug } = useParams();
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const article = {
    title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach',
    category: 'Aktualności',
    date: '10.01.2025',
    readTime: '12 min',
    author: 'Fundacja FHS',
    image: articleCompetition,
    content: `
      <h2>Wprowadzenie</h2>
      <p>Chińskie firmy w ostatniej dekadzie znacząco zwiększyły swoją obecność na globalnych rynkach, w wielu sektorach stając się liderami pod względem skali produkcji, innowacyjności oraz konkurencyjności cenowej.</p>
      <h2>Sektor technologiczny</h2>
      <p>W sektorze technologicznym chińskie firmy wyróżniają się przede wszystkim:</p>
      <ul>
        <li>Skalą inwestycji w R&D, która w przypadku liderów przekracza 15% rocznych przychodów</li>
        <li>Dostępem do ogromnego rynku wewnętrznego, umożliwiającego szybkie skalowanie</li>
        <li>Wsparciem państwowym w ramach strategicznych programów rozwojowych</li>
      </ul>
      <h2>Podsumowanie</h2>
      <p>Zrozumienie przewag konkurencyjnych chińskich firm jest niezbędne dla każdej europejskiej organizacji planującej działalność na rynku azjatyckim.</p>
    `,
  };

  const relatedArticles = [
    { title: 'Chiński system innowacji', slug: 'chinski-system-innowacji', image: articleInnovation },
    { title: 'Automatyzacja w Chinach', slug: 'automatyzacja-robotyzacja-chiny', image: serviceStrategy },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />

      {/* Header - light theme */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link to="/baza-wiedzy" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#94c43d] transition-colors duration-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Wróć do aktualności
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d] text-white text-sm font-semibold mb-6">{article.category}</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{article.date}</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{article.readTime}</span></div>
              <span>Autor: {article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-4">Udostępnij</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#94c43d] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300"><Share2 className="w-5 h-5" /></button>
                    <button className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#94c43d] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300"><Bookmark className="w-5 h-5" /></button>
                  </div>
                </div>
                <div className="p-6 bg-[#94c43d]/10 rounded-2xl border border-[#94c43d]/20">
                  <h3 className="font-semibold text-gray-900 mb-3">Chcesz pomóc?</h3>
                  <p className="text-gray-600 text-sm mb-4">Wesprzyj naszą misję i pomagaj dzieciom w Afryce.</p>
                  <Link to="/kontakt" className="block w-full text-center px-4 py-3 bg-[#94c43d] text-white rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300">Skontaktuj się</Link>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-3 order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 rounded-3xl overflow-hidden shadow-md">
                <img src={article.image} alt={article.title} className="w-full aspect-video object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-[#94c43d] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Gallery Section */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Galeria zdjęć</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      <button onClick={() => setGalleryImages(prev => prev.filter((_, idx) => idx !== i))} className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#94c43d] flex flex-col items-center justify-center cursor-pointer transition-colors group">
                    <Plus className="w-8 h-8 text-gray-400 group-hover:text-[#94c43d] mb-2" />
                    <span className="text-gray-400 text-sm group-hover:text-[#94c43d]">Dodaj zdjęcie</span>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setGalleryImages(prev => [...prev, url]);
                      }
                    }} />
                  </label>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-8">Powiązane <GradientText>artykuły</GradientText></h3>
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
