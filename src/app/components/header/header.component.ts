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
export class HeaderComponent implements OnInit, AfterViewInit {
  showMobileToggle: boolean = false;
  innerWidth: any;
  showSideBar: boolean = false;
  name = 'Angular 5';
  animationState = 'in';
  navElement: HTMLElement;
  val:any;

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.onResize(this.val);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.navElement = document.getElementById('someNav') as HTMLElement;
    // console.log(this.navElement);
  }

  @HostListener('window:scroll', [''])
  onScroll() {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 1) {
      // APPLY CLASS TO THIS ELEMENT ON PAGE SCROLL
      this.navElement.classList.add('nav-bar-active');
    } else {
      this.navElement.classList.remove('nav-bar-active');
    }
  }

  @HostListener('window:resize', [''])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 992) {
      this.showMobileToggle = true;
    } else {
      this.showMobileToggle = false;
    }
  }
}
