import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService]
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  formRegistro = this.formBuilder.group(
    {
      mail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("^.{6,64}$")]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.checkPasswords }
  );
  
  ngOnInit(): void {
  }

  registrarUsuario()
  {
    let values = this.formRegistro.value;

    this.authService.registrarUsuario(values.mail, values.password).then((result) =>
    {
      this.showMessage('Usuario Registrado correctamente')
      this.router.navigate(['login']);
    })
    .catch( err => {
        if(err.code)
        {
          if(err.code === 'auth/email-already-in-use')
          {
            this.showMessage('Error, ya se encuentra registrado este correo.')
          }
        }
        else
        {
          this.showMessage('Error al registrarse.')
        }
      }
    );
  }

  checkPasswords(group: FormGroup) 
  {
    let pass = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;

    return pass !== confirmPassword ? { match: true } : null;      
  }

  showMessage(message: string) {
    this.snackBar.open(message, void 0, {
       duration: 3000,
       panelClass: ['blue-snackbar'],
       verticalPosition: 'top',
       horizontalPosition: 'center',
    });
  }

  facebookLogin()
  {
    this.authService.facebookLogin();
  }

  googleLogin()
  {
    this.authService.googleLogin();
  }

}
