import { Component } from '@angular/core';
import {AccountGreetingComponent} from "@2-dashboard-federation/account/greeting";

@Component({
  standalone: true,
  selector: 'account-account-entry',
  template: `
    <ac-greeting-account-greeting/>`,
  imports: [
    AccountGreetingComponent
  ]
})
export class RemoteEntryComponent {}
