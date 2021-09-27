import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanysComponent } from './components/companys/companys.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: 'companys', component: CompanysComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
