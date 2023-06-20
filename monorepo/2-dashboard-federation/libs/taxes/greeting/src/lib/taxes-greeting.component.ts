import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tax-greet-taxes-greeting',
  standalone: true,
  imports: [CommonModule],
  template: `<p>taxes-greeting works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxesGreetingComponent {}
