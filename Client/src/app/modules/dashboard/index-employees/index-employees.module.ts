import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexEmployeesRoutingModule } from './index-employees-routing.module';
import { IndexEmployeesComponent } from './index-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexEmployeesComponent,
    ListEmployeesComponent,
    FormEmployeeComponent
  ],
  imports: [
    CommonModule,
    IndexEmployeesRoutingModule,
    FormsModule,
    NgSelectModule,
    ModalModule.forRoot()
  ]
})
export class IndexEmployeesModule { }
