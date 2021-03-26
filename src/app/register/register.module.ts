import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [RegisterComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class RegisterModule { }
