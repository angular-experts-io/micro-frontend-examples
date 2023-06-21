import { Route } from '@angular/router';
import {HelloComponent, RemoteEntryComponent} from "./remote-entry/entry.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      { path: 'hello', component: HelloComponent }
    ]
  },
];
