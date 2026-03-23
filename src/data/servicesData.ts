import { Language } from '@/i18n/translations';
import { servicesTextEN } from './servicesDataEN';
import { servicesTextCN } from './servicesDataCN';

// Service cover images (u-*)
import uAnalizaWplywu from '@/assets/u-analiza-wplywu.png';
import uDecyzjeWejscia from '@/assets/u-decyzje-wejscia.png';
import uScenariuszeStrategiczne from '@/assets/u-scenariusze-strategiczne.png';
import uBriefingiDecyzyjne from '@/assets/u-briefingi-decyzyjne.png';
import uAnalizySektorow from '@/assets/u-analizy-sektorow.png';
import uAnalizaRegulacyjna from '@/assets/u-analiza-regulacyjna.png';
import uWeryfikacjaKontrahenta from '@/assets/u-weryfikacja-kontrahenta.png';
import uRozszerzonaWeryfikacja from '@/assets/u-rozszerzona-weryfikacja.png';
import uWyborModelu from '@/assets/u-wybor-modelu.png';
import uWsparcieFormalne from '@/assets/u-wsparcie-formalne.png';
import uIdentyfikacjaPartnerow from '@/assets/u-identyfikacja-partnerow.png';
import uWsparcieNegocjacyjne from '@/assets/u-wsparcie-negocjacyjne.png';
import uPrzygotowanieStruktur from '@/assets/u-przygotowanie-struktur.png';
import uAudytyWeryfikacja from '@/assets/u-audyty-weryfikacja.png';
import uProjektowanieLancucha from '@/assets/u-projektowanie-lancucha.png';
import uNadzorProdukcji from '@/assets/u-nadzor-produkcji.png';
import uOrganizacjaTransportu from '@/assets/u-organizacja-transportu.png';
import uKompleksowaRealizacja from '@/assets/u-kompleksowa-realizacja.png';
import uLokalnePozycjonowanie from '@/assets/u-lokalne-pozycjonowanie.png';
import uStrategieKomunikacji from '@/assets/u-strategie-komunikacji.png';
import uAdaptacjaKomunikacji from '@/assets/u-adaptacja-komunikacji.png';
import uMaterialySprzedazowe from '@/assets/u-materialy-sprzedazowe.png';
import uWsparcieMarketingowe from '@/assets/u-wsparcie-marketingowe.png';
import uOrganizacjaMisji from '@/assets/u-organizacja-misji.png';
import uAranzacjaSpotkan from '@/assets/u-aranzacja-spotkan.png';
import uSzkoleniaSystem from '@/assets/u-szkolenia-system.png';
import uSzkoleniaKultura from '@/assets/u-szkolenia-kultura.png';

