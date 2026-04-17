import { Component, inject } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-dev-page',
  imports: [Navbar],
  templateUrl: './dev.html',
  styleUrl: './dev.scss',
})
export class DevPage {
  readonly translate = inject(LanguageService);

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

  readonly projects = [
    {
      title: 'RGO Vision',
      descPt: 'Este site — portfólio e site de negócio construído do zero em Angular 21. Design system completo, i18n PT/EN, animação tsParticles.',
      descEn: 'This site — portfolio and business site built from scratch in Angular 21. Full design system, PT/EN i18n, tsParticles animation.',
      techs: ['Angular 21', 'TypeScript', 'SCSS', 'tsParticles'],
      url: null,
      isThisSite: true,
    },
    {
      title: 'Portfolio v1',
      descPt: 'Portfólio retro-espacial inspirado em Cowboy Bebop. Integração com GitHub API, scores Lighthouse em nível de produção.',
      descEn: 'Retro-space portfolio inspired by Cowboy Bebop. GitHub API integration, production-level Lighthouse scores.',
      techs: ['Angular', 'GitHub API', 'CSS3', 'Vercel'],
      url: 'https://portifolio-two-sandy80.vercel.app',
      isThisSite: false,
    },
    {
      title: 'Angular CRUD App',
      descPt: 'Aplicação CRUD completa com Angular 14 — components, services, roteamento e comunicação com API REST. Certificado Alura.',
      descEn: 'Full CRUD application with Angular 14 — components, services, routing and REST API communication. Alura certified.',
      techs: ['Angular 14', 'TypeScript', 'REST API'],
      url: null,
      isThisSite: false,
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
