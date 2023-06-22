import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'portal-wrapper',
  template: `
    <div class="grid">
      <div class="card">
        <iframe src="http://localhost:4202" style="width: 100%; height: 100%; border: none;"></iframe>
      </div>
      <div class="card">
        <iframe src="http://localhost:4201" style="width: 100%; height: 100%; border: none;"></iframe>
      </div>
    </div>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 40px;
    }

    .card {
      padding: 20px;
      background-color: white;
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
      border-radius: 20px;
    }
  `]
})
export class PortalWrapperComponent {
}
