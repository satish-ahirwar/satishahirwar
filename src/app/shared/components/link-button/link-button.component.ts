import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  standalone: true,
  template: `
    <a
      class="group block rounded-md {{
        btnStyle === 'outline' ? 'border p-2' : 'py-1 px-2'
      }} border-neutral-500 fill-neutral-50 transition-all hover:scale-105 hover:bg-neutral-400/10 active:scale-90"
      [href]="href"
      target="_blank"
      rel="noopener noreferrer"
      [title]="title"
    >
      <ng-content />
    </a>
  `,
})
export class LinkButtonComponent {
  @Input({ required: true }) href!: string;
  @Input() title = '';
  @Input() btnStyle: 'outline' | 'base' = 'outline';
  cvName: string = "Satish-Ahirwar.pdf";
  cvPath: string = "../../../../assets/data/";
  getCV() {
    window.open(this.cvPath + this.cvName, "_blank");
  }
}
