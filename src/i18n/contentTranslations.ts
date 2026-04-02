import { Language } from './translations';

// Stats translations used across pages
export const statsTranslations: Record<Language, { value: number; suffix: string; label: string; isText?: boolean }[]> = {
  pl: [
    { value: 370, suffix: '+', label: 'dzieci pod opieką fundacji' },
    { value: 17, suffix: '+', label: 'zrealizowanych projektów w Afryce' },
    { value: 3, suffix: '', label: 'lata działalności' },
    { value: 5, suffix: '+', label: 'partnerów i instytucji wspierających' },
  ],
  en: [
    { value: 370, suffix: '+', label: 'children under foundation care' },
    { value: 17, suffix: '+', label: 'completed projects in Africa' },
    { value: 3, suffix: '', label: 'years of activity' },
    { value: 5, suffix: '+', label: 'supporting partners and institutions' },
  ],
  nl: [
    { value: 370, suffix: '+', label: 'kinderen onder zorg van de stichting' },
    { value: 17, suffix: '+', label: 'voltooide projecten in Afrika' },
    { value: 3, suffix: '', label: 'jaar actief' },
    { value: 5, suffix: '+', label: 'ondersteunende partners en instellingen' },
  ],
};

// FAQ translations for homepage
export const homeFaqTranslations: Record<Language, { question: string; answer: string }[]> = {
  pl: [
    { question: 'Czym zajmuje się Fundacja FHS i jaki ma realny wpływ?', answer: 'Fundacja FHS od 2022 roku wspiera rozwój edukacji i warunków życia w społecznościach Afryki Zachodniej. Obejmujemy opieką ponad 370 dzieci i realizujemy projekty, które realnie wpływają na ich codzienność.' },
    { question: 'Gdzie działacie i jak wygląda pomoc na miejscu?', answer: 'Działamy bezpośrednio na miejscu w Gambii, a nasza główna siedziba znajduje się w Banjul. Współpracujemy z lokalnymi społecznościami i instytucjami, dzięki czemu pomoc jest szybka, konkretna i dopasowana do realnych potrzeb.' },
    { question: 'Na co dokładnie przeznaczane są środki?', answer: 'Środki trafiają na edukację, wyżywienie, opiekę zdrowotną oraz rozwój infrastruktury. Skupiamy się na działaniach, które mają bezpośredni wpływ na jakość życia.' },
    { question: 'Skąd mam pewność, że pomoc trafia tam, gdzie powinna?', answer: 'Regularnie publikujemy zdjęcia, materiały wideo i raporty z działań. Aktualne projekty możesz śledzić w zakładce Aktualności.' },
    { question: 'Kto stoi za Fundacją FHS?', answer: 'Fundację tworzą ludzie o wielkim sercu i realnym zaangażowaniu - i być może niedługo będziesz jednym z nich. Za jej powstaniem stoją Dariusz Andrzejczak oraz Adrian Nkwamu.' },
    { question: 'Jak mogę się zaangażować poza wsparciem finansowym?', answer: 'Możesz pomóc poprzez wolontariat, współpracę, udostępnianie działań fundacji lub łączenie nas z wartościowymi kontaktami.' },
    { question: 'Czy mogę zobaczyć efekty pomocy na konkretnych przykładach?', answer: 'Tak - pokazujemy realne działania poprzez zdjęcia, wideo i aktualizacje projektów. Dzięki temu widzisz, jak pomoc przekłada się na konkretne zmiany.' },
  ],
  en: [
    { question: 'What does FHS Foundation do and what real impact does it have?', answer: 'Since 2022, FHS Foundation has been supporting the development of education and living conditions in West African communities. We care for over 370 children and implement projects that truly affect their daily lives.' },
    { question: 'Where do you operate and what does help look like on the ground?', answer: 'We operate directly on the ground in The Gambia, with our main headquarters in Banjul. We work with local communities and institutions, making our help fast, specific and tailored to real needs.' },
    { question: 'What exactly are the funds used for?', answer: 'Funds go towards education, nutrition, healthcare and infrastructure development. We focus on activities that have a direct impact on quality of life.' },
    { question: 'How can I be sure the help reaches where it should?', answer: 'We regularly publish photos, video materials and reports from our activities. You can follow current projects in the News section.' },
    { question: 'Who is behind FHS Foundation?', answer: 'The foundation is made up of people with big hearts and real commitment. It was founded by Dariusz Andrzejczak and Adrian Nkwamu.' },
    { question: 'How can I get involved beyond financial support?', answer: 'You can help through volunteering, cooperation, sharing the foundation\'s activities or connecting us with valuable contacts.' },
    { question: 'Can I see the effects of help on specific examples?', answer: 'Yes - we show real actions through photos, video and project updates. This way you can see how help translates into concrete changes.' },
  ],
  nl: [
    { question: 'Wat doet de FHS Foundation en welke echte impact heeft het?', answer: 'Sinds 2022 ondersteunt de FHS Foundation de ontwikkeling van onderwijs en levensomstandigheden in West-Afrikaanse gemeenschappen. We zorgen voor meer dan 370 kinderen.' },
    { question: 'Waar zijn jullie actief?', answer: 'We opereren direct ter plaatse in Gambia, met ons hoofdkantoor in Banjul.' },
    { question: 'Waar worden de middelen precies voor gebruikt?', answer: 'Middelen gaan naar onderwijs, voeding, gezondheidszorg en infrastructuurontwikkeling.' },
    { question: 'Hoe weet ik zeker dat de hulp aankomt?', answer: 'We publiceren regelmatig foto\'s, video\'s en rapporten van onze activiteiten.' },
    { question: 'Wie zit er achter de FHS Foundation?', answer: 'De stichting is opgericht door Dariusz Andrzejczak en Adrian Nkwamu.' },
    { question: 'Hoe kan ik me betrekken naast financiële steun?', answer: 'U kunt helpen door vrijwilligerswerk, samenwerking of het delen van onze activiteiten.' },
    { question: 'Kan ik de effecten van hulp zien op concrete voorbeelden?', answer: 'Ja - we tonen echte acties via foto\'s, video en projectupdates.' },
  ],
};

