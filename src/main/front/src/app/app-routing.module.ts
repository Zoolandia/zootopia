import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/views/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { AccessFormComponent } from './user/components/accessform/accessform.component';
<<<<<<< HEAD
import { AddFormComponent } from './forms/add-form/add-form.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'header', component: HeaderComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'accessform', component: AccessFormComponent }, 
  { path: 'add-form', component: AddFormComponent },
  
  
=======
import { ListComponent } from './animals/list/list.component';
import { DashboardFamiliesComponent } from './dashboard_families/dashboard-families/dashboard-families.component';


const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'dashboard', component: DashboardFamiliesComponent }, 
  { path: 'animals', component: ListComponent }
>>>>>>> a359e1c0b298c5254c67502e93d123dd8315e699
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
