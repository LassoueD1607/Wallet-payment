import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

  }
  user = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    bankName: "",
    RIB: "",
    password: "",
    password2: ""
  }

  onSign() {
    console.log(this.user)
  }
}
