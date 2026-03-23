import { Language } from './translations';

// Stats translations used across pages
export const statsTranslations: Record<Language, { value: number; suffix: string; label: string; isText?: boolean }[]> = {
  pl: [
    { value: 480, suffix: '+', label: 'zweryfikowanych podmiotów i partnerów biznesowych' },
    { value: 50, suffix: '+', label: 'lat łącznego doświadczenia zespołu w projektach międzynarodowych' },
    { value: 7, suffix: '', label: 'sektorów technologicznych' },
    { value: 0, suffix: 'PL-CN', label: 'stała obecność operacyjna', isText: true },
  ],
  en: [
    { value: 480, suffix: '+', label: 'verified entities and business partners' },
    { value: 50, suffix: '+', label: 'years of combined team experience in international projects' },
    { value: 7, suffix: '', label: 'technology sectors' },
    { value: 0, suffix: 'PL-CN', label: 'permanent operational presence', isText: true },
  ],
  nl: [
    { value: 480, suffix: '+', label: '已验证的实体和商业伙伴' },
    { value: 50, suffix: '+', label: '团队在国际项目中的累计经验年数' },
    { value: 7, suffix: '', label: '个技术领域' },
    { value: 0, suffix: 'PL-CN', label: '常驻运营' , isText: true },
  ],
};

