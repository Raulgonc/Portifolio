import { Injectable, signal } from '@angular/core';

export type Lang = 'pt' | 'en';

interface Translations {
  nav: { about: string; skills: string; projects: string; contact: string };
  hero: { tag: string; role: string; quote: string; cta_projects: string; cta_contact: string; scroll: string };
  about: { title: string; intro: string; secondary: string; status_value: string; location_value: string };
  projects: { title: string; error: string; github_link: string; repo_link: string; no_desc: string };
  skills: { title: string };
  contact: {
    title: string; lead_1: string; lead_2: string;
    name_label: string; email_label: string; msg_label: string;
    name_placeholder: string; msg_placeholder: string;
    btn_send: string; btn_sent: string; footer: string;
  };
}

const PT: Translations = {
  nav: {
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    tag: '// TRANSMISSÃO RECEBIDA',
    role: 'Desenvolvedor Frontend',
    quote: '"O que acontece, acontece."',
    cta_projects: 'Ver Projetos',
    cta_contact: 'Contato',
    scroll: 'ROLAR',
  },
  about: {
    title: 'Sobre',
    intro:
      'Desenvolvedor focado em frontend, criando interfaces modernas e funcionais. Tenho experiência com projetos consumindo APIs, aplicações interativas e layouts responsivos. Busco evoluir constantemente através de projetos práticos e desafios reais.',
    secondary:
      'Quando não estou codando, estou explorando novas tecnologias, ouvindo jazz, ou assistindo mais uma série clássica de animê.',
    status_value: 'Disponível para oportunidades',
    location_value: 'São Paulo, Brasil — Sistema Solar',
  },
  projects: {
    title: 'Projetos',
    error: 'Falha na conexão com a API do GitHub.',
    github_link: 'Ver projetos diretamente no GitHub ↗',
    repo_link: 'Ver repositório ↗',
    no_desc: 'Sem descrição.',
  },
  skills: {
    title: 'Habilidades',
  },
  contact: {
    title: 'Contato',
    lead_1: 'Pronto para embarcar num novo projeto?',
    lead_2: 'Transmita sua mensagem.',
    name_label: 'NOME',
    email_label: 'E-MAIL',
    msg_label: 'MENSAGEM',
    name_placeholder: 'Seu nome',
    msg_placeholder: 'Sua mensagem...',
    btn_send: 'Enviar Transmissão',
    btn_sent: '✓ Transmissão enviada!',
    footer: '© 2025 — Criado em algum lugar do sistema solar.',
  },
};

const EN: Translations = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    tag: '// TRANSMISSION RECEIVED',
    role: 'Frontend Developer',
    quote: '"Whatever happens, happens."',
    cta_projects: 'View Projects',
    cta_contact: 'Contact',
    scroll: 'SCROLL',
  },
  about: {
    title: 'About',
    intro:
      'Frontend-focused developer building modern, functional interfaces. I have experience with API-integrated projects, interactive applications, and responsive layouts. Constantly evolving through hands-on projects and real-world challenges.',
    secondary:
      "When I'm not coding, I'm exploring new technologies, listening to jazz, or watching another classic anime series.",
    status_value: 'Available for opportunities',
    location_value: 'São Paulo, Brazil — Solar System',
  },
  projects: {
    title: 'Projects',
    error: 'Failed to connect to the GitHub API.',
    github_link: 'View projects directly on GitHub ↗',
    repo_link: 'View repository ↗',
    no_desc: 'No description.',
  },
  skills: {
    title: 'Skills',
  },
  contact: {
    title: 'Contact',
    lead_1: 'Ready to embark on a new project?',
    lead_2: 'Transmit your message.',
    name_label: 'NAME',
    email_label: 'EMAIL',
    msg_label: 'MESSAGE',
    name_placeholder: 'Your name',
    msg_placeholder: 'Your message...',
    btn_send: 'Send Transmission',
    btn_sent: '✓ Transmission sent!',
    footer: '© 2025 — Crafted somewhere in the solar system.',
  },
};

const TRANSLATIONS: Record<Lang, Translations> = { pt: PT, en: EN };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('pt');

  toggle(): void {
    this.lang.set(this.lang() === 'pt' ? 'en' : 'pt');
  }

  t<S extends keyof Translations, K extends keyof Translations[S]>(
    section: S,
    key: K,
  ): string {
    return (TRANSLATIONS[this.lang() as Lang][section] as Record<string, string>)[key as string];
  }
}
