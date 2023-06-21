import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'mf-two',
    loadChildren: () =>
      loadRemoteModule('mf-two', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mf-one',
    loadChildren: () =>
      loadRemoteModule('mf-one', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    redirectTo: 'mf-one',
    pathMatch: 'full'
  },
];
