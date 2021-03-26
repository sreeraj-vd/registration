import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../login';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

model=new Login("","")
uname:any
registerlist:any=[]
i:any
pwd:any
returnUrl:string=""
loginsucess:string=""

constructor(private router:Router,private user:RegisterService) { }

ngOnInit(): void {
  this.user.readUser().subscribe(data=>{
    this.registerlist=data.map((doc)=>{
      return{
        id: doc.payload.doc.id,
        ...doc.payload.doc.data() as {}
      } as unknown  as Login

    })
  })

  this.returnUrl="/register/signup"
}



save(){
 
  this.uname=this.model.username
  this.pwd=this.model.password
  for(let i of this.registerlist){
    if(this.uname==i.username && this.pwd==i.password){
      this.loginsucess="true"
      localStorage.setItem("isLoggedIn","true")
      localStorage.setItem("username",this.model.username)
      this.router.navigate([this.returnUrl])  
    }
  }


  if(this.loginsucess="false")
  alert("login Failed")
  

}
}