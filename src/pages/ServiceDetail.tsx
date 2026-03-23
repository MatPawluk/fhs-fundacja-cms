import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InteractiveCaseStudy } from '@/components/InteractiveCaseStudy';
import { GradientText } from '@/components/GradientText';
import { ParallaxSection } from '@/components/ParallaxSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Check, X, FileText, Video } from 'lucide-react';
import { serviceSlugMap, defaultServiceData, getLocalizedServicesData } from '@/data/servicesData';
import statsBg from '@/assets/stats-bg.jpg';

const ServiceDetail = () => {
  const { serviceSlug, subServiceSlug } = useParams();
  const { t, language } = useLanguage();
  
  const localizedServices = getLocalizedServicesData(language);
  const mainSlug = serviceSlug || '';
  const mappedSlug = subServiceSlug ? (serviceSlugMap[subServiceSlug] || subServiceSlug) : mainSlug;
  const service = localizedServices[mappedSlug] || localizedServices[mainSlug] || defaultServiceData;
  
  const displayTitle = service.title;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={service.image} 
            alt="" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,6,8,0.8), rgba(5,6,8,0.9), #1a1a1a)' }} />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-lime/8 blur-[150px] rounded-full" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link 
            to="/uslugi"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#94c43d] transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.serviceDetail.backToServices}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              {service.subtitle}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <GradientText>{displayTitle}</GradientText>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Description with Image */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#f0ede8' }}>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #f0ede8, transparent, transparent)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-[#94c43d] rounded-full" />
                {t.serviceDetail.serviceDescription}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When it makes sense + Problems Solved - parallax */}
      <ParallaxSection imageUrl={statsBg} overlayOpacity={0.88} className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                {t.serviceDetail.whenMakesSense} <GradientText>{t.serviceDetail.whenMakesSenseHighlight}</GradientText>
              </h2>
              <div className="space-y-4">
                {service.whenItMakesSense.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-lime/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-display text-sm font-bold text-lime/60 mt-0.5 flex-shrink-0">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="text-gray-600 text-sm">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                {t.serviceDetail.problemSolved} <GradientText>{t.serviceDetail.problemSolvedHighlight}</GradientText>
              </h2>
              <div className="space-y-4">
                {service.problemsSolved.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-lime/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0 mt-2" />
                      <p className="text-gray-600 text-sm">{problem}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Scope */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-gray-900">
                {t.serviceDetail.scopeTitle} <GradientText>{t.serviceDetail.scopeHighlight}</GradientText>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-gray-200/50" style={{ backgroundColor: '#f0ede8' }}
              >
                <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-[#94c43d] rounded-full" />
                  {t.serviceDetail.includes}
                </h3>
                <ul className="space-y-4">
                  {service.scope.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-gray-200/50" style={{ backgroundColor: '#f0ede8' }}
              >
                <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-red-500/60 rounded-full" />
                  {t.serviceDetail.excludes}
                </h3>
                <ul className="space-y-4">
                  {service.scope.excludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#f0ede8' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime/3 blur-[150px] rounded-full" />
        </div>
        
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Output / <GradientText>{t.serviceDetail.deliverables}</GradientText>
              </h2>
              <div className="space-y-4">
                {service.deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl border border-gray-200/50 text-left" style={{ backgroundColor: '#e8e5e0' }}
                  >
                    <span className="font-display text-sm font-bold text-lime/50 mt-0.5 flex-shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Model - clean, no icons, no weird decorations */}
      <ParallaxSection 
        imageUrl={statsBg} 
        overlayOpacity={0.92} 
        className="py-20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-10">
                {t.serviceDetail.workModelTitle} <GradientText>{t.serviceDetail.workModelHighlight}</GradientText>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-[#94c43d] text-xs uppercase tracking-wider mb-3 font-medium">{t.serviceDetail.workModelType}</p>
                  <p className="text-gray-900 font-semibold text-sm">{service.workModel.type}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-[#94c43d] text-xs uppercase tracking-wider mb-3 font-medium">{t.serviceDetail.workModelDuration}</p>
                  <p className="text-gray-900 font-semibold text-sm">{service.workModel.duration}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-[#94c43d] text-xs uppercase tracking-wider mb-3 font-medium">{t.serviceDetail.workModelComm}</p>
                  <p className="text-gray-900 font-semibold text-sm">{service.workModel.communication}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Case Study */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 backdrop-blur-sm text-gray-900/80 text-sm font-medium mb-4">
              {t.serviceDetail.caseStudyBadge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
              {t.serviceDetail.caseStudyTitle} <GradientText>{t.serviceDetail.caseStudyHighlight}</GradientText>
            </h2>
          </motion.div>

          <InteractiveCaseStudy data={service.caseStudy} image={service.caseStudyImage} />
        </div>
      </section>

      {/* CTA Section - consistent style */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime/8 blur-[150px] rounded-full" />
        </div>
        
        <div className="absolute bottom-10 left-10 opacity-[0.06] pointer-events-none">
          <span className="font-display text-[10rem] font-bold text-[#94c43d] leading-none"></span>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t.serviceDetail.ctaTitle} <GradientText>{t.serviceDetail.ctaHighlight}</GradientText>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              {t.serviceDetail.ctaSubtitle}
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]"
            >
              {t.serviceDetail.ctaButton}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
