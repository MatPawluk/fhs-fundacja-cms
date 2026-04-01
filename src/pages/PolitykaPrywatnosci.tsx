import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

const PolitykaPrywatnosci = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    pl: {
      title: 'Polityka Prywatności',
      lastUpdate: 'Ostatnia aktualizacja: 1 stycznia 2025 r.',
      intro: 'W celu wypełnienia obowiązku informacyjnego wynikającego z przepisów Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej: „RODO”), informujemy, że:',
      sections: [
        {
          num: '1',
          title: 'Administrator danych osobowych',
          body: (
            <div className="space-y-4">
              <p>
                Administratorem Państwa danych osobowych jest <strong>FHS FOUNDATION</strong> z siedzibą przy ul. Nowogrodzkiej 31, 00-511 Warszawa, Polska, wpisana do rejestru fundacji Krajowego Rejestru Sądowego pod numerem KRS 0001104851, NIP 7011204773, REGON 528605830 (dalej: „Administrator” lub „Fundacja”).
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4 text-sm border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">Z Administratorem można skontaktować się:</p>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">• drogą poczty elektronicznej: <strong>fundacja@fhspolska.com</strong></p>
                  <p className="flex items-center gap-2">• telefonicznie: <strong>+48 698 451 498</strong></p>
                  <p className="flex items-center gap-2">• listownie: <strong>Nowogrodzka 31, 00-511 Warszawa, Polska</strong></p>
                </div>
              </div>
            </div>
          )
        },
        {
          num: '2',
          title: 'Zakres i cele przetwarzania – kontakt',
          body: (
            <div className="space-y-4">
              <p>Strona internetowa www.fhsfoundation.pl umożliwia kontakt z Fundacją za pośrednictwem danych kontaktowych udostępnionych w Serwisie.</p>
              <div className="bg-[#94c43d]/5 rounded-xl p-5 border border-[#94c43d]/10">
                <p className="font-semibold text-gray-900 mb-3 uppercase text-xs tracking-wider">Cele przetwarzania:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#94c43d] flex-shrink-0">✓</span> udzielenie odpowiedzi na zapytanie</li>
                  <li className="flex items-start gap-2"><span className="text-[#94c43d] flex-shrink-0">✓</span> prowadzenie dokumentacji kontaktowej</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          num: '3',
          title: 'Dane finansowe (Darowizny)',
          body: <p>Przetwarzamy Twoje dane w zakresie niezbędnym do obsługi płatności. Odbiorcą danych jest <strong>PayPro S.A.</strong> (operator Przelewy24). Podstawa prawna: art. 6 ust. 1 lit. f RODO.</p>
        },
        {
          num: '4',
          title: 'Pliki cookies',
          body: <p>Podczas korzystania z Serwisu zbierane są dane informatyczne (IP, typ przeglądarki) przy użyciu plików cookies. Użytkownik może zarządzać nimi w ustawieniach swojej przeglądarki.</p>
        },
        {
          num: '5',
          title: 'Narzędzia analityczne',
          body: (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100"><h3 className="font-bold text-blue-900 mb-2">Google Analytics</h3><p className="text-sm">Analiza statystyk ruchu.</p></div>
              <div className="p-5 rounded-2xl bg-green-50/50 border border-green-100"><h3 className="font-bold text-green-900 mb-2">Google Ads</h3><p className="text-sm">Obsługa treści reklamowych.</p></div>
              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100"><h3 className="font-bold text-purple-900 mb-2">Meta Pixel</h3><p className="text-sm">Analiza działań w social mediach.</p></div>
            </div>
          )
        },
        {
          num: '6',
          title: 'Prawa użytkownika',
          body: (
            <div className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl">
              <p className="mb-6 opacity-80">Przysługuje Ci prawo do:</p>
              <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Eye size={16} className="text-[#94c43d]" /> Dostępu</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><FileText size={16} className="text-[#94c43d]" /> Sprostowania</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Lock size={16} className="text-[#94c43d]" /> Usunięcia</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Shield size={16} className="text-[#94c43d]" /> Sprzeciwu</div>
              </div>
            </div>
          )
        },
        {
          num: '7',
          title: 'Kontakt i skargi',
          body: <p>W sprawach danych kontaktuj się z Administratorem. Masz prawo wnieść skargę do PUODO.</p>
        }
      ],
      footer: 'Niniejsza Polityka Prywatności obowiązuje od 1 stycznia 2025 r.'
    },
    en: {
      title: 'Privacy Policy',
      lastUpdate: 'Last update: January 1, 2025',
      intro: 'In order to fulfill the information obligation resulting from the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation, "GDPR"), we inform you that:',
      sections: [
        {
          num: '1',
          title: 'Data Controller',
          body: (
            <div className="space-y-4">
              <p>
                The administrator of your personal data is <strong>FHS FOUNDATION</strong> with its registered office at ul. Nowogrodzka 31, 00-511 Warsaw, Poland, entered into the National Court Register under KRS number 0001104851, NIP 7011204773, REGON 528605830 (hereinafter: "Controller" or "Foundation").
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4 text-sm border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">You can contact the Controller:</p>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">• via e-mail: <strong>fundacja@fhspolska.com</strong></p>
                  <p className="flex items-center gap-2">• by phone: <strong>+48 698 451 498</strong></p>
                  <p className="flex items-center gap-2">• by mail: <strong>Nowogrodzka 31, 00-511 Warsaw, Poland</strong></p>
                </div>
              </div>
            </div>
          )
        },
        {
          num: '2',
          title: 'Scope and Purposes – Contact',
          body: (
            <div className="space-y-4">
              <p>The website www.fhsfoundation.pl allows contact with the Foundation through the contact details provided in the Service.</p>
              <div className="bg-[#94c43d]/5 rounded-xl p-5 border border-[#94c43d]/10">
                <p className="font-semibold text-gray-900 mb-3 uppercase text-xs tracking-wider">Purposes of processing:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#94c43d] flex-shrink-0">✓</span> responding to your inquiry</li>
                  <li className="flex items-start gap-2"><span className="text-[#94c43d] flex-shrink-0">✓</span> maintaining contact documentation</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          num: '3',
          title: 'Financial Data (Donations)',
          body: <p>We process your data to the extent necessary to handle payments. The recipient of the data is <strong>PayPro S.A.</strong> (Przelewy24 operator). Legal basis: Art. 6(1)(f) GDPR.</p>
        },
        {
          num: '4',
          title: 'Cookies',
          body: <p>During use of the Service, technical data (IP, browser type) is collected using cookies. You can manage them in your browser settings.</p>
        },
        {
          num: '5',
          title: 'Analytical Tools',
          body: (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100"><h3 className="font-bold text-blue-900 mb-2">Google Analytics</h3><p className="text-sm">Traffic analysis.</p></div>
              <div className="p-5 rounded-2xl bg-green-50/50 border border-green-100"><h3 className="font-bold text-green-900 mb-2">Google Ads</h3><p className="text-sm">Advertising content.</p></div>
              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100"><h3 className="font-bold text-purple-900 mb-2">Meta Pixel</h3><p className="text-sm">Social media analysis.</p></div>
            </div>
          )
        },
        {
          num: '6',
          title: 'User Rights',
          body: (
            <div className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl">
              <p className="mb-6 opacity-80">You have the right to:</p>
              <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Eye size={16} className="text-[#94c43d]" /> Access</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><FileText size={16} className="text-[#94c43d]" /> Rectification</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Lock size={16} className="text-[#94c43d]" /> Deletion</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Shield size={16} className="text-[#94c43d]" /> Objection</div>
              </div>
            </div>
          )
        },
        {
          num: '7',
          title: 'Contact and Complaints',
          body: <p>For data matters, contact the Controller. You have the right to lodge a complaint with the Data Protection Authority (PUODO in Poland).</p>
        }
      ],
      footer: 'This Privacy Policy is effective from January 1, 2025.'
    },
    nl: {
      title: 'Privacybeleid',
      lastUpdate: 'Laatste update: 1 januari 2025',
      intro: 'Om te voldoen aan de informatieplicht die voortvloeit uit de bepalingen van Verordening (EU) 2016/679 van het Europees Parlement en de Raad (Algemene Verordening Gegevensbescherming, "AVG"), informeren wij u dat:',
      sections: [
        {
          num: '1',
          title: 'Verwerkingsverantwoordelijke',
          body: (
            <div className="space-y-4">
              <p>
                De verwerkingsverantwoordelijke van uw persoonsgegevens is <strong>FHS FOUNDATION</strong> gevestigd te ul. Nowogrodzka 31, 00-511 Warschau, Polen, ingeschreven in het Nationale Hofregister onder KRS-nummer 0001104851, NIP 7011204773, REGON 528605830 (hierna: "Verwerkingsverantwoordelijke" of "Stichting").
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4 text-sm border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2">U kunt contact opnemen met de Stichting:</p>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">• via e-mail: <strong>fundacja@fhspolska.com</strong></p>
                  <p className="flex items-center gap-2">• per telefoon: <strong>+48 698 451 498</strong></p>
                  <p className="flex items-center gap-2">• per post: <strong>Nowogrodzka 31, 00-511 Warschau, Polen</strong></p>
                </div>
              </div>
            </div>
          )
        },
        {
          num: '2',
          title: 'Doeleinden – Contact',
          body: (
            <div className="space-y-4">
              <p>De website www.fhsfoundation.pl maakt contact met de Stichting mogelijk via de contactgegevens die in de Service worden verstrekt.</p>
              <div className="bg-[#94c43d]/5 rounded-xl p-5 border border-[#94c43d]/10">
                <p className="font-semibold text-gray-900 mb-3 uppercase text-xs tracking-wider">Doeleinden van de verwerking:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#94c43d] flex-shrink-0">✓</span> beantwoorden van uw vraag</li>
                  <li className="flex items-start gap-2"><span className="text-[#94c43d] flex-shrink-0">✓</span> bijhouden van contactdocumentatie</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          num: '3',
          title: 'Financiële gegevens (Donaties)',
          body: <p>Wij verwerken uw gegevens voor zover nodig voor de afhandeling van betalingen. De ontvanger van de gegevens is <strong>PayPro S.A.</strong> (operator Przelewy24). Juridische basis: Art. 6(1)(f) AVG.</p>
        },
        {
          num: '4',
          title: 'Cookies',
          body: <p>Tijdens het gebruik van de Service worden technische gegevens (IP, browsertype) verzameld via cookies. U kunt deze beheren in de instellingen van uw browser.</p>
        },
        {
          num: '5',
          title: 'Analytische hulpmiddelen',
          body: (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100"><h3 className="font-bold text-blue-900 mb-2">Google Analytics</h3><p className="text-sm">Verkeersanalyse.</p></div>
              <div className="p-5 rounded-2xl bg-green-50/50 border border-green-100"><h3 className="font-bold text-green-900 mb-2">Google Ads</h3><p className="text-sm">Advertentiecontent.</p></div>
              <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100"><h3 className="font-bold text-purple-900 mb-2">Meta Pixel</h3><p className="text-sm">Social media analyse.</p></div>
            </div>
          )
        },
        {
          num: '6',
          title: 'Rechten van de gebruiker',
          body: (
            <div className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl">
              <p className="mb-6 opacity-80">U heeft het recht op:</p>
              <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Eye size={16} className="text-[#94c43d]" /> Toegang</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><FileText size={16} className="text-[#94c43d]" /> Rectificatie</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Lock size={16} className="text-[#94c43d]" /> Verwijdering</div>
                <div className="flex items-center gap-3 border-b border-white/20 pb-2"><Shield size={16} className="text-[#94c43d]" /> Bezwaar</div>
              </div>
            </div>
          )
        },
        {
          num: '7',
          title: 'Contact en Klachten',
          body: <p>Voor gegevenszaken kunt u contact opnemen met de Verwerkingsverantwoordelijke. U heeft het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (PUODO in Polen).</p>
        }
      ],
      footer: 'Dit privacybeleid is van kracht vanaf 1 januari 2025.'
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#94c43d]/10 text-[#94c43d] mb-6">
              <Shield size={32} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-gray-500 italic">{t.lastUpdate}</p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200/50 space-y-12 text-gray-700 leading-relaxed">
            
            <section>
              <p className="mb-4 text-base">
                {t.intro}
              </p>
            </section>

            {t.sections.map((section: any) => (
              <section key={section.num}>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold">{section.num}</span>
                  {section.title}
                </h2>
                {section.body}
              </section>
            ))}

            <section className="pt-8 border-t border-gray-100 text-sm text-gray-400">
              <p className="mt-2 leading-relaxed">{t.footer}</p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitykaPrywatnosci;
