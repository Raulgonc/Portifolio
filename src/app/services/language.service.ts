import { Injectable, signal, effect } from '@angular/core';

export type Lang = 'pt' | 'en';

interface Translations {
  nav: {
    home: string;
    clients: string;
    dev: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline_1: string;
    headline_2: string;
    subheadline: string;
    cta_services: string;
    cta_quote: string;
    stat_1_value: string;
    stat_1_label: string;
    stat_2_value: string;
    stat_2_label: string;
    stat_3_value: string;
    stat_3_label: string;
    scroll: string;
  };
  stats: {
    projects_value: string;
    projects_label: string;
    clients_value: string;
    clients_label: string;
    experience_value: string;
    experience_label: string;
    satisfaction_value: string;
    satisfaction_label: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    landing_title: string;
    landing_desc: string;
    landing_feature_1: string;
    landing_feature_2: string;
    landing_feature_3: string;
    landing_feature_4: string;
    institutional_title: string;
    institutional_desc: string;
    institutional_feature_1: string;
    institutional_feature_2: string;
    institutional_feature_3: string;
    institutional_feature_4: string;
    ecommerce_title: string;
    ecommerce_desc: string;
    ecommerce_feature_1: string;
    ecommerce_feature_2: string;
    ecommerce_feature_3: string;
    ecommerce_feature_4: string;
    redesign_title: string;
    redesign_desc: string;
    redesign_feature_1: string;
    redesign_feature_2: string;
    redesign_feature_3: string;
    redesign_feature_4: string;
    maintenance_title: string;
    maintenance_desc: string;
    maintenance_feature_1: string;
    maintenance_feature_2: string;
    maintenance_feature_3: string;
    maintenance_feature_4: string;
    cta_hire: string;
    cta_quote: string;
    popular_badge: string;
    delivery: string;
    days: string;
    per_month: string;
    contract: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    currency_note: string;
    cta_hire: string;
    cta_quote: string;
    or_custom: string;
    custom_title: string;
    custom_desc: string;
    custom_cta: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    view_project: string;
    technologies: string;
    delivered: string;
    all: string;
    websites: string;
    landing_pages: string;
    ecommerce: string;
    empty: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    company_title: string;
    company_p1: string;
    company_p2: string;
    founder_eyebrow: string;
    founder_title: string;
    founder_p1: string;
    founder_p2: string;
    founder_location: string;
    founder_status: string;
    cta_clients: string;
    cta_dev: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tab_message: string;
    tab_quote: string;
    name_label: string;
    name_placeholder: string;
    email_label: string;
    email_placeholder: string;
    phone_label: string;
    phone_placeholder: string;
    message_label: string;
    message_placeholder: string;
    company_label: string;
    company_placeholder: string;
    service_label: string;
    service_placeholder: string;
    service_landing: string;
    service_institutional: string;
    service_ecommerce: string;
    service_redesign: string;
    service_maintenance: string;
    service_other: string;
    budget_label: string;
    budget_placeholder: string;
    deadline_label: string;
    deadline_placeholder: string;
    brief_label: string;
    brief_placeholder: string;
    btn_send: string;
    btn_sending: string;
    btn_sent: string;
    btn_quote: string;
    success_title: string;
    success_msg: string;
    error_msg: string;
    info_title: string;
    info_email: string;
    info_response: string;
    info_response_value: string;
    info_whatsapp: string;
  };
  dev: {
    eyebrow: string;
    title: string;
    subtitle: string;
    available: string;
    cv_btn: string;
    contact_cta: string;
    stack_eyebrow: string;
    stack_title: string;
    projects_eyebrow: string;
    projects_title: string;
    experience_eyebrow: string;
    experience_title: string;
    education_title: string;
    languages_title: string;
    view_project: string;
    coming_soon: string;
  };
  footer: {
    tagline: string;
    services_title: string;
    company_title: string;
    contact_title: string;
    privacy: string;
    terms: string;
    rights: string;
    made_with: string;
  };
}

