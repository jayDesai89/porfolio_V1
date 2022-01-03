import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LearningProjectComponent } from '../learning-project/learning-project.component';

import { PortfolioProjectComponent } from './portfolio-project.component';

describe('PortfolioProjectComponent', () => {
  let component: PortfolioProjectComponent;
  let fixture: ComponentFixture<PortfolioProjectComponent>;

  beforeEach(waitForAsync(() => {
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
        RouterTestingModule.withRoutes([])],
      declarations: [ PortfolioProjectComponent, LearningProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
