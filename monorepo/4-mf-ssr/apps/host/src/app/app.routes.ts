import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mf-two',
    loadChildren: () =>
      import('mf-two/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mf-one',
    loadChildren: () =>
      import('mf-one/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