/* ============================================================
   PORTUGUÊS (PT-BR)
   ============================================================ */
const PT: Translations = {
  nav: {
    home: 'Início',
    clients: 'Para Clientes',
    dev: 'Para Recrutadores',
    cta: 'Solicitar Orçamento',
  },
  hero: {
    badge: 'Web Design & Desenvolvimento',
    headline_1: 'Seu site que',
    headline_2: 'converte clientes',
    subheadline: 'Criamos sites profissionais, landing pages e e-commerces que transformam visitantes em clientes. Entrega rápida, preço justo e resultado garantido.',
    cta_services: 'Ver Serviços',
    cta_quote: 'Solicitar Orçamento',
    stat_1_value: '30+',
    stat_1_label: 'Projetos entregues',
    stat_2_value: '100%',
    stat_2_label: 'Satisfação garantida',
    stat_3_value: '5 dias',
    stat_3_label: 'Prazo médio',
    scroll: 'Conheça mais',
  },
  stats: {
    projects_value: '30+',
    projects_label: 'Projetos Entregues',
    clients_value: '25+',
    clients_label: 'Clientes Satisfeitos',
    experience_value: '3+',
    experience_label: 'Anos de Experiência',
    satisfaction_value: '100%',
    satisfaction_label: 'Satisfação Garantida',
  },
  services: {
    eyebrow: 'O que fazemos',
    title: 'Serviços que fazem seu negócio crescer',
    subtitle: 'Do conceito ao lançamento. Criamos soluções digitais completas com foco em conversão e resultados reais.',
    landing_title: 'Landing Page',
    landing_desc: 'Página de alta conversão para capturar leads, divulgar um produto ou serviço específico.',
    landing_feature_1: 'Design responsivo (mobile/desktop)',
    landing_feature_2: 'SEO básico otimizado',
    landing_feature_3: 'Formulário de captura de leads',
    landing_feature_4: '1 rodada de revisão incluída',
    institutional_title: 'Site Institucional',
    institutional_desc: 'Site completo para sua empresa com até 5 páginas, blog e presença profissional na web.',
    institutional_feature_1: 'Até 5 páginas personalizadas',
    institutional_feature_2: 'Blog integrado',
    institutional_feature_3: 'SEO completo',
    institutional_feature_4: '2 rodadas de revisão',
    ecommerce_title: 'E-commerce',
    ecommerce_desc: 'Loja virtual completa com carrinho, pagamento e integração com WhatsApp para vendas.',
    ecommerce_feature_1: 'Até 50 produtos cadastrados',
    ecommerce_feature_2: 'Carrinho e checkout',
    ecommerce_feature_3: 'Integração WhatsApp',
    ecommerce_feature_4: 'Painel administrativo',
    redesign_title: 'Redesign de Site',
    redesign_desc: 'Transformamos o visual do seu site atual sem perder o conteúdo. Novo visual, mesma estrutura.',
    redesign_feature_1: 'Análise do site atual',
    redesign_feature_2: 'Nova identidade visual',
    redesign_feature_3: 'Otimização de performance',
    redesign_feature_4: '1 rodada de revisão incluída',
    maintenance_title: 'Manutenção Mensal',
    maintenance_desc: 'Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente todo mês.',
    maintenance_feature_1: 'Updates de conteúdo',
    maintenance_feature_2: 'Backup semanal',
    maintenance_feature_3: 'Suporte técnico',
    maintenance_feature_4: 'Relatório mensal',
    cta_hire: 'Contratar',
    cta_quote: 'Solicitar Orçamento',
    popular_badge: 'Mais Popular',
    delivery: 'Prazo:',
    days: 'dias úteis',
    per_month: '/mês',
    contract: 'Contrato',
  },
  pricing: {
    eyebrow: 'Preços transparentes',
    title: 'Investimento acessível, resultado profissional',
    subtitle: 'Preços fixos sem surpresas. Abaixo da média do mercado para que você possa começar sem barreiras.',
    currency_note: 'Preços em BRL. Clientes internacionais: cotação em USD disponível.',
    cta_hire: 'Contratar Agora',
    cta_quote: 'Pedir Orçamento',
    or_custom: 'Precisa de algo personalizado?',
    custom_title: 'Projeto sob medida',
    custom_desc: 'Não encontrou o que precisa? Descreva seu projeto e criamos um orçamento personalizado para você.',
    custom_cta: 'Descrever meu projeto',
  },
  portfolio: {
    eyebrow: 'Nosso trabalho',
    title: 'Projetos que fazem a diferença',
    subtitle: 'Cada projeto é construído com atenção aos detalhes, performance e foco no resultado do cliente.',
    view_project: 'Ver projeto',
    technologies: 'Tecnologias',
    delivered: 'Entregue em',
    all: 'Todos',
    websites: 'Sites',
    landing_pages: 'Landing Pages',
    ecommerce: 'E-commerce',
    empty: 'Nenhum projeto nesta categoria ainda.',
  },
  about: {
    eyebrow: 'Quem somos',
    title: 'RGO Vision',
    subtitle: 'Um estúdio digital nascido da fusão entre o olhar audiovisual e a precisão do desenvolvimento web.',
    company_title: 'A empresa',
    company_p1: 'A RGO Vision surgiu de uma trajetória que começou no audiovisual — um mercado onde aprendemos que cada detalhe visual comunica, que a estética precisa servir a um propósito e que a história de uma marca importa tanto quanto o produto em si. Esse repertório foi o que trouxemos para o desenvolvimento web.',
    company_p2: 'Hoje atuamos como estúdio de web design e desenvolvimento, entregando sites, landing pages e e-commerces que não apenas impressionam visualmente, mas que convertem visitantes em clientes reais. Trabalhamos com preços acessíveis porque acreditamos que todo negócio — independente do porte — merece uma presença digital profissional.',
    founder_eyebrow: 'O fundador',
    founder_title: 'Raul Gonçalves',
    founder_p1: 'Desenvolvedor fullstack com experiência em Angular, TypeScript, Node.js e Python, cheguei ao desenvolvimento depois de anos trabalhando com produção audiovisual. Essa transição não foi acidental — sempre me interessei pela interseção entre estética e tecnologia, entre o que funciona e o que encanta.',
    founder_p2: 'Atuo do frontend ao backend: construo interfaces responsivas e performáticas, APIs robustas e soluções completas para projetos reais. Gosto de entregar o produto do início ao fim, sem depender de terceiros para fechar o ciclo. Quando não estou codando, estou ouvindo jazz ou explorando uma nova série clássica de anime.',
    founder_location: 'São Paulo, Brasil',
    founder_status: 'Disponível para projetos',
    cta_clients: 'Ver serviços',
    cta_dev: 'Ver perfil técnico',
  },
  testimonials: {
    eyebrow: 'Depoimentos',
    title: 'O que nossos clientes dizem',
    subtitle: 'Resultados reais de negócios que confiaram na RGO Vision.',
  },
  contact: {
    eyebrow: 'Fale conosco',
    title: 'Pronto para começar?',
    subtitle: 'Mande uma mensagem ou solicite um orçamento detalhado. Respondemos em até 24h.',
    tab_message: 'Enviar mensagem',
    tab_quote: 'Solicitar orçamento',
    name_label: 'Nome completo',
    name_placeholder: 'Seu nome',
    email_label: 'E-mail',
    email_placeholder: 'seu@email.com',
    phone_label: 'WhatsApp (opcional)',
    phone_placeholder: '(11) 99999-9999',
    message_label: 'Mensagem',
    message_placeholder: 'Como podemos te ajudar?',
    company_label: 'Empresa / Projeto',
    company_placeholder: 'Nome da sua empresa ou projeto',
    service_label: 'Serviço desejado',
    service_placeholder: 'Selecione um serviço',
    service_landing: 'Landing Page — R$ 699',
    service_institutional: 'Site Institucional — R$ 1.799',
    service_ecommerce: 'E-commerce — R$ 2.999',
    service_redesign: 'Redesign — R$ 999',
    service_maintenance: 'Manutenção Mensal — R$ 399/mês',
    service_other: 'Outro / Personalizado',
    budget_label: 'Orçamento aproximado',
    budget_placeholder: 'ex: R$ 1.500',
    deadline_label: 'Prazo desejado',
    deadline_placeholder: 'ex: 2 semanas, mês de julho...',
    brief_label: 'Descreva seu projeto',
    brief_placeholder: 'Conte sobre seu negócio, o que precisa e quais referências tem em mente...',
    btn_send: 'Enviar mensagem',
    btn_sending: 'Enviando...',
    btn_sent: 'Mensagem enviada!',
    btn_quote: 'Solicitar orçamento',
    success_title: 'Mensagem recebida!',
    success_msg: 'Obrigado pelo contato. Retornaremos em até 24 horas úteis.',
    error_msg: 'Erro ao enviar. Tente novamente ou entre em contato direto pelo e-mail.',
    info_title: 'Informações de contato',
    info_email: 'E-mail',
    info_response: 'Tempo de resposta',
    info_response_value: 'Até 24 horas úteis',
    info_whatsapp: 'WhatsApp disponível para clientes',
  },
  dev: {
    eyebrow: 'Perfil técnico',
    title: 'Desenvolvedor Fullstack',
    subtitle: 'Angular · React · Node.js · Python — do frontend ao backend, entrego o produto do início ao fim.',
    available: 'Disponível para oportunidades',
    cv_btn: 'Baixar CV',
    contact_cta: 'Entrar em contato',
    stack_eyebrow: 'Minhas ferramentas',
    stack_title: 'Stack técnica',
    projects_eyebrow: 'O que construí',
    projects_title: 'Projetos',
    experience_eyebrow: 'Trajetória',
    experience_title: 'Experiência profissional',
    education_title: 'Educação',
    languages_title: 'Idiomas',
    view_project: 'Ver projeto',
    coming_soon: 'Em breve',
  },
  footer: {
    tagline: 'Transformando ideias em experiências digitais que convertem.',
    services_title: 'Serviços',
    company_title: 'Empresa',
    contact_title: 'Contato',
    privacy: 'Privacidade',
    terms: 'Termos',
    rights: '© 2025 RGO Vision. Todos os direitos reservados.',
    made_with: 'Feito com dedicação no Brasil',
  },
};

