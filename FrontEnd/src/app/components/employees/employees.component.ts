import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  public employee: Employee
  public identity: any
  public employees: any

  constructor(private _employeeModel: EmployeeService) {
    this.employee = new Employee('','','','',0,'','')
  }

  ngOnInit(): void {
    this.allEmployees()
  }

  allEmployees(){
    this._employeeModel.allemployee().subscribe(
      response =>{
        this.employees = response.employees
        this.employee = new Employee('','','','',0,'','')
      }
    )
  }

  addEmployee(){
    this._employeeModel.addemployee(this.employee).subscribe(
      response=>{
        this.allEmployees()
      }
    )
  }

  editEmployee(){
    this._employeeModel.editemployee(this.employee).subscribe(
      response=>{
        this.allEmployees()
      }
    )
  }

  deleteEmployee(id: String){
    this._employeeModel.deleteemployee(id).subscribe(
      response=>{
        this.allEmployees()
      }
    )
  }

  idEmployee(id: String){
    this._employeeModel.findemployeeid(id).subscribe(
      response=>{
        this.employee = response.employee
      }
    )
  }

  findEmployee(){}
}
