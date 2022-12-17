import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Pays} from '../models/pays';
import { Url } from '../models/url';


@Injectable({
  providedIn: 'root'
})
export class PaysService {
  apiUrl =new Url()
  chemin=this.apiUrl.url
  constructor(private http: HttpClient) { }
  getAllPays(): Observable<any[]> {
    return this.http.get<any[]>(this.chemin+'pays')
  }
}
