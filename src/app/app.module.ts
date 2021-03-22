// Modules
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
// Service

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioProjectComponent } from './components/portfolio-project/portfolio-project.component';
import { AppComponent } from './app.component';

// Pipes

// Directives

// Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { LearningProjectComponent } from './components/learning-project/learning-project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { TesttestComponent } from './components/testtest/testtest.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    PortfolioProjectComponent,
    LearningProjectComponent,
    ProjectDetailComponent,
    TesttestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
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
    BrowserAnimationsModule,
    NgxPageScrollCoreModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class AppModule { }
