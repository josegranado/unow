import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '', loadChildren: () => import('./index-dashboard/index-dashboard.module').then( m => m.IndexDashboardModule) },
      { path: 'employees', loadChildren: () => import('./index-employees/index-employees.module').then( m => m.IndexEmployeesModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
