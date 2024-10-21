import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `
    <div
      class="rounded-md border border-neutral-600 px-2 text-sm text-neutral-400"
    >
      {{ label }}
    </div>
  `,
})
export class BadgeComponent {
  @Input({ required: true }) label = '';
}
