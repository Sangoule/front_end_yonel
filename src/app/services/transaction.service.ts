import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../models/url';
import { Transaction } from '../models/transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  apiUrl =new Url;
  chemin=this.apiUrl.url
 
  getTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.chemin+'yonel/transaction')
  }

}
