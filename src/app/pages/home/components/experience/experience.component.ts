import { Component, OnInit, inject } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, TitleComponent, LinkButtonComponent],
  template: `
    <section id="experience">
      <app-title>Experience</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (experience of experiences; track $index) {
          <li>
            <app-experience-card [experience]="experience" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ExperienceComponent implements OnInit {
  private mainService = inject(MainService);
  experiences: Experience[] = [];
  ngOnInit() {
    this.mainService
      .getExperience()
      .subscribe((data) => (this.experiences = data));
  }
}
