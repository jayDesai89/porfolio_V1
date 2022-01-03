import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortfolioProjectComponent } from './components/portfolio-project/portfolio-project.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';


const routes: Routes = [
  /**
   * If dashboard requires independent module then below line will apply lazy loading of "DashboardComponent"
   * {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
   */
  {path: 'projects', component: PortfolioProjectComponent},
  {path: 'projects/:companyName', component: ProjectDetailComponent},
  {path: 'home', component: DashboardComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
