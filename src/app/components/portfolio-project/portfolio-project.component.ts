import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DisplayProjectService } from 'src/app/service/displayProject/display-project.service';
import { SelectedProjectService } from 'src/app/service/getProject/selected-project.service';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss'],
  animations: [
    trigger('onHover', [
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0}),
        animate(2000, style({backgroundColor: 'white', opacity: 0}))
      ])
    ])
  ]
})
export class PortfolioProjectComponent implements OnInit, AfterViewInit {
  imagePath = '../../../assets/images/exp_companies';
  getCardEl;
  showOnHoverDiv: boolean;
  experience;
  showTitle = false;

  constructor(public dialog: MatDialog,
              // tslint:disable-next-line: variable-name
              private _router: Router,
              private el: ElementRef,
              private renderer: Renderer2,
              private projectService: SelectedProjectService,
              public displayProject: DisplayProjectService) { }

  ngOnInit() {
   this.showTitle = this._router.url === '/projects' ? true : false;

   this.displayProject.getExperienceProj().subscribe((res : any) => {
    console.log(res);
    this.experience = res.experience;
   })
  }


  ngAfterViewInit(): void {
   this.getCardEl = this.el.nativeElement.querySelector('.card-project');
  }

  showProjectDetail(job) {
    const companyName = job.companyName;
    this.projectService.getSelectedProject(job);
    this._router.navigate([`projects/${companyName}`]);
  }

  // getWorkExpProj

}

