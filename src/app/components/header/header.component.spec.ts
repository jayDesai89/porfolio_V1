import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
      declarations: [ HeaderComponent ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
