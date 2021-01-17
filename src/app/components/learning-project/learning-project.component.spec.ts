import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningProjectComponent } from './learning-project.component';

describe('LearningProjectComponent', () => {
  let component: LearningProjectComponent;
  let fixture: ComponentFixture<LearningProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
