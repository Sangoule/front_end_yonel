import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousAgence } from '../models/sous-agence';
import { Url } from '../models/url';
@Injectable({
  providedIn: 'root'
})
export class SousAgenceService {
  apiUrl =new Url()
  chemin=this.apiUrl.url
  constructor(private http: HttpClient) { }
  getSousAgence(): Observable<SousAgence[]> {
    return this.http.get<SousAgence[]>(this.chemin+'sousAgence')
  }
  getSousAgenceById(code:string) {
    return this.http.get<any>(this.chemin+'sousAgence/'+code)
  }
}
