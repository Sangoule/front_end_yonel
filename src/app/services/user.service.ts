import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Url } from '../models/url';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  code!:string
  constructor(private _http: HttpClient) { 
  }
  apiUrl =new Url;
  chemin=this.apiUrl.url
  
  
  
  login(data: any): Observable<any> {
    console.log(data);
    return (this._http.post(this.chemin+'yonel/login', data).pipe(catchError(this.handleError)));

  }
  handleError(error:any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // erreur client
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // erreur serveur
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.code=error.status
    console.log(errorMessage+" et "+ this.code+" erreur dans votre service")
    return  error.status;
  }

  
}