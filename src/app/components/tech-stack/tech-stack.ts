import { Component } from '@angular/core';

interface Tech {
  name: string;
  version: string;
  role: string;
  detail: string;
  icon: string;
}

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {
  techs: Tech[] = [
    {
      name: 'Angular',
      version: 'v19',
      role: 'Framework principal',
      detail: 'Standalone Components, Signals, controle de fluxo com @for e @if — sem NgModules.',
      icon: 'A',
    },
    {
      name: 'TypeScript',
      version: '5.x',
      role: 'Linguagem',
      detail: 'Tipagem estática em todo o projeto — interfaces, generics e type safety completo.',
      icon: 'TS',
    },
    {
      name: 'SCSS',
      version: 'CSS3',
      role: 'Estilização',
      detail: 'Design system com variáveis CSS nativas, animações keyframe e efeitos de scanline.',
      icon: '#',
    },
    {
      name: 'Angular Router',
      version: 'v19',
      role: 'Roteamento',
      detail: 'Lazy loading da página Home — o bundle só é baixado quando a rota é acessada.',
      icon: '⇄',
    },
    {
      name: 'HttpClient',
      version: 'v19',
      role: 'API REST',
      detail: 'Integração com a API pública do GitHub para buscar repositórios em tempo real.',
      icon: '↯',
    },
    {
      name: 'Canvas API',
      version: 'HTML5',
      role: 'Animação',
      detail: 'Starfield animado no Hero via requestAnimationFrame — 180 estrelas em loop contínuo.',
      icon: '✦',
    },
    {
      name: 'Google Fonts',
      version: '—',
      role: 'Tipografia',
      detail: 'Orbitron para títulos, Space Mono para texto e código — identidade retro-espacial.',
      icon: 'Aa',
    },
    {
      name: 'Angular Forms',
      version: 'v19',
      role: 'Formulário',
      detail: 'Template-driven forms com ngModel, validação nativa e feedback visual no envio.',
      icon: '✉',
    },
  ];
}
