import { AfterViewInit, Component, HostBinding, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements AfterViewInit {
  title = 'JayDesaiPortfolio';

  navElement: HTMLElement;

  constructor() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    // this.navElement = document.getElementById('router-out') as HTMLElement;
    // console.log(this.navElement);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // if (window.pageYOffset > 1) {
    //   // APPLY CLASS TO THIS ELEMENT ON PAGE SCROLL
    // //  this.navElement.classList.add('router-top-margin');
    // } else {
    // //  this.navElement.classList.remove('router-top-margin');
    // }
  }

  scrollToTop(){
    window.scroll(0,0);
  }
}
