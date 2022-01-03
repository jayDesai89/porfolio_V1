import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayProjectService } from 'src/app/service/displayProject/display-project.service';

@Component({
  selector: 'app-learning-project',
  templateUrl: './learning-project.component.html',
  styleUrls: ['./learning-project.component.scss']
})
export class LearningProjectComponent implements OnInit {
  showTitle: boolean;
  learningExp = [
       {
        'projectName' : 'Portfolio',
        'techStack': ['HTML5','CSS','Bootstrap','Angular 2','Typescript'],
        'description': "Brookfield Global Integrated Solutions.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima.",
        'code': "https://github.com/jayDesai89/porfolio_V1/tree/master",
        'demo': "https://github.com/jayDesai89/porfolio_V1/tree/master",
      },
       {
        'projectName' : 'Weather on web-page',
        'techStack': ['HTML5','CSS','Bootstrap','Angular 8','Typescript'],
        'description': "Issuer Direct corporation is a public listed company in united state.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima.",
        'code': "https://github.com/jayDesai89/Weather_on_Webpage/tree/main",
        'demo': "https://weatheronwebpage.web.app/src/app/dashboard",
      },
      {
        'projectName' : 'BudgetApp_JS',
        'techStack' : ['HTML5','CSS','Bootstrap','Vanilla Javascript'],
        'description': "Bell is Canada's leading communication company.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima.",
        'code': "https://github.com/jayDesai89/BudgetApp_JS",
        'demo': "https://github.com/jayDesai89/BudgetApp_JS"
      }
    ]

  showAllProj : boolean = false;
  constructor(public _router: Router, public displayProject: DisplayProjectService) { }

  ngOnInit() {
    this._router.url === '/projects' ? this.showAllProj = true : this.showAllProj = false;

    this.displayProject.getPersonalProj().subscribe((res) => {
      console.log(`This is learning experience`);
      console.log(res);
    })
  }

  showProjectDetail(job) {
    // const companyName = job.companyName;
    // this.projectService.getSelectedProject(job);
    // this._router.navigate([`projects/${companyName}`]);
  }

}
