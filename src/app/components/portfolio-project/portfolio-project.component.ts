import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {
  experience = [
  {
      'companyName' : 'Bell',
      'position': 'Solution Architecture / UI Web Developer',
      'description': "Bell is Canada's leading communication company.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum."
    },
     {
      'companyName' : 'BGIS',
      'position': 'Senior UI/UX Designer and Developer',
      'description': "Brookfield Global Integrated Solutions.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum."
    },
     {
      'companyName' : 'ISDR',
      'position': 'UI/UX Developer',
      'description': "Issuer Direct corporation is a public listed company in united state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
