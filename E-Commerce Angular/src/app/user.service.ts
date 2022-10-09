import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser: any;
  addLoggedUser(user: any) {
    this.loggedUser = user
  }
  getLoggedUser() {
    return this.loggedUser;
  }
  readonly internshipApiURL = "https://localhost:7270/api";

  constructor(private http: HttpClient) { }
  //Products
  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.internshipApiURL + '/Users');
  }
  addUser(data: any) {
    return this.http.post(this.internshipApiURL + '/Users', data);
  }
  updateUser(id: number | string, data: any) {
    return this.http.put(this.internshipApiURL + `/Users/${id}`, data)
  }
  deleteUser(id: number | string) {
    return this.http.delete(this.internshipApiURL + `/Users/${id}`)
  }
  addTransaction(data: any) {
    return this.http.post<Transaction>(this.internshipApiURL + '/Transactions', data);
  }
}