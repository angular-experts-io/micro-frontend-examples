import { Route } from '@angular/router';
import {loadRemoteModule} from "@nx/angular/mf";

export const appRoutes: Route[] = [
  {
    path: 'test',
    outlet: 'mf',
    loadChildren: () =>
      loadRemoteModule('stocks', './Component').then(
        (m) => m.appRoutes
      ),
  },
  {
    path: 'test',
    outlet: 'two',
    loadChildren: () =>
      loadRemoteModule('stocks', './Component').then(
        (m) => m.appRoutes
      ),
  },
];
