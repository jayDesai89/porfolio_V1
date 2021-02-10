import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDrawerComponent } from './header-drawer.component';

describe('HeaderDrawerComponent', () => {
  let component: HeaderDrawerComponent;
  let fixture: ComponentFixture<HeaderDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
