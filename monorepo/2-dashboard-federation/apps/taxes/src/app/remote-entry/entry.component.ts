import { Component } from '@angular/core';
import {TaxesGreetingComponent} from "@2-dashboard-federation/taxes/greeting";

@Component({
  standalone: true,
  selector: 'taxes-taxes-entry',
  template: `
    <tax-greet-taxes-greeting/>`,
  imports: [
    TaxesGreetingComponent
  ]
})
export class RemoteEntryComponent {}
