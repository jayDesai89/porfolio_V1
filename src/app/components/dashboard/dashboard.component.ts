import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
