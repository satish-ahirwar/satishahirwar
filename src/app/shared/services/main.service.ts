import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Experience, Project, User } from '@models';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  DATA_QUERY = '/assets/data';
  cvName: string = "Satish-Ahirwar.pdf";
  cvPath: string = "../../../../assets/data/";
  private http = inject(HttpClient);
  getDemographics() {
    return this.http.get<User>(`${this.DATA_QUERY}/demographics.json`);
  }
  getSkills() {
    return this.http.get<string[]>(`${this.DATA_QUERY}/skills.json`);
  }
  getExperience() {
    return this.http.get<Experience[]>(`${this.DATA_QUERY}/experience.json`);
  }
  getProjects() {
    return this.http.get<Project[]>(`${this.DATA_QUERY}/projects.json`);
  }
  getCV() {
    window.open(this.cvPath + this.cvName, "_blank");
  }
  
}
