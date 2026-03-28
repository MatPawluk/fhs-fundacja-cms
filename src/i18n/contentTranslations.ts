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
    { question: 'Co wyróżnia FHS Foundation na tle innych firm działających na linii Polska-Chiny?', answer: 'Łączymy operacyjną obecność w Chinach z dogłębną analizą strategiczną oraz znajomością realiów europejskich. Pracujemy w trzech językach i poruszamy się swobodnie po obu systemach regulacyjnych. Dzięki temu nie tylko tłumaczymy rynek, ale realnie go interpretujemy i filtrujemy ryzyka.' },
    { question: 'Jak wygląda typowy projekt współpracy z FHS Foundation?', answer: 'Każdy projekt zaczynamy od bezpłatnej konsultacji, podczas której precyzujemy cel biznesowy oraz zakres wsparcia. Następnie definiujemy harmonogram i etapy realizacji, od analizy i weryfikacji po wsparcie operacyjne lub wejście na rynek. Każdy projekt ma jasno określony punkt decyzyjny oraz przejrzystą strukturę komunikacji.' },
    { question: 'Czy oferujecie wsparcie tylko dla dużych firm?', answer: 'Współpracujemy zarówno z małymi i średnimi przedsiębiorstwami, jak i z dużymi korporacjami. Nasz model współpracy jest elastyczny i dopasowujemy go do skali i budżetu klienta.' },
    { question: 'Jak długo trwa typowy projekt analityczny?', answer: 'W zależności od zakresu, projekt analityczny trwa od 5 do 14 dni roboczych. Bardziej złożone projekty due diligence mogą wymagać do 4 tygodni.' },
    { question: 'Czy macie biuro w Chinach?', answer: 'Tak, posiadamy operacyjną obecność w Shanghai, co pozwala nam na bezpośredni dostęp do chińskiego rynku, źródeł informacji i sieci kontaktów biznesowych.' },
    { question: 'W jakich językach świadczycie usługi?', answer: 'Nasze usługi świadczymy w języku polskim, angielskim i chińskim (mandaryński). Wszystkie raporty i materiały przygotowujemy w wybranym przez klienta języku.' },
    { question: 'Czy oferujecie wsparcie prawne i podatkowe?', answer: 'Nie świadczymy bezpośrednio usług prawnych ani podatkowych, ale współpracujemy z zaufanymi kancelariami specjalizującymi się w prawie chińskim i polskim oraz transakcjach międzynarodowych.' },
  ],
  en: [
    { question: 'What distinguishes FHS Foundation from other companies operating on the Poland-China axis?', answer: 'We combine operational presence in China with in-depth strategic analysis and knowledge of European realities. We work in three languages and navigate both regulatory systems freely. Thanks to this, we not only translate the market, but truly interpret it and filter risks.' },
    { question: 'What does a typical cooperation project with FHS Foundation look like?', answer: 'Every project begins with a free consultation, during which we define the business goal and scope of support. Then we define the schedule and stages of implementation, from analysis and verification to operational support or market entry. Every project has a clearly defined decision point and transparent communication structure.' },
    { question: 'Do you offer support only for large companies?', answer: 'We work with both small and medium enterprises as well as large corporations. Our cooperation model is flexible and we adapt it to the client\'s scale and budget.' },
    { question: 'How long does a typical analytical project take?', answer: 'Depending on the scope, an analytical project takes from 5 to 14 working days. More complex due diligence projects may require up to 4 weeks.' },
    { question: 'Do you have an office in China?', answer: 'Yes, we have an operational presence in Shanghai, which gives us direct access to the Chinese market, information sources and business contact networks.' },
    { question: 'In what languages do you provide services?', answer: 'We provide services in Polish, English and Chinese (Mandarin). All reports and materials are prepared in the client\'s chosen language.' },
    { question: 'Do you offer legal and tax support?', answer: 'We do not directly provide legal or tax services, but we cooperate with trusted law firms specializing in Chinese and Polish law and international transactions.' },
  ],
  nl: [
    { question: 'FHS Foundation 与其他在波中轴线上运营的公司有何不同？', answer: '我们将在中国的运营存在与深入的战略分析和对欧洲现实的了解相结合。我们使用三种语言工作，并在两个监管体系中自由穿梭。因此，我们不仅翻译市场，还真正解读它并过滤风险。' },
    { question: '与 FHS Foundation 的典型合作项目是什么样的？', answer: '每个项目都从免费咨询开始，在此期间我们确定业务目标和支持范围。然后我们定义时间表和实施阶段，从分析和验证到运营支持或市场进入。每个项目都有明确定义的决策点和透明的沟通结构。' },
    { question: '你们只为大公司提供支持吗？', answer: '我们与中小企业和大型企业都有合作。我们的合作模式灵活，根据客户的规模和预算进行调整。' },
    { question: '一个典型的分析项目需要多长时间？', answer: '根据范围，分析项目需要5至14个工作日。更复杂的尽职调查项目可能需要长达4周。' },
    { question: '你们在中国有办公室吗？', answer: '是的，我们在上海有运营存在，这使我们能够直接进入中国市场、信息来源和商业联系网络。' },
    { question: '你们提供哪些语言的服务？', answer: '我们提供波兰语、英语和中文（普通话）服务。所有报告和材料都以客户选择的语言准备。' },
    { question: '你们提供法律和税务支持吗？', answer: '我们不直接提供法律或税务服务，但我们与专门从事中国和波兰法律以及国际交易的可信赖律所合作。' },
  ],
};

