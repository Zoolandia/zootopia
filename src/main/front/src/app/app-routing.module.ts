import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/views/login/login.component';
import { HeaderComponent } from './shared/header/header.component';

import { EditFormComponent } from './animals/edit-form/edit-form.component';

import { AccessFormComponent } from './user/components/accessform/accessform.component';

import { AddFormComponent } from './forms/add-form/add-form.component';
import { ListComponent } from './animals/list/list.component';
import { DashboardFamiliesComponent } from './dashboard_families/dashboard-families/dashboard-families.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'header', component: HeaderComponent,
   children: [
    { path: 'edit/:id', component: EditFormComponent }
  ]},
  { path: 'login', component: LoginComponent }, 
  { path: 'accessform', component: AccessFormComponent }, 
  { path: 'add-form', component: AddFormComponent },
  { path: '', component: LoginComponent },  
  { path: 'dashboard', component: DashboardFamiliesComponent }, 
  { path: 'animals', component: ListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