// FAQ translations for ONas page
export const oNasFaqTranslations: Record<Language, { question: string; answer: string }[]> = {
  pl: [
    { question: 'Czym zajmuje się Fundacja FHS?', answer: 'Fundacja FHS od 2022 roku wspiera rozwój edukacji i warunków życia w społecznościach Afryki Zachodniej, szczególnie w Gambii. Realizujemy projekty edukacyjne, zdrowotne i infrastrukturalne.' },
    { question: 'Gdzie działacie?', answer: 'Działamy bezpośrednio w Gambii, prowadząc Dom Polski w Bijilo. Współpracujemy z lokalnymi społecznościami, szkołami i instytucjami rządowymi.' },
    { question: 'Jak mogę się zaangażować?', answer: 'Możesz wesprzeć nas poprzez wirtualną adopcję dziecka, jednorazową darowiznę, wolontariat lub po prostu udostępniając nasze działania.' },
    { question: 'Kto stoi za Fundacją FHS?', answer: 'Fundację tworzą Dariusz Andrzejczak i Adrian Nkwamu oraz zespół zaangażowanych wolontariuszy i współpracowników.' },
    { question: 'Na co przeznaczane są środki?', answer: 'Środki trafiają na edukację, wyżywienie, opiekę zdrowotną oraz rozwój infrastruktury w Gambii.' },
  ],
  en: [
    { question: 'What does FHS Foundation do?', answer: 'Since 2022, FHS Foundation has been supporting the development of education and living conditions in West African communities, particularly in The Gambia.' },
    { question: 'Where do you operate?', answer: 'We operate directly in The Gambia, running the Polish House in Bijilo. We work with local communities, schools and government institutions.' },
    { question: 'How can I get involved?', answer: 'You can support us through virtual adoption, one-time donations, volunteering or simply by sharing our activities.' },
    { question: 'Who is behind FHS Foundation?', answer: 'The foundation was created by Dariusz Andrzejczak and Adrian Nkwamu along with a team of dedicated volunteers and collaborators.' },
    { question: 'What are the funds used for?', answer: 'Funds go towards education, nutrition, healthcare and infrastructure development in The Gambia.' },
  ],
  nl: [
    { question: 'Wat doet de FHS Foundation?', answer: 'Sinds 2022 ondersteunt de FHS Foundation de ontwikkeling van onderwijs en levensomstandigheden in West-Afrikaanse gemeenschappen, met name in Gambia.' },
    { question: 'Waar zijn jullie actief?', answer: 'We zijn direct actief in Gambia en runnen het Poolse Huis in Bijilo. We werken samen met lokale gemeenschappen, scholen en overheidsinstellingen.' },
    { question: 'Hoe kan ik me betrekken?', answer: 'U kunt ons steunen via virtuele adoptie, eenmalige donaties, vrijwilligerswerk of door onze activiteiten te delen.' },
    { question: 'Wie zit er achter de FHS Foundation?', answer: 'De stichting is opgericht door Dariusz Andrzejczak en Adrian Nkwamu, samen met een team van toegewijde vrijwilligers.' },
    { question: 'Waar worden de middelen voor gebruikt?', answer: 'Middelen gaan naar onderwijs, voeding, gezondheidszorg en infrastructuurontwikkeling in Gambia.' },
  ],
};