/* ============================================================
   ENGLISH (EN)
   ============================================================ */
const EN: Translations = {
  nav: {
    home: 'Home',
    clients: 'For Clients',
    dev: 'For Recruiters',
    cta: 'Get a Quote',
  },
  hero: {
    badge: 'Web Design & Development',
    headline_1: 'Your website that',
    headline_2: 'converts clients',
    subheadline: 'We build professional websites, landing pages and e-commerce stores that turn visitors into customers. Fast delivery, fair pricing and guaranteed results.',
    cta_services: 'View Services',
    cta_quote: 'Get a Quote',
    stat_1_value: '30+',
    stat_1_label: 'Projects delivered',
    stat_2_value: '100%',
    stat_2_label: 'Satisfaction guaranteed',
    stat_3_value: '5 days',
    stat_3_label: 'Average delivery',
    scroll: 'Learn more',
  },
  stats: {
    projects_value: '30+',
    projects_label: 'Projects Delivered',
    clients_value: '25+',
    clients_label: 'Happy Clients',
    experience_value: '3+',
    experience_label: 'Years of Experience',
    satisfaction_value: '100%',
    satisfaction_label: 'Satisfaction Guaranteed',
  },
  services: {
    eyebrow: 'What we do',
    title: 'Services that grow your business',
    subtitle: 'From concept to launch. We build complete digital solutions focused on conversion and real results.',
    landing_title: 'Landing Page',
    landing_desc: 'High-conversion page to capture leads, promote a product or showcase a specific service.',
    landing_feature_1: 'Responsive design (mobile/desktop)',
    landing_feature_2: 'Basic SEO optimization',
    landing_feature_3: 'Lead capture form',
    landing_feature_4: '1 revision round included',
    institutional_title: 'Business Website',
    institutional_desc: 'Complete website for your company with up to 5 pages, blog and professional web presence.',
    institutional_feature_1: 'Up to 5 custom pages',
    institutional_feature_2: 'Integrated blog',
    institutional_feature_3: 'Full SEO',
    institutional_feature_4: '2 revision rounds',
    ecommerce_title: 'E-commerce',
    ecommerce_desc: 'Complete online store with cart, payment and WhatsApp integration for sales.',
    ecommerce_feature_1: 'Up to 50 registered products',
    ecommerce_feature_2: 'Cart and checkout',
    ecommerce_feature_3: 'WhatsApp integration',
    ecommerce_feature_4: 'Admin panel',
    redesign_title: 'Website Redesign',
    redesign_desc: "We transform your current website's look without losing content. New visual, same structure.",
    redesign_feature_1: 'Current site audit',
    redesign_feature_2: 'New visual identity',
    redesign_feature_3: 'Performance optimization',
    redesign_feature_4: '1 revision round included',
    maintenance_title: 'Monthly Maintenance',
    maintenance_desc: 'Keep your website always updated, secure and running perfectly every month.',
    maintenance_feature_1: 'Content updates',
    maintenance_feature_2: 'Weekly backup',
    maintenance_feature_3: 'Technical support',
    maintenance_feature_4: 'Monthly report',
    cta_hire: 'Hire Now',
    cta_quote: 'Get a Quote',
    popular_badge: 'Most Popular',
    delivery: 'Delivery:',
    days: 'business days',
    per_month: '/month',
    contract: 'Contract',
  },
  pricing: {
    eyebrow: 'Transparent pricing',
    title: 'Affordable investment, professional results',
    subtitle: 'Fixed prices with no surprises. Below market average so you can get started without barriers.',
    currency_note: 'Prices in BRL. International clients: USD pricing available.',
    cta_hire: 'Hire Now',
    cta_quote: 'Request a Quote',
    or_custom: 'Need something custom?',
    custom_title: 'Tailor-made project',
    custom_desc: "Didn't find what you need? Describe your project and we'll create a personalized quote for you.",
    custom_cta: 'Describe my project',
  },
  portfolio: {
    eyebrow: 'Our work',
    title: 'Projects that make a difference',
    subtitle: 'Each project is built with attention to detail, performance and focus on client results.',
    view_project: 'View project',
    technologies: 'Technologies',
    delivered: 'Delivered in',
    all: 'All',
    websites: 'Websites',
    landing_pages: 'Landing Pages',
    ecommerce: 'E-commerce',
    empty: 'No projects in this category yet.',
  },
  about: {
    eyebrow: 'Who we are',
    title: 'RGO Vision',
    subtitle: 'A digital studio born from the fusion of an audiovisual eye and the precision of web development.',
    company_title: 'The studio',
    company_p1: 'RGO Vision grew out of a journey that started in audiovisual production — an industry where we learned that every visual detail communicates, that aesthetics must serve a purpose, and that a brand\'s story matters as much as its product. We brought that knowledge into web development.',
    company_p2: 'Today we operate as a web design and development studio, delivering websites, landing pages and e-commerce stores that not only impress visually but actually convert visitors into real clients. We keep our prices accessible because we believe every business — regardless of size — deserves a professional digital presence.',
    founder_eyebrow: 'The founder',
    founder_title: 'Raul Gonçalves',
    founder_p1: 'Fullstack developer with experience in Angular, TypeScript, Node.js and Python, I came to development after years working in audiovisual production. That transition was no accident — I\'ve always been drawn to the intersection of aesthetics and technology, where things work well and look great.',
    founder_p2: 'I work across the full stack: building responsive, performant interfaces, robust APIs and complete end-to-end solutions. I like owning a project from start to finish without relying on others to close the loop. When I\'m not coding, I\'m listening to jazz or catching up on a classic anime series.',
    founder_location: 'São Paulo, Brazil',
    founder_status: 'Available for projects',
    cta_clients: 'View services',
    cta_dev: 'View tech profile',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What our clients say',
    subtitle: 'Real results from businesses that trusted RGO Vision.',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Ready to get started?',
    subtitle: 'Send a message or request a detailed quote. We respond within 24 hours.',
    tab_message: 'Send message',
    tab_quote: 'Request quote',
    name_label: 'Full name',
    name_placeholder: 'Your name',
    email_label: 'Email',
    email_placeholder: 'your@email.com',
    phone_label: 'WhatsApp (optional)',
    phone_placeholder: '+1 (555) 000-0000',
    message_label: 'Message',
    message_placeholder: 'How can we help you?',
    company_label: 'Company / Project',
    company_placeholder: 'Your company or project name',
    service_label: 'Desired service',
    service_placeholder: 'Select a service',
    service_landing: 'Landing Page',
    service_institutional: 'Business Website',
    service_ecommerce: 'E-commerce',
    service_redesign: 'Website Redesign',
    service_maintenance: 'Monthly Maintenance',
    service_other: 'Other / Custom',
    budget_label: 'Approximate budget',
    budget_placeholder: 'e.g. $500',
    deadline_label: 'Desired deadline',
    deadline_placeholder: 'e.g. 2 weeks, next month...',
    brief_label: 'Describe your project',
    brief_placeholder: 'Tell us about your business, what you need and any references you have in mind...',
    btn_send: 'Send message',
    btn_sending: 'Sending...',
    btn_sent: 'Message sent!',
    btn_quote: 'Request quote',
    success_title: 'Message received!',
    success_msg: 'Thank you for reaching out. We will get back to you within 24 business hours.',
    error_msg: 'Error sending. Please try again or contact us directly by email.',
    info_title: 'Contact information',
    info_email: 'Email',
    info_response: 'Response time',
    info_response_value: 'Within 24 business hours',
    info_whatsapp: 'WhatsApp available for clients',
  },
  dev: {
    eyebrow: 'Tech profile',
    title: 'Fullstack Developer',
    subtitle: 'Angular · React · Node.js · Python — from frontend to backend, I own the product end to end.',
    available: 'Available for opportunities',
    cv_btn: 'Download CV',
    contact_cta: 'Get in touch',
    stack_eyebrow: 'My tools',
    stack_title: 'Tech stack',
    projects_eyebrow: 'What I built',
    projects_title: 'Projects',
    experience_eyebrow: 'Journey',
    experience_title: 'Professional experience',
    education_title: 'Education',
    languages_title: 'Languages',
    view_project: 'View project',
    coming_soon: 'Coming soon',
  },
  footer: {
    tagline: 'Turning ideas into digital experiences that convert.',
    services_title: 'Services',
    company_title: 'Company',
    contact_title: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    rights: '© 2025 RGO Vision. All rights reserved.',
    made_with: 'Made with dedication in Brazil',
  },
};

const TRANSLATIONS: Record<Lang, Translations> = { pt: PT, en: EN };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.getStoredLang());

  constructor() {
    // Persiste preferência e atualiza o atributo lang do HTML
    effect(() => {
      localStorage.setItem('rgo-lang', this.lang());
      document.documentElement.lang = this.lang() === 'pt' ? 'pt-BR' : 'en';
    });
  }

  toggle(): void {
    this.lang.set(this.lang() === 'pt' ? 'en' : 'pt');
  }

  t<S extends keyof Translations, K extends keyof Translations[S]>(
    section: S,
    key: K,
  ): string {
    return (TRANSLATIONS[this.lang()][section] as Record<string, string>)[key as string];
  }

  private getStoredLang(): Lang {
    const stored = localStorage.getItem('rgo-lang');
    return stored === 'en' ? 'en' : 'pt';
  }
}
