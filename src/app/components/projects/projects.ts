import { Component } from '@angular/core';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  status: 'live' | 'wip' | 'archived';
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      id: '001',
      title: 'Projeto Alpha',
      description: 'Aplicação web full stack com autenticação, dashboard e API REST. Construída com Angular + Node.js.',
      tags: ['Angular', 'Node.js', 'PostgreSQL'],
      status: 'live',
    },
    {
      id: '002',
      title: 'Projeto Beta',
      description: 'Sistema de gerenciamento com painel administrativo, relatórios e integração com APIs externas.',
      tags: ['TypeScript', 'Python', 'Docker'],
      status: 'wip',
    },
    {
      id: '003',
      title: 'Projeto Gamma',
      description: 'Interface responsiva e acessível com foco em performance e experiência do usuário.',
      tags: ['HTML', 'SCSS', 'JavaScript'],
      status: 'live',
    },
  ];
}