// Testimonials translations
export const testimonialsTranslations: Record<Language, { name: string; content: string; rating: number }[]> = {
  pl: [
    { name: 'Anna Kowalczyk', content: 'Wspieramy fundację FHS od roku i widzimy realne efekty. Zdjęcia, raporty — wszystko jest transparentne. Polecam każdemu, kto chce pomagać mądrze.', rating: 5 },
    { name: 'Tomasz Nowak', content: 'Wirtualna adopcja to coś więcej niż przelew. To relacja z konkretnym dzieckiem. Otrzymuję zdjęcia i wiadomości — to daje prawdziwą satysfakcję.', rating: 5 },
    { name: 'Magdalena Król', content: 'Byłam wolontariuszką w Domu Polskim w Gambii. To doświadczenie zmieniło moje życie. Fundacja działa profesjonalnie i z sercem.', rating: 5 },
    { name: 'Piotr Zieliński', content: 'Doceniam przejrzystość fundacji. Wiem dokładnie, na co idą moje pieniądze. Każda złotówka jest rozliczona.', rating: 4.5 },
    { name: 'Ewa Kamińska', content: 'Dzieci w Gambii naprawdę potrzebują pomocy. Fundacja FHS robi to w sposób, który budzi zaufanie i szacunek.', rating: 5 },
  ],
  en: [
    { name: 'Anna Kowalczyk', content: 'We have been supporting FHS Foundation for a year and see real results. Photos, reports — everything is transparent. I recommend it to anyone who wants to help wisely.', rating: 5 },
    { name: 'Tomasz Nowak', content: 'Virtual adoption is more than a transfer. It\'s a relationship with a specific child. I receive photos and messages — it gives real satisfaction.', rating: 5 },
    { name: 'Magdalena Król', content: 'I volunteered at the Polish House in The Gambia. That experience changed my life. The foundation works professionally and with heart.', rating: 5 },
    { name: 'Piotr Zieliński', content: 'I appreciate the foundation\'s transparency. I know exactly where my money goes. Every penny is accounted for.', rating: 4.5 },
    { name: 'Ewa Kamińska', content: 'Children in The Gambia truly need help. FHS Foundation does it in a way that inspires trust and respect.', rating: 5 },
  ],
  nl: [
    { name: 'Anna Kowalczyk', content: 'We steunen FHS Foundation al een jaar en zien echte resultaten. Foto\'s, rapporten — alles is transparant. Ik beveel het aan iedereen aan.', rating: 5 },
    { name: 'Tomasz Nowak', content: 'Virtuele adoptie is meer dan een overschrijving. Het is een relatie met een specifiek kind. Ik ontvang foto\'s en berichten — dat geeft echte voldoening.', rating: 5 },
    { name: 'Magdalena Król', content: 'Ik was vrijwilliger in het Poolse Huis in Gambia. Die ervaring heeft mijn leven veranderd. De stichting werkt professioneel en met hart.', rating: 5 },
    { name: 'Piotr Zieliński', content: 'Ik waardeer de transparantie van de stichting. Ik weet precies waar mijn geld naartoe gaat.', rating: 4.5 },
    { name: 'Ewa Kamińska', content: 'Kinderen in Gambia hebben echt hulp nodig. FHS Foundation doet het op een manier die vertrouwen en respect inboezemt.', rating: 5 },
  ],
};

// Case studies translations - images are imported in the component
export const caseStudiesTranslations: Record<Language, { name: string; category: string; imageKey: string; client: string; goal: string; duration: string; result: string }[]> = {
  pl: [
    { name: 'Vektor Automation', category: 'Weryfikacja dostawcy', imageKey: 'vektor', client: 'Producent systemów automatyki przemysłowej', goal: 'Weryfikacja chińskiego dostawcy podzespołów do linii produkcyjnych', duration: '3 tygodnie', result: 'Wykrycie rozbieżności w zakresie certyfikacji i struktury właścicielskiej. Zabezpieczenie klienta przed podpisaniem kontraktu o podwyższonym ryzyku operacyjnym.' },
    { name: 'Arcom Electronics', category: 'Wejście na rynek', imageKey: 'arcom', client: 'Dystrybutor urządzeń elektronicznych klasy premium', goal: 'Opracowanie strategii wejścia na rynek chiński (model B2B)', duration: '3 miesiące', result: 'Uruchomienie pilotażowej sprzedaży w modelu cross-border. Podpisanie pierwszych umów z lokalnymi partnerami dystrybucyjnymi.' },
    { name: 'Aktir', category: 'Due Diligence', imageKey: 'aktir', client: 'Operator transportu międzynarodowego', goal: 'Due diligence chińskiego partnera logistycznego', duration: '4 tygodnie', result: 'Kompleksowa analiza struktury finansowej i operacyjnej partnera. Podjęcie świadomej decyzji strategicznej oraz wzmocnienie pozycji negocjacyjnej klienta.' },
    { name: 'Orvanta', category: 'Optymalizacja łańcucha', imageKey: 'orvanta', client: 'Platforma e-commerce z sektora elektroniki użytkowej', goal: 'Optymalizacja struktury importu i modelu sourcingowego', duration: '6 tygodni', result: 'Redukcja kosztów logistycznych o 28%. Wdrożenie stabilnego modelu bezpośredniej współpracy z producentami.' },
  ],
  en: [
    { name: 'Vektor Automation', category: 'Supplier Verification', imageKey: 'vektor', client: 'Industrial automation systems manufacturer', goal: 'Verification of Chinese component supplier for production lines', duration: '3 weeks', result: 'Detection of discrepancies in certification and ownership structure. Protecting the client from signing a contract with elevated operational risk.' },
    { name: 'Arcom Electronics', category: 'Market Entry', imageKey: 'arcom', client: 'Premium electronics equipment distributor', goal: 'Development of Chinese market entry strategy (B2B model)', duration: '3 months', result: 'Launch of pilot cross-border sales. Signing first agreements with local distribution partners.' },
    { name: 'Aktir', category: 'Due Diligence', imageKey: 'aktir', client: 'International transport operator', goal: 'Due diligence of Chinese logistics partner', duration: '4 weeks', result: 'Comprehensive analysis of partner\'s financial and operational structure. Making an informed strategic decision and strengthening client\'s negotiating position.' },
    { name: 'Orvanta', category: 'Supply Chain Optimization', imageKey: 'orvanta', client: 'Consumer electronics e-commerce platform', goal: 'Optimization of import structure and sourcing model', duration: '6 weeks', result: '28% reduction in logistics costs. Implementation of stable direct cooperation model with manufacturers.' },
  ],
  nl: [
    { name: 'Vektor Automation', category: 'Leveranciersverificatie', imageKey: 'vektor', client: 'Fabrikant van industriële automatiseringssystemen', goal: 'Verificatie van Chinese leverancier van onderdelen voor productielijnen', duration: '3 weken', result: 'Ontdekking van discrepanties in certificering en eigendomsstructuur.' },
    { name: 'Arcom Electronics', category: 'Markttoetreding', imageKey: 'arcom', client: 'Distributeur van premium elektronische apparatuur', goal: 'Ontwikkeling van markttoetreding strategie (B2B-model)', duration: '3 maanden', result: 'Lancering van pilot cross-border verkoop. Ondertekening van eerste overeenkomsten met lokale distributiepartners.' },
    { name: 'Aktir', category: 'Due Diligence', imageKey: 'aktir', client: 'Internationale transportoperator', goal: 'Due diligence van logistieke partner', duration: '4 weken', result: 'Uitgebreide analyse van de financiële en operationele structuur van de partner.' },
    { name: 'Orvanta', category: 'Supply Chain Optimalisatie', imageKey: 'orvanta', client: 'E-commerce platform voor consumentenelektronica', goal: 'Optimalisatie van importstructuur en sourcingmodel', duration: '6 weken', result: '28% verlaging van logistieke kosten. Implementatie van stabiel direct samenwerkingsmodel.' },
  ],
};

