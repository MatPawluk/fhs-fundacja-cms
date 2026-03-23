import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientText } from './GradientText';

const faqItems = [
  {
    question: 'Jak wygląda typowy projekt współpracy z FHS Foundation?',
    answer: 'Każdy projekt zaczynamy od bezpłatnej konsultacji, podczas której poznajemy Twoje potrzeby. Następnie przygotowujemy dedykowany plan działania, który realizujemy etapami z pełną transparentnością.',
  },
  {
    question: 'Czy oferujecie wsparcie tylko dla dużych firm?',
    answer: 'Współpracujemy zarówno z małymi i średnimi przedsiębiorstwami, jak i z dużymi korporacjami. Nasz model współpracy jest elastyczny i dopasowujemy go do skali i budżetu klienta.',
  },
  {
    question: 'Jak długo trwa typowy projekt analityczny?',
    answer: 'W zależności od zakresu, projekt analityczny trwa od 5 do 14 dni roboczych. Bardziej złożone projekty due diligence mogą wymagać do 4 tygodni.',
  },
  {
    question: 'Czy macie biuro w Chinach?',
    answer: 'Tak, posiadamy operacyjną obecność w Shanghai, co pozwala nam na bezpośredni dostęp do chińskiego rynku, źródeł informacji i sieci kontaktów biznesowych.',
  },
  {
    question: 'W jakich językach świadczycie usługi?',
    answer: 'Nasze usługi świadczymy w języku polskim, angielskim i chińskim (mandaryński). Wszystkie raporty i materiały przygotowujemy w wybranym przez klienta języku.',
  },
  {
    question: 'Czy oferujecie wsparcie prawne i podatkowe?',
    answer: 'Nie świadczymy bezpośrednio usług prawnych ani podatkowych, ale współpracujemy z zaufanymi kancelariami specjalizującymi się w prawie chińskim i transakcjach międzynarodowych.',
  },
];

export const FAQSection = () => {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 backdrop-blur-sm text-gray-900/80 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
            Najczęściej zadawane <GradientText>pytania</GradientText>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`faq-${index}`}
                  className="bg-gray-800/50 rounded-2xl border border-gray-700/50 px-6 overflow-hidden data-[state=open]:border-lime/50"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-gray-900 hover:text-lime py-5 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
