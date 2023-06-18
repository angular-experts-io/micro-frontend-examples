import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LazyElementsModule} from "@angular-extensions/elements";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LazyElementsModule],
  template: `
      <mf-one-hello *axLazyElement="elementUrl"></mf-one-hello>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  elementUrl = 'http://localhost:4201/main.js';

}
