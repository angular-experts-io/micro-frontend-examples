import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {LazyElementsModule} from "@angular-extensions/elements";

@Component({
  standalone: true,
  selector: 'wrapper-mf-one',
  template: `
    <mf-one-greeting *axLazyElement="elementUrl"></mf-one-greeting>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule
  ],
})
export class WrapperMfOneComponent {
  elementUrl = 'http://localhost:4201/main.js';
}
