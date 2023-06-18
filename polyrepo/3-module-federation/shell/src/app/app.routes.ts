import {Route} from "@angular/router";
import {HomeComponent} from "./home.component";

export const appRoutes: Route[] = [
  {
    path: 'mf-one',
    loadComponent: () => import('mfe1/Component').then((c) => c.AppComponent),
  },
  {
    path: 'mf-two',
    loadComponent: () => import('mfe2/Component').then((c) => c.AppComponent),
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
