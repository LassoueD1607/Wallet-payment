import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  orderId = ""
  merchant = ""
  amount = 0;


  addParameter(_orderId: any, _merchant: any, _amount: any) {
    this.orderId = _orderId;
    this.merchant = _merchant;
    this.amount = _amount
    /*console.log(this.orderId)
    console.log(this.merchant)
    console.log(this.amount)*/
  }
  getOrderId() {
    return this.orderId
  }
  getMerchant() {
    return this.merchant
  }
  getAmount() {
    return this.amount
  }



  readonly internshipApiURL = "https://localhost:7270";

  constructor(private http: HttpClient) { }
  //Products
  getMerchantId(): Observable<any[]> {
    return this.http.get<any>(this.internshipApiURL + '/merchentId');
  }
  /*addUser(data: any) {
    return this.http.post(this.internshipApiURL + '/api/Login', data);
  }*/
  getTransactionById(transactionId: string): Observable<any[]> {
    return this.http.get<any>(`https://localhost:7270/api/Transactions/${transactionId}`);
  }

}
