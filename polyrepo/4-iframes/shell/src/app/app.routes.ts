import { Routes } from '@angular/router';
import { MfOneWrapperComponent } from './mf-one-wrapper.component';
import {MfTwoWrapperComponent} from "./mf-two-wrapper.component";

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
    path: '',
    pathMatch: 'full',
    redirectTo: 'mf-one',
  }
];
