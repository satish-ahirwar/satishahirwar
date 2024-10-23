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
  EXTERNAL_DRIVE_URL: string = "https://drive.google.com/uc?id=";
  EXP_DOC: string = this.EXTERNAL_DRIVE_URL + "1JIZePU9fMgJZjuyAoQ9ee4asTtYudJAY";
  PROJECT_DOC: string = this.EXTERNAL_DRIVE_URL + "1WWfXktGOYVbLnAQxSBTgHi7YrHxd7bhU";
  
  getDemographics() {
    return this.http.get<User>(`${this.DATA_QUERY}/demographics.json`);
  }
  getSkills() {
    return this.http.get<string[]>(`${this.DATA_QUERY}/skills.json`);
  }
  getExperience() {
    //return this.http.get<Experience[]>(`${this.DATA_QUERY}/experience.json`);
    return this.http.get<Experience[]>(`${this.EXP_DOC}`);
  }
  getProjects() {
    //return this.http.get<Project[]>(`${this.DATA_QUERY}/projects.json`);
    return this.http.get<Project[]>(`${this.PROJECT_DOC}`);
  }
  getCV() {
    window.open(this.cvPath + this.cvName, "_blank");
  }
  
}
