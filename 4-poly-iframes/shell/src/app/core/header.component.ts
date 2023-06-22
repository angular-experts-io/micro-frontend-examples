import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav>
      <img src="assets/ax-logo.svg" class="logo" />
      <a routerLinkActive="active" routerLink="mf-one">Microfrontend one</a>
      <a routerLinkActive="active" routerLink="mf-two">Microfrontend two</a>
      <a routerLinkActive="active" routerLink="portal">Portal</a>
    </nav>
  `,
  imports: [RouterLinkActive, RouterLink],
  styles: [
    `
      nav {
        display: flex;
        align-items: center;
        padding: 20px;
        height: 60px;
        background: rgb(40, 82, 200);
        filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
          drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));

        .logo {
          height: 50px;
          width: 50px;
          margin-right: 20px;
        }

        a {
          margin-right: 20px;
          font-size: 1.5rem;
          color: white;
          text-decoration: none;

          &.active {
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }
    `,
  ],
})
export class HeaderComponent {}
