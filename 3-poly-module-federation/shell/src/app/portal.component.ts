import {Component} from "@angular/core";
import {MfLoaderComponent} from "./core/mf-loader.component";

@Component({
  standalone: true,
  selector: 'dashboard',
  template: `
    <div class="grid">
      <div class="card">
        <mf-loader remoteModuleName="mfe1"></mf-loader>
      </div>
      <div class="card">
        <mf-loader remoteModuleName="mfe2"></mf-loader>
      </div>
    </div>
  `,
  imports: [
    MfLoaderComponent
  ],
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
export class PortalComponent {
}