// Carousel service translations for homepage (brief highlights)
export const carouselServicesTranslations: Record<Language, { title: string; description: string; slug: string }[]> = {
  pl: [
    { title: 'Wyjazdy wolontariackie', description: 'Bezpośrednia pomoc na miejscu w Gambii. Stań się częścią naszej misji.', slug: 'wyjazdy-wolontariackie' },
    { title: 'Wsparcie edukacyjne', description: 'Stypendia i materiały szkolne. Budujemy fundament przyszłości dzieci.', slug: 'wsparcie-edukacyjne' },
    { title: 'Wolontariat Misyjny', description: 'Duchowe i materialne wsparcie wspólnoty katolickiej w Gambii.', slug: 'wolontariat-misyjny' },
    { title: 'Zbiórki charytatywne', description: 'Realna pomoc dzięki Waszemu wsparciu. Razem możemy więcej.', slug: 'zbiorki-charytatywne' },
    { title: 'Współpraca z ministerstwami', description: 'Systemowe działania w ochronie zdrowia i oświaty w Gambii.', slug: 'wspolpraca-z-ministerstwami' },
  ],
  en: [
    { title: 'Volunteer Trips', description: 'Direct help on the ground in The Gambia. Become part of our mission.', slug: 'wyjazdy-wolontariackie' },
    { title: 'Educational Support', description: 'Scholarships and school supplies. We build the foundation for children\'s future.', slug: 'wsparcie-edukacyjne' },
    { title: 'Missionary Volunteering', description: 'Spiritual and material support for the Catholic community in The Gambia.', slug: 'wolontariat-misyjny' },
    { title: 'Charity Collections', description: 'Real help through your support. Together we can do more.', slug: 'zbiorki-charytatywne' },
    { title: 'Ministry Cooperation', description: 'Systemic actions in healthcare and education in The Gambia.', slug: 'wspolpraca-z-ministerstwami' },
  ],
  nl: [
    { title: 'Vrijwilligersreizen', description: 'Directe hulp ter plaatse in Gambia. Word deel van onze missie.', slug: 'wyjazdy-wolontariackie' },
    { title: 'Educatieve ondersteuning', description: 'Beurzen en schoolbenodigdheden. We leggen de basis voor de toekomst.', slug: 'wsparcie-edukacyjne' },
    { title: 'Missionair vrijwilligerswerk', description: 'Spirituele en materiële steun voor de katholieke gemeenschap.', slug: 'wolontariat-misyjny' },
    { title: 'Liefdadigheidsinzamelingen', description: 'Echte hulp door uw steun. Samen kunnen we meer.', slug: 'zbiorki-charytatywne' },
    { title: 'Samenwerking met ministeries', description: 'Systemische acties in gezondheidszorg en onderwijs w Gambia.', slug: 'wspolpraca-z-ministerstwami' },
  ],
};

