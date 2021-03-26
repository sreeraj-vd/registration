import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: 'register', component: RegisterComponent },{ path: 'signup', component: SignupComponent,canActivate:[] },{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
