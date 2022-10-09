import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantService } from '../merchant.service';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() selector = 0;





  select = 1;
  title = 'paymentAPI';
  orderId = ""
  merchant = ""
  amount = 0;
  transactionId = ""
  merchantId$!: Observable<any[]>;
  merchantId: any[] = [];
  transaction$!: Observable<any>;




  constructor(private route: ActivatedRoute, private service: MerchantService, private signalrService: SignalrService) {
    this.merchantId$ = this.service.getMerchantId()
  }


  ngOnInit(): void {
    this.merchantId$.forEach(data => {
      this.merchantId = data;
      this.merchant = this.merchantId[0].idMerchant
    });


    this.route.queryParams.subscribe(params => {

      //if (params.orderId != undefined) {
      /*this.orderId = params.orderId;
      //this.merchant = params.merchant
      this.amount = params.amount*/
      this.transactionId = params.idTransaction
      //console.log(params.idTransaction)
      this.signalrService.setIdTransaction(this.transactionId)
      this.service.addParameter(params.orderId, this.merchant, params.amount)
      //console.log("orderId", this.orderId)
      //}
      /*else {

        this.orderId = this.service.getOrderId();
        this.merchant = this.service.getMerchant();
        this.amount = this.service.getAmount();
      }*/

    })
    /*if (this.selector == 2) {
      this.select = 2
    }*/

    this.transactionId = this.signalrService.getIdTranscation()
    //console.log(this.transactionId)

    this.transaction$ = this.service.getTransactionById(this.transactionId)
    this.transaction$.subscribe(x => {
      console.log(x)
    })
  }


  selectForm() {
    this.select = 0


  }
  selectQRCode() {
    this.select = 1




  }
  checkResponse() {
    if (this.signalrService.response === this.signalrService.getIdTranscation()) {

      return true;

    }
    return false

  }

}