// Detailed project descriptions for ServiceDetail page
export const projectDetailTranslations: Record<Language, Record<string, { fullDescription: string; sections?: { title: string; content: string }[] }>> = {
  pl: {
    'wyjazdy-wolontariackie': {
      fullDescription: 'Wolontariat w Gambii to coś więcej niż pomoc. To spotkanie - z drugim człowiekiem, z inną kulturą, a często także z samym sobą. Przez codzienną obecność, prostą pomoc, wspólną modlitwę i uśmiech możesz realnie zmienić czyjeś życie. I pozwolić, by ktoś zmienił Twoje.',
      sections: [
        { title: 'Miejsce i warunki', content: 'Nasi wolontariusze mieszkają w Domu Polskim - centrum wolontariatu w Gambii. To bezpieczne, przyjazne miejsce, położone zaledwie 400 metrów od oceanu. Czeka tam basen, przestrzeń do odpoczynku i chwile wytchnienia. Bo w życiu liczy się równowaga - między pracą a odpoczynkiem, zaangażowaniem a ciszą.' },
        { title: 'Doświadczenie Afryki', content: 'Na miejscu nie tylko działasz - uczysz się innego świata. Odwiedzasz wioski, szkoły i parafie, rozmawiasz, słuchasz i poznajesz codzienność ludzi, którzy mimo ubóstwa potrafią promieniować pokojem i siłą ducha. Podczas pobytu znajdzie się też czas na wyjątkowe doświadczenia: safari, spacer z lwami, spotkanie z krokodylami czy rejs na legendarną wyspę Kunta Kinteh.' },
        { title: 'Rodzaje wolontariatu', content: 'Oferujemy różne ścieżki zaangażowania: medyczną (dla studentów medycyny i pielęgniarstwa), edukacyjną (pedagogika i psychologia), oraz Liturgiczną Służbę Ołtarza. Jesteśmy też otwarci na Twoje własne pomysły - w Afryce liczy się każda pomoc: muzyka, sport, fotografia czy ewangelizacja.' },
        { title: 'Dołącz do nas', content: 'Jeśli nie możesz wyjechać, zostań wolontariuszem w Polsce! Pomóż szerzyć misję fundacji, organizować zbiórki i pozyskiwać sponsorów. W dowód wdzięczności otrzymasz legitymację wolontariusza oraz różaniec poświęcony przez papieża Franciszka.' }
      ]
    },
    'wolontariat-misyjny': {
      fullDescription: 'W Gambii żyje około 300 tysięcy katolików. Choć stanowią mniejszość, ich wiara jest głęboka i żywa. Fundacja FHS od lat wspiera tę wspólnotę w ścisłym porozumieniu z biskupem Gabrielem Mendym.',
      sections: [
        { title: 'Duchowe wsparcie', content: 'Dzięki osobistemu zaangażowaniu fundatora do Gambii trafiły relikwie św. Jana Pawła II oraz setki papieskich różańców od papieża Franciszka. Relikwiarz stał się centrum modlitwy i symbolem duchowej jedności z Kościołem powszechnym.' },
        { title: 'Realna pomoc wspólnocie', content: 'Budujemy szkoły, wspieramy parafie i rozwijamy projekty edukacyjne. Współpracujemy z siostrami Misjonarkami Miłości, w tym z polskimi siostrami Urszulą i Lilianą, których codzienna służba najuboższym jest żywą Ewangelią.' },
        { title: 'Kościół to jedno ciało', content: 'Nasza misja to uświadamianie Gambijczykom, że nie są sami. Pomóż nam wspierać tych, którzy mimo trudnych warunków trwają przy Chrystusie z ogromną nadzieją i uśmiechem.' }
      ]
    },
    'wspolpraca-z-ministerstwami': {
      fullDescription: 'Nasza Fundacja współpracuje z Ministerstwem Zdrowia oraz Ministerstwem Edukacji Gambii, niosąc pomoc w dwóch kluczowych obszarach dla przyszłości tego kraju.',
      sections: [
        { title: 'Ochrona zdrowia', content: 'Wspólnie z Ministerstwem Zdrowia nasi wolontariusze – lekarze i studenci – wspierają szpitale miejskie oraz docierają do najdalszych wiosek, gdzie dostęp do medycyny jest niemal zerowy. To realne ratowanie życia i poprawa warunków zdrowotnych mieszkańców.' },
        { title: 'Rozwój edukacji', content: 'Przy wsparciu Ministerstwa Edukacji prowadzimy zajęcia na Uniwersytecie w Gambii oraz w szkołach podstawowych i średnich. Program „Wirtualna Adopcja” pozwala najuboższym, ale uzdolnionym uczniom kontynuować naukę i budować lepszą przyszłość.' },
        { title: 'Budowanie mostów', content: 'Ta współpraca to dowód ogromnego zaufania rządu Gambii. Inwestujemy w przyszłość młodego pokolenia, łącząc nasze kraje poprzez konkretną, praktyczną pomoc i dzielenie się wiedzą.' }
      ]
    },
    'wsparcie-edukacyjne': {
      fullDescription: 'Ten projekt opiera się obecnie głównie na dokumentacji wizualnej naszych działań terenowych. Zapraszamy do obejrzenia galerii zdjęć reprezentującej nasze wsparcie dla szkół i uczniów w Gambii.',
    },
    'zbiorki-charytatywne': {
      fullDescription: 'Ten projekt opiera się obecnie głównie na dokumentacji wizualnej naszych działań terenowych. Zapraszamy do obejrzenia galerii zdjęć reprezentującej przebieg i efekty naszych zbiórek.',
    }
  },
  en: {
    'wyjazdy-wolontariackie': {
      fullDescription: 'Volunteering in The Gambia is more than just help. It\'s an encounter - with another person, a different culture, and often with oneself. Through everyday presence, prayer, and a smile, you can truly change lives.',
      sections: [
        { title: 'Location and Conditions', content: 'Our volunteers stay at the Polish House, a safe and friendly center just 400m from the ocean, featuring a pool and spaces for rest and reflection.' },
        { title: 'African Experience', content: 'Learn about a different world by visiting villages, schools, and parishes. Experience unique moments like safaris, walking with lions, and visiting the historic Kunta Kinteh Island.' },
        { title: 'Types of Volunteering', content: 'We offer medical, educational, and liturgical paths. We also welcome your own creative ideas for help - in Africa, everything done with heart counts.' }
      ]
    },
    'wolontariat-misyjny': {
      fullDescription: 'Supporting a vibrant community of 300,000 Catholics in The Gambia, standing strong in their faith despite challenging conditions.',
      sections: [
        { title: 'Spiritual Support', content: 'Bringing relics of St. John Paul II and rosaries blessed by Pope Francis to provide spiritual strength and unity with the universal Church.' },
        { title: 'Community Aid', content: 'Building schools, supporting parishes, and working with the Missionaries of Charity to serve the poorest of the poor.' }
      ]
    },
    'wspolpraca-z-ministerstwami': {
      fullDescription: 'Strategic partnership with the Gambian Ministries of Health and Education to deliver essential care and knowledge.',
      sections: [
        { title: 'Healthcare', content: 'Doctors and medical students supporting urban hospitals and reaching remote villages where healthcare access is minimal.' },
        { title: 'Education', content: 'Lecturing at the University of The Gambia and supporting primary schools through our "Virtual Adoption" program.' }
      ]
    },
    'wsparcie-edukacyjne': {
      fullDescription: 'This project currently focuses on visual documentation. Please see our gallery for photos of our work with schools and students.',
    },
    'zbiorki-charytatywne': {
      fullDescription: 'This project currently focuses on visual documentation. Please see our gallery for photos of our fundraising results and aid distribution.',
    }
  },
  nl: {
    'wyjazdy-wolontariackie': {
      fullDescription: 'Vrijwilligerswerk in Gambia is meer dan hulp alleen. Het is een ontmoeting met een andere cultuur en jezelf. Verander levens door aanwezigheid en een glimlach.',
      sections: [
        { title: 'Locatie en condities', content: 'Verblijf in het Poolse Huis, een veilig centrum op 400m van de oceaan, compleet met zwembad en rustruimtes.' },
        { title: 'Afrikaanse ervaring', content: 'Bezoek dorpen en scholen, en beleef unieke momenten zoals safari\'s en een bezoek aan Kunta Kinteh Island.' }
      ]
    },
    'wolontariat-misyjny': {
      fullDescription: 'Ondersteuning van de katholieke gemeenschap in Gambia, die ondanks moeilijke omstandigheden standvastig blijft in het geloof.',
      sections: [
        { title: 'Spirituele steun', content: 'Het binnenbrengen van relikwieën van St. Johannes Paulus II en rozenkransen gezegend door Paus Franciscus.' }
      ]
    },
    'wspolpraca-z-ministerstwami': {
      fullDescription: 'Samenwerking met de Gambiaanse ministeries van Gezondheid en Onderwijs voor cruciale hulp.',
      sections: [
        { title: 'Gezondheidszorg', content: 'Medische vrijwilligers die ziekenhuizen en afgelegen dorpen ondersteunen.' }
      ]
    },
    'wsparcie-edukacyjne': {
      fullDescription: 'Dit project richt zich momenteel op visuele documentatie. Bekijk onze galerij voor foto\'s van onze steun aan scholen.',
    },
    'zbiorki-charytatywne': {
      fullDescription: 'Dit project richt się momenteel op visuele documentatie. Bekijk onze galerij voor foto\'s van onze inzamelingen.',
    }
  }
};

