import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: HttpClient) {
  }

  getUserList(userId: string): Observable<any> {
    return this.http.post<any>('http://132.148.140.42:84/authentication/userlist', {
      Email_id: userId
    });
  }
}
