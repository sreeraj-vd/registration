


import { Signup } from '../signup';
import {RegisterService} from '../register.service'
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private user:RegisterService,private  router:Router,private auth:AuthService) { }
registerlist:Signup[]=[]
arr=[]
  ngOnInit(): void {
    this.user.readUser().subscribe(data=>{
      this.registerlist=data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as{}
        }as Signup
      })
    })
  }
  model=new Signup("","","","")

  reg(){
  console.log(this.model)
  

if(this.model.id==null){
  this.user.saveUser(this.model)
  }
  else{
    this.user.editUser(this.model)
  }
}
  edit(arr:Signup){
  this.model=arr
  }
  delete(arr:Signup){
  this.user.deleteUser(arr)
  }

logout(){
  this.auth.logout()
  this.router.navigate(["register/login"])

}
}