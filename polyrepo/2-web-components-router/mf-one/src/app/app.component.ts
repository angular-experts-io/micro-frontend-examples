import {Component} from '@angular/core';
import {GreetingComponent} from "./greeting.component";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <app-greeting></app-greeting>
  `,
  imports: [GreetingComponent]
})
export class AppComponent {
}
