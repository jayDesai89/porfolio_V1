import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelectedProjectService {
  private selectedProject = new BehaviorSubject<{}>({});
  setSelectedProject = this.selectedProject.asObservable();

  constructor() {}

  getSelectedProject(proj) {
    this.selectedProject.next(proj);
  }
}
