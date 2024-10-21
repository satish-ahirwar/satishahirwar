import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { MainService } from '@shared/services/main.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, LinkButtonComponent],
  templateUrl: './navbar.component.html',
  styles: `
  li{
    a{
      @apply block rounded-md py-1 px-2 transition-all hover:scale-105 hover:text-blue-500 hover:bg-neutral-400/10 active:scale-90;
    }
  }
`,
})
export class NavbarComponent {
  private mainService = inject(MainService);
  getCV() {
    this.mainService.getCV();
  }
}
