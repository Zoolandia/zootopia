import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/views/login/login.component';
import { AccessformComponent } from './user/components/accessform/accessform.component';
import { DashboardFamiliesComponent } from './dashboard_families/dashboard-families/dashboard-families.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessformComponent,
    DashboardFamiliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, DashboardFamiliesComponent]
})
export class AppModule { }
