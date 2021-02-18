import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-project',
  templateUrl: './learning-project.component.html',
  styleUrls: ['./learning-project.component.scss']
})
export class LearningProjectComponent implements OnInit {
  learningExp = [
    {
        'projectName' : 'Expense Keeper',
        'techStack' : ['HTML5','CSS','Bootstrap','Vanilla Javascript'],
        'description': "Bell is Canada's leading communication company.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima."
      },
       {
        'projectName' : 'Modal of accessible e-commerce platform',
        'techStack': ['HTML5','CSS','Bootstrap','Angular 2','Typescript'],
        'description': "Brookfield Global Integrated Solutions.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima."
      },
       {
        'projectName' : 'Weather on web-page',
        'techStack': ['HTML5','CSS','Bootstrap','Angular 8','Typescript'],
        'description': "Issuer Direct corporation is a public listed company in united state.Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, minima."
      }
    ]

  showAllProj : boolean = false;
  constructor(public _router: Router) { }

  ngOnInit() {
    this._router.url === '/projects' ? this.showAllProj = true : this.showAllProj = false;
  }

}
