import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
       { 
         path: '', 
         loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule ),
        canActivate: [ LoginGuard ]
        },
        {
          path: 'dashboard',
          loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
          canActivate: [ AuthGuard ]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
