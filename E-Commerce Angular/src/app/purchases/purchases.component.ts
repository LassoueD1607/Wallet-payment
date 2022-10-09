import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../crud-service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  purchaseList$!: Observable<any[]>;
  purcharseList: any = [];

  cartList: any[] = [];
  product: any;
  quantity = 1;
  i: number = 0;
  total: number = 0;



  constructor(private service: CrudService, private route: Router) {
  }

  ngOnInit(): void {
    this.purchaseList$ = this.service.getProductList();

    this.purchaseList$.forEach(data => {
      this.purcharseList = data;

    })
  }



  buy(item: any) {
    let changed: boolean = false;
    this.product = item;
    this.product.quantity = this.quantity;
    if (this.quantity > 0) {
      var boughtProduct = {
        productId: item.productId,
        productName: item.productName,
        category: item.category,
        quantity: this.quantity,
        price: item.price

      }
      for (let i = 0; i < this.cartList.length; i++) {
        if (boughtProduct.productId == this.cartList[i].productId) {
          this.cartList[i].quantity += boughtProduct.quantity;
          changed = true;
          this.total += this.quantity * this.cartList[i].price
          this.quantity = 1;
        }
      }
      if (!changed) {
        this.cartList.push(boughtProduct);
        this.total += this.cartList[this.cartList.length - 1].quantity * this.cartList[this.cartList.length - 1].price

        this.quantity = 1;

      }



    }
  }
  letsBuy(): Boolean {
    if (this.cartList.length == 0) return false;
    return true;

  }
  confirm() {
    for (let i = 0; i < this.cartList.length; i++) {
      var order = {
        customerId: 1,
        productId: this.cartList[i].productId,
        quantity: this.cartList[i].quantity
      }
      this.service.addOrder(order).subscribe(res => this.purchaseList$ = this.service.getProductList());
      this.route.navigate(['/buy']);


    }
  }
  onUpdateQuantity(event: Event) {
    this.quantity = Number((<HTMLInputElement>event.target).value
    )
  }
}