// Case study images (ucs-*)
import ucsAnalizaWplywu from '@/assets/ucs-analiza-wplywu.png';
import ucsDecyzjeWejscia from '@/assets/ucs-decyzje-wejscia.png';
import ucsScenariuszeStrategiczne from '@/assets/ucs-scenariusze-strategiczne.png';
import ucsBriefingiDecyzyjne from '@/assets/ucs-briefingi-decyzyjne.png';
import ucsAnalizySektorow from '@/assets/ucs-analizy-sektorow.png';
import ucsAnalizaRegulacyjna from '@/assets/ucs-analiza-regulacyjna.png';
import ucsWeryfikacjaKontrahenta from '@/assets/ucs-weryfikacja-kontrahenta.png';
import ucsRozszerzonaWeryfikacja from '@/assets/ucs-rozszerzona-weryfikacja.png';
import ucsWyborModelu from '@/assets/ucs-wybor-modelu.png';
import ucsWsparcieFormalne from '@/assets/ucs-wsparcie-formalne.png';
import ucsIdentyfikacjaPartnerow from '@/assets/ucs-identyfikacja-partnerow.png';
import ucsWsparcieNegocjacyjne from '@/assets/ucs-wsparcie-negocjacyjne.png';
import ucsPrzygotowanieStruktur from '@/assets/ucs-przygotowanie-struktur.png';
import ucsAudytyWeryfikacja from '@/assets/ucs-audyty-weryfikacja.png';
import ucsProjektowanieLancucha from '@/assets/ucs-projektowanie-lancucha.png';
import ucsNadzorProdukcji from '@/assets/ucs-nadzor-produkcji.png';
import ucsOrganizacjaTransportu from '@/assets/ucs-organizacja-transportu.png';
import ucsKompleksowaRealizacja from '@/assets/ucs-kompleksowa-realizacja.png';
import ucsLokalnePozycjonowanie from '@/assets/ucs-lokalne-pozycjonowanie.png';
import ucsStrategiaKomunikacji from '@/assets/ucs-strategia-komunikacji.png';
import ucsAdaptacjaKomunikacji from '@/assets/ucs-adaptacja-komunikacji.png';
import ucsMaterialySprzedazowe from '@/assets/ucs-materialy-sprzedazowe.png';
import ucsWsparcieMarketingowe from '@/assets/ucs-wsparcie-marketingowe.png';
import ucsOrganizacjaMisji from '@/assets/ucs-organizacja-misji.png';
import ucsAranzacjaSpotkan from '@/assets/ucs-aranzacja-spotkan.png';
import ucsSzkoleniaSystem from '@/assets/ucs-szkolenia-system.png';
import ucsSzkoleniaKultura from '@/assets/ucs-szkolenia-kultura.png';

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  caseStudyImage: string;
  whenItMakesSense: string[];
  problemsSolved: string[];
  scope: {
    includes: string[];
    excludes: string[];
  };
  deliverables: string[];
  workModel: {
    type: string;
    duration: string;
    communication: string;
  };
  caseStudy: {
    client: string;
    situation: string;
    actions: string;
    result: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  // ==========================================
  // KATEGORIA 1: STRATEGIA WOBEC CHIN
  // ==========================================
  'analiza-wplywu': {
    title: 'Analiza wpływu Chin na firmę lub sektor',
    subtitle: 'Strategia wobec Chin',
    image: uAnalizaWplywu,
    caseStudyImage: ucsAnalizaWplywu,
    description: 'To strategiczny risk check dla Zarządu przed podjęciem decyzji o wejściu na rynek chiński, zmianie dostawcy, inwestycji technologicznej lub ekspansji eksportowej. Oceniamy realny wpływ Chin na dany sektor w oparciu o chińskie źródła branżowe, dokumenty planistyczne oraz lokalne dane rynkowe. Weryfikujemy, czy przewagi kosztowe są faktyczne, czy jedynie pozorne oraz czy rozważany kierunek działania ma uzasadnienie ekonomiczne i operacyjne. Oddzielamy twarde fakty od narracji marketingowej. Efektem jest klarowna rekomendacja: wchodzić, modyfikować, testować czy wstrzymać projekt - zanim firma zainwestuje w kosztowne audyty, podróże służbowe czy formalne procedury.',
    whenItMakesSense: [
      'Firma traci konkurencyjność w Polsce i rozważa automatyzację lub zakup technologii z Chin.',
      'Istnieje uzależnienie od importu z Chin, bez pełnej wiedzy o ryzykach regulacyjnych i operacyjnych.',
      'Planowana jest ekspansja eksportowa do Chin i potrzebna jest realna ocena szans (weryfikacja konkurencji i barier wejścia) przed zainwestowaniem środków w marketing.',
      'Rozważany jest nowy model sourcingu, ale brak twardych danych decyzyjnych.',
    ],
    problemsSolved: [
      'Minimalizacja Ryzyka (De-risking): Ograniczenie błędnej alokacji kapitału (technologia, dostawca, model wejścia).',
      'Weryfikacja Opłacalności: ocena, czy import/wdrożenie danej technologii faktycznie przyniesie oszczędności względem rozwiązań dostępnych w Europie.',
      'Wczesne wykrycie ryzyk regulacyjnych, operacyjnych i reputacyjnych.',
    ],
    scope: {
      includes: [
        'Analiza Luki (Gap Analysis): Porównanie rozwiązań stosowanych w Chinach z obecną sytuacją w firmie klienta.',
        'Weryfikacja Polityczna: Sprawdzenie, czy dany sektor jest wspierany przez rząd (szansa na niższe ceny/dotacje), czy ograniczany regulacjami (ryzyko) - na podstawie dokumentów planistycznych (np. plany 5-letnie).',
        'Mapa Graczy: Identyfikacja kluczowych producentów i technologii w danym regionie (weryfikacja wiarygodności poza portalem Alibaba).',
        'Analiza Ryzyka: Sprawdzenie opinii o podmiotach w chińskim internecie przemysłowym (bazy niedostępne po angielsku).',
        'Kompleksowa analiza rynku, technologii, procesów oraz kluczowych ryzyk i szans rozwojowych.',
        'Syntetyczny przegląd sektora (strategiczny overview).',
        'Wstępna ocena ryzyka inwestycyjnego i operacyjnego (de-risking).',
        'Analiza realizowana w oparciu o źródła lokalne i desk research (bez wizyt terenowych).',
      ],
      excludes: [
        'Fizycznych wizyt w fabrykach i audytów technicznych na miejscu.',
        'Bezpośrednich negocjacji handlowych i zakupów.',
        'Doradztwa prawnego i podatkowego.',
      ],
    },
    deliverables: [
      'Raport Zarządczy (Executive Memo): Dokument PDF (3-5 stron kluczowych wniosków + załączniki analityczne). Skupiony na faktach, liczbach i rekomendacjach, bez zbędnej teorii.',
      'Omówienie Wniosków (Debriefing Call): 45-minutowa konsultacja online. Możliwość zadania pytań i omówienia dalszych kroków "na żywo".',
    ],
    workModel: {
      type: 'Projekt jednorazowy - analiza konkretnego sektora lub Model abonamentowy - cykliczne aktualizacje sektora / monitoring regulacyjny',
      duration: '7-10 dni roboczych',
      communication: 'E-mail + spotkanie wideo podsumowujące (Debriefing Call)',
    },
    caseStudy: {
      client: 'Średnia fabryka mebli (Polska).',
      situation: 'Plan zakupu robotów lakierniczych z Chin. Obawy o awaryjność, brak części zamiennych i rzetelność dostawcy znalezionego w internecie.',
      actions: 'Przeprowadzono analizę rynku. Zidentyfikowano 3 producentów w klastrze robotyki (Foshan) posiadających stabilną pozycję rynkową. Odrzucono 2 firmy oparte wyłącznie na marketingu (negatywne opinie na chińskich forach inżynierskich). Rekomendowano dostawcę wykorzystującego podzespoły Siemens (łatwy serwis w Polsce).',
      result: 'Klient zrezygnował z ryzykownego zakupu od pośrednika i rozpoczął rozmowy z rekomendowanym producentem.',
    },
  },
  'decyzje-wejscia': {
    title: 'Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji',
    subtitle: 'Strategia wobec Chin',
    image: uDecyzjeWejscia,
    caseStudyImage: ucsDecyzjeWejscia,
    description: 'Kompleksowa analiza strategiczna oparta o źródła otwarte (OSINT) i chińskojęzyczne bazy danych, dedykowana firmom stojącym przed kluczową decyzją kierunkową: wejść do Chin, rozpocząć współpracę z chińskim partnerem (wdrożenie technologii, import, JV), skalować obecność czy ograniczyć ryzyko (decoupling). Agregujemy dane z chińskich rejestrów, dokumentów planistycznych i wywiadu rynkowego, tworząc "holistyczną mapę terenu". Usługa dostarcza zarządowi twardych argumentów "za" lub "przeciw" każdej formie kooperacji, eliminując domysły i emocje na etapie planowania strategicznego.',
    whenItMakesSense: [
      'Decyzja o Współpracy Technologicznej: Rozważany jest zakup chińskich maszyn, licencji lub wdrożenie ich systemów IT w Polsce, ale istnieje obawa o jakość, bezpieczeństwo danych i serwis.',
      'Weryfikacja Modelu Partnerstwa: Planowany jest strategiczny sojusz (OEM / ODM / Dystrybucja) z chińskim podmiotem i istnieje potrzeba sprawdzenia, czy partner ma zdolność operacyjną do jego realizacji.',
      'Planowana Ekspansja: Rozważane jest fizyczne wejście na rynek chiński (sprzedaż/produkcja), ale brakuje rzetelnej oceny konkurencji i barier wejścia.',
      'Analiza Ryzyka (Exposure): Klient zastanawia się, czy obecny łańcuch dostaw lub partnerstwo są zagrożone w świetle nowych regulacji Pekinu i geopolityki.',
    ],
    problemsSolved: [
      'Eliminacja "ślepych punktów": Zdejmuje ryzyko operacyjne i polityczne z decyzji o alokacji kapitału w relacje z Chinami (zarówno w modelu importu technologii, jak i eksportu).',
      'Oszczędność Zasobów: Zapobiega wchodzeniu w "toksyczne" partnerstwa lub inwestowaniu w technologie, które nie będą wspierane (brak części, brak serwisu).',
    ],
    scope: {
      includes: [
        'Analiza Potencjału Partnera/Technologii: Weryfikacja pozycji rynkowej i technologicznej chińskiego podmiotu (czy to producent, czy pośrednik; czy technologia jest "żywa", czy wygaszana).',
        'Sektorowy Deep Dive: Kondycja branży w Chinach + Trendy.',
        'Analiza "Policy vs Reality": Zestawienie planów współpracy z dokumentami strategicznymi KPCh. Sprawdzamy, czy Wasz model współpracy jest zgodny z długoterminową wizją Pekinu.',
        'Ocena Ryzyka Partnerstwa: Wstępna ocena kontekstu operacyjnego i sygnałów ryzyka po stronie partnera (na podstawie źródeł publicznych).',
        'Analizę źródeł chińskojęzycznych, raporty rządowe, syntezę strategiczną.',
      ],
      excludes: [
        'Negocjacji handlowych.',
        'Doradztwa prawnego i podatkowego.',
        'Audytów technicznych na miejscu.',
      ],
    },
    deliverables: [
      'Raport Strategiczny (PDF): Analiza sektora/partnera + Analiza strategiczno-polityczna (szanse i zagrożenia współpracy).',
      'Rekomendacja Kierunkowa: Jasna sugestia: werdykt ryzyka + scenariusze + warunki.',
      'Debriefing Call: 60-minutowe spotkanie z omówieniem wniosków.',
    ],
    workModel: {
      type: 'Projekt jednorazowy lub Model abonamentowy - monitoring sektora / aktualizacje regulacyjne',
      duration: '10-14 dni roboczych',
      communication: 'E-mail + spotkanie wideo podsumowujące (Debriefing Call)',
    },
    caseStudy: {
      client: 'Polska sieć logistyczna.',
      situation: 'Plan wdrożenia chińskich robotów sortujących (AGV) w magazynie pod Warszawą. Klient miał ofertę od "Lidera Rynku" z Shenzhen.',
      actions: 'Analiza wykazała, że "Lider" jest podmiotem zadłużonym, a oferowana technologia opiera się na starym standardzie nawigacji, który jest wycofywany z chińskich "Smart Warehouses" na rzecz nowszego.',
      result: 'Klient zerwał negocjacje. FHS Foundation wskazało 2 alternatywnych dostawców (mniejszych, ale z nowszą technologią i wsparciem rządu). Klient wdrożył rozwiązanie tańsze o 15% i nowocześniejsze o generację.',
    },
  },
  'scenariusze-strategiczne': {
    title: 'Scenariusze strategiczne i mapy ryzyk',
    subtitle: 'Strategia wobec Chin',
    image: uScenariuszeStrategiczne,
    caseStudyImage: ucsScenariuszeStrategiczne,
    description: 'Tworzymy scenariusze strategiczne dla firm z istotną ekspozycją na Chiny, które muszą podejmować decyzje w warunkach wysokiej niepewności. Zamiast reagować na kryzysy po fakcie, porządkujemy ryzyka geopolityczne, regulacyjne i operacyjne, projektując możliwe warianty rozwoju sytuacji - od bazowych po krytyczne. Usługa dostarcza Zarządowi "mapę pól ryzyk" oraz zestaw działań osłonowych (Plan B), które można uruchomić w momencie zmiany warunków. Celem jest utrzymanie ciągłości biznesowej i zdolności decyzyjnej w środowisku, w którym relacje z Chinami podlegają szybkim i nie zawsze przewidywalnym zmianom.',
    whenItMakesSense: [
      'Wysoka ekspozycja na Chiny: Ponad 30-40% kosztów, obrotu lub kluczowych komponentów zależy od relacji PL-CN.',
      'Niepewność geopolityczna: Firma chce zrozumieć konsekwencje napięć wokół Tajwanu, ceł UE, kontroli eksportowych lub zakłóceń w logistyce morskiej.',
      'Planowanie długoterminowe (3-5 lat): Strategia rozwoju wymaga uwzględnienia ryzyk makroekonomicznych (demografia Chin, polityka "Dual Circulation", zmiany regulacyjne).',
      'Presja Rady Nadzorczej / Inwestorów: Konieczne jest profesjonalne, udokumentowane "risk assessment" przed decyzją inwestycyjną lub zmianą modelu biznesowego.',
    ],
    problemsSolved: [
      'Redukcja paraliżu decyzyjnego: Zamienia niepewność i ogólnikowe obawy w konkretne scenariusze i procedury działania.',
      'Business Continuity: Identyfikuje "single points of failure" w łańcuchu dostaw i relacjach z Chinami, umożliwiając wcześniejsze przygotowanie alternatyw.',
    ],
    scope: {
      includes: [
        'Identyfikację ryzyk systemowych: cła, regulacje ChRL, logistyka, polityka przemysłowa, ograniczenia eksportowe, czynniki demograficzne.',
        'Budowę scenariuszy: scenariusz bazowy, scenariusz negatywny (np. eskalacja wojny handlowej), scenariusz krytyczny ("czarny łabędź" - nagłe zamrożenie relacji lub zerwanie ciągłości dostaw).',
        'Stress-test relacji z Chinami: Symulacja wpływu scenariuszy na działalność klienta w oparciu o dane przekazane przez firmę lub - przy ich braku - w wariancie uproszczonym.',
        'Rekomendacje mitygacyjne (Plan B): Działania osłonowe: dywersyfikacja portów i tras, bufory magazynowe, alternatywne kierunki sourcingu, zmiany modelu współpracy.',
      ],
      excludes: [
        'Hedgingu finansowego/ubezpieczeń.',
        'Obsługi prawnej compliance.',
        'Negocjacji lub wdrożeń operacyjnych po stronie klienta.',
      ],
    },
    deliverables: [
      'Raport Scenariuszowy (PDF): Macierz ryzyk (Risk Matrix / Heatmap) + opis scenariuszy i ich konsekwencji operacyjnych oraz finansowych.',
      'Plan B / Action Plan: Lista działań i progów decyzyjnych do uruchomienia w przypadku materializacji ryzyk.',
      'Debriefing / Warsztat (opcjonalnie): Omówienie wniosków z Zarządem lub zespołem strategicznym.',
    ],
    workModel: {
      type: 'Projektowy (Sprint Strategiczny)',
      duration: '10-14 dni roboczych',
      communication: 'Spotkanie startowe online + raport końcowy + debriefing',
    },
    caseStudy: {
      client: 'Duży dystrybutor elektroniki użytkowej (Polska).',
      situation: '100% dostaw z regionu Shenzhen. Obawa przed eskalacją napięć geopolitycznych i nowymi cłami UE.',
      actions: 'Opracowano scenariusz negatywny i krytyczny. Zidentyfikowano ryzyko koncentracji logistycznej oraz brak alternatywnych punktów wyjścia poza południowe Chiny. Przeprowadzono stress-test modelu dostaw.',
      result: 'Klient uruchomił wariant backup (hub w Wietnamie) oraz zwiększył bufory magazynowe dla kluczowych komponentów.',
    },
  },
  'briefingi-decyzyjne': {
    title: 'Briefingi decyzyjne dla zarządów',
    subtitle: 'Strategia wobec Chin',
    image: uBriefingiDecyzyjne,
    caseStudyImage: ucsBriefingiDecyzyjne,
    description: 'Dedykowane sesje strategiczne lub zwięzłe materiały analityczne (Board Memo), przygotowane specjalnie pod kątem posiedzeń Zarządów i Rad Nadzorczych. Tłumaczymy skomplikowane makroekonomiczne i technologiczne sygnały z Chin na język konkretnych ryzyk i szans dla Twojej spółki. Usługa służy szybkiemu wyrównaniu poziomu wiedzy decydentów (alignment), obaleniu mitów i dostarczeniu niezależnej, zewnętrznej perspektywy przed kluczowymi głosowaniami.',
    whenItMakesSense: [
      'Brak Spójności w Zarządzie: Część decydentów opowiada się za współpracą z Chinami, część jest sceptyczna. Potrzebna jest zewnętrzna perspektywa oparta na danych.',
      'Przygotowanie do Strategii Rocznej: Musicie uwzględnić czynnik chiński (konkurencję lub dostawy) w planach budżetowych, ale brakuje Wam świeżych danych.',
      'Onboarding Decydentów: Nowy członek Zarządu lub Rady Nadzorczej potrzebuje szybkiego wdrożenia w specyfikę azjatycką firmy.',
      'Nagła Zmiana Rynkowa: Wprowadzono nowe cła, regulacje lub wybuchł kryzys medialny - potrzebujecie pigułki wiedzy "co to dla nas znaczy" w ciągu 48h.',
    ],
    problemsSolved: [
      'Eliminacja Szumu Informacyjnego: Zarząd nie ma czasu czytać raportów. Dostaje esencję potrzebną do podjęcia uchwały.',
      'Obiektywizacja Dyskusji: Przenosi rozmowę z poziomu emocji ("Chiny są groźne/wspaniałe") na poziom faktów ("Chiny produkują to o 30% taniej").',
      'Przyspieszenie decyzji: Skraca proces decyzyjny poprzez dostarczenie wspólnej bazy faktów.',
    ],
    scope: {
      includes: [
        'Synteza Tematyczna: Opracowanie jednego, wąskiego zagadnienia (np. "Wpływ automatyzacji w Chinach na naszą marżę").',
        'Q&A Session: Odpowiedzi na pytania Zarządu w trybie "ognia pytań" (Challenge Session).',
        'Prezentację dla Zarządu: Maks. 10 slajdów z kluczowymi danymi i wnioskami.',
        'Board Memo (1-3 strony): Skondensowany dokument "do kawy" przed spotkaniem (Executive Summary).',
      ],
      excludes: [
        'Długoterminowego doradztwa strategicznego.',
        'Operacyjnego wdrażania wniosków.',
        'Negocjacji w imieniu spółki.',
      ],
    },
    deliverables: [
      'Board Memo (1-3 strony)',
      'Prezentacja zarządcza (max 10 slajdów)',
      'Sesja briefingowa (45-60 min)',
      'W razie potrzeby: follow-up memo z odpowiedziami na dodatkowe pytania',
    ],
    workModel: {
      type: 'Jednorazowy lub Abonament (Kwartalny Update)',
      duration: 'Krótki cykl przygotowawczy (3-5 dni) + Spotkanie',
      communication: 'Dostarczenie materiałów + Spotkanie wideo/osobiste (Warszawa/Szanghaj)',
    },
    caseStudy: {
      client: 'Polska grupa kapitałowa (branża budowlana).',
      situation: 'Zarząd był podzielony w kwestii zakupu chińskich maszyn drogowych. Dyrektor Finansowy widział oszczędności, Dyrektor Techniczny bał się o jakość i "politykę". Decyzja wisiała od 3 miesięcy.',
      actions: 'Przygotowano briefing "Chińskie Maszyny Budowlane 2025: Fakty vs Mity". Pokazano, że konkurencja z Europy Zachodniej już używa tych samych podzespołów. Przedstawiono twarde dane o dostępności serwisu w Polsce.',
      result: 'Zarząd osiągnął konsensus. Przegłosowano pilotażowy zakup 2 maszyn zamiast wymiany całej floty (bezpieczny kompromis). Inwestycja ruszyła z miejsca.',
    },
  },

  // ==========================================
  // KATEGORIA 2: ANALIZY RYNKU I WERYFIKACJA PARTNERÓW
  // ==========================================
  'analizy-sektorow': {
    title: 'Analizy sektorów, klastrów przemysłowych i konkurencji',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: uAnalizySektorow,
    caseStudyImage: ucsAnalizySektorow,
    description: 'To kompleksowa analiza struktury rynku i jego kluczowych graczy w Chinach. Łączymy mapowanie klastrów przemysłowych z pogłębionym badaniem konkurencji - zarówno lokalnej, jak i międzynarodowej. Identyfikujemy rzeczywiste centra produkcji w danym sektorze (np. Shenzhen - elektronika, Foshan - meble, Guzhen - oświetlenie), analizujemy lokalny ekosystem dostawców i łańcuch wartości oraz wskazujemy regiony, w których technologia jest najbardziej rozwinięta, a koszty najbardziej efektywne. Równolegle analizujemy konkurencję: strategie cenowe, kanały sprzedaży, komunikację marketingową, opinie klientów oraz źródła przewagi (technologia, skala, efektywność operacyjna, wsparcie publiczne). Efektem jest decyzja sourcingowa i rynkowa oparta na realnej strukturze rynku, a nie na deklaracjach dostawców czy marketingu konkurencji.',
    whenItMakesSense: [
      'Eliminacja pośredników: Chcesz kupować bezpośrednio u producenta, ale trafiasz głównie na firmy handlowe.',
      'Wejście na rynek chiński: Planujesz ekspansję i musisz wiedzieć, z kim realnie będziesz konkurować.',
      'Presja cenowa: Na Twoim rynku pojawił się chiński gracz z bardzo niską ceną i chcesz zrozumieć jego model operacyjny.',
      'Przygotowanie wizyty w Chinach: Chcesz odwiedzić faktyczne centrum branży, a nie przypadkową lokalizację.',
      'Optymalizacja produkcji: Szukasz alternatywnego regionu produkcyjnego o lepszym stosunku ceny do jakości.',
    ],
    problemsSolved: [
      'Pozwala ominąć pośredników i dotrzeć bezpośrednio do zagłębi produkcyjnych.',
      'Ujawnia realną strukturę kosztów i przewagi konkurencyjne rynku.',
      'Chroni przed wejściem w segment zdominowany przez silnych lokalnych graczy.',
      'Ogranicza ryzyko błędnej alokacji kapitału w produkt, który na rynku chińskim nie posiada realnej unikalności.',
    ],
    scope: {
      includes: [
        'Geograficzne mapowanie kluczowych klastrów przemysłowych.',
        'Analizę ekosystemu (poddostawcy, infrastruktura, specjalizacja technologiczna).',
        'Profilowanie 3-5 głównych konkurentów (oferta, ceny, pozycjonowanie).',
        'Analizę opinii klientów i obecności cyfrowej (WeChat, Douyin, Tmall, JD).',
        'Porównanie przewag kosztowych i technologicznych.',
      ],
      excludes: [
        'Audytów finansowych i prawnych.',
        'Umawiania spotkań handlowych.',
        'Testów fizycznych produktów (realizowane jako osobne usługi).',
      ],
    },
    deliverables: [
      'Raport analityczny (PDF): mapa klastra, analiza rynku i konkurencji, wnioski strategiczne.',
      'Tabela porównawcza (Excel): lista producentów oraz benchmarking konkurencji.',
      'Rekomendacja kierunkowa: wskazanie optymalnej ścieżki działania.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '10-14 dni roboczych',
      communication: 'E-mail + debriefing call',
    },
    caseStudy: {
      client: 'Polska marka kosmetyków naturalnych oraz producent oświetlenia LED.',
      situation: 'Pierwszy klient planował wejście do Chin z produktem postrzeganym jako "unikalny". Drugi kupował komponenty przez pośrednika z Pekinu.',
      actions: 'Przeprowadzono analizę klastrów przemysłowych i konkurencji. Wykazano, że: centrum produkcji LED znajduje się w Guzhen, a nie w Pekinie, w Chinach funkcjonuje ponad 30 marek oferujących podobne kosmetyki w niższym segmencie cenowym.',
      result: 'Bezpośrednie nawiązanie relacji z producentem obniżyło koszty o 22%. W drugim przypadku zarekomendowano pivot pozycjonowania zamiast wejścia w konkurencję cenową.',
    },
  },
  'analiza-regulacyjna': {
    title: 'Analiza regulacyjna i barier wejścia',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: uAnalizaRegulacyjna,
    caseStudyImage: ucsAnalizaRegulacyjna,
    description: 'To kompleksowa ocena możliwości wejścia na rynek chiński - z perspektywy regulacyjnej, rynkowej i operacyjnej. Chiński rynek jest w dużej mierze sterowany instytucjonalnie - o powodzeniu decyduje nie tylko produkt, ale zgodność z reżimem regulacyjnym oraz realne dopasowanie do lokalnego popytu. Identyfikujemy właściwe instytucje nadzorcze dla Twojej branży, kluczowe licencje i standardy (np. GB), ograniczenia inwestycyjne (m.in. "Negative List"), a także weryfikujemy, czy Twój model wejścia jest możliwy w praktyce. Równolegle analizujemy realny popyt, wrażliwość cenową, trendy konsumenckie (m.in. Guochao, livestream commerce) oraz mechanizmy sprzedaży w danej kategorii. Efektem jest decyzja kierunkowa: wejść, adaptować model, testować pilotażowo czy wstrzymać projekt - zanim firma zaangażuje kapitał w formalne procedury, logistykę i marketing.',
    whenItMakesSense: [
      'Planujesz eksport lub sprzedaż cross-border i chcesz wiedzieć, czy produkt ma realne szanse powodzenia.',
      'Działasz w sektorze regulowanym (żywność, kosmetyki, med-tech, suplementy, wybrane urządzenia).',
      'Planujesz inwestycję bezpośrednią (WFOE / JV / zakład) i musisz rozumieć ograniczenia sektorowe.',
      'Sprzedaż w Chinach spada i potrzebujesz diagnozy: trend, cena, kanał, dystrybutor, pozycjonowanie.',
      'Słyszysz, że "w Chinach wszyscy kupują X" i chcesz odróżnić trwały trend od chwilowej fali.',
    ],
    problemsSolved: [
      'Ogranicza ryzyko kosztownych błędów formalnych i zatrzymania towaru.',
      'Pokazuje realne bariery wejścia zanim staną się blokadą operacyjną.',
      'Ujawnia różnicę między prawem "na papierze" (de jure) a praktyką egzekwowania (de facto).',
      'Chroni przed inwestycją w produkt bez dopasowania rynkowego.',
    ],
    scope: {
      includes: [
        'Mapowanie instytucji i reżimu nadzoru (np. SAMR, NMPA, GACC, MIIT - zależnie od branży).',
        'Compliance checklist: standardy, normy (GB), certyfikaty, wymogi etykietowania i importowe.',
        'Analizę "Negative List" i ograniczeń kapitałowych.',
        'Analizę popytu i klienta (Customer Avatar): kto kupuje, gdzie i jak podejmuje decyzję.',
        'Analizę trendów i narracji sprzedażowych w danej kategorii.',
        'Competitive pricing scan: poziomy cen, segmentacja i pozycjonowanie konkurencji.',
        'Wstępną mapę barier regulacyjnych i operacyjnych.',
      ],
      excludes: [
        'Reprezentacji prawnej, składania wniosków i licencji.',
        'Rejestracji znaków towarowych.',
        'Lobbingu politycznego.',
        'Prowadzenia kampanii marketingowych.',
      ],
    },
    deliverables: [
      'Raport "Market & Regulatory Entry Assessment" (PDF): analiza potencjału wejścia + system "go / adapt / pilot / stop".',
      'Roadmapa wejścia: lista wymogów formalnych, zależności czasowych i ryzyk (na poziomie planistycznym).',
      'Rekomendacja pozycjonowania i ceny: sugerowany segment i kierunek komunikacji.',
      'Debriefing call: 45-60 min omówienia wniosków i decyzji "co dalej".',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '14-21 dni roboczych',
      communication: 'E-mail + spotkanie podsumowujące',
    },
    caseStudy: {
      client: 'Producent suplementów diety oraz producent zdrowych batonów (Polska).',
      situation: 'Plan wejścia na rynek z komunikacją opartą na "tradycyjnej recepturze" oraz składnikiem popularnym w UE.',
      actions: 'Przeprowadzono analizę regulacyjną i rynkową. Zidentyfikowano brak składnika na listach dopuszczeń, wysoką barierę czasowo-kosztową rejestracji oraz rozbieżność między komunikacją produktu a trendami funkcjonalnymi w Chinach.',
      result: 'Rezygnacja z "general trade" i start przez CBEC jako kanał testowy. Adaptacja komunikacji i opakowań. Rozpoczęcie ścieżki formalnej przed logistyką, co pozwoliło uniknąć zatrzymania kontenera.',
    },
  },
  'weryfikacja-kontrahenta': {
    title: 'Weryfikacja kontrahenta (Desktop Check)',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: uWeryfikacjaKontrahenta,
    caseStudyImage: ucsWeryfikacjaKontrahenta,
    description: 'Podstawowy pakiet bezpieczeństwa przed nawiązaniem relacji handlowej z potencjalnym partnerem. Usługa pozwala zweryfikować, czy potencjalny kontrahent faktycznie istnieje, prowadzi deklarowaną działalność i posiada realne zaplecze operacyjne. Sprawdzamy, czy "producent" nie jest w rzeczywistości firmą handlową (Trading Company), czy dane rejestrowe są spójne oraz czy podmiot nie figuruje w rejestrach sporów i ostrzeżeń. Celem jest szybkie oddzielenie wiarygodnych partnerów od podmiotów wysokiego ryzyka, zanim dojdzie do transferu środków lub podpisania umowy.',
    whenItMakesSense: [
      'Nowy Dostawca: Znaleźliście firmę na targach, portalu B2B lub przez polecenie i chcecie sprawdzić jej legalność przed pierwszym zamówieniem.',
      'Podejrzenie Pośrednictwa: Ceny są wysokie, komunikacja niejasna, a "fabryka" unika rozmów o produkcji - potrzebujecie potwierdzić, czy to producent, czy trading.',
      'Duża Zaliczka: Planujecie wpłatę istotnej kwoty i chcecie upewnić się, że konto bankowe należy do realnego, stabilnego podmiotu.',
      'Europejski Pośrednik: Firma w UE twierdzi, że ma wyłączność na markę lub technologię z Chin - weryfikujemy to u źródła.',
    ],
    problemsSolved: [
      'Ochrona Kapitału: Eliminuje ryzyko współpracy z firmami-wydmuszkami, oszustami lub podmiotami bez zaplecza operacyjnego.',
      'Ochrona Marży: Ujawnia pośredników podszywających się pod producentów, umożliwiając dotarcie do faktycznego źródła produkcji.',
    ],
    scope: {
      includes: [
        'Weryfikacja Rejestrowa (Chiny): Sprawdzenie licencji biznesowej (AIC), kapitału zakładowego, reprezentacji prawnej i zakresu działalności.',
        'Factory vs Trading Check: Analiza Business Scope - czy firma ma prawo produkować, czy wyłącznie handlować.',
        'Historia Prawna i Red Flags: Sprawdzenie sporów sądowych, postępowań administracyjnych i sygnałów ostrzegawczych.',
        'Raport weryfikacyjny dla jednego podmiotu + tłumaczenie kluczowych dokumentów rejestrowych.',
      ],
      excludes: [
        'Pełnego audytu finansowego.',
        'Wywiadu środowiskowego offline.',
        'Badań technicznych produktów.',
        'Wizyty w fabryce.',
      ],
    },
    deliverables: [
      'Raport Weryfikacyjny (PDF): Karta podmiotu z oceną wiarygodności (Risk Score) oraz jasną rekomendacją: Bezpieczny / Podwyższone Ryzyko / Wysokie Ryzyko.',
      'Załączniki Dowodowe: Skany dokumentów rejestrowych z tłumaczeniem kluczowych pozycji.',
    ],
    workModel: {
      type: 'Jednorazowy (per podmiot)',
      duration: '3-5 dni roboczych',
      communication: 'Email (raport + rekomendacja) + opcjonalny 30-minutowy call wyjaśniający',
    },
    caseStudy: {
      client: 'Polska hurtownia zabawek.',
      situation: 'Atrakcyjna oferta "producenta" pluszaków znaleziona na Alibaba. Profesjonalna strona, zdjęcia dużej hali produkcyjnej.',
      actions: 'Weryfikacja wykazała kapitał zakładowy 10 000 RMB, rejestrację w biurowcu oraz zakres działalności "Consulting & Trade". Zdjęcia fabryki pochodziły z banku stockowego.',
      result: 'Klient nie wpłacił zaliczki 50 tys. USD. FHS Foundation wskazało realną fabrykę w regionie Yangzhou (kapitał 5 mln RMB), produkującą ten sam asortyment 10% taniej - bez pośrednika.',
    },
  },
  'due-diligence': {
    title: 'Rozszerzona weryfikacja partnera (Due Diligence)',
    subtitle: 'Analizy rynku i weryfikacja partnerów',
    image: uRozszerzonaWeryfikacja,
    caseStudyImage: ucsRozszerzonaWeryfikacja,
    description: 'To pogłębione Due Diligence dla relacji o wysokiej stawce kapitałowej i operacyjnej. Gdy w grę wchodzą kontrakty strategiczne, wyłączności, Joint Venture, inwestycje kapitałowe lub uzależnienie operacyjne od jednego partnera, standardowe "sprawdzenie rejestru" nie wystarcza. Prowadzimy wielowymiarową weryfikację partnerów biznesowych, technologicznych i dostawców - obejmującą historię sporów sądowych, reputację branżową, strukturę powiązań właścicielskich oraz sygnały ryzyka operacyjnego i finansowego (w zakresie możliwym w realiach Chin). Celem jest wykrycie ukrytych zobowiązań, konfliktów interesów i red flags, które mogą zablokować projekt po podpisaniu umowy.',
    whenItMakesSense: [
      'Planujesz Joint Venture lub spółkę celową i musisz potwierdzić wiarygodność partnera.',
      'Podpisujesz wieloletnią wyłączność z karami umownymi.',
      'Rozważasz inwestycję kapitałową lub przejęcie udziałów w chińskim podmiocie.',
      'Uzależniasz produkcję od jednego dostawcy komponentów.',
      'Wchodzisz we współpracę technologiczną i udostępniasz know-how.',
    ],
    problemsSolved: [
      'Chroni przed "toksycznym partnerem" - zadłużonym, niestabilnym lub obciążonym sporami.',
      'Ujawnia ukryte ryzyka strukturalne i powiązania właścicielskie.',
      'Daje przewagę negocjacyjną przy ustalaniu zabezpieczeń umownych.',
      'Ogranicza ryzyko utraty kapitału, reputacji i ciągłości operacyjnej.',
    ],
    scope: {
      includes: [
        'Analiza sporów i ryzyk prawnych (bazy sądowe, postępowania egzekucyjne, sygnały administracyjne).',
        'Analiza finansowa (zakres ograniczony do dostępnych danych): kapitał, ratingi, obroty, wskaźniki wiarygodności, sygnały płynności.',
        'Reputation check: media branżowe, źródła środowiskowe, powtarzalne skargi, czarne listy.',
        'Mapowanie powiązań właścicielskich i struktury grupy kapitałowej.',
        'Identyfikacja ryzyk typu "shell companies" i konfliktów interesów.',
        'Raport Due Diligence (20-30 stron) + mapę powiązań.',
      ],
      excludes: [
        'Forensic accounting (wgląd w księgi).',
        'Formalnej wyceny przedsiębiorstwa.',
        'Reprezentacji prawnej przed urzędami.',
      ],
    },
    deliverables: [
      'Raport Due Diligence (PDF): ocena ryzyka współpracy w modelu Traffic Light (green / yellow / red) + rekomendacje zabezpieczeń.',
      'Wykaz Red Flags: lista zidentyfikowanych nieprawidłowości oraz punktów wymagających doprecyzowania w umowie.',
      'Debriefing call: omówienie wniosków i konsekwencji negocjacyjnych.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '10-15 dni roboczych',
      communication: 'Statusy mailowe + prezentacja wyników (call)',
    },
    caseStudy: {
      client: 'Polska firma z branży OZE (fotowoltaika).',
      situation: 'Plan Joint Venture z chińskim producentem inwerterów oraz montownia w Polsce.',
      actions: 'Wykryto liczne otwarte spory o niezapłacone faktury, sygnały egzekucyjne oraz red flags dotyczące osób zarządzających (wpisy na listach dłużników).',
      result: 'Klient przerwał negocjacje i uniknął inwestycji rzędu kilku mln PLN. Następnie wskazano alternatywny, stabilniejszy podmiot do dalszych rozmów.',
    },
  },

  // ==========================================
  // KATEGORIA 3: WEJŚCIE NA RYNEK POLSKA ↔ CHINY
  // ==========================================
  'wybor-modelu': {
    title: 'Wybór modelu wejścia na rynek',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: uWyborModelu,
    caseStudyImage: ucsWyborModelu,
    description: 'To fundament każdej ekspansji na rynek chiński. Zamiast kosztownych eksperymentów, projektujemy precyzyjny model wejścia dopasowany do Twojego produktu, branży i apetytu na ryzyko. Traktujemy Chiny nie jako jeden rynek, lecz system złożony z regionów, kanałów i odmiennych zachowań konsumenckich. Odpowiadamy na trzy kluczowe pytania strategiczne: jak wejść (dystrybutor, CBEC, WFOE, JV, TP), gdzie wejść (Tier 1 vs Tier 2/3, regiony specjalizacji), czy i jak lokalizować produkt, aby wygrać z konkurencją lokalną.',
    whenItMakesSense: [
      'Plan Eksportowy: Masz sprawdzony produkt w Polsce (FMCG, kosmetyki, IT, hardware) i rozważasz sprzedaż w Chinach, ale bariera wejścia jest niejasna.',
      'Wybór Kanału: Stoisz przed dylematem: kosztowna rejestracja (NMPA/GACC, retail) czy szybsza ścieżka Cross-Border E-Commerce (CBEC).',
      'Pivot Strategiczny: Jesteś już w Chinach, ale sprzedaż nie rośnie - chcesz zweryfikować, czy model (np. wyłączny dystrybutor) nie blokuje skalowania.',
      'Poszukiwanie Niszy: Chcesz wiedzieć, w których miastach i segmentach popyt jest realny, a konkurencja możliwa do pokonania.',
    ],
    problemsSolved: [
      'Oszczędność Czasu i Kapitału: Chroni przed inwestycją w kanał "zatkany" kosztami (np. retail bez budżetu marketingowego).',
      'Jasność Decyzyjna: Rozstrzyga kluczowe pytania operacyjne: czy potrzebna jest spółka w Chinach, jaki kanał sprzedaży wybrać, jaki jest realny time-to-market.',
    ],
    scope: {
      includes: [
        'Dobór Modelu Operacyjnego: Porównanie opcji: Dystrybutor vs Własna Spółka (WFOE) vs Partner E-commerce (TP).',
        'Analiza Kanałów (Channel Check): Tmall Global, JD, Douyin, WeChat - gdzie faktycznie jest Twój klient i jaka jest bariera wejścia.',
        'Analiza Geograficzna: Potencjał Tier 1 vs Tier 2/3 (popyt, koszty, konkurencja).',
        'Wstępna Wycena Wejścia: Szacunek kosztów logistyki, ceł, certyfikacji i marketingu na pierwsze 12 miesięcy.',
      ],
      excludes: [
        'Zakładania sklepów na platformach.',
        'Prowadzenia kampanii marketingowych.',
        'Formalnej rejestracji spółek lub produktów.',
      ],
    },
    deliverables: [
      'Raport Strategiczny (PDF): Rekomendacja modelu wejścia z uzasadnieniem ekonomicznym i regulacyjnym.',
      'Roadmapa Wdrożenia: Oś czasu od decyzji do pierwszej sprzedaży (np. 6 vs 18 miesięcy).',
      'Checklisty Decyzyjne: Kluczowe kroki, ryzyka i "go/no-go points".',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '14-21 dni roboczych',
      communication: 'Warsztat startowy + prezentacja końcowa',
    },
    caseStudy: {
      client: 'Polska marka dermokosmetyków.',
      situation: 'Plan wejścia do aptek stacjonarnych (General Trade).',
      actions: 'Analiza wykazała 12-18 miesięcy rejestracji NMPA i wymóg testów na zwierzętach (sprzeczny z polityką marki). Zarekomendowano CBEC.',
      result: 'Zmiana strategii. Start na Tmall Global w 3 miesiące, bez testów, z zachowaniem statusu "Cruelty Free". Sprzedaż uruchomiona w pierwszym kwartale.',
    },
  },
  'wsparcie-formalne': {
    title: 'Wsparcie formalne i regulacyjne',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: uWsparcieFormalne,
    caseStudyImage: ucsWsparcieFormalne,
    description: 'Aby sprzedawać w Chinach legalnie, produkt musi posiadać "chiński paszport" - komplet rejestracji, certyfikatów i zgodnych etykiet, bez których odprawa celna i sprzedaż są niemożliwe. Ta usługa to kompleksowe wsparcie regulacyjne i formalne w procesie dopuszczenia produktów na rynek chiński. Koordynujemy rejestrację producentów i produktów w kluczowych systemach rządowych (GACC/CIFER, NMPA, CCC), weryfikujemy dokumentację techniczną oraz zgodność etykiet z normami GB (Guobiao). Działamy jako koordynator procesu - minimalizując ryzyko błędów formalnych, opóźnień, cofnięcia towaru oraz blokad sprzedaży na poziomie platform i dystrybutorów.',
    whenItMakesSense: [
      'Eksport Żywności i Napojów: Chcesz rozpocząć regularny eksport, ale Twój zakład nie posiada numeru rejestracyjnego GACC/CIFER (obowiązkowego od 2022 r. dla wielu kategorii).',
      'Kosmetyki i Chemia Konsumencka: Wprowadzasz nową linię produktów i musisz przejść procedurę notyfikacji/rejestracji (CSAR) oraz zweryfikować skład pod kątem chińskich list dozwolonych surowców.',
      'Zatrzymanie na cle: Towar został wstrzymany w porcie z powodu niezgodnej etykiety, braków formalnych, błędów w dokumentach lub nieprawidłowej klasyfikacji (HS/CIQ).',
      'Elektronika, Zabawki, Sprzęt: Produkt wymaga certyfikatu CCC, aby mógł być legalnie sprzedawany i dystrybuowany w Chinach.',
      'Skalowanie Sprzedaży: Przechodzisz z wysyłek testowych lub CBEC do pełnego importu (General Trade) i musisz przejść na "pełną ścieżkę zgodności".',
      'Zmiana regulacji: Pojawiają się nowe normy GB / wymagania platform / zmiany interpretacji urzędowej i chcesz uniknąć ryzyka "wpadki" po stronie compliance.',
    ],
    problemsSolved: [
      'Odblokowanie Dostępu do Rynku: Zmienia produkt z formalnie "nielegalnego" w dopuszczony do obrotu na rynku chińskim.',
      'Redukcja Strat i Ryzyka: Zapobiega niszczeniu towaru, zwrotom kontenerów, karom administracyjnym oraz blokadom sprzedaży wynikającym z błędów formalnych.',
      'Przewidywalność procesu: Urealnia czas, koszty i kolejność kroków, zanim firma zainwestuje budżet w eksport lub dystrybucję.',
    ],
    scope: {
      includes: [
        'Regulatory Scan (start): Identyfikacja właściwego trybu wejścia (CBEC vs General Trade), instytucji nadzorczych oraz listy wymagań dla kategorii produktu.',
        'Rejestracja GACC (CIFER): Założenie konta, przygotowanie i złożenie wniosku, koordynacja z polskimi instytucjami nadzorczymi (np. GIW/KOWR), jeśli wymagana jest rekomendacja lub potwierdzenia urzędowe.',
        'NMPA (CSAR) - koordynacja: Przygotowanie checklisty dokumentów i danych, wsparcie w kompletacji dossier oraz prowadzenie komunikacji procesowej z lokalnym podmiotem odpowiedzialnym (Responsible Person) / agencją.',
        'CCC - koordynacja: Ustalenie czy produkt podlega CCC, dobór ścieżki certyfikacyjnej, wsparcie w przygotowaniu dokumentacji technicznej i koordynacja z jednostką certyfikującą/laboratorium.',
        'Label Check / Label Adaptation: Weryfikacja składu, wartości odżywczych, ostrzeżeń i claimów; przygotowanie chińskiej wersji etykiety zgodnej z normami GB oraz logiką inspekcji celnej.',
        'Dokumentacja importowa - wsad: Lista wymaganych dokumentów i danych do odprawy (np. faktura, packing list, CO/COO, deklaracje, specyfikacje) oraz kontrola spójności formalnej pod kątem ryzyk "border stop".',
        'Prowadzenie procesu administracyjnego end-to-end (koordynacja), kontrolę kompletności dokumentacji, statusy i rekomendacje kolejnych kroków.',
      ],
      excludes: [
        'Opłat urzędowych i kosztów badań laboratoryjnych.',
        'Opłat urzędowych, kosztów testów laboratoryjnych i audytów (jeśli wymagane).',
        'Pełnienia funkcji formalnego przedstawiciela prawnego (Responsible Person / importer of record).',
        'Reprezentacji prawnej przed urzędami.',
        'Gwarancji uzyskania decyzji administracyjnej (decyzja zależy od organu i zgodności produktu).',
      ],
    },
    deliverables: [
      'Regulatory Roadmap (PDF): ścieżka krok po kroku + lista wymagań + realistyczny timeline.',
      'Checklisty i wsady: lista dokumentów, dane do formularzy, wymagania etykietowe.',
      'Potwierdzenia / status procesu: numer GACC/CIFER, status notyfikacji NMPA / status CCC (w zależności od kategorii i etapu).',
      'Debriefing Call: omówienie ryzyk, kosztów i decyzji "go / no-go" dla kanału wejścia.',
    ],
    workModel: {
      type: 'Projektowy (do decyzji urzędu lub zakończenia procedury)',
      duration: 'GACC: 1-3 miesiące, NMPA: 6-12 miesięcy (zależnie od kategorii)',
      communication: 'Regularne statusy postępu + aktualizacje ryzyk',
    },
    caseStudy: {
      client: 'Polska palarnia kawy.',
      situation: 'Chęć przejścia z wysyłek testowych na regularny eksport kontenerowy.',
      actions: 'Audyt dokumentacji zakładu, rejestracja w systemie CIFER, adaptacja etykiet i tabel wartości odżywczych.',
      result: 'Uzyskanie numeru GACC w 4 tygodnie. Pierwszy kontener odprawiony w Ningbo bez opóźnień.',
    },
  },
  'identyfikacja-partnerow': {
    title: 'Identyfikacja i selekcja partnerów',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: uIdentyfikacjaPartnerow,
    caseStudyImage: ucsIdentyfikacjaPartnerow,
    description: 'Znalezienie właściwego partnera w Chinach nie jest kwestią wyszukiwarki, lecz selekcji. Ta usługa to ustrukturyzowany proces identyfikacji, oceny dopasowania oraz wstępnej weryfikacji dostawców, dystrybutorów i partnerów technologicznych, którzy często są niewidoczni z poziomu Europy. Nie dostarczamy "zrzutów z Alibaby". Wykorzystujemy chińskie kanały operacyjne (Baidu, 1688, WeChat, zamknięte grupy branżowe), aby oddzielić realnych producentów i podmioty operacyjne od pośredników oraz "wirtualnych fabryk". Proces obejmuje nie tylko wyszukanie podmiotów, ale również ocenę ich zdolności operacyjnej, wiarygodności formalnej i realnego dopasowania do Twojego projektu (wolumen, technologia, eksport, komunikacja). Celem jest dostarczenie krótkiej, zweryfikowanej listy partnerów gotowych do dalszych rozmów - opartych na faktach, a nie deklaracjach marketingowych.',
    whenItMakesSense: [
      'Nie możesz znaleźć producenta, ponieważ nie istnieje on w anglojęzycznym internecie (bariera Great Firewall).',
      'Masz dziesiątki ofert z platform B2B, ale nie wiesz, kto jest realnym producentem.',
      'Otrzymałeś dobrą próbkę ("Golden Sample"), ale nie masz pewności co do produkcji seryjnej.',
      'Szukasz OEM/ODM lub partnera technologicznego, a nie "najtańszej fabryki".',
      'Chcesz wybrać jednego finalnego partnera spośród kilku kandydatów.',
      'Obecny dostawca traci stabilność operacyjną i potrzebny jest Plan B.',
    ],
    problemsSolved: [
      'Eliminuje pośredników i dociera bezpośrednio do OEM/ODM.',
      'Redukuje ryzyko wysłania zaliczki do podmiotu niewiarygodnego lub fikcyjnego.',
      'Odfiltrowuje firmy o niskim kapitale zakładowym, sporach prawnych lub słabej reputacji.',
      'Zastępuje intuicję twardymi danymi z rejestrów i analizy operacyjnej.',
      'Chroni marżę i stabilność łańcucha dostaw.',
    ],
    scope: {
      includes: [
        'Profilowanie partnera (IPP): zdefiniowanie profilu idealnego partnera (kompetencje, certyfikaty, wolumeny, rynki).',
        'Deep Search: przeszukiwanie chińskiego internetu i baz branżowych w języku mandaryńskim.',
        'Wstępny outreach: kontakt telefoniczny / WeChat w celu potwierdzenia zakresu działalności i gotowości eksportowej.',
        'Legal Check: weryfikacja w rejestrach rządowych (status prawny, kapitał zakładowy, reprezentant prawny).',
        'Risk Scan: analiza sporów sądowych, kar administracyjnych, wpisów egzekucyjnych (Zhixing).',
        'Ocena dopasowania operacyjnego: zdolność produkcyjna, komunikacja techniczna, poziom organizacyjny.',
      ],
      excludes: [
        'Pełnego due diligence finansowego.',
        'Fizycznych audytów fabryki.',
        'Negocjacji handlowych.',
        'Zamawiania i testowania próbek.',
      ],
    },
    deliverables: [
      'Raport "Short List" (PDF): 3-5 najlepiej dopasowanych partnerów.',
      'Karty partnerów: dane rejestrowe, profil działalności, zweryfikowane kontakty do decydentów.',
      'Ocena ryzyka: wstępna klasyfikacja w modelu Zielone / Żółte / Czerwone.',
      'Informacja operacyjna: potwierdzenie możliwości produkcyjnych oraz - jeśli dostępne - orientacyjne MOQ / widełki cenowe.',
    ],
    workModel: {
      type: 'Projektowy (sprint)',
      duration: '10-14 dni roboczych',
      communication: 'Briefing startowy + prezentacja wyników online',
    },
    caseStudy: {
      client: 'Polski importer elektroniki użytkowej.',
      situation: 'Poszukiwanie producenta customowych obudów; oferty z Alibaby pochodziły głównie od pośredników z narzutem ok. 30%.',
      actions: 'Przeprowadzono search w chińskich bazach (1688) oraz weryfikację rejestrową. Zidentyfikowano fabrykę w Dongguan produkującą dla globalnych marek, bez anglojęzycznej strony www.',
      result: 'Bezpośredni kontakt z inżynierem fabryki i koszt produkcji niższy o 25% względem ofert traderów.',
    },
  },
  'wsparcie-negocjacyjne': {
    title: 'Wsparcie negocjacyjne i relacyjne',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: uWsparcieNegocjacyjne,
    caseStudyImage: ucsWsparcieNegocjacyjne,
    description: 'W Chinach relacja (Guanxi) często wyprzedza kontrakt, a sposób prowadzenia rozmów bywa równie ważny jak ich treść. Ta usługa to kompleksowe wsparcie procesu negocjacyjnego: od zaprojektowania strategii, przez moderowanie i facylitację rozmów, aż po zarządzanie relacją po podpisaniu ustaleń. Działamy jako "kulturowy zderzak" i tłumacz intencji - pomagamy mówić twardo bez palenia mostów i utraty twarzy (Mianzi). Celem jest wypracowanie porozumienia zabezpieczającego interes ekonomiczny klienta przy zachowaniu długoterminowej relacji operacyjnej.',
    whenItMakesSense: [
      'Negocjacje high-stakes: Kontrakt o dużej wartości (np. >500 tys. PLN).',
      'Gra na czas i zmiana ustaleń: Partner przeciąga proces, wraca do ustaleń lub testuje granice.',
      'Sytuacja konfliktowa: Pojawia się spór jakościowy / płatniczy i trzeba go rozwiązać bez eskalacji prawnej i utraty relacji.',
      'Relacja długoterminowa: Chcesz uzyskać priorytet produkcyjny, stabilność dostaw, lepsze warunki w kolejnym cyklu i budować pozycję u partnera.',
    ],
    problemsSolved: [
      'Ochrona marży i warunków: Minimalizuje ustępstwa wynikające z nieznajomości kodu negocjacyjnego i błędów kulturowych.',
      'Przełamanie impasu: Wprowadza zewnętrzny, neutralny głos, który potrafi zmienić ramę rozmowy i "odczarować" konflikt.',
      'Bezpieczeństwo relacyjne: Umożliwia twarde rozmowy bez efektu "obrazy" i długofalowego zamknięcia współpracy.',
    ],
    scope: {
      includes: [
        'Strategia BATNA / ZOPA: Ustalenie alternatyw, granic i pola porozumienia w realiach chińskich (z uwzględnieniem hierarchii i rytuału ustępstw).',
        'Shadow Negotiation: Przygotowanie scenariuszy, argumentów, skryptów i "red lines" przed każdą rundą rozmów.',
        'Active Facilitation: Udział w callach/spotkaniach jako doradca i facylitator procesu (online lub stacjonarnie).',
        'De-escalation & Repair: Zarządzanie kryzysowe w relacji: naprawa komunikacji, wyjście z twarzą, powrót do stołu.',
        'Post-deal Guanxi Management: Plan utrzymania relacji po podpisaniu (rytmy kontaktu, follow-up, zasady eskalacji, "small wins").',
      ],
      excludes: [
        'Doradztwa prawnego (redakcja umów, opinie prawne).',
        'Reprezentacji procesowej.',
      ],
    },
    deliverables: [
      'Negotiation Playbook (PDF): Cele, sekwencja rozmów, argumenty, ustępstwa, warunki brzegowe, "trigger points".',
      'Stakeholder Map & Decision Lens: Mapa decydentów i wpływów po stronie partnera + analiza priorytetów i wrażliwych punktów negocjacyjnych.',
      'Round Decoder: Krótki raport po każdej rundzie: co padło oficjalnie, co wynika z kontekstu, jaki jest realny status.',
    ],
    workModel: {
      type: 'Retainer (abonament za dostępność w procesie) lub projekt (na czas negocjacji)',
      duration: 'Najczęściej 4-12 tygodni (zależnie od złożoności kontraktu i liczby rund)',
      communication: 'Setup + cykl rund (brief → call → decoder → korekta strategii)',
    },
    caseStudy: {
      client: 'Polska firma z branży budowlanej.',
      situation: 'Klient negocjował zakup linii produkcyjnej od chińskiego producenta. Po kilku rundach rozmów dostawca usztywnił się na cenie i sygnalizował możliwość zakończenia negocjacji. Dalsze naciski cenowe groziły utratą relacji oraz całego projektu.',
      actions: 'Zdiagnozowano, że kluczowa jest "twarz" właściciela - nie mógł dać rabatu wprost. Zmieniono strukturę porozumienia: cena nominalna bez zmian, ale rozszerzony pakiet serwisu, części i SLA o wartości odpowiadającej rabatowi.',
      result: 'Partner zachował twarz, klient obniżył całkowity koszt (TCO) i domknął umowę.',
    },
  },
  'struktury-handlowe': {
    title: 'Przygotowanie struktur handlowych lub partnerskich',
    subtitle: 'Wejście na rynek Polska ↔ Chiny',
    image: uPrzygotowanieStruktur,
    caseStudyImage: ucsPrzygotowanieStruktur,
    description: 'Projektujemy bezpieczną i wykonalną strukturę wejścia oraz współpracy PL↔CN: kto ma sprzedawać, kto ma importować, kto ponosi odpowiedzialność, gdzie powstaje marża i gdzie kumuluje się ryzyko. Dobieramy model współpracy (dystrybutor, agent, OEM/ODM, licencja, JV, TP w e-commerce) i przygotowujemy "architekturę relacji" tak, aby nie utknąć w toksycznej wyłączności, martwych kanałach lub ukrytych kosztach operacyjnych. Klient dostaje klarowny model działania oraz checklistę elementów do wdrożenia przed podpisaniem umów.',
    whenItMakesSense: [
      'Planujesz wejście do Chin lub import technologii z Chin, ale nie wiesz jaki model jest realnie wykonalny (CBEC vs General Trade, dystrybutor vs własna spółka).',
      'Masz oferty od partnerów i nie rozumiesz, gdzie jest marża, kto bierze ryzyko, kto kontroluje klienta końcowego.',
      'Rozważasz wyłączność / JV / OEM i chcesz uniknąć "małżeństwa bez rozwodu".',
      'Chcesz zbudować sieć partnerów (sprzedaż/serwis/logistyka), ale brakuje Ci mapy ról i odpowiedzialności.',
    ],
    problemsSolved: [
      'Zdejmuje chaos decyzyjny i minimalizuje ryzyko wyboru złej struktury (martwy kanał, zła motywacja partnera, zabetonowana wyłączność).',
      'Porządkuje ekonomię projektu (marża, koszty, kontrola, odpowiedzialność) zanim popłynie kapitał.',
      'Ujawnia, gdzie w modelu ukryte jest ryzyko gwarancyjne, compliance lub reputacyjne.',
    ],
    scope: {
      includes: [
        'Dobór modelu wejścia i sprzedaży (dystrybucja, agent, OEM/ODM, licencja, JV, TP/CBEC).',
        'Mapa ról i przepływów: produkt, pieniądze, dane, serwis, reklamacje.',
        'Identyfikacja punktów ryzyka: wyłączność, zależność od jednego importera, brak serwisu, compliance.',
        'Warsztat startowy + rekomendacja struktury + checklista wdrożenia.',
      ],
      excludes: [
        'Sporządzania i opiniowania umów przez kancelarię (możemy wskazać partnerów).',
        'Formalnej reprezentacji jako pełnomocnik w negocjacjach.',
      ],
    },
    deliverables: [
      'Model współpracy (PDF): rekomendowana struktura + uzasadnienie + wariant A/B.',
      'Mapa operacyjna (1 strona): role, odpowiedzialności, przepływy.',
      'Checklist "przed podpisaniem": co musi być zabezpieczone (serwis, IP, płatności, dane, kanał).',
      'Debriefing Call 60 min.',
    ],
    workModel: {
      type: 'Projektowy',
      duration: '7-12 dni roboczych',
      communication: 'Warsztat online + raport',
    },
    caseStudy: {
      client: 'Polska firma przemysłowa.',
      situation: 'Plan importu chińskiego rozwiązania automatyzacyjnego przez "wyłącznego dystrybutora" w UE. Model zakładał pełną zależność serwisową i logistyczną od jednego podmiotu.',
      actions: 'Przeprowadzono analizę struktury marży i odpowiedzialności. Zidentyfikowano, że wyłączność blokuje dostęp do części zamiennych oraz przerzuca ryzyko gwarancji na klienta końcowego. Zaprojektowano alternatywną strukturę: bezpośrednia relacja z producentem + lokalny serwis w Polsce + nieekskluzywny kanał sprzedaży.',
      result: 'Niższy całkowity koszt posiadania (TCO), większa kontrola nad relacją z producentem i eliminacja ryzyka "uwięzienia" w jednym pośredniku.',
    },
  },

  // ==========================================
  // KATEGORIA 4: IMPORT, EKSPORT I ŁAŃCUCH DOSTAW
  // (Będą dodane w kolejnej aktualizacji)
  // ==========================================
  'audyty-dostawcow': {
    title: 'Audyty i weryfikacja dostawców (On-Site)',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: uAudytyWeryfikacja,
    caseStudyImage: ucsAudytyWeryfikacja,
    description: 'W Chinach "widzieć" znaczy "wiedzieć". Zdjęcia, wideo i profile online nie zawsze są dowodem istnienia aktywów. Ta usługa to fizyczna weryfikacja zakładu produkcyjnego na miejscu. Działamy jako Twoje "Boots on the Ground" - niezależny obserwator w terenie. Sprawdzamy, czy deklarowany producent faktycznie istnieje, produkuje pod wskazanym adresem i dysponuje realnym zapleczem operacyjnym. Weryfikujemy park maszynowy, organizację produkcji, magazyny, kulturę pracy oraz zdolność do realizacji Twojego zamówienia w zadanym wolumenie i czasie. Celem jest dostarczenie niepodważalnego dowodu istnienia (lub jego braku) oraz ocena realnego ryzyka operacyjnego.',
    whenItMakesSense: [
      'High-Value Deal: Planowane zamówienie lub kontrakt przekracza 50-100 tys. USD i wymaga pełnej pewności co do kontrahenta.',
      'Podejrzenie Trading Company: Dostawca deklaruje produkcję, ale unika pokazania hali, maszyn lub zmienia adresy.',
      'Problemy Jakościowe: Jakość spada lub zmienia się bez wyjaśnienia - podejrzenie podzlecania produkcji ("shadow subcontracting").',
      'Wymóg Inwestora / Banku: Raport z wizyty terenowej jako warunek finansowania lub decyzji inwestycyjnej.',
      'Wejście w Długą Relację: Joint Venture, OEM/ODM, wyłączność, długoterminowe kontrakty.',
    ],
    problemsSolved: [
      'Eliminacja Oszustwa: Potwierdzenie, że partner istnieje fizycznie i operuje pod deklarowanym adresem.',
      'Weryfikacja Mocy Produkcyjnych: Ocena, czy fabryka realnie "udźwignie" Twoje zamówienie (działające linie, personel, obciążenie).',
      'Kontrola Standardów: Sprawdzenie warunków pracy, organizacji i podstaw ESG/BHP - kluczowe dla firm działających w UE.',
      'Decyzja Zero-Jedynkowa: "Wchodzimy" albo "odpuszczamy" - bez spekulacji.',
    ],
    scope: {
      includes: [
        'Wizyta Terenowa: Dojazd do zakładu (często poza dużymi miastami, strefy przemysłowe).',
        'Asset Check: Fizyczna inspekcja kluczowych maszyn i linii produkcyjnych (zdjęcia tabliczek znamionowych, linia w ruchu).',
        'Document Check (On-Site): Porównanie dokumentów na ścianie (Business License, certyfikaty) z wersjami przesłanymi wcześniej.',
        'Warehouse Inspection: Sprawdzenie surowców, półproduktów i gotowych wyrobów - czy produkcja jest realna i ciągła.',
        'Photo & Video Evidence: Materiał wizualny "bez filtra" (hala, biuro, magazyn, otoczenie).',
      ],
      excludes: [
        'Specjalistycznych audytów inżynieryjnych procesów technologicznych.',
        'Testów laboratoryjnych ani kontroli jakości partii produkcyjnych - chyba że klient dostarczy własną checklistę techniczną.',
      ],
    },
    deliverables: [
      'Raport z Wizytacji (PDF): Opis wizyty + ocena ryzyka w skali punktowej (Green / Yellow / Red).',
      'Pakiet Dowodowy (Foto/Wideo): Zdjęcia i nagrania z wizyty wraz z lokalizacją i komentarzem operacyjnym.',
      'Opinia Operacyjna: Ocena stabilności zakładu, poziomu organizacyjnego i sygnałów ostrzegawczych (red flags).',
    ],
    workModel: {
      type: 'Projektowy (per wizyta)',
      duration: 'Zwykle 3-7 dni od potwierdzenia dostępności zakładu',
      communication: 'Stałe fee + zwrot kosztów podróży',
    },
    caseStudy: {
      client: 'Polska firma odzieżowa.',
      situation: 'Plan produkcji kolekcji premium w fabryce w Hangzhou.',
      actions: 'Wizytacja wykazała, że pod wskazanym adresem znajduje się wyłącznie biuro handlowe, a produkcja była rozproszona u nieformalnych podwykonawców bez kontroli jakości.',
      result: 'Klient wstrzymał współpracę i uniknął ryzyka jakościowego oraz wizerunkowego. Wskazano alternatywną, realnie operującą szwalnię.',
    },
  },
  'optymalizacja-lancucha': {
    title: 'Projektowanie i optymalizacja łańcucha dostaw',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: uProjektowanieLancucha,
    caseStudyImage: ucsProjektowanieLancucha,
    description: 'Logistyka w imporcie z Chin to jedno z najczęstszych miejsc "ucieczki marży". Ta usługa to pogłębiony audyt całego łańcucha dostaw - od rampy fabryki w Chinach po magazyn docelowy w Polsce lub UE. Nie szukamy najtańszego przewoźnika, lecz identyfikujemy błędy strukturalne: nadmiar pośredników, nieefektywną konsolidację, zły dobór środka transportu i ukryte koszty portowe. Analizujemy, czy faktyczny model logistyczny odpowiada rotacji towaru i skali biznesu. Celem jest trwałe obniżenie Landed Cost i zamiana logistyki z kosztu w przewagę konkurencyjną.',
    whenItMakesSense: [
      'Margin Squeeze: Marża spada mimo stabilnych cen zakupu - koszty frachtu, opłat portowych i odpraw "zjadają" zysk.',
      'Skalowanie Wolumenów: Przechodzisz z LCL na FCL lub kolej i nie masz pewności, czy obecny model jest optymalny.',
      'Rozproszeni Dostawcy: Importujesz od wielu fabryk, każda wysyła osobno, generując wielokrotne koszty odpraw i obsługi.',
      'Problemy z Terminowością: Opóźnienia dostaw blokują cashflow, sprzedaż i planowanie zapasów.',
      'Brak Kontroli Kosztów: Nie masz jasności, za co dokładnie płacisz spedytorowi i gdzie realnie powstają koszty.',
      'Niejasne Incoterms: Zmieniasz warunki (EXW/FOB/DDP) bez pełnej świadomości konsekwencji kosztowych i odpowiedzialności.',
    ],
    problemsSolved: [
      'Redukcja Landed Cost: Obniżenie realnego kosztu jednostkowego produktu poprzez optymalizację tras, konsolidacji i odpraw.',
      'Konsolidacja i Skala: Optymalizacja liczby wysyłek i odpraw celnych w celu redukcji kosztów administracyjnych, operacyjnych oraz punktów ryzyka w łańcuchu dostaw.',
      'Transparentność Finansowa: Pełne zrozumienie struktury kosztów logistycznych i miejsc możliwej renegocjacji.',
    ],
    scope: {
      includes: [
        'Audyt kosztów: Analiza historycznych faktur frachtowych, celnych i portowych - identyfikacja przepłaconych stawek i zbędnych opłat.',
        'Strategia konsolidacji: Opracowanie modelu konsolidacji ładunków w Chinach (magazyn konsolidacyjny, okno czasowe, wolumeny).',
        'Dobór trasy i środka transportu: Porównanie wariantów transportu (Morze / Kolej / Lot) w relacji koszt-czas-ryzyko.',
        'Projektowanie modelu przepływu i rotacji zapasów: Rekomendacje dot. częstotliwości zamówień i wielkości partii (EOQ), by ograniczyć zamrażanie kapitału w zapasach.',
        'Rekomendowany model docelowy ("To-Be") - spójna, strategiczna architektura łańcucha dostaw dopasowana do skali i dynamiki biznesu.',
      ],
      excludes: [
        'Bieżącej obsługi spedycyjnej (bookingów, organizacji transportu).',
        'Bezpośrednich negocjacji stawek z armatorami, liniami kolejowymi lub spedytorami.',
        'Operacyjnego zarządzania transportem i odprawą celną.',
        'Przejęcia odpowiedzialności jako importer of record lub przedstawiciel celny.',
      ],
    },
    deliverables: [
      'Raport Optymalizacyjny (PDF): Diagnoza stanu obecnego ("As Is") oraz rekomendowany model docelowy ("To Be").',
      'Kalkulacja Oszczędności: Symulacja finansowa pokazująca konkretne oszczędności w PLN/USD (przed i po optymalizacji).',
      'Mapa Procesu: Schemat nowego łańcucha dostaw (np. z punktem konsolidacji, zmienioną trasą lub środkiem transportu).',
    ],
    workModel: {
      type: 'Audyt jednorazowy (projekt)',
      duration: '5-10 dni roboczych (w zależności od liczby tras i dostawców)',
      communication: 'Raport + debriefing call',
    },
    caseStudy: {
      client: 'Polski e-commerce (obrót ~8 mln PLN rocznie).',
      situation: 'Import akcesoriów od czterech dostawców z regionu Kantonu. Każdy wysyłał osobno (LCL / lotniczo), co generowało wielokrotne koszty dokumentacji i odpraw.',
      actions: 'Audyt faktur 12-miesięcznych, projekt konsolidacji w Shenzhen oraz zmiana części wolumenu na transport kolejowy.',
      result: 'Redukcja kosztów logistycznych o 35% (~420 tys. PLN rocznie) oraz wdrożenie stałego modelu konsolidacyjnego.',
    },
  },
  'nadzor-produkcji': {
    title: 'Nadzór produkcji oraz kontrola jakości',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: uNadzorProdukcji,
    caseStudyImage: ucsNadzorProdukcji,
    description: 'To koordynacja i nadzór nad procesem produkcyjnym w Chinach oraz kontrola jakości na etapach, które realnie decydują o wyniku projektu. W praktyce największe ryzyka nie biorą się z wyboru dostawcy, tylko z tego, co dzieje się po wpłaceniu zaliczki: zamiany materiałów, cięcia kosztów, rozjazdu specyfikacji, opóźnień i "milczenia" po stronie fabryki. Nadzorujemy proces od momentu potwierdzenia specyfikacji do gotowości towaru do wysyłki. Pilnujemy zgodności technicznej (wymagania, tolerancje, standard pakowania), harmonogramu oraz komunikacji z fabryką w języku i realiach lokalnych. Równolegle organizujemy kontrolę jakości w modelu dopasowanym do produktu: pre-production, in-line oraz pre-shipment, tak aby problemy zostały wykryte zanim towar wyruszy w drogę. Efektem jest większa przewidywalność jakości, kosztu oraz terminu realizacji.',
    whenItMakesSense: [
      'Produkujesz w Chinach pierwszy raz i chcesz uniknąć błędów wynikających z różnic w standardach i komunikacji.',
      'Składasz zamówienie na większy wolumen i każda partia "nietrafiona" oznacza realną stratę.',
      'Producent ma dobrą próbkę, ale istnieje ryzyko rozjazdu jakości w produkcji seryjnej.',
      'Projekt jest czasowo krytyczny (launch, sezonowość, kontrakt) i potrzebujesz kontroli harmonogramu.',
      'Miałeś już problemy z jakością, opóźnieniami albo "niespodziankami" w specyfikacji.',
      'Produkcja odbywa się w regionie o ograniczonej transparentności operacyjnej i potrzebujesz lokalnego nadzoru.',
    ],
    problemsSolved: [
      'Ogranicza ryzyko rozjazdu jakości między próbką a produkcją seryjną.',
      'Zapobiega "cichym" zmianom materiałów i komponentów bez Twojej zgody.',
      'Minimalizuje koszty reklamacji, zwrotów i przestojów sprzedaży.',
      'Zwiększa przewidywalność terminu dostawy i stabilność łańcucha dostaw.',
      'Redukuje ryzyko konfliktów i nieporozumień wynikających z różnic kulturowych i językowych.',
      'Przenosi kontrolę ryzyka produkcyjnego z poziomu reaktywnego na prewencyjny.',
    ],
    scope: {
      includes: [
        'Ustalenie i doprecyzowanie specyfikacji produkcyjnej oraz kryteriów akceptacji (QC checklist).',
        'Koordynacja komunikacji z fabryką (WeChat / e-mail / call) i egzekwowanie ustaleń.',
        'Nadzór nad harmonogramem: statusy produkcji, terminy, eskalacje.',
        'Organizacja kontroli jakości w modelu dopasowanym do projektu: Pre-Production Inspection, In-Line Inspection, Pre-Shipment Inspection.',
        'Weryfikacja pakowania, oznakowania i przygotowania do transportu (carton marking, paletyzacja).',
        'Dokumentacja i rekomendacje działań korygujących w przypadku odchyleń.',
      ],
      excludes: [
        'Pełnego audytu systemów jakości (osobna usługa: audyt on-site).',
        'Negocjacji handlowych warunków cenowych.',
        'Procesów certyfikacyjnych i regulacyjnych.',
      ],
    },
    deliverables: [
      'Plan kontroli jakości (QC Checklist): kryteria akceptacji, punkty krytyczne i tolerancje.',
      'Raporty inspekcyjne (PDF): wyniki kontroli + dokumentacja zdjęciowa.',
      'Status produkcji: regularne aktualizacje postępu i ryzyk.',
      'Rekomendacja "ship / hold / rework": decyzja przed wysyłką oparta o dane.',
    ],
    workModel: {
      type: 'Operacyjny (w trakcie produkcji)',
      duration: 'Zależnie od cyklu produkcyjnego (zwykle 2-6 tygodni)',
      communication: 'Bieżące statusy + raporty kontrolne + call decyzyjny przed wysyłką',
    },
    caseStudy: {
      client: 'Polska marka e-commerce (akcesoria domowe).',
      situation: 'Po świetnym "golden sample" pierwsza partia masowa miała różnice w kolorze i wykończeniu, co groziło falą reklamacji w sezonie sprzedażowym.',
      actions: 'Wprowadzono checklistę krytycznych parametrów, zorganizowano kontrolę in-line oraz pre-shipment. Wykryto zmianę materiału i odchylenia w powtarzalności wykonania, zanim partia trafiła do kontenera. Fabryka wykonała rework i poprawki pakowania.',
      result: 'Partia została wysłana zgodnie ze standardem, a klient uniknął kosztów zwrotów i opóźnienia sprzedaży w kluczowym oknie sezonowym.',
    },
  },
  'transport-miedzynarodowy': {
    title: 'Organizacja transportu międzynarodowego',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: uOrganizacjaTransportu,
    caseStudyImage: ucsOrganizacjaTransportu,
    description: 'To usługa pełnego przejęcia odpowiedzialności za koordynację i zarządzanie procesem dostawy towaru z Chin do Polski - bez chaosu, niedoprecyzowań i kosztownych błędów. Klient określa miejsce dostawy. My odpowiadamy za to, aby towar znalazł się tam zgodnie z harmonogramem i budżetem. Zarządzamy całym procesem: dokumentacją eksportową, wyborem modelu transportu, warunkami Incoterms, koordynacją operacyjną, odprawą celną oraz dostawą do miejsca docelowego. Dobieramy optymalny model transportu (sea / rail / air / multimodal), analizujemy całkowity koszt dostawy (Total Landed Cost), identyfikujemy punkty ryzyka i eliminujemy je przed rozpoczęciem transportu. Celem nie jest "zarezerwowanie kontenera", lecz bezpieczne, terminowe i kontrolowane finansowo dostarczenie towaru do miejsca docelowego w Polsce.',
    whenItMakesSense: [
      'Pierwszy projekt importowy lub eksportowy w relacji PL↔CN i brak doświadczenia operacyjnego.',
      'Duży wolumen lub towar o wysokiej wartości, gdzie błąd operacyjny generuje istotne ryzyko finansowe.',
      'Zmienność stawek frachtowych i niepewność co do optymalnej trasy.',
      'Ryzyko zatrzymania towaru z powodu niekompletnej dokumentacji.',
      'Napięty harmonogram produkcyjno-sprzedażowy, gdzie opóźnienie oznacza utratę kontraktu.',
    ],
    problemsSolved: [
      'Rozproszenie odpowiedzialności między fabryką, spedycją i klientem.',
      'Minimalizacja ryzyka opóźnień i nieprzewidzianych kosztów.',
      'Ochrona przed błędami dokumentacyjnymi i celnymi.',
      'Kontrola nad Incoterms i realnym podziałem odpowiedzialności.',
      'Eliminacja sytuacji, w której fabryka, spedycja i klient "przerzucają się odpowiedzialnością".',
    ],
    scope: {
      includes: [
        'Zaprojektowanie modelu dostawy (sea / rail / air / multimodal) w oparciu o koszt, czas i ryzyko.',
        'Ustalenie optymalnych warunków Incoterms oraz podziału odpowiedzialności.',
        'Koordynację dokumentacji eksportowej i importowej.',
        'Organizację i koordynację transportu międzynarodowego realizowanego przez wybranych operatorów logistycznych.',
        'Koordynację odprawy celnej w Polsce.',
        'Monitoring realizacji transportu oraz zarządzanie sytuacjami operacyjnymi.',
        'Nadzór nad dostawą do miejsca docelowego (np. port Gdańsk / magazyn klienta).',
      ],
      excludes: [
        'Reprezentacji prawnej w sporach sądowych.',
        'Czynności wymagających licencjonowanych pełnomocnictw (realizowane przez certyfikowanych partnerów operacyjnych).',
      ],
    },
    deliverables: [
      'Plan dostawy (model transportu, harmonogram, estymacja kosztów).',
      'Checklista dokumentacyjna i operacyjna.',
      'Potwierdzenie odprawy celnej i dostarczenia ładunku.',
      'Rekomendacje optymalizacji kosztów przy kolejnych wysyłkach.',
    ],
    workModel: {
      type: 'Projektowy lub operacyjny (dla stałych wysyłek)',
      duration: 'Zależny od harmonogramu produkcji i wybranej trasy',
      communication: 'Fee projektowe + marża operacyjna. Bieżąca koordynacja mailowa + kontakt operacyjny',
    },
    caseStudy: {
      client: 'Polski importer komponentów przemysłowych.',
      situation: 'Pierwsza wysyłka kontenera z południa Chin; fabryka oferowała warunki EXW bez wsparcia w dokumentacji eksportowej.',
      actions: 'Przejęcie koordynacji eksportu po stronie chińskiej, optymalizacja warunków dostawy i dokumentacji, wybór portu wyjścia skracającego czas tranzytu, organizacja transportu i odprawy celnej w Polsce, pełny monitoring procesu do momentu rozładunku.',
      result: 'Dostawa zgodna z harmonogramem, brak kosztów przestojowych w porcie oraz redukcja całkowitego kosztu transportu o 12% przy kolejnych wysyłkach.',
    },
  },
  'realizacja-end-to-end': {
    title: 'Kompleksowa realizacja projektu PL ↔ CN (end-to-end)',
    subtitle: 'Import, eksport i łańcuch dostaw',
    image: uKompleksowaRealizacja,
    caseStudyImage: ucsKompleksowaRealizacja,
    description: 'To usługa strategiczno-operacyjnego przejęcia zarządzania projektem między Polską a Chinami - od decyzji wejścia po realne wdrożenie i uruchomienie operacji. Działamy jako centralny koordynator i integrator projektu. Odpowiadamy za przełożenie decyzji strategicznych na realne wykonanie operacyjne. Łączymy analizę rynku, selekcję partnerów, negocjacje, produkcję, logistykę i nadzór operacyjny w jeden kontrolowany proces. Klient nie zarządza wieloma podmiotami osobno. Ma jeden punkt odpowiedzialności projektowej. Naszym celem nie jest przygotowanie rekomendacji, lecz doprowadzenie projektu do mierzalnego efektu biznesowego: uruchomionej produkcji, zakontraktowanego partnera, działającego łańcucha dostaw lub rozpoczętej sprzedaży.',
    whenItMakesSense: [
      'Wejście na rynek chiński lub polski od zera.',
      'Uruchomienie produkcji lub sourcingu w nowym sektorze.',
      'Projekt wymagający koordynacji wielu podmiotów (fabryka, dystrybutor, logistyka, agencja celna, kancelaria).',
      'Joint Venture, dystrybucja wyłączna, projekt inwestycyjny.',
      'Brak lokalnej struktury operacyjnej w Chinach lub w Polsce.',
    ],
    problemsSolved: [
      'Rozproszenie odpowiedzialności między dostawcami usług.',
      'Chaos komunikacyjny i kulturowy.',
      'Brak kontroli nad harmonogramem i budżetem.',
      'Ryzyko, że projekt "utknie" po podpisaniu umowy.',
      'Utrata kontroli nad projektem w środowisku transgranicznym, gdzie błąd kosztuje wielokrotnie więcej niż w projekcie lokalnym.',
    ],
    scope: {
      includes: [
        'Analizę strategiczną i ocenę potencjału rynku.',
        'Identyfikację i weryfikację partnerów.',
        'Due diligence i negocjacje warunków współpracy.',
        'Koordynację produkcji i kontrolę jakości.',
        'Organizację i koordynację transportu międzynarodowego.',
        'Nadzór operacyjny na miejscu.',
        'Wsparcie regulacyjne i formalne.',
      ],
      excludes: [
        'Reprezentacji prawnej w sporach sądowych.',
        'Czynności wymagających licencjonowanych pełnomocnictw (realizowane przez certyfikowanych partnerów).',
      ],
    },
    deliverables: [
      'Roadmapa projektu (harmonogram + kamienie milowe).',
      'Zintegrowany raport postępu i statusów operacyjnych.',
      'Rekomendacje decyzyjne na kluczowych etapach.',
      'Finalny rezultat operacyjny: uruchomiona produkcja, zakontraktowany i zweryfikowany partner, zrealizowana dostawa, wdrożony łańcuch dostaw, rozpoczęta sprzedaż.',
    ],
    workModel: {
      type: 'Projekt strategiczno-operacyjny',
      duration: '3-9 miesięcy (w zależności od skali)',
      communication: 'Retainer + success milestones. Regularne statusy zarządcze + spotkania decyzyjne',
    },
    caseStudy: {
      client: 'Polska firma z branży przemysłowej.',
      situation: 'Plan uruchomienia produkcji komponentów w Chinach i sprzedaży w UE.',
      actions: 'Analiza klastra i wybór regionu, identyfikacja i weryfikacja producenta, negocjacje warunków, nadzór nad pierwszą serią produkcyjną, organizacja transportu i wdrożenie dostaw do Polski.',
      result: 'Uruchomiona linia produkcyjna, stabilny łańcuch dostaw i redukcja kosztów jednostkowych o 18% względem modelu europejskiego.',
    },
  },

  // ==========================================
  // KATEGORIA 5: MARKETING I POZYCJONOWANIE
  // ==========================================
  'lokalne-pozycjonowanie': {
    title: 'Lokalne pozycjonowanie marki (PL i CN)',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: uLokalnePozycjonowanie,
    caseStudyImage: ucsLokalnePozycjonowanie,
    description: 'Pomagamy firmom jasno zdefiniować, jak powinny być postrzegane na rynku Chin lub Polski - zanim zainwestują środki w komunikację, kampanie marketingowe lub działania sprzedażowe. Przekładamy ofertę klienta na język zrozumiały dla lokalnych decydentów, klientów i partnerów biznesowych, uwzględniając realia kulturowe, konkurencyjne oraz sposób podejmowania decyzji na danym rynku. Usługa porządkuje narrację rynkową i eliminuje ryzyko wejścia z ofertą, która funkcjonuje w jednym kontekście, lecz nie ma uzasadnienia rynkowego w innym.',
    whenItMakesSense: [
      'Wejście na nowy rynek (PL ↔ CN): Firma planuje ekspansję i potrzebuje jasnej odpowiedzi, czy jej obecna oferta oraz sposób jej prezentacji są właściwe dla lokalnych realiów.',
      'Niespójne postrzeganie marki: Produkt lub usługa są konkurencyjne, jednak rynek nie rozumie jednoznacznie ich wartości ani przewagi.',
      'Presja decyzyjna Zarządu: Konieczność podjęcia decyzji, z jaką ofertą i narracją firma powinna pojawić się na nowym rynku.',
      'Ograniczenie ryzyka kosztowego: Chęć uniknięcia inwestycji w marketing i sprzedaż bez solidnie zdefiniowanego pozycjonowania.',
    ],
    problemsSolved: [
      'Brak jednoznacznego pozycjonowania rynkowego: Oferta nie jest czytelna ani wyróżniająca w lokalnym kontekście.',
      'Niedopasowanie narracji do rynku: Argumenty skuteczne w jednym kraju nie przekładają się na decyzje klientów i partnerów w innym systemie gospodarczym.',
    ],
    scope: {
      includes: [
        'Analizę obecnej oferty, komunikacji i sposobu sprzedaży klienta.',
        'Analizę rynku docelowego i konkurencji z perspektywy lokalnej.',
        'Zdefiniowanie propozycji wartości (value proposition) dla rynku PL lub CN.',
        'Rekomendację struktury oferty wejściowej (priorytety, kolejność, zakres).',
        'Określenie kluczowych wyróżników oraz argumentów decyzyjnych.',
        'Wytyczne dotyczące kierunku brandingu i języka komunikacji.',
      ],
      excludes: [
        'Realizacji kampanii marketingowych.',
        'Operacyjnego prowadzenia kanałów komunikacji.',
        'Działań performance i generowania leadów.',
      ],
    },
    deliverables: [
      'Dokument Pozycjonowania Rynkowego (Positioning Memo): Dokument (3-6 stron) zawierający analizę rynku, konkurencji, propozycję wartości oraz rekomendacje strategiczne.',
      'Struktura oferty wejściowej: Jasno zdefiniowane produkty/usługi wraz z ich rolą i priorytetem rynkowym.',
      'Key Messages (PL ↔ CN): Zestaw kluczowych argumentów racjonalnych i wizerunkowych, gotowych do dalszej pracy marketingowej i sprzedażowej.',
    ],
    workModel: {
      type: 'Projekt jednorazowy (usługa otwierająca lub realizowana niezależnie)',
      duration: '7-14 dni roboczych',
      communication: 'Kontakt mailowy + spotkanie online (Debriefing)',
    },
    caseStudy: {
      client: 'Europejska firma technologiczna (B2B).',
      situation: 'Plan wejścia na rynek chiński z szeroką ofertą produktową.',
      actions: 'Analiza rynku i konkurencji, zawężenie oferty do jednego kluczowego use-case\'u, zmiana narracji z "innowacyjności" na "bezpieczeństwo i kompatybilność systemową".',
      result: 'Firma rozpoczęła rozmowy z lokalnymi partnerami bez kosztownego launchu marketingowego, ograniczając ryzyko i skracając czas wejścia na rynek.',
    },
  },
  'strategia-komunikacji': {
    title: 'Strategia komunikacji',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: uStrategieKomunikacji,
    caseStudyImage: ucsStrategiaKomunikacji,
    description: 'Projektujemy strategię komunikacji, która przekłada pozycjonowanie marki na spójny, kontrolowany przekaz rynkowy - dostosowany do realiów Polski lub Chin. Określamy, co, gdzie i w jakiej kolejności powinno być komunikowane, aby wspierać cele biznesowe: wejście na rynek, budowę zaufania, pozyskanie partnerów lub generowanie popytu. To usługa, która nadaje marketingowi strukturę decyzyjną i zapobiega chaotycznym, nieskoordynowanym działaniom komunikacyjnym.',
    whenItMakesSense: [
      'Po zakończeniu pozycjonowania: Firma wie, jak powinna być postrzegana, ale nie ma jasnego planu komunikacji.',
      'Przed startem działań marketingowych: Konieczność zaprojektowania komunikacji przed uruchomieniem kampanii lub contentu.',
      'Niska skuteczność dotychczasowej komunikacji: Brak przełożenia widoczności na realne rozmowy biznesowe lub leady.',
      'Wejście na nowy rynek medialny: Firma nie zna lokalnych kanałów, formatów i dynamiki komunikacji (PL vs CN).',
    ],
    problemsSolved: [
      'Brak architektury komunikacji: Działania marketingowe są rozproszone i niespójne.',
      'Niedopasowanie kanałów i narracji: Komunikacja nie odpowiada na sposób podejmowania decyzji na danym rynku.',
    ],
    scope: {
      includes: [
        'Określenie celów komunikacyjnych w kontekście celów biznesowych.',
        'Dobór właściwych kanałów komunikacji (PL lub CN).',
        'Zaprojektowanie architektury komunikacji (role kanałów, kolejność narracji).',
        'Zdefiniowanie filarów komunikacyjnych i kluczowych tematów.',
        'Określenie form i formatów treści (B2B / B2C / eksperckie / sprzedażowe).',
        'Ramowy plan komunikacji (roadmapa).',
      ],
      excludes: [
        'Produkcji treści.',
        'Realizacji kampanii marketingowych.',
        'Prowadzenia kanałów komunikacji.',
      ],
    },
    deliverables: [
      'Dokument Strategii Komunikacji: kanały, role, narracje, priorytety.',
      'Mapa kanałów komunikacji (PL ↔ CN): uzasadnienie wyboru platform i formatów.',
      'Filary komunikacyjne i tematy przewodnie: gotowe do dalszej pracy contentowej i kampanijnej.',
      'Roadmapa komunikacyjna: kolejność i logika działań w czasie.',
    ],
    workModel: {
      type: 'Projekt jednorazowy',
      duration: '7-10 dni roboczych',
      communication: 'Mail + spotkanie online (Debriefing)',
    },
    caseStudy: {
      client: 'Firma przemysłowa B2B (Polska).',
      situation: 'Plan wejścia na rynek chiński bez wcześniejszych działań marketingowych.',
      actions: 'Zaprojektowanie strategii komunikacji opartej na kanałach eksperckich i relacyjnych zamiast masowej reklamy.',
      result: 'Firma uruchomiła pilotażowe działania contentowe i partnerskie zamiast kosztownych kampanii wizerunkowych.',
    },
  },
  'adaptacja-komunikacji': {
    title: 'Adaptacja komunikacji do rynku PL i CN',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: uAdaptacjaKomunikacji,
    caseStudyImage: ucsAdaptacjaKomunikacji,
    description: 'Dostosowujemy komunikację marki do lokalnych realiów kulturowych, językowych i decyzyjnych rynku Polski lub Chin. Nie tłumaczymy treści - lokalizujemy sens, argumentację i akcenty, tak aby komunikacja była zrozumiała, wiarygodna i akceptowalna dla lokalnych odbiorców. To usługa, która redukuje ryzyko nieporozumień, utraty wiarygodności oraz błędnych interpretacji komunikatu w obcym kontekście rynkowym.',
    whenItMakesSense: [
      'Po zaprojektowaniu strategii komunikacji: Firma wie, co chce komunikować, ale nie ma pewności, jak zrobić to lokalnie.',
      'Komunikacja transgraniczna: Materiały przygotowane w jednym kraju są wykorzystywane na drugim rynku bez adaptacji.',
      'Ryzyko wizerunkowe: Obawa, że komunikacja może być odebrana jako niezrozumiała, zbyt agresywna lub nieadekwatna kulturowo.',
      'Wejście na nowe platformy: Konieczność dostosowania przekazu do lokalnych mediów i formatów (PL vs CN).',
    ],
    problemsSolved: [
      'Dosłowne tłumaczenia bez sensu rynkowego: Treści są poprawne językowo, ale nie działają decyzyjnie.',
      'Brak kulturowej wiarygodności: Komunikacja nie buduje zaufania u lokalnych klientów i partnerów.',
    ],
    scope: {
      includes: [
        'Analizę istniejących treści i komunikatów pod kątem rynku docelowego.',
        'Adaptację narracji, argumentów i tonu komunikacji.',
        'Lokalizację komunikacji do platform i formatów (PL/CN).',
        'Dostosowanie komunikacji B2B i B2C do lokalnego stylu decyzyjnego.',
        'Rekomendacje zmian w storytellingu i prezentacji wartości.',
        'Wsparcie adaptacyjne dla marek oraz liderów (personal branding).',
      ],
      excludes: [
        'Prowadzenia kampanii marketingowych.',
        'Stałej obsługi kanałów komunikacji.',
        'Działań performance i zakupu mediów.',
      ],
    },
    deliverables: [
      'Zestaw zlokalizowanych komunikatów (PL ↔ CN): narracje, argumenty, key messages dostosowane lokalnie.',
      'Wytyczne komunikacyjne dla rynku docelowego: ton, styl, akcenty kulturowe, rekomendacje językowe.',
      'Rekomendacje platformowe: sposób komunikacji na kluczowych kanałach lokalnych.',
    ],
    workModel: {
      type: 'Projekt jednorazowy lub etap w ramach szerszego procesu',
      duration: '5-10 dni roboczych',
      communication: 'Mail + konsultacja online',
    },
    caseStudy: {
      client: 'Europejska firma B2B.',
      situation: 'Wykorzystanie polskich materiałów sprzedażowych na rynku chińskim.',
      actions: 'Adaptacja narracji z argumentów technicznych na argumenty związane z bezpieczeństwem współpracy, stabilnością i referencjami.',
      result: 'Materiały zostały pozytywnie odebrane przez lokalnych partnerów, umożliwiając rozpoczęcie rozmów handlowych.',
    },
  },
  'materialy-sprzedazowe': {
    title: 'Materiały sprzedażowe i wizerunkowe',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: uMaterialySprzedazowe,
    caseStudyImage: ucsMaterialySprzedazowe,
    description: 'Projektujemy i realizujemy materiały sprzedażowe oraz wizerunkowe, które wspierają realne rozmowy biznesowe i proces decyzyjny na rynku Polski lub Chin. Odpowiadamy zarówno za koncepcję, strukturę i narrację, jak i za produkcję gotowych materiałów - od treści, przez design, po zdjęcia i wideo. To usługa, która zamienia strategię komunikacji w konkretne, używalne narzędzia sprzedażowe.',
    whenItMakesSense: [
      'Rozpoczęcie rozmów handlowych lub partnerskich: Firma potrzebuje gotowych materiałów, które wspierają spotkania z decydentami.',
      'Wejście na nowy rynek (PL ↔ CN): Dotychczasowe materiały nie są adekwatne do lokalnych realiów i oczekiwań.',
      'Brak spójności komunikacyjnej: Materiały tworzone ad hoc nie tworzą jednej narracji rynkowej.',
      'Niska skuteczność sprzedaży: Oferta istnieje, ale nie przekłada się na decyzje klientów.',
    ],
    problemsSolved: [
      'Brak profesjonalnych, lokalnie dopasowanych materiałów sprzedażowych.',
      'Rozjazd między strategią a tym, co faktycznie trafia do klienta.',
      'Niespójność wizualna i narracyjna osłabiająca wiarygodność marki.',
    ],
    scope: {
      includes: [
        'Analizę i uporządkowanie struktury oferty oraz argumentacji.',
        'Projekt i produkcję materiałów sprzedażowych (sales deck, pitch deck, oferty, case studies).',
        'Realizację sesji zdjęciowych i materiałów wideo (produktowych, wizerunkowych, biznesowych).',
        'Przygotowanie i wdrożenie landing pages oraz stron www (B2B / B2C).',
        'Copywriting sprzedażowy i wizerunkowy (PL ↔ CN).',
        'Projekt graficzny i UX/UI materiałów.',
        'Spójność wizualną i narracyjną wszystkich materiałów.',
      ],
      excludes: [
        'Zakupu mediów i kampanii reklamowych.',
        'Prowadzenia działań sprzedażowych w imieniu klienta.',
      ],
    },
    deliverables: [
      'Gotowe materiały sprzedażowe: prezentacje, oferty, case studies (PL ↔ CN).',
      'Materiały wizerunkowe: zdjęcia, wideo, landing pages, strona www.',
      'Zestaw materiałów operacyjnych: gotowych do użycia w sprzedaży, marketingu i rozmowach partnerskich.',
    ],
    workModel: {
      type: 'Projektowy lub etap w ramach szerszego procesu',
      duration: '7-28 dni roboczych (zależnie od zakresu produkcji)',
      communication: 'Mail + spotkania robocze online',
    },
    caseStudy: {
      client: 'Firma technologiczna B2B (Europa).',
      situation: 'Brak materiałów sprzedażowych dostosowanych do rozmów z partnerami w Chinach.',
      actions: 'Uporządkowanie struktury oferty pod kątem decyzyjnym, adaptacja argumentacji do lokalnych realiów, realizacja sesji wizerunkowej, produkcja sales decku oraz landing page.',
      result: 'Skrócenie czasu rozmów handlowych i poprawa odbioru marki przez lokalnych partnerów.',
    },
  },
  'wsparcie-marketingowe': {
    title: 'Wsparcie działań marketingowych i pozyskiwania leadów',
    subtitle: 'Marketing i pozycjonowanie rynkowe',
    image: uWsparcieMarketingowe,
    caseStudyImage: ucsWsparcieMarketingowe,
    description: 'Zapewniamy operacyjną realizację działań marketingowych, które wspierają cele biznesowe firmy na rynku Polski lub Chin. Odpowiadamy za planowanie, uruchamianie i prowadzenie działań marketingowych w oparciu o wcześniej zwalidowaną strategię i komunikację. To usługa dla firm, które nie potrzebują już testów, lecz oczekują systematycznego generowania zainteresowania, leadów i rozmów biznesowych.',
    whenItMakesSense: [
      'Po walidacji rynku (GTM): Decyzja o przejściu z fazy testowej do skalowania działań.',
      'Brak lokalnego zespołu marketingowego: Firma chce działać operacyjnie bez budowania struktur in-house.',
      'Niska skuteczność dotychczasowych działań: Marketing generuje ruch, ale nie przekłada się na leady lub rozmowy handlowe.',
      'Potrzeba stałej obecności rynkowej: Firma chce konsekwentnie budować widoczność i popyt.',
    ],
    problemsSolved: [
      'Brak skutecznej egzekucji marketingowej: Strategia istnieje, ale nie jest dowożona operacyjnie.',
      'Rozproszone działania: Różne kanały funkcjonują bez spójnej koordynacji i kontroli efektów.',
      'Brak kontroli nad kosztami i efektywnością działań.',
    ],
    scope: {
      includes: [
        'Planowanie i koordynację działań marketingowych (PL ↔ CN).',
        'Prowadzenie kanałów komunikacji (social media, content).',
        'Realizację kampanii marketingowych i performance.',
        'Produkcję treści (copy, grafika, foto, wideo).',
        'Zarządzanie budżetem marketingowym w ustalonym zakresie.',
        'Generowanie leadów i zapytań (B2B / B2C).',
        'Bieżącą optymalizację działań w oparciu o dane.',
      ],
      excludes: [
        'Sprzedaży i negocjacji handlowych w imieniu klienta.',
        'Doradztwa prawnego i podatkowego.',
        'Działań wykraczających poza ustalony zakres operacyjny.',
      ],
    },
    deliverables: [
      'Aktywne działania marketingowe: kampanie, treści, kanały komunikacji.',
      'Leady / zapytania rynkowe: zgodnie z ustalonym profilem odbiorcy.',
      'Raporty operacyjne: wyniki, wnioski, rekomendacje optymalizacyjne.',
      'Rekomendacje skalowania lub korekty budżetu.',
    ],
    workModel: {
      type: 'Współpraca abonamentowa (retainer)',
      duration: 'Minimum 3 miesiące',
      communication: 'Mail + bieżący kontakt operacyjny + cykliczne statusy',
    },
    caseStudy: {
      client: 'Firma technologiczna (Chiny).',
      situation: 'Wejście na rynek europejski po fazie walidacji.',
      actions: 'Prowadzenie kanałów komunikacji, kampanii leadowych i produkcja contentu sprzedażowego.',
      result: 'Regularny napływ zapytań B2B i stabilna obecność marki na rynku.',
    },
  },

  // ==========================================
  // KATEGORIA 6: MISJE BIZNESOWE I SZKOLENIA
  // ==========================================
  'misje-biznesowe': {
    title: 'Organizacja misji biznesowych i technologicznych PL ↔ CN',
    subtitle: 'Misje biznesowe i szkolenia',
    image: uOrganizacjaMisji,
    caseStudyImage: ucsOrganizacjaMisji,
    description: 'To strategicznie zaprojektowana misja decyzyjna dla Zarządów i właścicieli firm, którzy chcą w krótkim czasie zweryfikować realia chińskiego ekosystemu technologii, produkcji i handlu. Budujemy program wokół konkretnego celu (automatyzacja, robotyka, e-commerce, supply chain, AI w produkcji), organizujemy wejścia do firm, parków technologicznych i zakładów, a na miejscu tłumaczymy nie tylko język, ale przede wszystkim kontekst: "dlaczego oni to robią tak" i "co z tego wynika dla Polski". Celem misji jest skrócenie krzywej uczenia i przywiezienie do Polski konkretnych rozwiązań, kontaktów i decyzji wdrożeniowych - bez tracenia czasu na przypadkowe spotkania i powierzchowne wrażenia.',
    whenItMakesSense: [
      'Pivot strategiczny / CAPEX: Planujesz nową fabrykę, modernizację linii lub duży projekt automatyzacji i chcesz zobaczyć "state-of-the-art" w praktyce, nie w katalogu.',
      'Presja konkurencyjna: Czujesz, że rynek w Europie przyspiesza, a Ty potrzebujesz benchmarku: jak wygląda koszt, tempo i skala wdrożeń w Chinach.',
      'Weryfikacja rynku: Rozważasz wejście do Chin lub współpracę z chińskimi dostawcami/partnerami i chcesz "poczuć teren" (kanały sprzedaży, standardy produktu, zachowania klientów).',
      'Targi branżowe bez błądzenia: Jedziesz na targi (np. Canton Fair, CIIE lub wydarzenia sektorowe), ale potrzebujesz kuratora: selekcji stoisk, shortlisty rozmów, jasnego celu i planu follow-up.',
      'Tech scouting pod wdrożenie: Szukasz konkretnych rozwiązań (AGV/AMR, sortery, automatyzacja magazynu, linie, sensoryka, systemy MES/SCADA) i chcesz zobaczyć je "na żywo" oraz porównać dostawców.',
    ],
    problemsSolved: [
      'Przełamanie iluzji i stereotypów: Zamiast opinii dostajesz konfrontację z rzeczywistością kosztów, jakości i tempa wdrożeń.',
      'Dostęp i selekcja: Docierasz do miejsc i rozmów, które w praktyce są trudne do zorganizowania "z ulicy", bo wymagają lokalnego kontekstu, kontaktu i odpowiedniego przygotowania.',
      'Efektywność czasowa: W 3-7 dni realizujesz program, który samodzielnie składałbyś tygodniami, często z ryzykiem nietrafionych spotkań.',
      'Decyzyjność: Misja ma prowadzić do decyzji: co wdrażamy, z kim rozmawiamy, co odrzucamy, jaki jest następny krok po powrocie.',
    ],
    scope: {
      includes: [
        'Agenda Curation: Zaprojektowanie programu pod cel strategiczny.',
        'Selekcja i przygotowanie spotkań: Dobór firm/instytucji do odwiedzenia, przygotowanie briefów przed każdą wizytą.',
        'Matchmaking B2B: Organizacja rozmów z wybranymi podmiotami (dostawcy, integratorzy, partnerzy technologiczni, operatorzy kanałów).',
        'Facylitacja na miejscu: Obecność prowadzącego FHS Foundation jako tłumacza kontekstu i moderatora rozmów.',
        'Debriefing dzienny: Krótkie sesje podsumowujące: wnioski, "co to znaczy dla nas", ranking opcji, plan kolejnych działań.',
        'Logistyka (koordynacja): Ułożenie trasy, transfery lokalne, timing, wsparcie w doborze tłumaczy/partnerów operacyjnych.',
      ],
      excludes: [
        'Formalnej obsługi wizowej jako agent.',
        'Gwarancji dostępu do konkretnych firm (zależne od zgód i dostępności).',
        'Reprezentacji prawnej i negocjacji kontraktów.',
      ],
    },
    deliverables: [
      'Zrealizowana misja: program wizyt, spotkań i obserwacji terenowych zgodny z celem strategicznym.',
      'Executive Summary (PDF): kluczowe wnioski, shortlisty rozwiązań/partnerów, zdjęcia (jeśli dozwolone), ryzyka, rekomendacje "co dalej".',
      'Kontakt i follow-up pack: uporządkowana lista kontaktów, statusów rozmów, drafty wiadomości follow-up i plan kolejnych kroków.',
    ],
    workModel: {
      type: 'Projektowy (management fee + koszty bezpośrednie)',
      duration: 'Standardowo 4-6 tygodni przygotowania. Tryb: 1-4 osoby (VIP) lub mała grupa (5-8 osób)',
      communication: 'Koszty podróży, hoteli i biletów wstępu - rozliczane odrębnie',
    },
    caseStudy: {
      client: 'Zarząd polskiej firmy produkcyjnej (branża meblarska).',
      situation: 'Weryfikacja opłacalności automatyzacji intralogistyki.',
      actions: 'Misja do Jiangsu/Suzhou: wizyty w trzech zakładach, gdzie AGV/AMR i automatyzacja intralogistyki są standardem; porównanie 3 dostawców rozwiązań oraz integratora.',
      result: 'Zmiana percepcji kosztów wdrożenia, shortlist dostawców oraz decyzja o pilotażu automatyzacji w Polsce.',
    },
  },
  'matchmaking': {
    title: 'Aranżacja spotkań B2B i matchmaking partnerów',
    subtitle: 'Misje biznesowe i szkolenia',
    image: uAranzacjaSpotkan,
    caseStudyImage: ucsAranzacjaSpotkan,
    description: 'Spotkanie z chińskim partnerem nie jest zwykłą rozmową biznesową - to proces, w którym znaczenie mają hierarchia, kontekst, timing oraz to, co nie zostało powiedziane wprost. Ta usługa łączy aktywny matchmaking partnerów z profesjonalną aranżacją i facylitacją rozmów. Najpierw identyfikujemy właściwych decydentów po stronie chińskiej (lub polskiej), następnie projektujemy architekturę spotkania tak, aby zwiększyć prawdopodobieństwo realnego efektu biznesowego. Nie działamy jako tłumacze językowi, lecz jako tłumacze intencji, dynamiki i kodu kulturowego. Przygotowujemy klienta do rozmowy, moderujemy spotkanie (online lub stacjonarnie) oraz zabezpieczamy ustalenia w formie możliwej do egzekwowania. Celem jest przełożenie relacji na konkret: decyzję, pilotaż, MoU lub dalszy etap negocjacyjny.',
    whenItMakesSense: [
      'Wchodzisz na nowy rynek i potrzebujesz bezpośredniego kontaktu z właściwymi decydentami.',
      'Spotkanie wysokiej stawki: pierwsza wizyta zarządu, negocjacje cenowe, technologiczne lub JV.',
      'Kryzys komunikacyjny: partner przestaje odpowiadać lub rozmowy utknęły.',
      'Chcesz zweryfikować, czy "yes" oznacza realną zgodę, czy uprzejme potwierdzenie wysłuchania.',
      'Potrzebujesz neutralnego moderatora, który zmieni dynamikę rozmowy i rozładuje napięcie.',
    ],
    problemsSolved: [
      'Eliminacja "Lost in Translation" - obie strony wychodzą ze spotkania z tym samym rozumieniem ustaleń.',
      'Ominięcie bariery hierarchicznej - docieramy do realnych decydentów.',
      'Wzmocnienie pozycji negocjacyjnej poprzez obecność partnera rozumiejącego lokalny kontekst.',
      'Ochrona relacyjna - uniknięcie błędów kulturowych, które mogą trwale zamknąć projekt.',
    ],
    scope: {
      includes: [
        'Matchmaking partnerów: identyfikacja właściwych podmiotów i osób decyzyjnych.',
        'Pre-Meeting Briefing: cele, czerwone linie, hierarchia rozmówców, scenariusz rozmowy.',
        'Profilowanie decydentów po stronie partnera.',
        'Live Facilitation: udział w spotkaniu (online/offline), moderacja i interpretacja kulturowa.',
        'Interwencja strategiczna w momentach impasu negocjacyjnego.',
        'Debriefing poufny + oficjalne Minutes ze spotkania.',
      ],
      excludes: [
        'Tłumaczeń przysięgłych dokumentów prawnych.',
        'Prawnej reprezentacji stron oraz negocjowania i podpisywania umów w imieniu klienta.',
        'Gwarancji zawarcia umowy, podpisania kontraktu lub finalizacji transakcji - decyzja pozostaje po stronie uczestników rozmów.',
      ],
    },
    deliverables: [
      'Strategia spotkania (1 strona): cele, komunikaty, obszary ryzyka i rekomendowana sekwencja rozmowy.',
      'Minutes ze spotkania: formalne podsumowanie ustaleń do dalszej korespondencji.',
      'Shadow Report (poufny): interpretacja intencji partnera, realny status rozmów i rekomendacja "co dalej".',
      'Draft follow-up: gotowa wiadomość domykająca ustalenia.',
    ],
    workModel: {
      type: 'Sesyjny (per spotkanie) lub projektowy (cykl spotkań)',
      duration: 'Stała opłata przygotowawcza + stawka za udział',
      communication: 'Briefing startowy + debriefing po spotkaniu',
    },
    caseStudy: {
      client: 'Polska firma IT negocjująca kontrakt z chińskim dostawcą hardware\'u.',
      situation: 'Strona chińska unikała rozmów o karach umownych, co klient interpretował jako brak transparentności.',
      actions: 'Zmieniono ramę rozmowy z "kar" na "mechanizmy jakościowe i bonusy za terminowość", a temat zabezpieczeń przeniesiono na etap finalizacji dokumentów.',
      result: 'Odblokowanie negocjacji i podpisanie MoU w ciągu dwóch tygodni.',
    },
  },
  'szkolenia-system': {
    title: 'Szkolenia z systemu gospodarczego Chin',
    subtitle: 'Misje biznesowe i szkolenia',
    image: uSzkoleniaSystem,
    caseStudyImage: ucsSzkoleniaSystem,
    description: 'Chiny nie są gospodarką wolnorynkową w zachodnim rozumieniu, ale nie są też klasyczną gospodarką nakazową. To system hybrydowy: kapitalizm państwowy sterowany politycznie. Ta usługa to dekodowanie "systemu operacyjnego" Chińskiej Republiki Ludowej dla właścicieli firm, zarządów i decydentów strategicznych. Wyjaśniamy, jak interpretować doktryny, komunikaty i dokumenty polityczne w kontekście realnych przepływów kapitału, regulacji i kierunków wsparcia sektorowego. Celem nie jest analiza ideologiczna, lecz zrozumienie logiki decyzyjnej systemu i jej wpływu na konkretne branże oraz projekty. To nie jest wykład akademicki ani publicystyka. To instrukcja zarządzania ryzykiem polityczno-gospodarczym w relacji z Chinami.',
    whenItMakesSense: [
      'Planowanie strategiczne: Tworzysz strategię na 3-5 lat i musisz wiedzieć, jakie sektory Pekin uznaje za priorytetowe (np. high-tech, automatyzacja, green tech), a jakie za problematyczne.',
      'Szok regulacyjny: Twoja branża w Chinach nagle wpada w turbulencje (dane, środowisko, edukacja, gaming) i chcesz zrozumieć mechanizm, a nie tylko skutek.',
      'Inwestycje i JV: Rozważasz wejście kapitałowe lub partnerstwo i musisz ocenić długoterminową stabilność sektora z perspektywy politycznej.',
      'Edukacja Zarządu: Chcesz wyjść poza nagłówki ("Chiny upadają" vs "Chiny dominują") i zrozumieć, jak naprawdę działa ten system.',
    ],
    problemsSolved: [
      'Eliminacja ślepoty strategicznej: Zrozumienie, że w Chinach polityka zawsze ma pierwszeństwo przed ekonomią.',
      'Zwiększenie przewidywalności: Umiejętność czytania sygnałów ostrzegawczych w oficjalnych dokumentach i narracjach partyjnych, zanim zmieni się prawo.',
      'Kontekst decyzyjny: Zrozumienie, dlaczego chiński partner podejmuje decyzje, które z europejskiej perspektywy wydają się nielogiczne, ale są racjonalne w ramach systemu.',
    ],
    scope: {
      includes: [
        'Mapa Systemu: Relacja Partia-Rząd, rola SOE (spółek państwowych), mechanizmy kontroli kapitału i kredytu.',
        'Policy Deep Dive: Dual Circulation, Common Prosperity, New Productive Forces - co oznaczają operacyjnie i gdzie realnie płyną pieniądze.',
        'Risk Radar: "Czerwone Linie" - bezpieczeństwo danych, technologie podwójnego zastosowania, środowisko, Tajwan, ESG.',
        'Geografia Gospodarcza: Różnice między regionami i ich implikacje inwestycyjne.',
        'Q&A Executive: Przełożenie makro na mikro: "Co to oznacza konkretnie dla mojej firmy, mojego sektora, mojego projektu?".',
      ],
      excludes: [
        'Doradztwa prawnego ani podatkowego.',
        'Analizy due diligence konkretnej transakcji.',
      ],
    },
    deliverables: [
      'Szkolenie Executive (3-4h): Zamknięta sesja dla Zarządu (online lub stacjonarnie).',
      'System Brief (PDF): Zwięzła synteza kluczowych pojęć, doktryn i trendów - operacyjna "ściąga" do dalszego użytku.',
      'Rekomendacja sektorowa: Krótka analiza: kwalifikacja branży klienta (beneficjent / neutralny / podwyższone ryzyko).',
    ],
    workModel: {
      type: 'Zamknięty warsztat strategiczny',
      duration: 'Sesja stacjonarna lub online',
      communication: 'Uczestnicy: do uzgodnienia (rekomendowany skład decyzyjny)',
    },
    caseStudy: {
      client: 'Polski fundusz inwestycyjny.',
      situation: 'Fundusz analizował wejście kapitałowe w chiński sektor EdTech (korepetycje online), który wykazywał dynamiczny wzrost i wysoką rentowność. Decyzja inwestycyjna była na etapie finalnej analizy.',
      actions: 'Analiza doktryny Common Prosperity oraz oficjalnych dokumentów i komunikatów partyjnych dotyczących edukacji prywatnej. Identyfikacja ryzyka systemowego wynikającego z narracji o "obniżaniu kosztów wychowania dzieci". Wskazanie kolizji modelu biznesowego sektora z kierunkiem polityki państwa. Rekomendacja wstrzymania inwestycji do czasu stabilizacji regulacyjnej.',
      result: 'Fundusz nie zrealizował inwestycji. Kilka miesięcy później wprowadzono Double Reduction Policy, która istotnie ograniczyła rentowność sektora prywatnej edukacji. Klient uniknął znaczącej ekspozycji kapitałowej i potencjalnych strat finansowych.',
    },
  },
  'szkolenia-kultura': {
    title: 'Szkolenia z kultury biznesowej i negocjacji',
    subtitle: 'Misje biznesowe i szkolenia',
    image: uSzkoleniaKultura,
    caseStudyImage: ucsSzkoleniaKultura,
    description: 'W Chinach negocjacje nie kończą się w momencie podpisania kontraktu - często dopiero wtedy wchodzą w fazę operacyjną. Ta usługa to zaawansowany warsztat taktyczny dla handlowców, kupców i managerów operujących na styku PL-CN. Przechodzimy od powierzchownego savoir-vivre\'u do twardej psychologii negocjacji i gier relacyjnych. Analizujemy mechanizmy negocjacyjne charakterystyczne dla rynku chińskiego (m.in. Biała Twarz / Czerwona Twarz, „gra na czas", „Pusty Fort", presja hierarchii). Uczymy, jak rozpoznać, kiedy „Tak" oznacza zgodę, kiedy jest manewrem, a kiedy tylko sposobem na przesunięcie odpowiedzialności. Celem szkolenia jest wzmocnienie odporności negocjacyjnej zespołu oraz ochrona marży i warunków kontraktowych w długim horyzoncie.',
    whenItMakesSense: [
      'Erozja marży: Kontrakty z Chin wyglądają dobrze na papierze, ale po czasie okazują się nieopłacalne (dodatkowe koszty, zmiany warunków, renegocjacje).',
      'Asymetria informacji: Czujesz, że druga strona wie o Was więcej, niż Wy o niej - i wykorzystuje to w rozmowach.',
      'Paraliż kulturowy: Zespół boi się stawiać granice, myląc szacunek kulturowy z uległością.',
      'Onboarding zespołu: Wysyłasz nowych ludzi na targi lub do Chin i chcesz dać im narzędzia, a nie tylko ogólniki.',
    ],
    problemsSolved: [
      'Odporność na presję relacyjną: Zespół rozpoznaje, kiedy „Mianzi" (Twarz) jest używana jako narzędzie nacisku.',
      'Skuteczność negocjacyjna: Przejście z postawy reaktywnej na świadome prowadzenie gry.',
      'Rozkodowanie dynamiki: Zrozumienie, dlaczego zmieniane są ustalenia i jak reagować bez eskalacji lub utraty relacji.',
    ],
    scope: {
      includes: [
        'Psychologia negocjacji Wschód vs Zachód: Transakcja vs relacja - różnice, konsekwencje, pułapki.',
        'Chińskie stratagemy w biznesie: Praktyczne zastosowanie klasycznych forteli (np. przeciąganie rozmów, zmiana agendy, „szara strefa decyzji").',
        'Role Play / Symulacje: Scenariusze „na żywo" - trener wciela się w trudnego partnera, uczestnicy ćwiczą reakcje.',
        'Dekodowanie komunikacji niewerbalnej: Cisza, uśmiech, uniki, „wrócimy do tego później".',
        'Hierarchia i władza: Jak rozpoznać, kto naprawdę decyduje, a kto tylko odgrywa rolę przy stole.',
      ],
      excludes: [
        'Reprezentowania klienta w negocjacjach.',
        'Sporządzania i opiniowania dokumentów prawnych.',
        'Gwarancji zawarcia umowy lub uzyskania określonych warunków handlowych.',
      ],
    },
    deliverables: [
      'Warsztat Masterclass (4-6h): Intensywne szkolenie z ćwiczeniami praktycznymi.',
      'Negotiation Cheat Sheet (PDF): Gotowe schematy reakcji, frazy i strategie na typowe zagrywki.',
      'Certyfikat uczestnictwa: Wewnętrzne potwierdzenie kompetencji zespołu (ważne w organizacjach projektowych).',
    ],
    workModel: {
      type: 'Zamknięty warsztat dla jednej organizacji',
      duration: 'Stacjonarnie lub online, 6-14 uczestników',
      communication: 'Uzgodnienie programu + realizacja',
    },
    caseStudy: {
      client: 'Polska sieć handlowa.',
      situation: 'Zespół negocjował kontrakt z chińskim dostawcą elektroniki. Spotkania przeciągały się do późnych godzin przed wylotem zespołu, co skutkowało ustępstwami „pod presją czasu".',
      actions: 'Analiza taktyki presji czasowej. Symulacja scenariusza „deadline pressure". Wdrożenie techniki twardych warunków brzegowych ustalanych na początku rozmów. Wprowadzenie struktury „freeze point" przed wyjazdem.',
      result: 'Zespół przestał ustępować „za pięć dwunasta". Wynegocjowano dodatkowe 5% rabatu i stabilne warunki dostaw.',
    },
  },
};

