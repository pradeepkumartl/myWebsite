import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/login',{username: username, password: password});
  }

  uniqueUsername(username): Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/uniqueUsername',{username: username});
  }

}
