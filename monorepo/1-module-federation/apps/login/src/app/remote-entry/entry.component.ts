import { Component } from '@angular/core';
import {LoginLoginFormModule} from "@nx-dynamic-mf/login/login-form";

@Component({
  standalone: true,
  imports: [LoginLoginFormModule],
  selector: 'nx-dynamic-mf-login-entry',
  template: `<nx-dynamic-mf-login-form></nx-dynamic-mf-login-form>`,
})
export class RemoteEntryComponent {}
