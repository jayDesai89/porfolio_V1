import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  experience = [
  {
      id: 0,
      companyName : 'Bell',
      position: 'UI Web Developer / Solution Architecture',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Bell is Canada’s largest telecommunications company which provides Mobile phone, TV, high speed and wireless internet, and residential home phones services',
      companyLogo: 'bell_logo.png',
      imgAltText:  'Bell logo',
      companyLogoWidth: '35%'
    },
     {
      id: 1,
      companyName : 'BGIS',
      position: 'Senior UI/UX Designer and Developer',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Brookfield Global Integrated Solutions is one of the largest providers of property management and project delivery services',
      companyLogo: 'bgis.png',
      imgAltText:  'BGIS logo',
      companyLogoWidth: '100%'
    },
     {
      id: 2,
      companyName : 'ISDR',
      position: 'UI/UX Developer',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Issuer Direct Corporation is a public listed USA based company, it provides services such as communications and compliance based on the needs of corporate issuers.',
      'tech-stack': ['HTML5', 'CSS3', 'Bootstrap4', 'JavaScript', 'jQuery', 'Angular 6+'],
      companyLogo: 'isdr.png',
      imgAltText:  'Issuer direct logo',
      companyLogoWidth: '100%'
    }
  ];
  showTitle = false;



  constructor(public dialog: MatDialog,
              // tslint:disable-next-line: variable-name
              private _router: Router,
              private el: ElementRef,
              private renderer: Renderer2,
              private projectService: SelectedProjectService) { }

  ngOnInit() {
    this._router.url === '/projects' ? this.showTitle = true : this.showTitle = false;
  }

  ngAfterViewInit(): void {
   this.getCardEl = this.el.nativeElement.querySelector('.card-project');
  }

  showProjectDetail(job) {
    const companyName = job.companyName;
    this.projectService.getSelectedProject(job);
    this._router.navigate([`projects/${companyName}`]);
  }

}

