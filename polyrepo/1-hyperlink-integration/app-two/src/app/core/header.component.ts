import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav>
      <a href="http://localhost:4201">App One</a>
      <a class="active"  routerLink="/">App two</a>
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
  `]
})
export class HeaderComponent {}
