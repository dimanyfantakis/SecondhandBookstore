import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  }),
  observe: "body"
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl: string = "http://localhost:8080/register";
  private loginUrl: string = "http://localhost:8080/login";

  constructor(private http:HttpClient) { }

  registerUser(user: User): Observable<any> {
    return this.http.post(this.registerUrl, user, 
      {headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      observe: "response"});
  }

  loginUser(user: User): Observable<any> {
    return this.http.post(this.loginUrl, user, 
      {headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }),
      observe: "response"});
  }

  setUserData(user: User, jwt: string) {
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.clear();
  }

}
