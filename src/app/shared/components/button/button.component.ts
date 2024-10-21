import { NgClass } from '@angular/common';
import {
  Component,
  Input,
  Output,
  booleanAttribute,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      class="group block rounded-md border border-neutral-500 fill-neutral-50 transition-all hover:scale-105 hover:bg-neutral-400/10 active:scale-90"
      (click)="btnClick.emit()"
      [ngClass]="icon ? 'p-2' : 'px-2 py-1'"
      [title]="title"
    >
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  @Input({ transform: booleanAttribute }) icon = false;
  @Input() title = '';
  @Output() btnClick = new EventEmitter<null>();
}
