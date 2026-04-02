import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText, Gavel, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

const Regulamin = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    pl: {
      title: 'Regulamin Serwisu',
      lastUpdate: 'Ostatnia aktualizacja: 1 stycznia 2025 r.',
      summary: 'Podstawowe zasady korzystania z serwisu i realizowania wsparcia.',
      sections: [
        {
          num: '1',
          title: 'Postanowienia ogólne',
          icon: <Gavel className="text-[#94c43d]" size={24} />,
          body: (
            <div className="space-y-4">
              <p>Niniejszy regulamin określa zasady korzystania ze strony internetowej <strong>FHS FOUNDATION</strong> (dalej: „Serwis”) oraz zasady dokonywania darowizn pieniężnych na rzecz Fundacji.</p>
              <p>Podmiotem prowadzącym Serwis jest FHS FOUNDATION z siedzibą przy ul. Nowogrodzkiej 31, 00-511 Warszawa, KRS 0001104851, NIP 7011204773, REGON 528605830.</p>
              <p>Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu oraz Polityki Prywatności.</p>
            </div>
          )
        },
        {
          num: '2',
          title: 'Definicje',
          body: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-gray-900">
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Fundacja: FHS FOUNDATION.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Użytkownik: Każda osoba korzystająca z Serwisu.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Darczyńca: Osoba dokonująca darowizny.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Darowizna: Bezzwrotne świadczenie pieniężne.</div>
            </div>
          )
        },
        {
          num: '3',
          title: 'Usługi elektroniczne',
          body: (
            <div className="space-y-4">
              <p>Fundacja udostępnia treści o swojej działalności, umożliwia kontakt oraz dokonywanie darowizn (w tym cyklicznych).</p>
              <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl text-sm border border-blue-100">
                <CheckCircle2 size={16} /> Niezbędne: Urządzenie z Internetem + aktualna przeglądarka.
              </div>
            </div>
          )
        },
        {
          num: '4',
          title: 'Darowizny i płatności',
          body: <p>Darowizny są realizowane przez system <strong>Przelewy24</strong> (PayPro S.A.) w walucie <strong>PLN</strong>.</p>
        },
        {
          num: '5',
          title: 'Płatności cykliczne',
          body: (
            <div className="space-y-3">
              <p>Umożliwiamy regularne wsparcie comiesięczne kartą płatniczą.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pobierane automatycznie do 10. dnia miesiąca.</li>
                <li>Możliwość rezygnacji w dowolnym momencie (e-mail).</li>
              </ul>
            </div>
          )
        },
        {
          num: '6',
          title: 'Reklamacje i spory',
          body: <p>Reklamacje: <strong>fundacja@fhspolska.com</strong> (termin rozpatrzenia: 14 dni). Spory będą rozstrzygane polubownie.</p>
        },
        {
          num: '7',
          title: 'Odstąpienie od umowy',
          body: <p>Darowizny mają charakter dobrowolny i bezzwrotny – prawo do odstąpienia nie przysługuje.</p>
        }
      ],
      footer: 'Obowiązuje od 1 stycznia 2025 r. Bezpieczeństwo i Transparentność.'
    },
    en: {
      title: 'Terms of Service',
      lastUpdate: 'Last update: January 1, 2025',
      summary: 'Basic rules for using our website and providing support.',
      sections: [
        {
          num: '1',
          title: 'General Provisions',
          icon: <Gavel className="text-[#94c43d]" size={24} />,
          body: (
            <div className="space-y-4">
              <p>These terms define the rules for using the <strong>FHS FOUNDATION</strong> website (hereinafter: "Service") and the rules for making monetary donations to the Foundation.</p>
              <p>The entity managing the Service is FHS FOUNDATION with its registered office at ul. Nowogrodzka 31, 00-511 Warsaw, Poland, KRS 0001104851, NIP 7011204773, REGON 528605830.</p>
              <p>Use of the Service implies acceptance of these Terms and the Privacy Policy.</p>
            </div>
          )
        },
        {
          num: '2',
          title: 'Definitions',
          body: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-gray-900">
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Foundation: FHS FOUNDATION.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">User: Any person using the Service.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Donor: A person making a donation.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Donation: Non-refundable monetary support.</div>
            </div>
          )
        },
        {
          num: '3',
          title: 'Electronic Services',
          body: (
            <div className="space-y-4">
              <p>The Foundation provides content about its activities, enables contact, and allows making donations (including recurring ones).</p>
              <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl text-sm border border-blue-100">
                <CheckCircle2 size={16} /> Required: Internet connection + up-to-date browser.
              </div>
            </div>
          )
        },
        {
          num: '4',
          title: 'Donations and Payments',
          body: <p>Donations are processed via <strong>Przelewy24</strong> (PayPro S.A.) in <strong>PLN</strong> currency.</p>
        },
        {
          num: '5',
          title: 'Recurring Payments',
          body: (
            <div className="space-y-3">
              <p>We enable regular monthly support via payment card.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Collected automatically by the 10th of each month.</li>
                <li>Cancellation possible at any time via email.</li>
              </ul>
            </div>
          )
        },
        {
          num: '6',
          title: 'Complaints and Disputes',
          body: <p>Complaints: <strong>fundacja@fhspolska.com</strong> (processing time: 14 days). Disputes will be settled amicably.</p>
        },
        {
          num: '7',
          title: 'Right of Withdrawal',
          body: <p>Donations are voluntary and non-refundable – no right of withdrawal applies.</p>
        }
      ],
      footer: 'Effective from January 1, 2025. Security & Transparency.'
    },
    nl: {
      title: 'Algemene Voorwaarden',
      lastUpdate: 'Laatste update: 1 januari 2025',
      summary: 'Basisregels voor het gebruik van de website en het verlenen van steun.',
      sections: [
        {
          num: '1',
          title: 'Algemene Bepalingen',
          icon: <Gavel className="text-[#94c43d]" size={24} />,
          body: (
            <div className="space-y-4">
              <p>Deze voorwaarden bepalen de regels voor het gebruik van de website van <strong>FHS FOUNDATION</strong> (hierna: "Service") en de regels voor het doen van monetaire donaties aan de Stichting.</p>
              <p>De entiteit die de Service beheert, is FHS FOUNDATION gevestigd te ul. Nowogrodzka 31, 00-511 Warschau, Polen, KRS 0001104851, NIP 7011204773, REGON 528605830.</p>
              <p>Het gebruik van de Service houdt acceptatie in van deze Voorwaarden en het Privacybeleid.</p>
            </div>
          )
        },
        {
          num: '2',
          title: 'Definities',
          body: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-gray-900">
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Stichting: FHS FOUNDATION.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Gebruiker: Elke persoon die de Service gebruikt.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Donateur: Een persoon die een donatie doet.</div>
              <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">Donatie: Niet-restitueerbare geldelijke steun.</div>
            </div>
          )
        },
        {
          num: '3',
          title: 'Elektronische diensten',
          body: (
            <div className="space-y-4">
              <p>De Stichting biedt content over haar activiteiten, maakt contact mogelijk en staat donaties toe (inclusief periodieke donaties).</p>
              <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl text-sm border border-blue-100">
                <CheckCircle2 size={16} /> Vereist: Internetverbinding + actuele browser.
              </div>
            </div>
          )
        },
        {
          num: '4',
          title: 'Donaties en betalingen',
          body: <p>Donaties worden verwerkt via <strong>Przelewy24</strong> (PayPro S.A.) in <strong>PLN</strong>.</p>
        },
        {
          num: '5',
          title: 'Periodieke betalingen',
          body: (
            <div className="space-y-3">
              <p>Wij maken regelmatige maandelijkse steun via betaalkaart mogelijk.</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Automatisch geïnd tot de 10e van elke maand.</li>
                <li>Annulering op elk moment mogelijk via e-mail.</li>
              </ul>
            </div>
          )
        },
        {
          num: '6',
          title: 'Klachten en geschillen',
          body: <p>Klachten: <strong>fundacja@fhspolska.com</strong> (behandelingstermijn: 14 dagen). Geschillen worden in der minne schikt.</p>
        },
        {
          num: '7',
          title: 'Herroepingsrecht',
          body: <p>Donaties zijn vrijwillig en niet-restitueerbaar – herroepingsrecht is niet van toepassing.</p>
        }
      ],
      footer: 'Geldig vanaf 1 januari 2025. Veiligheid & Transparantie.'
    }
  };

  const t = content[language as Language] || content.pl;

  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#94c43d]" />
              <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">Zasady</span>
              <div className="w-8 h-px bg-[#94c43d]" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title.split(' ').slice(0, -1).join(' ')} <span className="text-[#94c43d]">{t.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-gray-500 italic text-sm">{t.lastUpdate}</p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200/50 space-y-12 text-gray-700 leading-relaxed">
            
            {t.sections.map((section: any) => (
              <section key={section.num} className={section.icon ? "bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 flex items-start gap-4" : ""}>
                {section.icon}
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    {!section.icon && <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold">§ {section.num}</span>}
                    {section.title}
                  </h2>
                  {section.body}
                </div>
              </section>
            ))}

            <section className="pt-12 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-[#94c43d]">
                  <ShieldCheck size={24} />
                  <span className="font-bold text-gray-900">{language === 'nl' ? 'Veiligheid & Transparantie' : language === 'en' ? 'Security & Transparency' : 'Bezpieczeństwo i Transparentność'}</span>
                </div>
                <p className="text-sm text-gray-400">{t.footer}</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Regulamin;
