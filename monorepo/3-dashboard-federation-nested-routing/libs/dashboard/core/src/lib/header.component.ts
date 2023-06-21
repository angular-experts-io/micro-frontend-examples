import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <nav>
      <img src="assets/ax-logo.svg" class="logo" />
      <h1 class="text-2xl">Dashboard</h1>
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
        filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
          drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
        font-family: 'Sora', sans-serif;
        color: white;
      }

      .logo {
        height: 50px;
        width: 50px;
        margin-right: 20px;
      }
    `,
  ],
})
export class HeaderComponent {}
