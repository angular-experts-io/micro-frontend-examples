import { Routes } from '@angular/router';
import { MfOneWrapperComponent } from './wrappers/mf-one-wrapper.component';
import {MfTwoWrapperComponent} from "./wrappers/mf-two-wrapper.component";
import {PortalWrapperComponent} from "./wrappers/portal-wrapper.component";

export const routes: Routes = [
  {
    path: 'mf-one',
    component: MfOneWrapperComponent,
  },
  {
    path: 'mf-two',
    component: MfTwoWrapperComponent
  },
  {
    path: 'portal',
    component: PortalWrapperComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mf-one',
  }
];