// Mapping for URL slugs to service keys
export const serviceSlugMap: Record<string, string> = {
  'analiza-wplywu-chin': 'analiza-wplywu',
  'decyzje-wejscia-wspolpracy': 'decyzje-wejscia',
  'decyzje-strategiczne': 'decyzje-wejscia',
  'scenariusze-mapy-ryzyk': 'scenariusze-strategiczne',
  'briefingi-zarzady': 'briefingi-decyzyjne',
  'analizy-sektorow-klastrow': 'analizy-sektorow',
  'analiza-regulacyjna-bariery': 'analiza-regulacyjna',
  'weryfikacja-kontrahenta-desktop': 'weryfikacja-kontrahenta',
  'due-diligence-partner': 'due-diligence',
  'wybor-modelu-wejscia': 'wybor-modelu',
  'wsparcie-formalne-regulacyjne': 'wsparcie-formalne',
  'identyfikacja-selekcja-partnerow': 'identyfikacja-partnerow',
  'wsparcie-negocjacyjne-relacyjne': 'wsparcie-negocjacyjne',
  'struktury-handlowe-partnerskie': 'struktury-handlowe',
  'audyty-weryfikacja-dostawcow': 'audyty-dostawcow',
  'optymalizacja-lancucha-dostaw': 'optymalizacja-lancucha',
  'nadzor-produkcji-jakosc': 'nadzor-produkcji',
  'transport-miedzynarodowy': 'transport-miedzynarodowy',
  'realizacja-projekt-end-to-end': 'realizacja-end-to-end',
  'lokalne-pozycjonowanie-marki': 'lokalne-pozycjonowanie',
  'strategia-komunikacji': 'strategia-komunikacji',
  'adaptacja-komunikacji-rynek': 'adaptacja-komunikacji',
  'materialy-sprzedazowe-wizerunkowe': 'materialy-sprzedazowe',
  'wsparcie-marketing-leady': 'wsparcie-marketingowe',
  'misje-biznesowe-technologiczne': 'misje-biznesowe',
  'matchmaking-b2b': 'matchmaking',
  'matchmaking-b2b-partnerow': 'matchmaking',
  'szkolenia-system-gospodarczy': 'szkolenia-system',
  'szkolenia-kultura-negocjacje': 'szkolenia-kultura',
};

