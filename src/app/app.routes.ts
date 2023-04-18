import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full',
  },
  {
    path: 'folder/home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/informedados',
    redirectTo: 'informedados',
    pathMatch: 'full',
  },
  {
    path: 'folder/loginusuario',
    redirectTo: 'loginusuario',
    pathMatch: 'full',
  },
  {
    path: 'folder/badges',
    redirectTo: 'badges',
    pathMatch: 'full',
  },
  {
    path: 'folder/boasvindas',
    redirectTo: 'boasvindas',
    pathMatch: 'full',
  },
  {
    path: 'loginusuario',
    loadComponent: () => import('./loginusuario/loginusuario.page').then( m => m.LoginusuarioPage)
  },
  {
    path: 'boasvindas',
    loadComponent: () => import('./boasvindas/boasvindas.page').then( m => m.BoasvindasPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'informedados',
    loadComponent: () => import('./informedados/informedados.page').then( m => m.InformedadosPage)
  },

  {
    path: 'badges',
    loadComponent: () => import('./badges/badges.page').then( m => m.BadgesPage)
  },

];
