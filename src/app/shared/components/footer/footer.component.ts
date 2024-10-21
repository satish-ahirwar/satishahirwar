import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIconComponent } from '../github-icon/github-icon.component';
import { LinkedinIconComponent } from '../linkedin-icon/linkedin-icon.component';
import { FileIconComponent } from '../file-icon/file-icon.component';
import { MainService } from '@shared/services/main.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    GithubIconComponent,
    LinkedinIconComponent,
    FileIconComponent,
  ],
  template: `
    <footer
      class="mb-8 mt-24 flex flex-col items-center gap-4 px-5 text-sm text-neutral-500 dark:text-neutral-400"
    >
      <p class="text-center text-sm">
        <span class="font-semibold"> Satish Ahirwar </span>
      </p>
      <div class="flex flex-col items-center gap-5 md:flex-row">
        
        <section class="media flex items-center gap-4">
          <a
            href=""
            target="_blank"
            title="Linkedin"
            rel=""
          >
            <app-linkedin-icon class="h-4" />
          </a>

          <a
            href="https://github.com/satish-ahirwar/"
            target="_blank"
            title="GitHub Profile"
            rel=""
          >
            <app-github-icon class="h-4" />
          </a>
          
          <a
            (click)="getCV()"
            target="_blank"
            title="Satish Ahirwar Curriculum"
            rel="noopener noreferrer"
          >
            <app-file-icon class="h-4" />
          </a>
        </section>
      </div>
    </footer>
  `,
  styles: `
  .media{
    a{
      @apply p-2 fill-neutral-500 rounded-md border-neutral-500 transition-all hover:scale-105 active:scale-90 hover:bg-neutral-400/10;
    }
  }
  .avatar {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    @apply bg-neutral-950 border border-neutral-600 relative;
    &::before {
      content: "";
      height: 4px;
      width: 4px;
      border-radius: 100%;
      @apply bg-neutral-400 dark:bg-neutral-500;
      position: absolute;
      top: 10px;
      left: 10px;
      animation: eye-movement 8s infinite ease;
    }
    &::after {
      content: "";
      height: 4px;
      width: 4px;
      border-radius: 100%;
      @apply bg-neutral-400 dark:bg-neutral-500;
      position: absolute;
      top: 10px;
      left: 20px;
      animation: eye-movement 8s infinite ease;
    }
  }
  @keyframes eye-movement {
    0% {
      transform: translateX(0px) translateY(0) scaleY(1);
    }
    20% {
      transform: translateX(2px) translateY(0) scaleY(1);
    }
    30% {
      transform: translateX(-2px) translateY(0) scaleY(1);
    }
    55% {
      transform: translateX(0px) translateY(4px) scaleY(1);
    }
    65% {
      transform: translateX(0px) translateY(0px) scaleY(0.5);
    }
    70% {
      transform: translateX(0px) translateY(0px) scaleY(1);
    }
    100% {
      transform: translateX(0px) translateY(0px) scaleY(1);
    }
  }
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
  private mainService = inject(MainService);
  getCV() {
    this.mainService.getCV();
  }
}
