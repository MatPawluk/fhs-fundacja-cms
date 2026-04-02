import { Language } from '@/i18n/translations';
import { projectDetailTranslations } from '@/i18n/contentTranslations';

// Project Images - Base Imports
import imgVolunteersMain from '@/assets/projects/wyjazdy-wolontariackie-okladka.jpg';
import imgMissionaryMain from '@/assets/projects/wolontariat-misyjny2.jpg';
import imgCharityMain from '@/assets/projects/zbiorki-charytatywne-1.jpg';
import imgEducationMain from '@/assets/u-szkolenia-system.png';
import imgMinistryMain from '@/assets/u-wsparcie-formalne.png';

// Gallery Imports - Volunteers
import v1 from '@/assets/projects/wyjazdy-wolontariackie1.jpg';
import v2 from '@/assets/projects/wyjazdy-wolontariackie2.jpg';
import v3 from '@/assets/projects/wyjazdy-wolontariackie3.jpg';
import v4 from '@/assets/projects/wyjazdy-wolontariackie4.jpg';
import v5 from '@/assets/projects/wyjazdy-wolontariackie5.jpg';
import v6 from '@/assets/projects/wyjazdy-wolontariackie6.jpg';
import v7 from '@/assets/projects/wyjazdy-wolontariackie7.jpg';

// Gallery Imports - Missionary
import m2 from '@/assets/projects/wolontariat-misyjny2.jpg';
import m3 from '@/assets/projects/wolontariat-misyjny3.jpg';
import m4 from '@/assets/projects/wolontariat-misyjny4.jpg';
import m5 from '@/assets/projects/wolontariat-misyjny5.jpg';
import m6 from '@/assets/projects/wolontariat-misyjny6.jpg';
import m7 from '@/assets/projects/wolontariat-misyjny7.jpg';

// Gallery Imports - Charity
import c1 from '@/assets/projects/zbiorki-charytatywne-1.jpg';
import c2 from '@/assets/projects/zbiorki-charytatywne-2.jpg';
import c4 from '@/assets/projects/zbiorki-charytatywne-4.jpg';
import c5 from '@/assets/projects/zbiorki-charytatywne-5.jpg';
import c6 from '@/assets/projects/zbiorki-charytatywne-6.jpg';
import c7 from '@/assets/projects/zbiorki-charytatywne7.jpg';

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  fullDescription?: string;
  sections?: { title: string; content: string }[];
  gallery?: string[];
}

export const serviceSlugMap: Record<string, string> = {
  'wyjazdy-wolontariackie': 'wyjazdy-wolontariackie',
  'wsparcie-edukacyjne': 'wsparcie-edukacyjne',
  'wolontariat-misyjny': 'wolontariat-misyjny',
  'zbiorki-charytatywne': 'zbiorki-charytatywne',
  'wspolpraca-z-ministerstwami': 'wspolpraca-z-ministerstwami'
};

export const defaultServiceData: ServiceData = {
  title: 'Projekt Fundacji',
  subtitle: 'Nasze działania',
  description: 'Szczegóły projektu wkrótce.',
  image: imgVolunteersMain
};

export const getLocalizedServicesData = (lang: Language): Record<string, ServiceData> => {
  const details = projectDetailTranslations[lang];
  
  return {
    'wyjazdy-wolontariackie': {
      title: lang === 'pl' ? 'Wyjazdy wolontariackie' : lang === 'en' ? 'Volunteer Trips' : 'Vrijwilligersreizen',
      subtitle: lang === 'pl' ? 'Dołącz do nas' : lang === 'en' ? 'Join us' : 'Doe mee',
      description: details['wyjazdy-wolontariackie'].fullDescription.substring(0, 150) + '...',
      fullDescription: details['wyjazdy-wolontariackie'].fullDescription,
      sections: details['wyjazdy-wolontariackie'].sections,
      image: imgVolunteersMain,
      gallery: [v1, v2, v3, v4, v5, v6, v7]
    },
    'wsparcie-edukacyjne': {
      title: lang === 'pl' ? 'Wsparcie edukacyjne' : lang === 'en' ? 'Educational Support' : 'Educatieve ondersteuning',
      subtitle: lang === 'pl' ? 'Fundament przyszłości' : lang === 'en' ? 'Foundation for the future' : 'Basis voor de toekomst',
      description: details['wsparcie-edukacyjne'].fullDescription,
      fullDescription: details['wsparcie-edukacyjne'].fullDescription,
      image: imgEducationMain,
      gallery: []
    },
    'wolontariat-misyjny': {
      title: lang === 'pl' ? 'Wolontariat Misyjny' : lang === 'en' ? 'Missionary Volunteering' : 'Missionair vrijwilligerswerk',
      subtitle: lang === 'pl' ? 'Wsparcie duchowe' : lang === 'en' ? 'Spiritual support' : 'Spirituele steun',
      description: details['wolontariat-misyjny'].fullDescription.substring(0, 150) + '...',
      fullDescription: details['wolontariat-misyjny'].fullDescription,
      sections: details['wolontariat-misyjny'].sections,
      image: imgMissionaryMain,
      gallery: [m2, m3, m4, m5, m6, m7]
    },
    'zbiorki-charytatywne': {
      title: lang === 'pl' ? 'Zbiórki charytatywne' : lang === 'en' ? 'Charity Collections' : 'Liefdadigheidsinzamelingen',
      subtitle: lang === 'pl' ? 'Razem możemy więcej' : lang === 'en' ? 'Together we can do more' : 'Samen meer bereiken',
      description: details['zbiorki-charytatywne'].fullDescription,
      fullDescription: details['zbiorki-charytatywne'].fullDescription,
      image: imgCharityMain,
      gallery: [c1, c2, c4, c5, c6, c7]
    },
    'wspolpraca-z-ministerstwami': {
      title: lang === 'pl' ? 'Współpraca z ministerstwami' : lang === 'en' ? 'Ministry Cooperation' : 'Samenwerking met ministeries',
      subtitle: lang === 'pl' ? 'Działania systemowe' : lang === 'en' ? 'Systemic actions' : 'Systemische acties',
      description: details['wspolpraca-z-ministerstwami'].fullDescription.substring(0, 150) + '...',
      fullDescription: details['wspolpraca-z-ministerstwami'].fullDescription,
      sections: details['wspolpraca-z-ministerstwami'].sections,
      image: imgMinistryMain,
      gallery: []
    }
  };
};