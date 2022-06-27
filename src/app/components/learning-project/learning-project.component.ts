import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personalProj } from 'src/app/modal/learningProj';
import { DisplayProjectService } from 'src/app/service/displayProject/display-project.service';

@Component({
  selector: 'app-learning-project',
  templateUrl: './learning-project.component.html',
  styleUrls: ['./learning-project.component.scss']
})
export class LearningProjectComponent implements OnInit {
  showTitle: boolean;
  learningProject: personalProj;
  learningExp;

  showAllProj : boolean = false;
  constructor(public _router: Router, public displayProject: DisplayProjectService) { }

  ngOnInit() {
    this.showAllProj = this._router.url === '/projects' ? true : false;

   this.displayProject.getPersonalProj().subscribe((res : any)=> {
    this.learningExp = res.learningExp
   })
  }

  showProjectDetail(job) {
    // const companyName = job.companyName;
    // this.projectService.getSelectedProject(job);
    // this._router.navigate([`projects/${companyName}`]);
  }

}
