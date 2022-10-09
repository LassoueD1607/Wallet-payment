import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../crud-service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  responseStatus = 0;
  response$!: Observable<any[]>;
  response: any[] = [];
  status = ""

  constructor(private service: CrudService, private route: Router) {
    this.response$ = service.getResponse();


  }

  ngOnInit(): void {
    this.response$.forEach(data => {
      this.response = data;
    });
    setTimeout(() => {
      this.status = this.response[0].responseMessage;
      if (this.status == "Valid")
        this.responseStatus = 2
      else if (this.status == "Invalid Customer")
        this.responseStatus = 1
      else if (this.status == "Incorrect Password")
        this.responseStatus = 3
      else if (this.status == "Balance insufficent")
        this.responseStatus = 4



    }, 200)




  }
  clickMe() {
    this.status = this.response[0].responseMessage;
    if (this.status == "Succees")
      this.responseStatus = 2
    else if (this.status == "Failure")
      this.responseStatus = 1



  }

}
