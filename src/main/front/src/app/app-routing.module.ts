import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/views/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { AccessFormComponent } from './user/components/accessform/accessform.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'header', component: HeaderComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'accessform', component: AccessFormComponent }, 
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
