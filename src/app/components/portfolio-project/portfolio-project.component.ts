import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
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
        animate(2000, style({backgroundColor:'white', opacity: 0}))
      ])
    ])
  ]
})
export class PortfolioProjectComponent implements OnInit {
  imagePath = '../../../assets/images/exp_companies';
  experience = [
  {
      'companyName' : 'Bell',
      'position': 'Solution Architecture / UI Web Developer',
      'techStack': ['HTML5','CSS','Bootstrap4','jQuery','Angular 4+','Typescript'],
      'description': "Bell is Canada's leading communication company.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum.",
      'companyLogo': 'bell_logo.png',
      'companyLogoWidth': '35%'
    },
     {
      'companyName' : 'BGIS',
      'position': 'Senior UI/UX Designer and Developer',
      'techStack': ['HTML5','CSS','Bootstrap4','jQuery','Angular 4+','Typescript'],
      'description': "Brookfield Global Integrated Solutions.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum.",
      'companyLogo': 'isdr.png',
      'companyLogoWidth': '100%'
    },
     {
      'companyName' : 'ISDR',
      'position': 'UI/UX Developer',
      'techStack': ['HTML5','CSS','Bootstrap4','jQuery','Angular 4+','Typescript'],
      'description': "Issuer Direct corporation is a public listed company in united state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum.",
      'tech-stack': ['HTML5','CSS3','Bootstrap4','JavaScript','jQuery','Angular 6+'],
      'companyLogo': 'bgis.png',
      'companyLogoWidth': '100%'
    }
  ]
  showTitle: boolean = false;
  // showHoverdiv: boolean = false ;



  constructor(public dialog: MatDialog,
    private _router: Router,
    private el : ElementRef,
    private renderer: Renderer2) { }

    // @HostBinding() showHoverdiv : boolean = false;

    // @HostListener('mouseover') onMouseover() {
    //   let testEl = this.el.nativeElement.querySelector('.testSome');
    //   console.log(testEl);
    //   this.showHoverdiv = true;
    // }

    // @HostListener('mouseout') onMouseout() {
    //   let testEl = this.el.nativeElement.querySelector('.testSome');
    //   this.showHoverdiv = false;
    // }


  openDialog(val : any): void {
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
      if(result) {
        this._router.navigateByUrl('/projects');
      }
      // this.animal = result;

    });
  }

  ngOnInit() {
    this._router.url === "/projects" ? this.showTitle = true : this.showTitle = false;
  }

}



@Component({
  selector: 'project-detail-modal',
  templateUrl: 'project-detail-modal.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PortfolioProjectComponent) {}
    projectForModal;
    gotoFolio : boolean = false;


    ngOnInit(): void {
      this.projectForModal = this.data;
    }

    onNoClick(): void {
      this.gotoFolio = true;
      this.dialogRef.close(this.gotoFolio);
    }

}
