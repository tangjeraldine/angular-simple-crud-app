import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/list/list.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://jsonplaceholder.cypress.io/';
  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  // viewUser(id: number) {
  //   const parameters = new HttpParams().set('id', id);
  //   return this.http.get(this.baseUrl + 'users', {
  //     params: parameters,
  //   });
  // }

  // viewing user hence get method
  viewUser(id: number) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }

  // adding user hence post method
  addUser(userObj: any) {
    return this.http.post(this.baseUrl + 'users', userObj);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, userObj: any) {
    return this.http.put(this.baseUrl + 'users/' + id, userObj);
  }
}
