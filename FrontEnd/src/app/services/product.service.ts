import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json')
  public identity: any
  public token: any
  public url: String

  constructor(public _http: HttpClient) {
    this.url = environment.url
  }

  addproduct(product: Product): Observable<any>{
    let data = JSON.stringify(product)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.post(this.url+'/addproduct', data, {headers: headersToken})
  }

  editproduct(product: Product): Observable<any>{
    let data = JSON.stringify(product)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.put(this.url+'/editproduct/'+product._id, data, {headers: headersToken})
  }

  deleteproduct(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.delete(this.url+'/deleteproduct/'+id, {headers: headersToken})
  }

  allproduct(): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.get(this.url+'/allproduct', {headers: headersToken})
  }

  findproductid(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.get(this.url+'/findproductid/'+id, {headers: headersToken})
  }

  findproduct(product: Product): Observable<any>{
    let data = JSON.stringify(product)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.post(this.url+'/findproduct', data, {headers: headersToken})
  }

  sellproduct(product: Product): Observable<any>{
    let data = JSON.stringify(product)
    let headersToken = this.headersvar.set('Authorization', this.getToken())

    return this._http.post(this.url+'/sellproduct', data, {headers: headersToken})
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
