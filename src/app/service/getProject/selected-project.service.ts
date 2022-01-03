import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { experienceProj } from "src/app/modal/experience";
import { personalProj } from "src/app/modal/learningProj";

@Injectable({
  providedIn: "root",
})
export class SelectedProjectService {
  apiRes;
  private selectedProject = new BehaviorSubject<{}>({});
  setSelectedProject = this.selectedProject.asObservable();

  constructor(public _http: HttpClient) {}

  getSelectedProject(proj) {
    this.selectedProject.next(proj);
  }
}
