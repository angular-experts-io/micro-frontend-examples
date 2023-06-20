import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dmf-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="h-12 bg-blue-800 p-4 flex items-center text-white">
      <h1>Dashboard</h1>
    </nav>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
