import { CrudService } from './../crud-service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { GenerateTransactionId } from '../models/GenerateTransactionId';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-buying-modal',
  templateUrl: './buying-modal.component.html',
  styleUrls: ['./buying-modal.component.css']
})
export class BuyingModalComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  email: string = "";
  bankName: string = "";
  rib: string = ""
  clientName = "MotezLassoued"

  emailOrPhone = "";
  password = ""

  userList$!: Observable<User[]>;
  userList: User[] = [];

  error = 0
  url = "http://localhost:4201/"


  users$!: Observable<any[]>;
  users: any[] = [];

  cartList$!: Observable<any[]>;
  cartList: any[] = [];


  cartElements: any[] = []

  productList$!: Observable<any[]>;
  productList: any[] = [];
  total: number = 0;



  transactionId$!: Observable<any>;
  transactionId: any[] = [];

  name = 'Kissht';
  KisshtHtml!: SafeHtml;




  constructor(private service: CrudService,
    private route: Router,
    private userService: UserService,
    private http: HttpClient,
    private sanitizer: DomSanitizer) {
    this.productList$ = this.service.getProductList();
    this.cartList$ = this.service.getOrderList();
    


  }

  ngOnInit() {




    this.productList$.forEach(data => {
      this.productList = data;
    });
    this.cartList$.forEach(data => {
      this.cartList = data;


    });
    /*this.transactionId$.forEach(data => {
      this.transactionId = data;
      console.log(this.transactionId[0].transactionId)
    });*/

    setTimeout(() => {
      this.purchaseByCustomer()
    }, 100)

  }
  productById(idProd: number): any {

    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].productId == idProd) {
        return this.productList[i]
      }
    }

  }
  purchaseByCustomer() {


    for (let i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i].customerId == 1) {
        this.cartElements.push(this.productById(this.cartList[i].productId))



        this.cartElements[i].quantity = this.cartList[i].quantity;
        this.total += this.cartElements[i].price * this.cartElements[i].quantity

      }
    }

  }
  onModal() {
    this.http.get('http://localhost:4201/', { responseType: 'text' }).subscribe(res => {
      this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res);
    })
  }

 /* payment() {
    let pay = {
      emailOrPhone: this.emailOrPhone.toLowerCase(),
      password: this.password,
      total: this.total
    }
    this.userList.forEach(data => {
      if (data.email == pay.emailOrPhone || data.phoneNumber == pay.emailOrPhone) {
        if (data.password == pay.password)
          this.route.navigate(['/payment']);
        else
          this.error = 1
      }
      else
        this.error = 1
    })


    this.userService.addLoggedUser(pay)



  }*/
  uniqueID() {
    return Math.random().toString(36).substr(2, 10);
  };
  payWithMs() {
    let ID = this.uniqueID()
    this.transactionId$ = this.service.getTransactionId()
    this.transactionId$.subscribe(x => {
      /*
            let pay = {
              orderId: ID,
              merchant: "MOTEZLASSOUED",
              amount: this.total,
              idTransaction: x.transactionId
            }
      */
      this.url = this.url + `?idTransaction=${x.transactionId}`;
      this.route.navigate(["/buy"]).then(result => { window.location.href = this.url; })


    })
  }
}