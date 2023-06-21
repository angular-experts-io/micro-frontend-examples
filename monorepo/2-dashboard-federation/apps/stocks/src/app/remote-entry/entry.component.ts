import { Component } from '@angular/core';
import {StocksGreetingComponent} from "@2-dashboard-federation/stocks/greeting";

@Component({
  standalone: true,
  selector: 'stocks-stocks-entry',
  template: `
    <stocks-greet-stocks-greeting/>
  `,
  imports: [
    StocksGreetingComponent
  ]
})
export class RemoteEntryComponent {}
