import { AuthService } from './services/auth.service';
import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'MG Project';
  logged = false;

  constructor(private titleService: Title, private authService: AuthService, private router: Router)
  {
    this.titleService.setTitle('MG Project');
    this.router.events.subscribe((val) => this.logged = authService.userLogged())
  }

  logout()
  {
    this.authService.logout();
  }
}