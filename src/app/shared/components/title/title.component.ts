import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: ` <h2 class="text-4xl font-semibold"><ng-content /></h2> `,
})
export class TitleComponent {}