// Testimonials translations
export const testimonialsTranslations: Record<Language, { name: string; content: string; rating: number }[]> = {
  pl: [
    { name: 'Marek Wiśniewski', content: 'Współpraca z FHS Foundation uratowała nas przed podpisaniem umowy z „producentem", który jak się okazało producentem nie był. Szczerze? Gdyby nie ta analiza, pewnie byśmy weszli w to w ciemno. Dużo konkretów, mało lania wody.', rating: 5 },
    { name: 'Katarzyna Dąbrowska', content: 'Pierwszy raz import bez pośrednika i miałam trochę stres. Pan Maksymilian wszystko rozpisał krok po kroku, co sprawdzić, gdzie uważać. Nie było obiecywania złotych gór tylko realne ryzyka. Dzięki temu czuję że mam kontrolę.', rating: 4.5 },
    { name: 'Tomasz Nowak', content: 'Doceniam podejście systemowe. Nie tylko „fabryka wygląda ok", ale wejście w rejestry, powiązania kapitałowe itd. Czuć że to nie jest firma od ładnych prezentacji tylko od realnych spraw.', rating: 5 },
    { name: 'Anna Kowalczyk', content: 'Dzięki weryfikacji dostawcy uniknęliśmy problemu z certyfikacją który wyszedłby dopiero przy odprawie celnej… a to by bolało. Polecam!', rating: 4.5 },
    { name: 'Piotr Zieliński', content: 'Mieliśmy sytuację że po wpłacie zaliczki dostawca zaczął „kombinować" z dokumentami. FHS Foundation pomogło nam ustawić rozmowę tak, żeby wszystko wróciło na właściwe tory. Bez paniki, bez straszenia, po prostu twarde argumenty.', rating: 5 },
    { name: 'Magdalena Król', content: 'Szkolenie z negocjacji było momentami niewygodne, bo pokazuje jak łatwo oddajemy pole. Dużo przykładów z życia, nie teoria. Od tamtej pory inaczej patrzę na to ich „yes, yes, no problem".', rating: 4.5 },
    { name: 'Paweł Lewandowski', content: 'W pewnym momencie usłyszałem wprost, że nasz pomysł wejścia do Chin w tej formie nie ma sensu. I to było najlepsze co mogli powiedzieć. Nie sprzedawali usługi na siłę.', rating: 5 },
    { name: 'Ewa Kamińska', content: 'Konsultacja otworzyła mi oczy na to jak bardzo polityka wpływa na biznes w Chinach. Czytałam raporty wcześniej, ale dopiero rozmowa z kimś kto tam realnie działa daje inny poziom zrozumienia.', rating: 4.5 },
    { name: 'Łukasz Maj', content: 'Zleciliśmy audyt fabryki, która wyglądała świetnie na Alibaba. Na miejscu wyszły rzeczy których byśmy sami nie wyłapali. Szczerze mówiąc… oszczędzili nam sporo pieniędzy i nerwów.', rating: 5 },
    { name: 'Li Wei', content: 'We worked with Mr. Adrian during a supplier restructuring process. What I appreciated most was his ability to translate Polish expectations into something understandable for the Chinese side. He understands both mentalities, which is rare.', rating: 5 },
    { name: 'Zhang Min', content: 'Good strategic discussion before market entry. They did not promise fast success, they explained the risks first. I respect that.', rating: 4.5 },
    { name: 'Chen Hao', content: 'Their understanding of both Polish and Chinese business culture makes negotiations smoother. Less emotion, more structure. That makes a difference.', rating: 5 },
  ],
  en: [
    { name: 'Marek Wiśniewski', content: 'Working with FHS Foundation saved us from signing a contract with a "manufacturer" who turned out not to be one. Honestly? Without this analysis, we would have gone in blind. Lots of specifics, no fluff.', rating: 5 },
    { name: 'Katarzyna Dąbrowska', content: 'First time importing without a middleman and I was a bit stressed. Maksymilian laid everything out step by step, what to check, where to be careful. No empty promises, just real risks. Thanks to this I feel in control.', rating: 4.5 },
    { name: 'Tomasz Nowak', content: 'I appreciate the systematic approach. Not just "the factory looks ok", but diving into registries, capital connections etc. You can feel this is not a company for nice presentations but for real business.', rating: 5 },
    { name: 'Anna Kowalczyk', content: 'Thanks to supplier verification, we avoided a certification problem that would only have surfaced during customs clearance... that would have hurt. Recommended!', rating: 4.5 },
    { name: 'Piotr Zieliński', content: 'We had a situation where after paying the deposit, the supplier started "playing games" with documents. FHS Foundation helped us set up the conversation so everything got back on track. No panic, no threats, just hard arguments.', rating: 5 },
    { name: 'Magdalena Król', content: 'The negotiation training was uncomfortable at times because it shows how easily we give ground. Lots of real-life examples, not theory. Since then I look differently at their "yes, yes, no problem".', rating: 4.5 },
    { name: 'Paweł Lewandowski', content: 'At one point I was told straight that our idea of entering China in that form made no sense. And that was the best thing they could say. They weren\'t pushing the service.', rating: 5 },
    { name: 'Ewa Kamińska', content: 'The consultation opened my eyes to how much politics affects business in China. I had read reports before, but only talking to someone who actually operates there gives a different level of understanding.', rating: 4.5 },
    { name: 'Łukasz Maj', content: 'We commissioned a factory audit that looked great on Alibaba. On site, things came up that we wouldn\'t have caught ourselves. Honestly... they saved us a lot of money and nerves.', rating: 5 },
    { name: 'Li Wei', content: 'We worked with Mr. Adrian during a supplier restructuring process. What I appreciated most was his ability to translate Polish expectations into something understandable for the Chinese side. He understands both mentalities, which is rare.', rating: 5 },
    { name: 'Zhang Min', content: 'Good strategic discussion before market entry. They did not promise fast success, they explained the risks first. I respect that.', rating: 4.5 },
    { name: 'Chen Hao', content: 'Their understanding of both Polish and Chinese business culture makes negotiations smoother. Less emotion, more structure. That makes a difference.', rating: 5 },
  ],
  nl: [
    { name: 'Marek Wiśniewski', content: '与FHS Foundation的合作使我们免于与一个"制造商"签订合同，而这个"制造商"实际上并不是制造商。说实话？如果没有这个分析，我们可能会盲目进入。很多具体内容，没有废话。', rating: 5 },
    { name: 'Katarzyna Dąbrowska', content: '第一次没有中间商进口，我有点紧张。Maksymilian一步步列出了所有内容，检查什么，注意什么。没有空洞的承诺，只有真实的风险。因此我觉得一切在掌控中。', rating: 4.5 },
    { name: 'Tomasz Nowak', content: '我欣赏系统性的方法。不仅仅是"工厂看起来还好"，而是深入注册信息、资本关系等。你能感觉到这不是一家做漂亮演示的公司，而是做实事的公司。', rating: 5 },
    { name: 'Anna Kowalczyk', content: '多亏了供应商验证，我们避免了一个只有在清关时才会暴露的认证问题……那会很痛苦。推荐！', rating: 4.5 },
    { name: 'Piotr Zieliński', content: '我们遇到了这样的情况：付了定金后，供应商开始在文件上"做手脚"。FHS Foundation帮助我们安排了谈话，使一切回到正轨。没有恐慌，没有威胁，只是有力的论据。', rating: 5 },
    { name: 'Magdalena Król', content: '谈判培训有时令人不舒服，因为它展示了我们多么容易让步。很多来自现实生活的例子，不是理论。从那以后，我对他们的"是的，是的，没问题"有了不同的看法。', rating: 4.5 },
    { name: 'Paweł Lewandowski', content: '在某个时刻，我被直接告知我们以那种形式进入中国的想法没有意义。这是他们能说的最好的话。他们没有强行推销服务。', rating: 5 },
    { name: 'Ewa Kamińska', content: '咨询让我意识到政治对中国商业的影响有多大。我之前读过报告，但只有与真正在那里运营的人交谈才能获得不同层次的理解。', rating: 4.5 },
    { name: 'Łukasz Maj', content: '我们委托对一家在阿里巴巴上看起来很棒的工厂进行审计。在现场，出现了我们自己不会发现的问题。说实话……他们为我们节省了很多钱和精力。', rating: 5 },
    { name: 'Li Wei', content: '我们在供应商重组过程中与Adrian先生合作。我最欣赏的是他将波兰的期望转化为中方可以理解的东西的能力。他理解两种心态，这很罕见。', rating: 5 },
    { name: 'Zhang Min', content: '进入市场前的良好战略讨论。他们没有承诺快速成功，而是先解释了风险。我尊重这一点。', rating: 4.5 },
    { name: 'Chen Hao', content: '他们对波兰和中国商业文化的理解使谈判更加顺利。更少的情绪，更多的结构。这很重要。', rating: 5 },
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
    { name: 'Vektor Automation', category: '供应商验证', imageKey: 'vektor', client: '工业自动化系统制造商', goal: '验证生产线零部件的中国供应商', duration: '3周', result: '发现认证和所有权结构方面的差异。保护客户免于签订具有较高运营风险的合同。' },
    { name: 'Arcom Electronics', category: '市场进入', imageKey: 'arcom', client: '高端电子设备分销商', goal: '制定中国市场进入战略（B2B模式）', duration: '3个月', result: '启动跨境试点销售。与当地分销合作伙伴签署首批协议。' },
    { name: 'Aktir', category: '尽职调查', imageKey: 'aktir', client: '国际运输运营商', goal: '对中国物流合作伙伴进行尽职调查', duration: '4周', result: '对合作伙伴的财务和运营结构进行全面分析。做出明智的战略决策并加强客户的谈判地位。' },
    { name: 'Orvanta', category: '供应链优化', imageKey: 'orvanta', client: '消费电子电商平台', goal: '优化进口结构和采购模式', duration: '6周', result: '物流成本降低28%。实施与制造商的稳定直接合作模式。' },
  ],
};

