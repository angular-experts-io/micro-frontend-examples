import { Route } from '@angular/router';

import {RemoteEntryComponent} from "./remote-entry/entry.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent
  },
];
