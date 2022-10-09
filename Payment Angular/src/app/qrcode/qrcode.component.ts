import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignalrService } from '../signalr.service';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRcodeComponent implements OnInit {
  response = "";

  constructor(public signalrService: SignalrService) {


  }

  ngOnInit(): void {
    this.signalrService.startConnection();
    this.signalrService.askServerListener();

  }
  ngOnDestroy() {
    console.log("Connection destroyed")
    this.signalrService.hubConnection.off("askServerResponse");
  }
}
