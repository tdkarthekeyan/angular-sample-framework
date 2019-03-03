import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  isLoggedIn: boolean;
  userName: string;
  emailId: string;

  login(emailId: string, password: string): Observable<any>{
    return this.http.post<any>('http://132.148.140.42:84/authentication/bsslogin', {
      Email_id: emailId,
      password: password
    });
  }

  setEmailId(emailId: string): void {
    this.emailId = emailId;
  }

  getEmailId(): string {
    return this.emailId;
  }

  setUserName(name: string): void {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  logout() : void {
    this.isLoggedIn = false;
    this.userName = null;
    this.emailId = null;
  }
}
