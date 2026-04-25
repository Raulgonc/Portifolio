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
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-15-09.png',
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-15-26.png',
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-15-57.png',
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-16-05.png',
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-16-11.png',
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-16-20.png',
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-16-28.png',
        '/Projects/Rgo_vision/Captura%20de%20tela%20de%202026-04-22%2021-16-32.png',
      ],
      url: null,
      isThisSite: true,
      year: '2025',
      typePt: 'Site Institucional + Portfólio',
      typeEn: 'Corporate Website + Portfolio',
    },
    {
      title: 'Portfolio v1',
      descPt: 'Portfólio retro-espacial inspirado em Cowboy Bebop. Integração com GitHub API, scores Lighthouse em nível de produção.',
      descEn: 'Retro-space portfolio inspired by Cowboy Bebop. GitHub API integration, production-level Lighthouse scores.',
      longDescPt: '',
      longDescEn: '',
      techs: ['Angular', 'GitHub API', 'CSS3', 'Vercel'],
      highlightsPt: [],
      highlightsEn: [],
      images: [],
      url: 'https://portifolio-two-sandy80.vercel.app',
      isThisSite: false,
      year: '2024',
      typePt: 'Portfólio Pessoal',
      typeEn: 'Personal Portfolio',
    },
    {
      title: 'Angular CRUD App',
      descPt: 'Aplicação CRUD completa com Angular 14 — components, services, roteamento e comunicação com API REST. Certificado Alura.',
      descEn: 'Full CRUD application with Angular 14 — components, services, routing and REST API communication. Alura certified.',
      longDescPt: '',
      longDescEn: '',
      techs: ['Angular 14', 'TypeScript', 'REST API'],
      highlightsPt: [],
      highlightsEn: [],
      images: [],
      url: null,
      isThisSite: false,
      year: '2024',
      typePt: 'Aplicação de Estudo',
      typeEn: 'Study Application',
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
