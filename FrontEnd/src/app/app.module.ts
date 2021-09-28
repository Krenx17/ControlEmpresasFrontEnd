import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CompanysComponent } from './components/companys/companys.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/*
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment.prod';
*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanysComponent,
    EmployeesComponent,
    ProductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    //AngularFireModule.initializeApp(environment.firebaseConfiguration)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