export const defaultServiceData: ServiceData = {
  title: 'Usługa',
  subtitle: 'FHS Foundation',
  image: uAnalizaWplywu,
  caseStudyImage: ucsAnalizaWplywu,
  description: 'Szczegółowy opis usługi.',
  whenItMakesSense: [
    'Gdy potrzebujesz profesjonalnego wsparcia.',
    'Gdy planujesz działania na linii Polska-Chiny.',
  ],
  problemsSolved: [
    'Minimalizacja ryzyka.',
    'Oszczędność czasu i zasobów.',
  ],
  scope: {
    includes: ['Kompleksowa analiza.', 'Raport z rekomendacjami.'],
    excludes: ['Doradztwo prawne.', 'Reprezentacja formalna.'],
  },
  deliverables: ['Raport (PDF).', 'Debriefing call.'],
  workModel: {
    type: 'Projektowy',
    duration: '7-14 dni roboczych',
    communication: 'E-mail + spotkanie wideo',
  },
  caseStudy: {
    client: 'Przykładowy klient.',
    situation: 'Opis sytuacji.',
    actions: 'Podjęte działania.',
    result: 'Osiągnięty rezultat.',
  },
};

export type ServiceDataText = Omit<ServiceData, 'image' | 'caseStudyImage'>;

export function getLocalizedServicesData(language: Language): Record<string, ServiceData> {
  if (language === 'pl') return servicesData;
  const texts: Record<string, ServiceDataText> = language === 'en' ? servicesTextEN : servicesTextCN;
  const result: Record<string, ServiceData> = {};
  for (const [key, plData] of Object.entries(servicesData)) {
    const t = texts[key];
    result[key] = t ? { image: plData.image, caseStudyImage: plData.caseStudyImage, ...t } : plData;
  }
  return result;
}