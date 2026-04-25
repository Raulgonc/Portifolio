import { Component, HostListener, inject, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { LanguageService } from '../../services/language.service';

interface Project {
  title: string;
  descPt: string;
  descEn: string;
  longDescPt: string;
  longDescEn: string;
  techs: string[];
  highlightsPt: string[];
  highlightsEn: string[];
  images: string[];
  url: string | null;
  githubUrl: string | null;
  isThisSite: boolean;
  year: string;
  typePt: string;
  typeEn: string;
}

@Component({
  selector: 'app-dev-page',
  imports: [Navbar],
  templateUrl: './dev.html',
  styleUrl: './dev.scss',
})
export class DevPage {
  readonly translate = inject(LanguageService);

  selectedProject = signal<Project | null>(null);
  selectedImageIndex = signal(0);

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selectedProject()) this.closeProject();
  }

  openProject(proj: Project) {
    this.selectedProject.set(proj);
    this.selectedImageIndex.set(0);
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }

  prevImage() {
    const proj = this.selectedProject();
    if (!proj?.images.length) return;
    this.selectedImageIndex.update(i => (i - 1 + proj.images.length) % proj.images.length);
  }

  nextImage() {
    const proj = this.selectedProject();
    if (!proj?.images.length) return;
    this.selectedImageIndex.update(i => (i + 1) % proj.images.length);
  }

  setImageIndex(i: number) {
    this.selectedImageIndex.set(i);
  }

  readonly stack = [
    {
      category: 'Frontend',
      soon: false,
      techs: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS'],
    },
    {
      category: 'Backend',
      soon: false,
      techs: ['Node.js', 'Express', 'Python', 'REST APIs'],
    },
    {
      category: 'Ferramentas',
      soon: false,
      techs: ['Git', 'GitHub', 'Figma', 'Vercel', 'VS Code'],
    },
    {
      category: 'Mobile',
      soon: true,
      techs: ['React Native'],
    },
  ];

  readonly projects: Project[] = [
    {
      title: 'RGO Vision',
      descPt: 'Site institucional e portfólio fullstack construído do zero em Angular 21. Design system completo, i18n PT/EN e animação tsParticles.',
      descEn: 'Corporate website and fullstack portfolio built from scratch in Angular 21. Full design system, PT/EN i18n and tsParticles animation.',
      longDescPt:
        'RGO Vision é um site institucional e portfólio fullstack desenvolvido do zero em Angular 21. O projeto atende dois públicos distintos: clientes em busca de serviços digitais, por meio de uma landing page com tema claro e partículas animadas; e recrutadores que avaliam o perfil técnico, com uma área Dev de tema escuro e conteúdo aprofundado.\n\nO design system proprietário usa CSS custom properties com tipografia fluida (clamp), paleta de cores em laranja e tokens de espaçamento consistentes em toda a interface. O sistema de internacionalização PT/EN foi construído sem dependências externas — um serviço Angular puro com suporte a chaves aninhadas. O formulário de contato integra EmailJS para envio sem back-end próprio, e o deploy acontece via Vercel com CI/CD automático pelo GitHub.',
      longDescEn:
        'RGO Vision is a corporate website and fullstack portfolio built from scratch in Angular 21. The project serves two distinct audiences: clients looking for digital services, through a light-themed landing page with animated particles; and recruiters evaluating the technical profile, through a dark-themed Dev area with in-depth content.\n\nThe proprietary design system uses CSS custom properties with fluid typography (clamp), an orange color palette and consistent spacing tokens throughout the interface. The PT/EN i18n system was built without external dependencies — a pure Angular service with nested key support. The contact form integrates EmailJS for sending without a dedicated backend, and deployment happens via Vercel with automatic CI/CD from GitHub.',
      techs: ['Angular 21', 'TypeScript', 'SCSS', 'tsParticles', 'EmailJS', 'Vercel'],
      highlightsPt: [
        'Dual-audience: landing page para clientes (tema claro) e área Dev para recrutadores (tema escuro)',
        'Design system proprietário com CSS custom properties, tipografia fluida e tokens de cor',
        'Internacionalização PT/EN sem bibliotecas externas — serviço Angular puro com chaves aninhadas',
        'Animação tsParticles no hero — responsiva e configurável por tema',
        'Formulário de contato integrado ao EmailJS sem back-end próprio',
        'Timeline de experiência, stack técnica e seções de educação e idiomas',
        'Deploy via Vercel com CI/CD automático pelo GitHub',
      ],
      highlightsEn: [
        'Dual-audience: client landing page (light theme) and Dev area for recruiters (dark theme)',
        'Proprietary design system with CSS custom properties, fluid typography and color tokens',
        'PT/EN i18n without external libraries — pure Angular service with nested key support',
        'tsParticles hero animation — responsive and theme-configurable',
        'Contact form integrated with EmailJS — no dedicated backend',
        'Experience timeline, tech stack and education & languages sections',
        'Vercel deployment with automatic CI/CD from GitHub',
      ],
      images: [
        '/Projects/Rgo_vision/01-home.png',
        '/Projects/Rgo_vision/02-clientes.png',
        '/Projects/Rgo_vision/03-dev-hero.png',
        '/Projects/Rgo_vision/04-dev-sobre.png',
        '/Projects/Rgo_vision/05-dev-stack.png',
        '/Projects/Rgo_vision/06-dev-experiencia.png',
        '/Projects/Rgo_vision/07-dev-experiencia-2.png',
        '/Projects/Rgo_vision/08-dev-educacao.png',
      ],
      url: null,
      githubUrl: null,
      isThisSite: true,
      year: '2025',
      typePt: 'Site Institucional + Portfólio',
      typeEn: 'Corporate Website + Portfolio',
    },
    {
      title: 'Entre Luz e Sombra',
      descPt: 'Site profissional para psicóloga clínica especializada em Psicologia Analítica Junguiana. Paleta rosa bebê e verde água, SEO técnico completo e integração WhatsApp.',
      descEn: 'Professional website for a clinical psychologist specializing in Jungian Psychology. Baby-pink and seafoam palette, full technical SEO and WhatsApp integration.',
      longDescPt:
        'Entre Luz e Sombra é o site profissional da psicóloga clínica Fernanda Letícia (CRP 06/178740), especializada em Psicologia Analítica Junguiana. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, o projeto entrega uma presença digital elegante e acolhedora — com paleta rosa bebê e verde água escolhidas para transmitir equilíbrio e leveza.\n\nO projeto inclui SEO técnico completo (meta tags, Open Graph, Twitter Card, canonical URL e sitemap.xml), integração direta com WhatsApp para agendamento de consultas e animações de scroll suaves sem uso de frameworks. Um blog integrado permite publicação de conteúdo sobre Psicologia Junguiana, e o site atende tanto o atendimento presencial em Tatuapé, São Paulo, quanto consultas online.',
      longDescEn:
        'Entre Luz e Sombra is the professional website for clinical psychologist Fernanda Letícia (CRP 06/178740), specialized in Jungian Analytical Psychology. Built with HTML5, CSS3 and vanilla JavaScript, the project delivers an elegant and welcoming digital presence — with a baby-pink and seafoam-green palette chosen to convey balance and warmth.\n\nThe project includes full technical SEO (meta tags, Open Graph, Twitter Card, canonical URL and sitemap.xml), direct WhatsApp integration for appointment scheduling and smooth scroll animations without any framework. An integrated blog allows content publishing about Jungian Psychology, and the site supports both in-person sessions in Tatuapé, São Paulo and online consultations.',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'WhatsApp API'],
      images: [
        '/Projects/EntreLuzeSombra/01-home.png',
        '/Projects/EntreLuzeSombra/02-sobre.png',
        '/Projects/EntreLuzeSombra/03-avaliacoes.png',
        '/Projects/EntreLuzeSombra/04-blog.png',
        '/Projects/EntreLuzeSombra/05-blog-artigo.png',
      ],
      highlightsPt: [
        'Projeto real para cliente — psicóloga Fernanda Letícia, CRP 06/178740',
        'Paleta rosa bebê e verde água, tipografia elegante e layout totalmente responsivo',
        'SEO técnico completo: meta tags, Open Graph, Twitter Card, canonical URL e sitemap.xml',
        'Integração direta com WhatsApp para agendamento de consultas',
        'Animações de scroll suaves com JavaScript vanilla — sem frameworks',
        'Blog integrado para publicação de conteúdo sobre Psicologia Junguiana',
        'Atendimento presencial Tatuapé (SP) + modalidade online cobertos no site',
      ],
      highlightsEn: [
        'Real client project — psychologist Fernanda Letícia, CRP 06/178740',
        'Baby-pink and seafoam-green palette, elegant typography and fully responsive layout',
        'Full technical SEO: meta tags, Open Graph, Twitter Card, canonical URL and sitemap.xml',
        'Direct WhatsApp integration for appointment scheduling',
        'Smooth scroll animations with vanilla JavaScript — no frameworks',
        'Integrated blog for content about Jungian Psychology',
        'In-person Tatuapé (SP) + online modality both covered on the site',
      ],
      url: 'https://entreluzesombra.com.br/',
      githubUrl: 'https://github.com/Raulgonc/ProjetoPsico',
      isThisSite: false,
      year: '2026',
      typePt: 'Site Profissional — Cliente',
      typeEn: 'Professional Website — Client',
    },
    {
      title: 'Project Management API',
      descPt: 'API REST de gerenciamento financeiro e de produtos com Node.js, TypeScript, Prisma e PostgreSQL. Arquitetura em camadas, Zod e Swagger.',
      descEn: 'Financial & product management REST API with Node.js, TypeScript, Prisma and PostgreSQL. Layered architecture, Zod validation and Swagger docs.',
      longDescPt:
        'API REST completa de gerenciamento financeiro e de produtos, desenvolvida com Node.js, TypeScript, Express e Prisma ORM. O projeto segue arquitetura em camadas — controllers, services, routes, validators e middleware — com separação clara de responsabilidades e código altamente organizado.\n\nValidação de dados robusta com Zod em todas as entradas, documentação interativa gerada automaticamente com Swagger UI, e banco de dados PostgreSQL gerenciado pelo Prisma com migrations versionadas. TypeScript estrito em todo o projeto garante tipagem completa das entidades e respostas da API.',
      longDescEn:
        'Full REST API for financial and product management, built with Node.js, TypeScript, Express and Prisma ORM. The project follows a layered architecture — controllers, services, routes, validators and middleware — with clear separation of concerns and a highly organized codebase.\n\nRobust data validation with Zod on all inputs, automatically generated interactive documentation with Swagger UI, and a PostgreSQL database managed by Prisma with versioned migrations. Strict TypeScript throughout the project ensures full typing of entities and API responses.',
      techs: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Zod', 'Swagger'],
      highlightsPt: [
        'Arquitetura em camadas: controllers, services, routes, validators e middleware',
        'Validação de dados robusta com Zod em todas as entradas da API',
        'Documentação interativa gerada automaticamente via Swagger UI',
        'PostgreSQL gerenciado pelo Prisma ORM com migrations versionadas',
        'TypeScript estrito em todo o projeto — tipagem completa das entidades',
        'Middleware centralizado para autenticação e tratamento de erros',
        'Configuração por variáveis de ambiente com .env.example incluso',
      ],
      highlightsEn: [
        'Layered architecture: controllers, services, routes, validators and middleware',
        'Robust data validation with Zod on all API inputs',
        'Automatically generated interactive documentation with Swagger UI',
        'PostgreSQL managed by Prisma ORM with versioned migrations',
        'Strict TypeScript throughout — full entity typing',
        'Centralized middleware for authentication and error handling',
        'Environment-variable config with .env.example included',
      ],
      images: [],
      url: null,
      githubUrl: 'https://github.com/Raulgonc/Project-Management',
      isThisSite: false,
      year: '2026',
      typePt: 'API REST — Backend',
      typeEn: 'REST API — Backend',
    },
  ];

  readonly experience = [
    {
      rolePt: 'Desenvolvedor Fullstack Freelance',
      roleEn: 'Freelance Fullstack Developer',
      company: 'RGO Vision',
      period: '2024 – atual',
      periodEn: '2024 – present',
      bulletsPt: [
        'Desenvolvimento de sites, landing pages e e-commerces para clientes',
        'Stack Angular, React, Node.js, Python',
      ],
      bulletsEn: [
        'Building websites, landing pages and e-commerce stores for clients',
        'Angular, React, Node.js, Python stack',
      ],
    },
    {
      rolePt: 'Estagiário de Audiovisual',
      roleEn: 'Audiovisual Intern',
      company: 'Editora Rideel',
      period: '2024',
      periodEn: '2024',
      bulletsPt: [
        'Produção e edição de conteúdos audiovisuais com foco em qualidade visual',
        'Colaboração com equipes criativas em projetos de comunicação',
      ],
      bulletsEn: [
        'Production and editing of audiovisual content focused on visual quality',
        'Collaboration with creative teams on communication projects',
      ],
    },
    {
      rolePt: 'Estagiário de Fotografia',
      roleEn: 'Photography Intern',
      company: 'UBlink',
      period: '2024',
      periodEn: '2024',
      bulletsPt: [
        'Apoio em produções fotográficas e tratamento de imagens',
      ],
      bulletsEn: [
        'Support in photo shoots and image post-processing',
      ],
    },
    {
      rolePt: 'Plantonista de Atendimento',
      roleEn: 'Customer Support Agent',
      company: 'Qnax / Wixnet',
      period: '2022 – 2023',
      periodEn: '2022 – 2023',
      bulletsPt: [
        'Atendimento e suporte a clientes com comunicação clara e resolução de problemas',
      ],
      bulletsEn: [
        'Customer support with clear communication and problem resolution',
      ],
    },
  ];

  readonly languages = [
    { name: 'Português', nameEn: 'Portuguese', level: 'Nativo', levelEn: 'Native' },
    { name: 'Inglês', nameEn: 'English', level: 'Avançado', levelEn: 'Advanced' },
    { name: 'Chinês', nameEn: 'Chinese', level: 'Básico', levelEn: 'Basic' },
  ];

  get isPt(): boolean {
    return this.translate.lang() === 'pt';
  }
}
