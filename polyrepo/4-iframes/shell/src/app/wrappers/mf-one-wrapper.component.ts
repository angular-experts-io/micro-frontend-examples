import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-mf-one-wrapper',
  template: `
    <iframe src="http://localhost:4201" style="width: 100%; height: 100%; border: none;"></iframe>
  `
})
export class MfOneWrapperComponent {}
