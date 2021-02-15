import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedProjectService } from 'src/app/service/getProject/selected-project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  selectedProj;

  constructor(private projectService: SelectedProjectService, private _router: Router) { }

  ngOnInit() {
    this.projectService.setSelectedProject.subscribe((proj) => {
      if (Object.keys(proj).length === 0) {
        this._router.navigate(['dashboard']);
      } else {
        this.selectedProj = proj;
      }
      console.log('detail project comp', proj);
    })
  }

}
