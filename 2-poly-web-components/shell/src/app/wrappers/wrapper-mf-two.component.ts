import {Component, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {LazyElementsModule} from "@angular-extensions/elements";

@Component({
  standalone: true,
  selector: 'wrapper-mf-one',
  template: `
    <mf-two-greeting *axLazyElement="elementUrl"></mf-two-greeting>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule
  ],
})
export class WrapperMfTwoComponent {
  elementUrl = 'http://localhost:4202/main.js';
}
