import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexEmployeesComponent } from './index-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  {
    path: '', component: IndexEmployeesComponent,
    children: [
      { path: '', component: ListEmployeesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexEmployeesRoutingModule { }
