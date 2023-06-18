import {ApplicationRef, DoBootstrap, inject, Injector, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HelloComponent} from "./hello.component";
import {createCustomElement} from "@angular/elements";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [CommonModule, RouterOutlet, HelloComponent, BrowserModule],
  declarations: [AppComponent],
})
export class AppModule implements DoBootstrap {

  private injector = inject(Injector);

  ngDoBootstrap(appRef: ApplicationRef): void {
    const element = createCustomElement(HelloComponent, {injector: this.injector});
    customElements.define('mf-one-hello', element);
  }
}
