import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

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
      'techStack': ['HTML5','CSS','Bootstrap','Angular 2','Typescript'],
      'description': "Bell is Canada's leading communication company.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum."
    },
     {
      'companyName' : 'BGIS',
      'position': 'Senior UI/UX Designer and Developer',
      'techStack': ['HTML5','CSS','Bootstrap','Angular 2','Typescript'],
      'description': "Brookfield Global Integrated Solutions.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum."
    },
     {
      'companyName' : 'ISDR',
      'position': 'UI/UX Developer',
       'techStack': ['HTML5','CSS','Bootstrap','Angular 2','Typescript'],
      'description': "Issuer Direct corporation is a public listed company in united state. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsum."
    }
  ]

  constructor(public dialog: MatDialog, private _router: Router) { }


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
