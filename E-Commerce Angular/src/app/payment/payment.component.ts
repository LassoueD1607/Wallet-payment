import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  loggedUser: any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.loggedUser = this.service.getLoggedUser()

  }


}
