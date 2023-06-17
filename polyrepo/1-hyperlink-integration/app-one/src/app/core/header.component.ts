import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav>
      <a class="active" routerLink="/">App One</a>
      <a href="http://localhost:4202">App two</a>
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
  `]
})
export class HeaderComponent {}
