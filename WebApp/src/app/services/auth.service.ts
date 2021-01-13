import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import { MatSnackBar } from "@angular/material/snack-bar";

//import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()

export class AuthService {

  //public user:User;

  constructor(public localAuth:AngularFireAuth, public snackBar: MatSnackBar, private router: Router) { }

   showMessage(message: string, action: string) {
      this.snackBar.open(message, action, {
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

  async googleLogin()
  {
    let provider = new firebase.auth.GoogleAuthProvider();
    
    this.localAuth.signInWithPopup(provider).then( result => {
      this.router.navigate(['paises']);
    })
    .catch(err => {
      console.log('Entro')
      this.showMessage('No se pudo iniciar sesión con Google.', 'cerrar')
      //console.log(err);
    });
  }

  async facebookLogin()
  {
    let provider = new firebase.auth.FacebookAuthProvider();

    this.localAuth.signInWithPopup(provider).then( result => {
      this.router.navigate(['paises']);
    })
    .catch(err => {
      console.log('Entro')
      this.showMessage('No se pudo iniciar sesión con Facebook.', 'cerrar')
      //console.log(err);
    });
  }
  
  register()
  {

  }
}
