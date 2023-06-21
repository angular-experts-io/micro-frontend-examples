import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";

import {GreetingComponent} from "./app/greeting.component";
import {NgZone} from "@angular/core";
import {AppComponent} from "./app/app.component";

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const greeting = createCustomElement(GreetingComponent, {
    injector: app.injector,
  });
  customElements.define('mf-one-greeting', greeting);

  app.injector.get(NgZone).run(() => {
    app.bootstrap(AppComponent);
  });
})();


