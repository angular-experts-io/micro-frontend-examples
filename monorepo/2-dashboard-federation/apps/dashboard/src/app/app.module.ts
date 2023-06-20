import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {HeaderComponent} from "./core/header.component";
import {MfLoaderComponent} from "@2-dashboard-federation/dashboard/core";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    HeaderComponent,
    MfLoaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
