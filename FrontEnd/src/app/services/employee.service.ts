import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json')
  public identity: any
  public token: any
  public url: String

  constructor(public _http: HttpClient) {
    this.url = environment.url
  }

  addemployee(employee: Employee): Observable<any>{
    let data = JSON.stringify(employee)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.post(this.url+'/addemployee', data, {headers: headersToken})
  }

  editemployee(employee: Employee): Observable<any>{
    let data = JSON.stringify(employee)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.put(this.url+'/editemployee/'+employee._id, data, {headers: headersToken})
  }

  deleteemployee(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.delete(this.url+'/deleteemployee/'+id, {headers: headersToken})
  }

  allemployee(): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.get(this.url+'/allemployee', {headers: headersToken})
  }

  findemployeeid(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.get(this.url+'/findemployeeid/'+id, {headers: headersToken})
  }

  findemployee(employee: Employee): Observable<any>{
    let data = JSON.stringify(employee)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.post(this.url+'/findemployee', data, {headers: headersToken})
  }

  getToken(){
    var token2 = localStorage.getItem('token')
    if (token2 !="undefined"){
      this.token =token2
    }else{
      this.token = null
    }
    return this.token;
  }

  getIdentity(){
    var identity2 = JSON.parse(localStorage.getItem('identidad') || '{}');
    if (identity2 !="undefined"){
      this.identity =identity2
    }else{
      this.identity = null
    }
    return this.identity;
  }
}
