import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Signup} from './signup'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {



constructor(private store:AngularFirestore) { }
saveUser(model:Signup){
  console.log(model)
  this.store.collection("users").add({...model})
}
readUser(){
  return this.store.collection("users").snapshotChanges()
}
editUser(model:Signup){
this.store.doc("users/").update(model)
}

deleteUser(model:Signup){
this.store.doc("users/"+model.id).delete()
}
}
