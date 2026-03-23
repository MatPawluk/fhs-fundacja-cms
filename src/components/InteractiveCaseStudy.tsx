import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { caseStudyTabsTranslations } from '@/i18n/contentTranslations';
import clientPortrait from '@/assets/client-portrait.jpg';

interface CaseStudyData {
  client: string;
  situation: string;
  actions: string;
  result: string;
}

interface InteractiveCaseStudyProps {
  data?: CaseStudyData;
  image?: string;
}

const defaultData: CaseStudyData = {
  client: 'Średnia fabryka mebli (Polska)',
  situation: 'Plan zakupu robotów lakierniczych z Chin. Obawy o awaryjność, brak części zamiennych i rzetelność dostawcy znalezionego w internecie.',
  actions: 'Przeprowadzono analizę rynku. Zidentyfikowano 3 producentów w klastrze robotyki (Foshan) posiadających stabilną pozycję rynkową.',
  result: 'Klient zrezygnował z ryzykownego zakupu od pośrednika i rozpoczął rozmowy z rekomendowanym producentem.',
};

export const InteractiveCaseStudy = ({ data = defaultData, image }: InteractiveCaseStudyProps) => {
  const [activeTab, setActiveTab] = useState('situation');
  const { language } = useLanguage();
  const tabs = caseStudyTabsTranslations[language];

  const getContent = () => {
    switch (activeTab) {
      case 'situation': return data.situation;
      case 'actions': return data.actions;
      case 'result': return data.result;
      default: return data.situation;
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative lg:col-span-1">
        <div className="absolute inset-0 bg-lime/20 rounded-3xl blur-2xl" />
        <img src={image || clientPortrait} alt="Client" className="relative rounded-3xl object-cover object-center w-full aspect-[3/4] border-4 border-lime/30" />
        <div className="absolute -bottom-4 -right-4 bg-lime text-gray-900 px-6 py-3 rounded-2xl font-display font-semibold">{data.client}</div>
      </motion.div>
      <div className="lg:col-span-2 space-y-6">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-lime text-gray-900' : 'bg-gray-800/50 text-gray-500 hover:bg-gray-700/50 hover:text-gray-900'}`}>
              {tab.label}
              {activeTab === tab.id && (<motion.div layoutId="activeTab" className="absolute inset-0 bg-lime rounded-2xl -z-10" transition={{ type: "spring", duration: 0.5 }} />)}
            </button>
          ))}
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-700/50 min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <h4 className="text-lime font-medium mb-4 text-lg">{tabs.find(t => t.id === activeTab)?.label}</h4>
              <p className={`text-lg leading-relaxed ${activeTab === 'result' ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{getContent()}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`h-1.5 rounded-full transition-all duration-300 ${activeTab === tab.id ? 'w-8 bg-lime' : 'w-2 bg-gray-600'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
