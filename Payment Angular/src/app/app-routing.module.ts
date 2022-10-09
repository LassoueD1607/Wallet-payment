import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ValidationComponent } from './validation/validation.component';


const routes: Routes = [
  { path: 'validation', component: ValidationComponent },

  { path: 'signup', component: SignupComponent },
  { path: '', component: MainComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
