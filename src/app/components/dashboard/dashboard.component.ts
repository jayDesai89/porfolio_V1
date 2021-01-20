import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

  animations: [
    trigger('onHover', [
      transition('initialState <=> finalState', [
        animate('1500ms ease-in')
      ])
    ])
   ]
})
export class DashboardComponent implements OnInit {


  constructor( ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  show_project_comp=false;
  show_learning_comp=false;

  @HostListener("document:scroll")
  scrollPage(){
    console.log(document.body.scrollTop);
    (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) ? this.show_project_comp=true : this.show_project_comp = false;
    (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? this.show_learning_comp=true : this.show_learning_comp = false;
  }


}
