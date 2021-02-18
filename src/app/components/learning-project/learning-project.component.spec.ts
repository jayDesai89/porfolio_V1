import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';

import { LearningProjectComponent } from './learning-project.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LearningProjectComponent', () => {
  let component: LearningProjectComponent;
  let fixture: ComponentFixture<LearningProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDividerModule,
        MatButtonModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        MatDialogModule,
        RouterModule,
        RouterTestingModule.withRoutes([])
      ],
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
