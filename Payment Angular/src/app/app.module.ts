import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { QRcodeComponent } from './qrcode/qrcode.component';
import { MerchantService } from './merchant.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { ValidationComponent } from './validation/validation.component';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    QRcodeComponent,
    SignupComponent,
    ValidationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MerchantService],
  bootstrap: [AppComponent]
})
export class AppModule { }  
