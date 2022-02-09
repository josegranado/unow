import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDashboardComponent } from './index-dashboard.component';
import { IndexPageComponent } from './index-page/index-page.component';

const routes: Routes = [
  { path: '', component: IndexDashboardComponent,
  children: [
    { path: '', component: IndexPageComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexDashboardRoutingModule { }
