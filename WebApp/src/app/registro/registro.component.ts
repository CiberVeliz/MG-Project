import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService]
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarUsuario()
  {
    this.authService.registrarUsuario('dev@dev.com', '123456').then((result) =>
    {
      this.router.navigate(['login']);
    })
    .catch( err => console.log(err));
  }

}
