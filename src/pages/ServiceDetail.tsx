import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Camera, X } from 'lucide-react';
import { serviceSlugMap, defaultServiceData, getLocalizedServicesData } from '@/data/servicesData';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const { t, language } = useLanguage();

  const localizedServices = getLocalizedServicesData(language);
  const mainSlug = serviceSlug || '';

  const service = localizedServices[mainSlug] || defaultServiceData;
  const displayTitle = service.title;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle Escape key to close lightbox
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Helper to determine grid item classes for a "Full Rectangle" Bento Grid
  const getGridItemClasses = (index: number, total: number) => {
    // Desktop layout (4 columns)
    const targetWeight = Math.ceil(total / 4) * 4;
    const extraSpansNeeded = targetWeight - total;

    // Distribute spans (using a modulo-based pattern for variety)
    const specialIndices = [0, 3, 5, 2, 6, 1].slice(0, extraSpansNeeded);
    const isSpecial = specialIndices.includes(index % total);

    if (isSpecial) {
      return 'md:col-span-2 md:aspect-[2.1/1]';
    }
    return 'md:col-span-1 aspect-square';
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover opacity-5 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#94c43d] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#94c43d]" />
              <span className="text-[#94c43d] font-display font-bold tracking-[0.2em] uppercase text-xs md:text-sm">{service.subtitle}</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] mb-8">
              <span className="text-[#94c43d] block">{displayTitle.split(' ').slice(0, 2).join(' ')}</span>
              {displayTitle.split(' ').slice(2).join(' ')}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl font-light">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image with decorative elements */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[21/9]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center top-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Structured Sections (Dynamic) */}
      {service.sections && service.sections.length > 0 && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {service.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full border border-[#94c43d]/30 flex items-center justify-center group-hover:bg-[#94c43d] group-hover:border-[#94c43d] transition-all duration-500">
                      <span className="text-[#94c43d] group-hover:text-white font-display font-bold text-sm">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 group-hover:text-[#94c43d] transition-colors duration-500">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-lg leading-relaxed pl-14">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Project Gallery - Dynamic */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-32 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#94c43d]" />
                  <span className="text-[#94c43d] font-display font-bold tracking-[0.2em] uppercase text-xs">Galeria</span>
                </div>
                <h2 className="font-display text-5xl font-bold text-gray-900">
                  Momenty w <span className="text-[#94c43d]">Gambii</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Camera className="w-5 h-5" />
                <span className="text-sm uppercase tracking-widest font-display">Nasza dokumentacja</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {service.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedImage(img)}
                  className={`relative rounded-3xl overflow-hidden bg-gray-100 shadow-xl group cursor-pointer ${getGridItemClasses(i, service.gallery!.length)}`}
                >
                  <img src={img} alt={`${service.title} gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#94c43d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 scale-90 group-hover:scale-100">
                    <span className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 font-bold text-sm uppercase tracking-widest shadow-xl">Powiększ</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="rounded-2xl shadow-2xl max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>




      <Footer />
    </div>
  );
};

export default ServiceDetail;
