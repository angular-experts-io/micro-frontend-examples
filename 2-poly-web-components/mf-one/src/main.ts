import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";

import {NgZone} from "@angular/core";
import {AppComponent} from "./app/app.component";

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const webComp = createCustomElement(AppComponent, {
    injector: app.injector,
  });
  customElements.define('mf-one-greeting', webComp);

  app.injector.get(NgZone).run(() => {
    app.bootstrap(AppComponent);
  });
})();


