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
  name = 'Angular';
  show_project_comp : boolean = false;
  show_learning_comp: boolean = false;


  constructor( ) { }

  ngOnInit(): void { }


  @HostListener('document:scroll')
  scrollPage() {
    console.log(document.body.scrollTop);
    // tslint:disable-next-line: max-line-length
    (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) ? this.show_project_comp=true : this.show_project_comp = false;
    // tslint:disable-next-line: max-line-length
    (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? this.show_learning_comp=true : this.show_learning_comp = false;
  }


}
