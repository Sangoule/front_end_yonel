import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../models/url';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  apiUrl =new Url;
  chemin=this.apiUrl.url

  login(data: any): Observable<any> {
    console.log(data, 'moussa');
    return this._http.post(this.chemin+'yonel/login', data)

  }
  
}