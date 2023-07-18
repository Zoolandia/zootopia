import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardFamiliesComponent } from './dashboard_families/dashboard-families/dashboard-families.component';
import { LoginComponent } from './user/views/login/login.component';
import { AccessFormComponent } from './user/components/accessform/accessform.component';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { TestdbComponent } from './testdb/testdb.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './animals/list/list.component';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AccessFormComponent,
    AddFormComponent,
    TestdbComponent,
    ListComponent,
    DashboardFamiliesComponent,
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule, 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

