import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'clientes',
    loadComponent: () => import('./pages/clientes/clientes').then(m => m.ClientesPage),
  },
  {
    path: 'dev',
    loadComponent: () => import('./pages/dev/dev').then(m => m.DevPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
