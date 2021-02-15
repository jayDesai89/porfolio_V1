import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortfolioProjectComponent } from './components/portfolio-project/portfolio-project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';


const routes: Routes = [
  /**
   * If dashboard requires independent module then below line will apply lazy loading of "DashboardComponent"
   * {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
   */
  {path: 'contactme', component: ContactMeComponent},
  {path: 'projects', component: PortfolioProjectComponent},
  {path: 'projects/:companyName', component: ProjectDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
