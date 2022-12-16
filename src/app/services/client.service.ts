import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../models/url';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _http: HttpClient) { }
  apiUrl =new Url;
  chemin=this.apiUrl.url
  
  creerClient(data: any): Observable<any> {
    console.log(data);
    return this._http.post(this.chemin+'client/', data)

  }
  getClient(): Observable<Client[]> {
    return this._http.get<Client[]>(this.chemin+'client/')
  }
  getClientByPhone(code:string) {
    return this._http.get<any>(this.chemin+'client/'+code)
  }
}
