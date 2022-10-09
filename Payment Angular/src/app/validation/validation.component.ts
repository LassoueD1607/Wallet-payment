import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  orderId = ""
  merchant = ""
  amount = 0
  select = 1;
  validationSMS = "";

  merchantId$!: Observable<any[]>;
  merchantId: any[] = [];


  constructor(private service: MerchantService) {
    this.merchantId$ = this.service.getMerchantId()

  }

  ngOnInit(): void {

    this.merchantId$.forEach(data => {
      this.merchantId = data;
      this.merchant = this.merchantId[0].idMerchant
    });

    this.orderId = this.service.getOrderId()
    //this.merchant = this.service.getMerchant()
    this.amount = this.service.getAmount()
  }
  selectForm() {
    this.select = 0


  }
  selectQRCode() {
    this.select = 1


  }
}