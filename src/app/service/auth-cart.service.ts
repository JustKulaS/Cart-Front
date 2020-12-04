import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthCartService {

  constructor(public angularFireAuth:AngularFireAuth) {}

  public createUser(email:string, password:string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
  }
}