// Carousel service translations for homepage
export const carouselServicesTranslations: Record<Language, { title: string; description: string }[]> = {
  pl: [
    { title: 'Wyjazdy wolontariackie', description: 'Organizujemy wyjazdy dla wolontariuszy, którzy chcą bezpośrednio włączyć się w nasze działania w Afryce' },
    { title: 'Wsparcie edukacyjne', description: 'Zapewniamy materiały szkolne, stypendia i wsparcie edukacyjne dla dzieci w Afryce' },
    { title: 'Wolontariat Misyjny', description: 'Inwestujemy w infrastrukturę edukacyjną, budując i remontując szkoły w potrzebujących regionach' },
    { title: 'Zbiórki charytatywne', description: 'Prowadzimy regularne zbiórki na rzecz dzieci w Afryce oraz realizujemy specjalne akcje pomocowe' },
    { title: 'Współpraca z ministerstwami', description: 'Współpracujemy z Ministerstwami Zdrowia i Edukacji Gambii, niosąc pomoc w kluczowych obszarach' },
  ],
  en: [
    { title: 'Volunteer Trips', description: 'We organize trips for volunteers who want to directly participate in our activities in Africa' },
    { title: 'Educational Support', description: 'We provide school supplies, scholarships and educational support for children in Africa' },
    { title: 'Missionary Volunteering', description: 'We invest in educational infrastructure, building and renovating schools in needy regions' },
    { title: 'Charity Collections', description: 'We conduct regular collections for children in Africa and implement special aid campaigns' },
    { title: 'Ministry Cooperation', description: 'We cooperate with the Gambian Ministries of Health and Education, providing help in key areas' },
  ],
  nl: [
    { title: 'Vrijwilligersreizen', description: 'We organiseren reizen voor vrijwilligers die direct willen deelnemen aan onze activiteiten in Afrika' },
    { title: 'Educatieve ondersteuning', description: 'We bieden schoolbenodigdheden, beurzen en educatieve ondersteuning voor kinderen in Afrika' },
    { title: 'Missionair vrijwilligerswerk', description: 'We investeren in educatieve infrastructuur door scholen te bouwen en te renoveren' },
    { title: 'Liefdadigheidsinzamelingen', description: 'We voeren regelmatige inzamelingen uit voor kinderen in Afrika' },
    { title: 'Samenwerking met ministeries', description: 'We werken samen met de Gambiaanse ministeries van Gezondheid en Onderwijs' },
  ],
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
    { title: '对华战略', subServices: ['中国对公司或行业的影响分析', '进入、合作、扩展或减少风险敞口决策', '战略情景和风险图', '管理层决策简报'] },
    { title: '市场分析与合作伙伴验证', subServices: ['行业、产业集群和竞争分析', '监管分析和进入壁垒', '合作方验证（桌面检查）', '合作伙伴深度验证（尽职调查）'] },
    { title: '市场进入 波兰 ↔ 中国', subServices: ['市场进入模式选择', '正式和监管支持', '合作伙伴识别和选择', '谈判和关系支持', '贸易或合作结构准备'] },
    { title: '进出口与供应链管理', subServices: ['供应商审计和验证（现场）', '供应链设计和优化', '生产监督和质量控制', '国际运输组织', '波中项目综合交付（端到端）'] },
    { title: '营销与市场定位', subServices: ['本地品牌定位（波兰和中国）', '传播策略', '传播适配波兰和中国市场', '销售和品牌材料', '营销支持和潜客开发'] },
    { title: '商务考察与培训', subServices: ['商务和技术考察 波兰 ↔ 中国', 'B2B会议和合作伙伴匹配', '中国经济体系培训', '商务文化和谈判培训'] },
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
    { id: 'situation', label: '情况' },
    { id: 'actions', label: '行动' },
    { id: 'result', label: '效果' },
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
