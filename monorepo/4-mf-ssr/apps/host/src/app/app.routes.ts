import {NxWelcomeComponent} from './nx-welcome.component';
import {Route} from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";

export const appRoutes: Route[] = [
  {
    path: 'mf-one',
    loadChildren: () =>
      loadRemoteModule('mf-one', './Routes').then((r) => r.appRoutes),
  },
  {
    path: 'mf-two',
    loadChildren: () =>
      loadRemoteModule('mf-two', './Routes').then((r) => r.appRoutes),
  },
  {
    path: 'portal',
    loadComponent: () => import('@4-mf-ssr/host/core').then((c) => c.PortalComponent),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
