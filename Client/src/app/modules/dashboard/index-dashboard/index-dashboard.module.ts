import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexDashboardRoutingModule } from './index-dashboard-routing.module';
import { IndexDashboardComponent } from './index-dashboard.component';
import { IndexPageComponent } from './index-page/index-page.component';


@NgModule({
  declarations: [
    IndexDashboardComponent,
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    IndexDashboardRoutingModule
  ]
})
export class IndexDashboardModule { }
