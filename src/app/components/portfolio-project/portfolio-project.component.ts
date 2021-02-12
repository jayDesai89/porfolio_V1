import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

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
      companyName : 'Bell',
      position: 'UI Web Developer / Solution Architecture',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Bell is Canada’s largest telecommunications company which provides Mobile phone, TV, high speed and wireless internet, and residential home phones services',
      companyLogo: 'bell_logo.png',
      companyLogoWidth: '35%'
    },
     {
      companyName : 'BGIS',
      position: 'Senior UI/UX Designer and Developer',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Brookfield Global Integrated Solutions is one of the largest providers of property management and project delivery services',
      companyLogo: 'bgis.png',
      companyLogoWidth: '100%'
    },
     {
      companyName : 'ISDR',
      position: 'UI/UX Developer',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Issuer Direct Corporation is a public listed USA based company, it provides services such as communications and compliance based on the needs of corporate issuers.',
      'tech-stack': ['HTML5', 'CSS3', 'Bootstrap4', 'JavaScript', 'jQuery', 'Angular 6+'],
      companyLogo: 'isdr.png',
      companyLogoWidth: '100%'
    }
  ];
  showTitle = false;



  constructor(public dialog: MatDialog,
              // tslint:disable-next-line: variable-name
              private _router: Router,
              private el: ElementRef,
              private renderer: Renderer2) { }



  openDialog(val: any): void {
    // console.log(val);
    //  this.projectDetailForModal = val;
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '80vh',
      panelClass: 'projectDetail-section',
      backdropClass: 'projectDetailBackdrop',
      data: {project: val}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this._router.navigateByUrl('/projects');
      }
      // this.animal = result;

    });
  }

  ngOnInit() {
    this._router.url === '/projects' ? this.showTitle = true : this.showTitle = false;
  }

  ngAfterViewInit(): void {
   this.getCardEl = this.el.nativeElement.querySelector('.card-project');
  }

  // @HostListener('mouseover', ['$event']) mouseenter(e) {
  //   // this.showOnHoverDiv = true;
  //   console.log(e);
  // }

  // @HostListener('mouseout') mouseout() {
  //   // this.showOnHoverDiv = false;
  //   console.log(this.showOnHoverDiv);
  // }


}



@Component({
  selector: 'project-detail-modal',
  templateUrl: 'project-detail-modal.html',
})
export class DialogOverviewExampleDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PortfolioProjectComponent) {}
    projectForModal;
    gotoFolio = false;


    ngOnInit(): void {
      this.projectForModal = this.data;
    }

    onNoClick(): void {
      this.gotoFolio = true;
      this.dialogRef.close(this.gotoFolio);
    }

}
