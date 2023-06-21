import { Component } from '@angular/core';
import {StocksGreetingComponent} from "@2-dashboard-federation/stocks/greeting";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'hello',
  template: `
    <h1>Hello I am routed!</h1>
  `
})
export class HelloComponent {}

@Component({
  standalone: true,
  selector: 'stocks-stocks-entry',
  template: `
    <stocks-greet-stocks-greeting/>
    <button routerLink="./hello">Route</button>
    <router-outlet/>
  `,
  imports: [
    StocksGreetingComponent,
    RouterOutlet,
    RouterLink
  ]
})
export class RemoteEntryComponent {}
