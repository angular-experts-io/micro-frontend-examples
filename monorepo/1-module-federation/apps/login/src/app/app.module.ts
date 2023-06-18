import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from "./app.routes";
import {HelloWorldComponent} from "./hello-world.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      ,
      {initialNavigation: 'enabledBlocking'}
    ),
    HelloWorldComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
