import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  readonly internshipApiURL = "https://localhost:7046/api";


  constructor(private http: HttpClient) { }
  //Products
  getProductList(): Observable<any[]> {
    return this.http.get<any>(this.internshipApiURL + '/Products');
  }
  addProduct(data: any) {
    return this.http.post(this.internshipApiURL + '/Products', data);
  }
  updateProduct(id: number | string, data: any) {
    return this.http.put(this.internshipApiURL + `/Products/${id}`, data)
  }
  deleteProduct(id: number | string) {
    return this.http.delete(this.internshipApiURL + `/Products/${id}`)
  }
  //Customers
  getCustomerList(): Observable<any[]> {
    return this.http.get<any>(this.internshipApiURL + '/Customers');
  }
  addCustomer(data: any) {
    return this.http.post(this.internshipApiURL + '/Customers', data);
  }
  updateCustomer(id: number | string, data: any) {
    return this.http.put(this.internshipApiURL + `/Customers/${id}`, data)
  }
  deleteCustomer(id: number | string) {
    return this.http.delete(this.internshipApiURL + `/Customers/${id}`)
  }
  //Orders
  getOrderList(): Observable<any[]> {
    return this.http.get<any>(this.internshipApiURL + '/Orders');
  }
  addOrder(data: any) {
    return this.http.post(this.internshipApiURL + '/Orders', data);
  }
  updateOrder(id: number | string, data: any) {
    return this.http.put(this.internshipApiURL + `/Orders/${id}`, data)
  }
  deleteOrder(id: number | string) {
    return this.http.delete(this.internshipApiURL + `/Orders/${id}`)
  }
  //Response
  getResponse(): Observable<any[]> {
    return this.http.get<any>(this.internshipApiURL + '/Response');
  }
  getTransactionId(): Observable<{
    transactionId: string
  }> {
    return this.http.get<{
      transactionId: string
    }>(this.internshipApiURL + '/GenerateTransactionId');
  }


}