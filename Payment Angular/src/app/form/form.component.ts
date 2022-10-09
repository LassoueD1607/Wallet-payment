import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  telephone: string = ""
  password: string = ""
  @Input() value = 0;

  constructor(private service: MerchantService, private route: Router) { }

  ngOnInit(): void {
  }

  onContinue() {

  }



  /* display() {
     var user = {
       phoneNumber: this.telephone,
       password: this.password,
       value: this.value
     }
     this.service.addUser(user).subscribe();
 
 
   }*/





}
