import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private serviceAuth: AuthService) { }

  ngOnInit(): void {
  }

  loginFB(): void{
    /*var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result =>
    {
      console.log(result);
    });*/

    console.log('FB');

    this.serviceAuth.facebookLogin();
  }

}
