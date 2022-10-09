import { MerchantService } from './merchant.service';


import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SignalrService } from './signalr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* select = 0;
   title = 'paymentAPI';
   orderId = ""
   merchant = ""
   amount = 0;
   merchantId$!: Observable<any[]>;
   merchantId: any[] = [];
 
   constructor(private route: ActivatedRoute, private service: MerchantService, private signalrService: SignalrService) {
     this.merchantId$ = this.service.getMerchantId()
   }
 
   ngOnInit(): void {
 
     this.route.queryParams.subscribe(params => {
 
       this.orderId = params.orderId;
       this.merchant = params.merchant
       this.amount = params.amount
 
     })
 
     this.merchantId$.forEach(data => {
       this.merchantId = data;
       this.merchant = this.merchantId[0].idMerchant
     });
 
   }
 
 
   selectForm() {
     this.select = 0
 
   }
   selectQRCode() {
     this.select = 1
 
 
 
   }
   checkResponse() {
     if (this.signalrService.response != "") {
       return true;
 
     }
     return false
 
   }*/

}