// Service categories translations for Uslugi page
export const serviceCategoriesTranslations: Record<Language, { title: string; subServices: string[] }[]> = {
  pl: [
    { title: 'Strategia wobec Chin', subServices: ['Analiza wpływu Chin na firmę lub sektor', 'Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji', 'Scenariusze strategiczne i mapy ryzyk', 'Briefingi decyzyjne dla zarządów'] },
    { title: 'Analizy rynku i weryfikacja partnerów', subServices: ['Analizy sektorów, klastrów przemysłowych i konkurencji', 'Analiza regulacyjna i barier wejścia', 'Weryfikacja kontrahenta (Desktop Check)', 'Rozszerzona weryfikacja partnera (Due Diligence)'] },
    { title: 'Wejście na rynek Polska ↔ Chiny', subServices: ['Wybór modelu wejścia na rynek', 'Wsparcie formalne i regulacyjne', 'Identyfikacja i selekcja partnerów', 'Wsparcie negocjacyjne i relacyjne', 'Przygotowanie struktur handlowych lub partnerskich'] },
    { title: 'Import, eksport i zarządzanie łańcuchem dostaw', subServices: ['Audyty i weryfikacja dostawców (On-Site)', 'Projektowanie i optymalizacja łańcucha dostaw', 'Nadzór produkcji oraz kontrola jakości', 'Organizacja transportu międzynarodowego', 'Kompleksowa realizacja projektu PL ↔ CN (end-to-end)'] },
    { title: 'Marketing i pozycjonowanie rynkowe', subServices: ['Lokalne pozycjonowanie marki (PL i CN)', 'Strategia komunikacji', 'Adaptacja komunikacji do rynku PL i CN', 'Materiały sprzedażowe i wizerunkowe', 'Wsparcie działań marketingowych i pozyskiwania leadów'] },
    { title: 'Misje biznesowe i szkolenia', subServices: ['Organizacja misji biznesowych i technologicznych PL ↔ CN', 'Aranżacja spotkań B2B i matchmaking partnerów', 'Szkolenia z systemu gospodarczego Chin', 'Szkolenia z kultury biznesowej i negocjacji'] },
  ],
  en: [
    { title: 'China Strategy', subServices: ['Analysis of China\'s impact on company or sector', 'Entry, cooperation, scaling or exposure reduction decisions', 'Strategic scenarios and risk maps', 'Decision briefings for boards'] },
    { title: 'Market Analysis & Partner Verification', subServices: ['Sector, industrial cluster and competition analysis', 'Regulatory analysis and entry barriers', 'Contractor verification (Desktop Check)', 'Extended partner verification (Due Diligence)'] },
    { title: 'Market Entry Poland ↔ China', subServices: ['Market entry model selection', 'Formal and regulatory support', 'Partner identification and selection', 'Negotiation and relationship support', 'Preparation of trade or partnership structures'] },
    { title: 'Import, Export & Supply Chain Management', subServices: ['Supplier audits and verification (On-Site)', 'Supply chain design and optimization', 'Production supervision and quality control', 'International transport organization', 'Comprehensive PL ↔ CN project delivery (end-to-end)'] },
    { title: 'Marketing & Market Positioning', subServices: ['Local brand positioning (PL and CN)', 'Communication strategy', 'Communication adaptation for PL and CN markets', 'Sales and branding materials', 'Marketing support and lead generation'] },
    { title: 'Business Missions & Training', subServices: ['Business and technology missions PL ↔ CN', 'B2B meetings and partner matchmaking', 'Training on China\'s economic system', 'Business culture and negotiation training'] },
  ],
  nl: [
    { title: 'Educatie & ondersteuning', subServices: ['Schoolbenodigdheden en beurzen', 'Educatieve programma\'s voor kinderen', 'Ondersteuning van lokale leerkrachten', 'Naschoolse activiteiten'] },
    { title: 'Gezondheidszorg', subServices: ['Medische missies', 'Gezondheidskliniek ondersteuning', 'Vaccinatieprogramma\'s', 'Gezondheidsvoorlichting'] },
    { title: 'Infrastructuur', subServices: ['Bouw en renovatie van scholen', 'Watervoorziening projecten', 'Gemeenschapscentra', 'Sanitaire voorzieningen'] },
    { title: 'Virtuele adoptie', subServices: ['Maandelijkse ondersteuning van een kind', 'Educatie- en voedingsprogramma', 'Regelmatige voortgangsrapporten', 'Directe communicatie met het kind'] },
    { title: 'Vrijwilligerswerk', subServices: ['Vrijwilligersmissies in Gambia', 'Culturele uitwisseling', 'Ondersteuning ter plaatse', 'Gemeenschapsontwikkeling'] },
    { title: 'Partnerschappen', subServices: ['Samenwerking met ministeries', 'NGO-partnerschappen', 'Bedrijfspartnerschappen', 'Academische samenwerkingen'] },
  ],
};

