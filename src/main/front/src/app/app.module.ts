import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/views/login/login.component';
import { AccessformComponent } from './user/components/accessform/accessform.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    AddFormComponent
=======
    LoginComponent,
    AccessformComponent
>>>>>>> develop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
