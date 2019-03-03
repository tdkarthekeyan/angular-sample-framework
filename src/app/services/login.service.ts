import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  isLoggedIn: boolean;
  userName: string;

  login(emailId: string, password: string): Observable<any>{
    return this.http.post<any>('http://132.148.140.42:84/authentication/bsslogin', {
      Email_id: emailId,
      password: password
    });
  }
  setUserName(name: string): void {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  logout() : void {
    this.isLoggedIn = false;
  }
}
