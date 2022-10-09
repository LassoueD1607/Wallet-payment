import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  email: string = "";
  password: string = "";
  error = 0;


  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void { }

  /*signUp() {
    var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email.toLowerCase(),
      phoneNumber: this.phoneNumber,
      password: this.password,
      bankName: "",
      rIbCode: ""
    }
    if (user.firstName != "" && user.lastName != "" && user.email != "" && user.phoneNumber != "" && user.password != "" && emailReg.test(user.email)) {
      this.service.addUser(user).subscribe();
      this.route.navigate(['/buy']);
    }

    else
      this.error = 1;
    setTimeout(() => { this.error = 0 }, 3000)

    console.log(user)
  }*/
}
