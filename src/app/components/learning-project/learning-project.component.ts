import { Component, OnInit } from '@angular/core';

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
        'description': "Bell is Canada's leading communication company."
      },
       {
        'projectName' : 'Modal of accessible e-commerce platform',
        'techStack': ['HTML5','CSS','Bootstrap','Angular 2','Typescript'],
        'description': "Brookfield Global Integrated Solutions."
      },
       {
        'projectName' : 'Weather on web-page',
        'techStack': ['HTML5','CSS','Bootstrap','Angular 8','Typescript'],
        'description': "Issuer Direct corporation is a public listed company in united state."
      }
    ]


  constructor() { }

  ngOnInit() {
  }

}
