import { Component, HostBinding, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-drawer',
  templateUrl: './header-drawer.component.html',
  styleUrls: ['./header-drawer.component.scss']
})
export class HeaderDrawerComponent implements OnInit {
  @Input()
  @HostBinding('class.drawer-open')
  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpen = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

}
