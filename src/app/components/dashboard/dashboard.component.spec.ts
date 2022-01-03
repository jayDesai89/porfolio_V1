import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { LearningProjectComponent } from '../learning-project/learning-project.component';
import { PortfolioProjectComponent } from '../portfolio-project/portfolio-project.component';

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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
        RouterTestingModule.withRoutes([
          {path: 'dashboard', component: DashboardComponent}
        ]),
        BrowserAnimationsModule],
        declarations: [ DashboardComponent,
          PortfolioProjectComponent,
          LearningProjectComponent,
          HeaderComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain h1 tag', () => {
    const h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element.nativeElement.textContent).toBe(' Hi, I am Jay  Web Designer and a Front-end Developer  based in Ontario, Canada ');
  });

  it('should have let me see some work button',() => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = buttons[2].nativeElement;
    expect(nativeButton.textContent).toBe('Let me see some work');
  });

  it('should navigate to / before button is click',() => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('/dashboard');
  })
});
