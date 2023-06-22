import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'mf-one',
    loadComponent: () => import('./wrappers/wrapper-mf-one.component').then(c => c.WrapperMfOneComponent),
  },
  {
    path: 'mf-two',
    loadComponent: () => import('./wrappers/wrapper-mf-two.component').then(c => c.WrapperMfTwoComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./wrappers/wrapper-dashboard.component').then(c => c.WrapperDashboardComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mf-one',
  }
];
