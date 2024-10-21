import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@shared/components/badge/badge.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { InfoIconComponent } from '@shared/components/info-icon/info-icon.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';
import { Project } from 'src/app/models/project.interface';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ButtonComponent,
    LinkButtonComponent,
    GithubIconComponent,
    LinkIconComponent,
    InfoIconComponent,
    BadgeComponent,
  ],
  template: `
    <article
      class="rounded-lg border border-neutral-800 px-5 py-4 transition-all hover:scale-[102%] hover:border-blue-600"
    >
      <header class="mb-3 flex flex-row flex-wrap items-center gap-3">
        <h3
          class="text-nowrap text-xl font-semibold transition-all md:text-2xl"
        >
          {{ project.name }}
        </h3>
        <ul class="flex flex-wrap gap-3">
          @for (tag of project.tags; track $index) {
            <li>
              <app-badge [label]="tag" />
            </li>
          }
        </ul>
      </header>
      <p class="mb-4 text-sm leading-snug text-neutral-400 sm:text-base">
        {{ project.description }}
      </p>
      <footer class="flex gap-2">
        @if (project.url) {
          <app-link-button [href]="project.url" title="{{ project.name }} page">
            <app-link-icon class="h-4 w-4" />
          </app-link-button>
        }
        @if (project.repo) {
          <app-link-button
            [href]="project.repo"
            title="{{ project.name }} repository"
          >
            <app-github-icon class="h-4 w-4" />
          </app-link-button>
        }
      </footer>
    </article>
  `,
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;
}
