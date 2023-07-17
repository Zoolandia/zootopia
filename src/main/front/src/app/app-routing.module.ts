import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/views/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { AccessFormComponent } from './user/components/accessform/accessform.component';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { DashboardFamiliesComponent } from './dashboard_families/dashboard-families/dashboard-families.component';
import { ListComponent } from './animals/list/list.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'header', component: HeaderComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'accessform', component: AccessFormComponent }, 
  { path: 'add-form', component: AddFormComponent },
  {path:'dashboard-families',component: DashboardFamiliesComponent},
  { path: 'list', component: ListComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
