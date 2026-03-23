import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { GradientText } from './GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { testimonialsTranslations } from '@/i18n/contentTranslations';

const getAvatarUrl = (seed: string) => 
  `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=1a1a2e&textColor=c4ff00`;

export const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const testimonials = testimonialsTranslations[language];
  const allTestimonials = [...testimonials, ...testimonials];
  
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 backdrop-blur-sm text-[#94c43d] text-sm font-semibold mb-4">{t.testimonials.badge}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">{t.testimonials.title} <GradientText>{t.testimonials.titleHighlight}</GradientText></h2>
        </motion.div>
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            <div className="relative overflow-hidden">
              <motion.div animate={{ y: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="space-y-6">
                {allTestimonials.slice(0, 8).map((testimonial, index) => (
                  <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
            <div className="relative overflow-hidden hidden md:block">
              <motion.div animate={{ y: ['-50%', '0%'] }} transition={{ duration: 35, repeat: Infinity, ease: 'linear' }} className="space-y-6">
                {[...allTestimonials].reverse().slice(0, 8).map((testimonial, index) => (
                  <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
            <div className="relative overflow-hidden hidden lg:block">
              <motion.div animate={{ y: ['0%', '-50%'] }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="space-y-6">
                {allTestimonials.slice(4, 12).map((testimonial, index) => (
                  <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: { name: string; content: string; rating: number } }) => {
  const fullStars = Math.floor(testimonial.rating);
  const hasHalfStar = testimonial.rating % 1 !== 0;
  const initials = testimonial.name.split(' ').map(n => n[0]).join('');
  return (
    <div className="group relative p-6 rounded-3xl bg-[#f0ede8]/80 backdrop-blur-sm border border-gray-200/50 hover:border-lime/30 transition-all duration-500">
      <div className="absolute top-4 right-4 opacity-20"><Quote className="w-8 h-8 text-lime" /></div>
      <div className="flex gap-1 mb-4">
        {[...Array(fullStars)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current text-lime" />))}
        {hasHalfStar && (<div className="relative w-4 h-4"><Star className="w-4 h-4 text-lime/30 absolute" /><div className="overflow-hidden w-1/2"><Star className="w-4 h-4 fill-current text-lime" /></div></div>)}
      </div>
      <p className="text-sm leading-relaxed mb-6 text-gray-600">"{testimonial.content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#e8e5e0] flex items-center justify-center border-2 border-lime/30 overflow-hidden">
          <img src={getAvatarUrl(initials)} alt={testimonial.name} className="w-full h-full" />
        </div>
        <div><p className="font-semibold text-sm text-gray-900">{testimonial.name}</p></div>
      </div>
    </div>
  );
};
