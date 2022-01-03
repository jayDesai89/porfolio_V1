import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TesttestComponent } from './testtest.component';

describe('TesttestComponent', () => {
  let component: TesttestComponent;
  let fixture: ComponentFixture<TesttestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
