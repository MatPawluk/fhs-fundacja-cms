import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Gavel, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

const Regulamin = () => {
  const { language } = useLanguage();

  const content: Record<Language, any> = {
    pl: {
      title: 'Regulamin Serwisu',
      lastUpdate: 'Obowiązuje od dnia 1 stycznia 2025 r.',
      summary: 'Zasady korzystania ze strony internetowej oraz dokonywania darowizn.',
      sections: [
        {
          num: '1',
          title: 'Postanowienia ogólne',
          icon: <Gavel className="text-[#94c43d]" size={24} />,
          body: (
            <div className="space-y-4">
              <p>1. Niniejszy regulamin (dalej: „Regulamin”) określa zasady korzystania ze strony internetowej FHS FOUNDATION (dalej: „Serwis”) oraz zasady dokonywania darowizn pieniężnych na rzecz Fundacji.</p>
              <p>2. Podmiotem prowadzącym Serwis jest FHS FOUNDATION z siedzibą przy ul. Nowogrodzkiej 31, 00-511 Warszawa, Polska, wpisana do rejestru fundacji Krajowego Rejestru Sądowego pod numerem KRS 0001104851, NIP 7011204773, REGON 528605830 (dalej: „Fundacja”).</p>
              <p>3. Fundacja została zarejestrowana w dniu 13 maja 2024 r. i działa zgodnie z obowiązującymi przepisami prawa.</p>
              <p>4. Użytkownikiem Serwisu (dalej: „Użytkownik”) jest każda osoba korzystająca z Serwisu.</p>
              <p>5. Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu.</p>
              <p>6. Serwis działa w oparciu o technologię plików cookies. Zasady wykorzystywania plików cookies oraz przetwarzania danych osobowych określone są w Polityce prywatności, dostępnej w Serwisie.</p>
            </div>
          )
        },
        {
          num: '2',
          title: 'Definicje',
          body: (
            <div className="space-y-4">
              <p>Na potrzeby niniejszego Regulaminu poniższym pojęciom nadaje się następujące znaczenie:</p>
              <ul className="space-y-3 font-normal text-gray-600">
                <li><strong className="text-gray-900 leading-6">Fundacja</strong> – FHS FOUNDATION z siedzibą przy ul. Nowogrodzkiej 31, 00-511 Warszawa, Polska, wpisana do Krajowego Rejestru Sądowego pod numerem KRS 0001104851, NIP 7011204773, REGON 528605830.</li>
                <li><strong className="text-gray-900 leading-6">Serwis</strong> – strona internetowa prowadzona przez Fundację pod adresem www.fhsfoundation.pl.</li>
                <li><strong className="text-gray-900 leading-6">Użytkownik</strong> – każda osoba korzystająca z Serwisu.</li>
                <li><strong className="text-gray-900 leading-6">Darczyńca</strong> – osoba fizyczna, osoba prawna lub jednostka organizacyjna dokonująca dobrowolnej darowizny pieniężnej na rzecz Fundacji.</li>
                <li><strong className="text-gray-900 leading-6">Darowizna</strong> – dobrowolne, bezzwrotne świadczenie pieniężne przekazywane na rzecz Fundacji w celu wsparcia jej działalności statutowej, niezwiązane z uzyskaniem jakiegokolwiek świadczenia wzajemnego.</li>
                <li><strong className="text-gray-900 leading-6">Operator Płatności</strong> – PayPro S.A. z siedzibą w Poznaniu, obsługujący system płatności online Przelewy24.</li>
                <li><strong className="text-gray-900 leading-6">Płatność Cykliczna</strong> – comiesięczna darowizna przekazywana automatycznie na rzecz Fundacji przy wykorzystaniu karty płatniczej, zgodnie z zasadami określonymi w Regulaminie.</li>
              </ul>
            </div>
          )
        },
        {
          num: '3',
          title: 'Zakres i warunki świadczenia usług drogą elektroniczną',
          body: (
            <div className="space-y-4">
              <p>1. Fundacja świadczy za pośrednictwem Serwisu usługi drogą elektroniczną polegające w szczególności na:</p>
              <ul className="list-none space-y-2 ml-4">
                <li>a) umożliwieniu Użytkownikom zapoznawania się z treściami udostępnianymi przez Fundację, w tym informacjami dotyczącymi jej działalności statutowej;</li>
                <li>b) umożliwieniu kontaktu z Fundacją za pośrednictwem danych kontaktowych udostępnionych w Serwisie;</li>
                <li>c) umożliwieniu dokonywania darowizn pieniężnych na rzecz Fundacji, w tym darowizn cyklicznych, za pośrednictwem płatności online.</li>
              </ul>
              <p>2. Korzystanie z Serwisu jest nieodpłatne i nie wymaga rejestracji ani zakładania konta użytkownika.</p>
              <p>3. Fundacja nie jest podmiotem świadczącym usługi płatnicze w rozumieniu obowiązujących przepisów prawa.</p>
              <p>4. Umowa o świadczenie usług drogą elektroniczną zostaje zawarta z chwilą rozpoczęcia korzystania przez Użytkownika z Serwisu i ma charakter umowy zawartej na czas nieoznaczony.</p>
              <p>5. Użytkownik bez podania przyczyny jest uprawniony do rozwiązania w każdym czasie, ze skutkiem natychmiastowym, umowy o świadczenie usług drogą elektroniczną, w szczególności poprzez zaprzestanie korzystania z Serwisu.</p>
              <p>6. W celu prawidłowego korzystania z Serwisu niezbędne jest:</p>
              <ul className="list-none space-y-2 ml-4">
                <li>a) posiadanie urządzenia z dostępem do sieci Internet;</li>
                <li>b) korzystanie z aktualnej przeglądarki internetowej obsługującej język JavaScript oraz pliki cookies.</li>
              </ul>
              <p>7. Fundacja wskazuje, że korzystanie z Serwisu jest uzależnione od właściwości sieci Internet oraz sprzętu Użytkownika, na które Fundacja nie ma wpływu.</p>
            </div>
          )
        },
        {
          num: '4',
          title: 'Darowizny i płatności online (Przelewy24)',
          body: (
            <div className="space-y-4">
              <p>1. Fundacja umożliwia Użytkownikom Serwisu dokonywanie dobrowolnych darowizn pieniężnych na rzecz Fundacji w celu wsparcia jej działalności statutowej.</p>
              <p>2. Darowizny dokonywane są za pośrednictwem systemu płatności online obsługiwanego przez spółkę PayPro S.A. z siedzibą w Poznaniu, operatora systemu Przelewy24.</p>
              <p>3. Fundacja nie jest stroną transakcji płatniczej w rozumieniu przepisów o usługach płatniczych i nie ponosi odpowiedzialności za realizację płatności przez Operatora Płatności.</p>
              <p>4. Darczyńca może dokonać darowizny przy wykorzystaniu metod płatności udostępnionych aktualnie przez Operatora Płatności, w szczególności:</p>
              <ul className="list-none space-y-2 ml-4">
                <li>a) przelewu elektronicznego,</li>
                <li>b) karty płatniczej debetowej lub kredytowej,</li>
                <li>c) innych metod dostępnych w systemie Przelewy24.</li>
              </ul>
              <p>5. Wszystkie darowizny dokonywane za pośrednictwem Serwisu przekazywane są w walucie polskiej (PLN).</p>
              <p>6. Szczegółowe zasady realizacji płatności określa regulamin Operatora Płatności Przelewy24, dostępny pod adresem: <a href="https://www.przelewy24.pl/regulamin" target="_blank" rel="noopener noreferrer" className="text-[#94c43d] underline">https://www.przelewy24.pl/regulamin</a></p>
              <p>7. Fundacja zastrzega sobie prawo do czasowego zawieszenia możliwości dokonywania darowizn z przyczyn technicznych lub niezależnych od Fundacji.</p>
            </div>
          )
        },
        {
          num: '5',
          title: 'Płatności cykliczne',
          body: (
            <div className="space-y-4">
              <p>1. Fundacja może udostępnić w ramach Serwisu funkcjonalność umożliwiającą Darczyńcy regularne wsparcie działalności Fundacji w formie płatności cyklicznych.</p>
              <p>2. Płatność cykliczna ma charakter comiesięcznej darowizny, automatycznie przekazywanej na rzecz Fundacji przy wykorzystaniu karty płatniczej debetowej lub kredytowej.</p>
              <p>3. W celu uruchomienia płatności cyklicznej Darczyńca zaznacza odpowiednią opcję dostępną w formularzu płatności.</p>
              <p>4. Po prawidłowej autoryzacji płatności Darczyńca otrzymuje wiadomość e-mail potwierdzającą uruchomienie płatności cyklicznej.</p>
              <p>5. Kolejne darowizny w ramach płatności cyklicznej będą automatycznie przekazywane na rzecz Fundacji do 10 dnia kalendarzowego każdego miesiąca.</p>
              <p>6. Darczyńca może w dowolnym momencie zrezygnować z płatności cyklicznej, kontaktując się z Fundacją drogą elektroniczną pod adresem <strong>fundacja@fhspolska.com</strong>.</p>
              <p>7. Rezygnacja z płatności cyklicznej nie wymaga podania przyczyny i wywołuje skutek na przyszłość.</p>
            </div>
          )
        },
        {
          num: '6',
          title: 'Odpowiedzialność i ograniczenia techniczne',
          body: (
            <div className="space-y-4">
              <p>1. Fundacja dokłada należytej staranności, aby Serwis funkcjonował w sposób ciągły i prawidłowy, jednak nie gwarantuje jego nieprzerwanej dostępności.</p>
              <p>2. Fundacja nie ponosi odpowiedzialności za zakłócenia w funkcjonowaniu Serwisu, w szczególności przerwy w jego działaniu spowodowane:</p>
              <ul className="list-none space-y-2 ml-4">
                <li>a) siłą wyższą,</li>
                <li>b) awariami sprzętu lub oprogramowania,</li>
                <li>c) działaniami lub zaniechaniami osób trzecich,</li>
                <li>d) niekompatybilnością Serwisu z infrastrukturą techniczną Użytkownika.</li>
              </ul>
              <p>3. Fundacja nie ponosi odpowiedzialności za blokowanie lub usuwanie wiadomości e-mail kierowanych do Użytkownika przez administratorów serwerów pocztowych lub oprogramowanie zainstalowane na urządzeniu Użytkownika, w tym przez filtry antyspamowe.</p>
              <p>4. Zabronione jest dostarczanie przez Użytkowników treści o charakterze bezprawnym, w szczególności treści naruszających przepisy prawa, dobre obyczaje, prawa osób trzecich lub dobra osobiste.</p>
              <p>5. W przypadku powzięcia informacji o zamieszczeniu w Serwisie treści o charakterze bezprawnym Fundacja może niezwłocznie uniemożliwić dostęp do takich treści.</p>
            </div>
          )
        },
        {
          num: '7',
          title: 'Reklamacje',
          body: (
            <div className="space-y-4">
              <p>1. Każdemu Użytkownikowi przysługuje prawo do złożenia reklamacji w sprawach związanych z funkcjonowaniem Serwisu oraz realizacją usług świadczonych drogą elektroniczną przez Fundację, w tym dokonywaniem darowizn za pośrednictwem Serwisu.</p>
              <p>2. Reklamacje należy składać:</p>
              <ul className="list-none space-y-2 ml-4">
                <li>a) drogą elektroniczną na adres e-mail <strong>fundacja@fhspolska.com</strong>, wpisując w tytule wiadomości „Reklamacja”, lub</li>
                <li>b) w formie pisemnej na adres siedziby Fundacji: Nowogrodzka 31, 00-511 Warszawa, Polska.</li>
              </ul>
              <p>3. Reklamacja powinna zawierać co najmniej:</p>
              <ul className="list-none space-y-2 ml-4">
                <li>a) imię i nazwisko lub nazwę Użytkownika,</li>
                <li>b) adres e-mail do kontaktu,</li>
                <li>c) opis zgłaszanych zastrzeżeń.</li>
              </ul>
              <p>4. Fundacja rozpatruje reklamację w terminie 14 dni od dnia jej otrzymania.</p>
              <p>5. Odpowiedź na reklamację zostanie przesłana Użytkownikowi na adres e-mail wskazany w zgłoszeniu lub w inny sposób uzgodniony z Użytkownikiem.</p>
              <p>6. Reklamacje dotyczące usług świadczonych przez podmioty trzecie, w szczególności operatora płatności Przelewy24, rozpatrywane są przez te podmioty na zasadach określonych w ich regulaminach.</p>
            </div>
          )
        },
        {
          num: '8',
          title: 'Prawo odstąpienia od umowy',
          body: (
            <div className="space-y-4">
              <p>1. Użytkownikowi przysługuje prawo odstąpienia od umowy o świadczenie usług drogą elektroniczną na zasadach określonych w ustawie z dnia 30 maja 2014 r. o prawach konsumenta.</p>
              <p>2. Prawo odstąpienia od umowy nie przysługuje w przypadku darowizn pieniężnych dokonywanych na rzecz Fundacji, które mają charakter dobrowolny i bezzwrotny.</p>
              <p>3. Prawo odstąpienia od umowy nie przysługuje również w przypadku, gdy świadczenie usługi drogą elektroniczną zostało rozpoczęte za wyraźną zgodą Użytkownika przed upływem terminu do odstąpienia od umowy.</p>
            </div>
          )
        },
        {
          num: '9',
          title: 'Postanowienia końcowe',
          body: (
            <div className="space-y-4">
              <p>1. Fundacja zastrzega sobie prawo do zmiany niniejszego Regulaminu w przypadku zmian przepisów prawa, zmiany zakresu świadczonych usług, wprowadzenia nowych funkcjonalności Serwisu lub zaprzestania ich świadczenia.</p>
              <p>2. Zmiany Regulaminu zostaną opublikowane w Serwisie z co najmniej 7-dniowym wyprzedzeniem przed dniem ich wejścia w życie.</p>
              <p>3. Fundacja ma prawo w każdym czasie zaprzestać prowadzenia Serwisu lub ograniczyć jego funkcjonalność.</p>
              <p>4. Nieważność któregokolwiek z postanowień Regulaminu nie wpływa na ważność pozostałych jego postanowień.</p>
              <p>5. Prawem właściwym dla Regulaminu jest prawo polskie.</p>
              <p>6. Wszelkie spory pomiędzy Fundacją a Użytkownikiem powstałe w związku z korzystaniem z Serwisu będą w pierwszej kolejności rozwiązywane polubownie.</p>
              <p>7. W przypadku braku porozumienia, sądem właściwym do rozstrzygania sporów jest sąd właściwy dla siedziby Fundacji.</p>
              <p>8. Regulamin jest dostępny w Serwisie pod adresem <a href="https://www.fhsfoundation.pl/regulamin" className="text-[#94c43d] underline">www.fhsfoundation.pl/regulamin</a>.</p>
              <p>9. Regulamin w obecnym brzmieniu obowiązuje od dnia 1 stycznia 2025 r.</p>
            </div>
          )
        }
      ],
      footer: 'Bezpieczeństwo i Transparentność — FHS Foundation'
    },
    en: {
      title: 'Terms of Service',
      lastUpdate: 'Effective from January 1, 2025',
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
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
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
      footer: 'Security & Transparency — FHS Foundation'
    },
    nl: {
      title: 'Algemene Voorwaarden',
      lastUpdate: 'Geldig vanaf 1 januari 2025',
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
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
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
          body: <p>Donaties zijn vrijwillig e n niet-restitueerbaar – herroepingsrecht is niet van toepassing.</p>
        }
      ],
      footer: 'Veiligheid & Transparantie — FHS Foundation'
    }
  };

  const t = content[language as Language] || content.pl;

  return (
    <div className="min-h-screen">
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
                <div className="flex-1 text-gray-600">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    {!section.icon && <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold">§ {section.num}</span>}
                    {section.title}
                  </h2>
                  {section.body}
                </div>
              </section>
            ))}

            <section className="pt-12 border-t border-gray-100 text-gray-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-[#94c43d]">
                  <ShieldCheck size={24} />
                  <span className="font-bold text-gray-900 leading-tight block">
                    {language === 'nl' ? 'Veiligheid & Transparantie' : language === 'en' ? 'Security & Transparency' : 'Bezpieczeństwo i Transparentność'}
                  </span>
                </div>
                <p className="text-sm">{t.footer}</p>
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
