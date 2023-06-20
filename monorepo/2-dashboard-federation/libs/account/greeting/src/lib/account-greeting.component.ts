import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ac-greeting-account-greeting',
  standalone: true,
  imports: [CommonModule],
  template: `<p>account-greeting works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountGreetingComponent {}
