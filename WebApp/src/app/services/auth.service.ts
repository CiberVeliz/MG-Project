import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";

//import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()

export class AuthService {

  //public user:User;

  constructor(public localAuth:AngularFireAuth) { }

  registrarUsuario(email: string, password: string)
  {
    return new Promise((resolve, reject) => {
      this.localAuth.createUserWithEmailAndPassword(email, password).then( userData => resolve(userData), err => reject(err));
    })
  }

  async googleLogin()
  {
    try
    {
      return this.localAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(error)
    {
      console.log(error);
    }
  }

  async facebookLogin()
  {
    try
    {
      return this.localAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
    catch(error)
    {
      console.log(error);
    }
  }
  
  register()
  {

  }
}
