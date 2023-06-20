import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stocks-greet-stocks-greeting',
  standalone: true,
  imports: [CommonModule],
  template: `<p>stocks-greeting works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksGreetingComponent {}
