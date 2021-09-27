import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json')
  public identity: any
  public token: any
  public url: String

  constructor(public _http: HttpClient) {
    this.url = environment.url
  }

  login(user: User, getToken=''): Observable<any>{
    if (getToken !=''){
      user.getToken = getToken
    }
    let data = JSON.stringify(user)

    return this._http.post(this.url+'/login', data, {headers: this.headersvar})
  }

  addcompany(user: User): Observable<any>{
    let data = JSON.stringify(user)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.post(this.url+'/addcompany', data, {headers: headersToken})
  }

  editcompany(user: User): Observable<any>{
    let data = JSON.stringify(user)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.put(this.url+'/editcompany/'+user._id, data, {headers: headersToken})
  }

  deletecompany(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.delete(this.url+'/deletecompany/'+id, {headers: headersToken})
  }

  allcompany(): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.get(this.url+'/allcompanys', {headers: headersToken})
  }

  findcompany(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.get(this.url+'/findcompany/'+id, {headers: headersToken})
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
