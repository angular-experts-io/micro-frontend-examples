import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import {LoginLoginFormModule} from "@nx-dynamic-mf/login/login-form";

@NgModule({
  declarations: [NxWelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), LoginLoginFormModule],
  providers: [],
})
export class RemoteEntryModule {}
