import { AdminContentComponent } from './admin-rules/admin-content/admin-content.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./admin-rules/admin/admin.module').then ((m)=> m.AdminModule),
    // authguard
  },
  {
    path: '',
    component: LoginComponent
    // loginGuard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
