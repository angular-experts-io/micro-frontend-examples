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
    path: 'portal',
    loadComponent: () => import('./wrappers/portal.component').then(c => c.PortalComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mf-one',
  }
];
