import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserList(userId: string): Observable<any> {
    return this.http.post<any>('http://132.148.140.42:84/authentication/userlist', {
      Email_id: userId
    });
  }

  addUser(user: User): Observable<any> {
    return this.http.post<any>('http://132.148.140.42:84/authentication/addusers', user);
  }
}
