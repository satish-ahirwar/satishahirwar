import { Component, OnInit, inject } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { ProjectComponent } from '../project/project.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, TitleComponent],
  template: `
    <section id="projects">
      <app-title>Projects</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track $index) {
          <li>
            <app-project [project]="project" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsComponent implements OnInit {
  private mainService = inject(MainService);
  projects: Project[] = [];

  ngOnInit() {
    this.mainService.getProjects().subscribe((data) => (this.projects = data));
  }
}