// FAQ translations for homepage
export const homeFaqTranslations: Record<Language, { question: string; answer: string }[]> = {
  pl: [
    { question: 'Czy gwarantujecie rezultaty?', answer: 'Gwarantujemy rzetelność analiz i jakość materiałów. Nasze rekomendacje bazują na weryfikowalnych źródłach i wieloletnim doświadczeniu.' },
    { question: 'Jak wygląda raportowanie w trakcie współpracy?', answer: 'W zależności od modelu współpracy raporty przekazujemy jednorazowo po zakończeniu projektu lub cyklicznie, w modelu miesięcznym lub kwartalnym, przy wsparciu długoterminowym.' },
    { question: 'Czy działacie w mojej branży?', answer: 'Specjalizujemy się w sektorach: technologia, produkcja, automotive, energia odnawialna, e-commerce. Dla innych branż oferujemy konsultacje indywidualne.' },
    { question: 'Czy reprezentujecie interesy drugiej strony transakcji?', answer: 'Działamy wyłącznie po stronie klienta zlecającego projekt. Nie pobieramy prowizji handlowych ani nie reprezentujemy interesów dostawców, inwestorów czy partnerów biznesowych. Zapewnia to pełną niezależność naszych rekomendacji.' },
    { question: 'Czy wspieracie również na etapie wdrożenia?', answer: 'Tak. W zależności od zakresu projektu możemy wesprzeć klienta na etapie rozmów z partnerami, weryfikacji podmiotów, organizacji spotkań biznesowych oraz nadzoru operacyjnego po wejściu na rynek.' },
    { question: 'Czy wspieracie w organizacji transportu i łańcucha dostaw?', answer: 'Tak. W zależności od projektu możemy przejąć koordynację całego procesu logistycznego, od weryfikacji dostawcy i negocjacji warunków, przez organizację produkcji i kontroli jakości, po transport międzynarodowy oraz nadzór nad dostawą do miejsca docelowego.' },
  ],
  en: [
    { question: 'Do you guarantee results?', answer: 'We guarantee the reliability of our analyses and the quality of our materials. Our recommendations are based on verifiable sources and years of experience.' },
    { question: 'What does reporting look like during cooperation?', answer: 'Depending on the cooperation model, we deliver reports once after project completion or cyclically, on a monthly or quarterly basis, for long-term support.' },
    { question: 'Do you operate in my industry?', answer: 'We specialize in sectors: technology, manufacturing, automotive, renewable energy, e-commerce. For other industries, we offer individual consultations.' },
    { question: 'Do you represent the interests of the other party?', answer: 'We work exclusively on behalf of the commissioning client. We do not collect trade commissions or represent the interests of suppliers, investors or business partners. This ensures full independence of our recommendations.' },
    { question: 'Do you also support the implementation phase?', answer: 'Yes. Depending on the project scope, we can support the client in discussions with partners, entity verification, organizing business meetings and operational supervision after market entry.' },
    { question: 'Do you support transport and supply chain organization?', answer: 'Yes. Depending on the project, we can take over coordination of the entire logistics process, from supplier verification and negotiations, through production organization and quality control, to international transport and delivery supervision.' },
  ],
  nl: [
    { question: '你们保证结果吗？', answer: '我们保证分析的可靠性和材料的质量。我们的建议基于可验证的来源和多年的经验。' },
    { question: '合作期间的报告是什么样的？', answer: '根据合作模式，我们在项目完成后一次性交付报告，或定期以月度或季度方式交付长期支持报告。' },
    { question: '你们在我的行业运营吗？', answer: '我们专注于以下领域：技术、制造、汽车、可再生能源、电子商务。对于其他行业，我们提供个人咨询。' },
    { question: '你们代表交易另一方的利益吗？', answer: '我们只代表委托客户的利益。我们不收取贸易佣金，也不代表供应商、投资者或商业伙伴的利益。这确保了我们建议的完全独立性。' },
    { question: '你们也支持实施阶段吗？', answer: '是的。根据项目范围，我们可以在与合作伙伴的讨论、实体验证、组织商务会议以及进入市场后的运营监督等方面为客户提供支持。' },
    { question: '你们支持运输和供应链组织吗？', answer: '是的。根据项目，我们可以接管整个物流过程的协调，从供应商验证和谈判，到生产组织和质量控制，再到国际运输和交付监督。' },
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
    { title: 'Strategia wobec Chin', description: 'Analizy strategiczne, scenariusze i mapy ryzyk, briefingi dla zarządów.' },
    { title: 'Analizy rynku i weryfikacja partnerów', description: 'Badania sektorów, analiza konkurencji, weryfikacja kontrahentów i due diligence.' },
    { title: 'Wejście na rynek Polska ↔ Chiny', description: 'Wybór modelu wejścia, wsparcie regulacyjne, identyfikacja partnerów.' },
    { title: 'Import, eksport i łańcuch dostaw', description: 'Audyty dostawców, optymalizacja logistyki, nadzór produkcji, transport.' },
    { title: 'Marketing i pozycjonowanie', description: 'Lokalne pozycjonowanie marki, strategia komunikacji, materiały sprzedażowe.' },
    { title: 'Misje biznesowe i szkolenia', description: 'Organizacja misji, matchmaking B2B, szkolenia z kultury i systemu Chin.' },
  ],
  en: [
    { title: 'China Strategy', description: 'Strategic analyses, scenarios and risk maps, board briefings.' },
    { title: 'Market Analysis & Partner Verification', description: 'Sector research, competition analysis, contractor verification and due diligence.' },
    { title: 'Market Entry Poland ↔ China', description: 'Entry model selection, regulatory support, partner identification.' },
    { title: 'Import, Export & Supply Chain', description: 'Supplier audits, logistics optimization, production supervision, transport.' },
    { title: 'Marketing & Positioning', description: 'Local brand positioning, communication strategy, sales materials.' },
    { title: 'Business Missions & Training', description: 'Mission organization, B2B matchmaking, culture and system training.' },
  ],
  nl: [
    { title: '对华战略', description: '战略分析、情景规划和风险图、管理层简报。' },
    { title: '市场分析与合作伙伴验证', description: '行业研究、竞争分析、合作方验证和尽职调查。' },
    { title: '市场进入 波兰 ↔ 中国', description: '进入模式选择、监管支持、合作伙伴识别。' },
    { title: '进出口与供应链', description: '供应商审计、物流优化、生产监督、运输。' },
    { title: '营销与市场定位', description: '本地品牌定位、传播策略、销售材料。' },
    { title: '商务考察与培训', description: '考察组织、B2B配对、文化和体系培训。' },
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
    { category: 'Analizy', title: 'Gdzie znika Twoja marża? 5 sygnałów, że Twój chiński „producent" to tylko pośrednik', description: 'W chińskim systemie handlowym ustalenie, kto rzeczywiście stoi za produkcją, przypomina pracę analityka. Wyjaśniamy, jak za pomocą twardych danych z rejestrów państwowych ChRL zdemaskować pośrednika w mniej niż 15 minut.', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: 'Analizy', title: 'Chiński Nowy Rok 2026: Jak uniknąć paraliżu łańcucha dostaw w Roku Konia?', description: 'Dla chińskiego sektora produkcyjnego Święto Wiosny to całkowite wygaszenie reaktora gospodarczego. Polskie firmy, które nie zaplanują dostaw z 4-miesięcznym wyprzedzeniem, ryzykują puste magazyny.', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: 'Analizy', title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach', description: 'Analiza kluczowych przewag, które pozwalają chińskim firmom dominować w wybranych branżach globalnie.', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: 'Analizy', title: 'Chiński system innowacji i jego implikacje dla Europy', description: 'Jak chiński ekosystem innowacji wpływa na konkurencyjność europejskich firm i instytucji.', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: 'Poradniki', title: 'Jak przygotować firmę do współpracy z chińskim partnerem', description: 'Praktyczny przewodnik dla firm planujących nawiązanie współpracy z partnerami z Chin.', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: 'Poradniki', title: 'Na co zwrócić uwagę przed podpisaniem umowy z firmą z Chin', description: 'Kluczowe aspekty prawne, kulturowe i operacyjne, które należy rozważyć przed finalizacją umowy.', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: 'Blog', title: 'Chiny jako konkurent technologiczny Europy - aktualne trendy', description: 'Komentarz do najnowszych wydarzeń w sektorze technologicznym i ich wpływu na rynek europejski.', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: 'Analizy', title: 'Automatyzacja i robotyzacja w Chinach a przyszłość produkcji w Polsce', description: 'Jak rozwój automatyzacji w Chinach może wpłynąć na polski sektor produkcyjny.', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
  en: [
    { category: 'Analyses', title: 'Where does your margin disappear? 5 signs your Chinese "manufacturer" is just a middleman', description: 'In the Chinese trade system, determining who actually stands behind production is like detective work. We explain how to unmask a middleman in less than 15 minutes using hard data from PRC state registries.', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: 'Analyses', title: 'Chinese New Year 2026: How to avoid supply chain paralysis in the Year of the Horse?', description: 'For China\'s manufacturing sector, the Spring Festival is a complete shutdown of the economic reactor. Polish companies that don\'t plan deliveries 4 months ahead risk empty warehouses.', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: 'Analyses', title: 'Competitive advantages of Chinese companies in selected sectors', description: 'Analysis of key advantages that allow Chinese companies to dominate globally in selected industries.', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: 'Analyses', title: 'Chinese innovation system and its implications for Europe', description: 'How the Chinese innovation ecosystem impacts the competitiveness of European companies and institutions.', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: 'Guides', title: 'How to prepare your company for cooperation with a Chinese partner', description: 'Practical guide for companies planning to establish cooperation with partners from China.', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: 'Guides', title: 'What to watch out for before signing a contract with a Chinese company', description: 'Key legal, cultural and operational aspects to consider before finalizing a contract.', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: 'Blog', title: 'China as Europe\'s technological competitor - current trends', description: 'Commentary on the latest developments in the technology sector and their impact on the European market.', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: 'Analyses', title: 'Automation and robotization in China and the future of manufacturing in Poland', description: 'How the development of automation in China may affect the Polish manufacturing sector.', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
  nl: [
    { category: '分析', title: '你的利润去哪了？5个信号表明你的中国"制造商"只是中间商', description: '在中国贸易体系中，确定谁真正站在生产背后就像侦探工作。我们解释如何在不到15分钟内使用中国国家注册的硬数据揭露中间商。', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: '分析', title: '2026年中国新年：如何避免马年供应链瘫痪？', description: '对于中国制造业来说，春节是经济反应堆的完全关闭。没有提前4个月计划交货的波兰公司面临空仓风险。', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: '分析', title: '中国企业在特定行业的竞争优势', description: '分析使中国企业在全球特定行业中占据主导地位的关键优势。', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: '分析', title: '中国创新体系及其对欧洲的影响', description: '中国创新生态系统如何影响欧洲企业和机构的竞争力。', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: '指南', title: '如何准备与中国合作伙伴的合作', description: '为计划与中国合作伙伴建立合作关系的公司提供实用指南。', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: '指南', title: '与中国公司签约前需要注意什么', description: '在最终签订合同前需要考虑的关键法律、文化和运营方面。', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: '博客', title: '中国作为欧洲的技术竞争者 - 当前趋势', description: '对技术领域最新发展及其对欧洲市场影响的评论。', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: '分析', title: '中国的自动化和机器人化与波兰制造业的未来', description: '中国自动化发展如何影响波兰制造业。', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
};
