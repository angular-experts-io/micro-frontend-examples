import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {LazyElementsModule} from "@angular-extensions/elements";

@Component({
  standalone: true,
  selector: 'portal',
  template: `
    <div class="grid">
      <div class="card">
        <mf-one-greeting *axLazyElement="mfOneURL"></mf-one-greeting>
      </div>
      <div class="card">
        <mf-two-greeting *axLazyElement="mfTwoURL"></mf-two-greeting>
      </div>
    </div>
  `,
  imports: [
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
    }

    .card {
      padding: 20px;
      background-color: white;
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
      border-radius: 20px;
    }
  `]
})
export class PortalComponent {
  mfOneURL = 'http://localhost:4201/main.js';
  mfTwoURL = 'http://localhost:4202/main.js';
}
