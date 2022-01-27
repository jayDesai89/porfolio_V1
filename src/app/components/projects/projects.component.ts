import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isProject: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.isProject = this._router.url === '/projects' ? true : false;
  }

}
