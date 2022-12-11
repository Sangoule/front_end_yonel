import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agence } from '../models/agence';
import { Url } from '../models/url';
@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  apiUrl =new Url()
  chemin=this.apiUrl.url
  constructor(private http: HttpClient) { }

  getMontantAgence(code:string) {
    return this.http.get<any>(this.chemin+'sousAgence/agence/'+code)
  }
}
