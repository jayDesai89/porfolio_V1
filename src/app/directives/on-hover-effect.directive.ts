import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnHoverEffect]'
})
export class OnHoverEffectDirective {
  @HostBinding() showThisDiv: boolean = false;

  constructor(private el: ElementRef, private renderer : Renderer2) {
  }

  @HostListener('mouseover') onMouseOver() {
    // Get the element first in ur case div
    let showThisDiv = this.el.nativeElement.querySelector('.box2');
    this.renderer.setStyle(showThisDiv,'display','block');
    this.showThisDiv =true;
  }


  @HostListener('mouseout') onMouseOut() {
    // Get the element first in ur case div
    let showThisDiv = this.el.nativeElement.querySelector('.box2');
    this.renderer.setStyle(showThisDiv,'display','none');
    this.showThisDiv= false;
  }
}
