import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(200)]),
      transition(':leave', [animate(200, style({ height: 0 }))]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  showMobileToggle: boolean = false;
  innerWidth: any;
  showSideBar: boolean = false;
  name = 'Angular 5';
  animationState = 'in';

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.onResize(event);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.showMobileToggle = true;
    } else {
      this.showMobileToggle = false;
    }
  }
}