// Interactive Case Study tab translations
export const caseStudyTabsTranslations: Record<Language, { id: string; label: string }[]> = {
  pl: [
    { id: 'situation', label: 'Sytuacja' },
    { id: 'actions', label: 'Działania' },
    { id: 'result', label: 'Efekt' },
  ],
  en: [
    { id: 'situation', label: 'Situation' },
    { id: 'actions', label: 'Actions' },
    { id: 'result', label: 'Result' },
  ],
  nl: [
    { id: 'situation', label: 'Situatie' },
    { id: 'actions', label: 'Acties' },
    { id: 'result', label: 'Resultaat' },
  ],
};

// BazaWiedzy article translations
export const articlesTranslations: Record<Language, { category: string; title: string; description: string; date: string; readTime: string; slug: string; featured?: boolean }[]> = {
  pl: [
    { category: 'Aktualności', title: 'Pawilon OmenaArt Foundation uznany za najlepszy na Malta Biennale 2026', description: 'OmenaArt Foundation za pośrednictwem Fundacji FHS zaprezentowała na Malta Biennale wyjątkowy pawilon poświęcony sztuce afrykańskiej i kulturze Gambii.', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: 'Aktualności', title: 'Omena Mensah z międzynarodowym tytułem Global Woman of Impact', description: 'Omena Mensah, patronka i ambasadorka Fundacji FHS, została uhonorowana tytułem Global Woman of Impact za działalność charytatywną w Afryce.', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: 'Nasze projekty', title: 'Budowa szkoły w prowincji Upper River - postępy prac', description: 'Relacja z budowy szkoły podstawowej w jednej z najbardziej potrzebujących prowincji Gambii. Dzięki wsparciu darczyńców projekt posuwa się naprzód.', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: 'Nasze projekty', title: 'Program żywieniowy dla 200 dzieci w Bandżulu', description: 'Fundacja FHS uruchomiła program zapewniający codzienne posiłki dzieciom uczęszczającym do szkół w rejonie Bandżulu.', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: 'Poradniki', title: 'Jak zostać wolontariuszem w Domu Polskim w Gambii', description: 'Praktyczny przewodnik dla osób zainteresowanych wolontariatem w naszym ośrodku w Gambii.', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: 'Poradniki', title: 'Wirtualna adopcja krok po kroku - wszystko co musisz wiedzieć', description: 'Kompletny przewodnik po programie wirtualnej adopcji Fundacji FHS.', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: 'Aktualności', title: 'Fundacja FHS partnerem UNICEF w regionie Afryki Zachodniej', description: 'Nawiązaliśmy współpracę z UNICEF w zakresie programów edukacyjnych i zdrowotnych w Gambii.', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: 'Nasze projekty', title: 'Remont i wyposażenie kliniki zdrowia w Brikama', description: 'Dzięki zbiórce funduszy udało się wyremontować i wyposażyć klinikę zdrowia obsługującą ponad 5000 mieszkańców.', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
  en: [
    { category: 'News', title: 'OmenaArt Foundation Pavilion named best at Malta Biennale 2026', description: 'OmenaArt Foundation through FHS Foundation presented a unique pavilion dedicated to African art and Gambian culture at Malta Biennale.', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: 'News', title: 'Omena Mensah receives international Global Woman of Impact title', description: 'Omena Mensah, patron and ambassador of FHS Foundation, was honored with the Global Woman of Impact title for charitable work in Africa.', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: 'Our projects', title: 'School construction in Upper River province - progress report', description: 'Report on the construction of an elementary school in one of the most needy provinces of The Gambia.', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: 'Our projects', title: 'Nutrition program for 200 children in Banjul', description: 'FHS Foundation launched a program providing daily meals for children attending schools in the Banjul area.', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: 'Guides', title: 'How to become a volunteer at the Polish House in The Gambia', description: 'Practical guide for people interested in volunteering at our center in The Gambia.', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: 'Guides', title: 'Virtual adoption step by step - everything you need to know', description: 'Complete guide to the FHS Foundation virtual adoption program.', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: 'News', title: 'FHS Foundation partners with UNICEF in West Africa region', description: 'We established cooperation with UNICEF in educational and health programs in The Gambia.', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: 'Our projects', title: 'Renovation and equipping of health clinic in Brikama', description: 'Thanks to fundraising, we managed to renovate and equip a health clinic serving over 5,000 residents.', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
  nl: [
    { category: 'Nieuws', title: 'OmenaArt Foundation Paviljoen uitgeroepen tot beste op Malta Biënnale 2026', description: 'OmenaArt Foundation presenteerde via FHS Foundation een uniek paviljoen gewijd aan Afrikaanse kunst en Gambiaanse cultuur.', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: 'Nieuws', title: 'Omena Mensah ontvangt internationale titel Global Woman of Impact', description: 'Omena Mensah, beschermvrouwe van FHS Foundation, werd geëerd met de titel Global Woman of Impact.', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: 'Onze projecten', title: 'Schoolbouw in de provincie Upper River - voortgangsrapport', description: 'Verslag van de bouw van een basisschool in een van de meest behoeftige provincies van Gambia.', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: 'Onze projecten', title: 'Voedingsprogramma voor 200 kinderen in Banjul', description: 'FHS Foundation lanceerde een programma dat dagelijkse maaltijden biedt aan schoolkinderen in Banjul.', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: 'Gidsen', title: 'Hoe word je vrijwilliger in het Poolse Huis in Gambia', description: 'Praktische gids voor geïnteresseerden in vrijwilligerswerk in ons centrum in Gambia.', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: 'Gidsen', title: 'Virtuele adoptie stap voor stap', description: 'Complete gids voor het virtuele adoptieprogramma van FHS Foundation.', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: 'Nieuws', title: 'FHS Foundation partner van UNICEF in West-Afrika', description: 'We zijn een samenwerking aangegaan met UNICEF op het gebied van onderwijs- en gezondheidsprogramma\'s in Gambia.', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: 'Onze projecten', title: 'Renovatie en uitrusting van gezondheidskliniek in Brikama', description: 'Dankzij fondsenwerving konden we een gezondheidskliniek renoveren en uitrusten.', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
};
