import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import { MatSnackBar } from "@angular/material/snack-bar";

//import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()

export class AuthService {

  constructor(public localAuth:AngularFireAuth, private snackBar: MatSnackBar, private router: Router) { }

   showMessage(message: string) 
   {
      this.snackBar.open(message, void 0, {
         duration: 3000,
         panelClass: ['blue-snackbar']
      });
    }

  registrarUsuario(email: string, password: string)
  {
    return new Promise((resolve, reject) => {
      this.localAuth.createUserWithEmailAndPassword(email, password).then( userData => resolve(userData), err => reject(err));
    })
  }

  async login(mail, password)
  { 
    this.localAuth.signInWithEmailAndPassword(mail, password).then( result => {
      localStorage.setItem("user", result.user.uid);
      this.router.navigate(['paises']);
    })
    .catch(err => {
      this.showMessage('Error al iniciar sesión, revise sus credenciales.')
    });
  }

  async googleLogin()
  {
    let provider = new firebase.auth.GoogleAuthProvider();
    
    this.localAuth.signInWithPopup(provider).then( result => {
      localStorage.setItem("user", result.user.uid);
      this.router.navigate(['paises']);
    })
    .catch(err => {
      this.showMessage('No se pudo iniciar sesión con Google.')
      //console.log(err);
    });
  }

  async facebookLogin()
  {
    let provider = new firebase.auth.FacebookAuthProvider();

    this.localAuth.signInWithPopup(provider).then( result => {
      localStorage.setItem("user", result.user.uid);
      this.router.navigate(['paises']);
    })
    .catch(err => {
      this.showMessage('No se pudo iniciar sesión con Facebook.')
      //console.log(err);
    });
  }

  userLogged()
  {
    let user_string = localStorage.getItem("user");

    return !(user_string === null || user_string === undefined);
  }

  async logout()
  {
    localStorage.removeItem("user");
    this.localAuth.signOut();

    this.router.navigate(['login']);
  }
}
