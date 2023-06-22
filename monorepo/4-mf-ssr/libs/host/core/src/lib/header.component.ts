import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav>
      <img src="assets/ax-logo.svg" class="logo"/>
      <a routerLinkActive="active" routerLink="mf-one">Microfrontent one</a>
      <a routerLinkActive="active" routerLink="mf-two">Microfrontent two</a>
      <a routerLinkActive="active" routerLink="portal">Portal</a>
    </nav>
  `,
  styles: [
    `
      nav {
        display: flex;
        align-items: center;
        padding: 20px;
        height: 60px;
        background: rgb(40, 82, 200);
        filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
        font-family: 'Sora', sans-serif;
        color: white;
      }

      .logo {
        height: 50px;
        width: 50px;
        margin-right: 20px;
      }

      a {
        margin-right: 20px;
      }

      a.active{
        font-weight: bold;
        text-decoration: underline;
      }
    `,
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterLinkActive
  ]
})
export class HeaderComponent {}
