import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LazyElementsModule } from '@angular-extensions/elements';
import { HeaderComponent } from './core/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LazyElementsModule, HeaderComponent],
  template: `
      <app-header/>
      <div style="padding: 20px">
          <p>Microfrontends using web components and Angular elements</p>
          <router-outlet/>
      </div>
  `
})
export class AppComponent {
}
