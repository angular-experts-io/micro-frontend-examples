import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {appRoutes} from "./app.routes";
import {RemoteEntryComponent} from "./remote-entry/entry.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { initialNavigation: 'enabledBlocking' }
    ),
    RemoteEntryComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
