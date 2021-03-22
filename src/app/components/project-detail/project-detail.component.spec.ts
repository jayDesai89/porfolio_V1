import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SelectedProjectService } from 'src/app/service/getProject/selected-project.service';

import { ProjectDetailComponent } from './project-detail.component';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;

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
        RouterTestingModule.withRoutes([])],
      declarations: [ ProjectDetailComponent ],
      providers:[
        // {selectedProjService: SelectedProjectService, useClass: selectedProjectServiceSub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });

  class selectedProjectServiceSub {

  }
});
