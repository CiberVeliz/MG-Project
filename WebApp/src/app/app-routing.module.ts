import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PaisesComponent } from './paises/paises.component';
import { PaisComponent } from './pais/pais.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pais', component: PaisComponent, canActivate: [AuthGuard] },
  { path: 'paises', component: PaisesComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }
