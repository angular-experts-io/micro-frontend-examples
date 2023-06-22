import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-mf-two-wrapper',
  template: `
    <iframe src="http://localhost:4202" style="width: 100%; height: 100%; border: none;"></iframe>
  `
})
export class MfTwoWrapperComponent {}
