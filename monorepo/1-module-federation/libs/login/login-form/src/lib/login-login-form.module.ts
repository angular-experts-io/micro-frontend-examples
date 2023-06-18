import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginLoginFormModule {}
