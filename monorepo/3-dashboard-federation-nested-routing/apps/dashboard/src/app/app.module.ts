import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HeaderComponent, MfLoaderComponent} from "@2-dashboard-federation/dashboard/core";
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
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
