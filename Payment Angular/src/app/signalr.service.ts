import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor(private router: Router) { }

  response = "aa";
  public idTransaction: string = "";

  hubConnection!: signalR.HubConnection;

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7270/toastr', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Hub Connection Started!');
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  /* private getConnectionId = () => {
     this.hubConnection.invoke('Getconnectionid')
       .then((data) => {
         //console.log(data);
         //this.connectionId = data;
       });
   }*/



  askServerListener() {

    this.hubConnection.on(this.idTransaction, (someText) => {
      this.response = someText;


      setTimeout(() => {
        this.router.navigate(["/"]).then(result => { window.location.href = 'http://localhost:4200/purchases'; });
      }, 3000)


    })
  }
  setIdTransaction(idTrans: string) {
    this.idTransaction = idTrans

  }
  getIdTranscation() {
    return this.idTransaction;
  }
}
