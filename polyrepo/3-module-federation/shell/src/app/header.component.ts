import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav>
      <a routerLinkActive="active" routerLink="/home">Home</a>
      <a routerLinkActive="active" routerLink="/mf-one">MF one</a>
      <a routerLinkActive="active" routerLink="/mf-two">MF two</a>
    </nav>
  `,
  styles: [`
    nav {
      display: flex;
      align-items: center;
      padding: 20px;
      height: 60px;
      background-color: #145af4;

      a {
        color: white;
        text-decoration: none;
        margin-right: 20px;
        font-size: 1.5rem;

        &.active {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  `],
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class HeaderComponent {}
