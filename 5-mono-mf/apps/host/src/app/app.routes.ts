import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'mf-one',
    // Here we can also load routes
    loadChildren: () =>
      loadRemoteModule('mf-one', './Routes').then((m) => m.appRoutes),
  },
  {
    path: 'mf-two',
    // Here we can also load routes
    loadChildren: () =>
      loadRemoteModule('mf-two', './Routes').then((r) => r.appRoutes),
  },
  {
    path: 'portal',
    // Here we can also load routes
    loadComponent: () => import('@1-mf-routes/host/core').then((m) => m.PortalComponent),
  },
  {
    path: '',
    redirectTo: 'mf-one',
    pathMatch: 'full'
  },
];
