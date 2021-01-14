import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private serviceAuth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  formInicio = this.formBuilder.group(
    {
      mail: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]]
    }
  );

  iniciarSesion()
  {
    let values = this.formInicio.value;

    this.serviceAuth.login(values.mail, values.password);
  }

  facebookLogin(): void{
    try
    {
      this.serviceAuth.facebookLogin();
    }
    catch(err)
    {
      //console.log(err);
    }
  }

  googleLogin(): void{
    try
    {
      this.serviceAuth.googleLogin();
    }
    catch(err)
    {
      //console.log(err);
    }
  }

}
