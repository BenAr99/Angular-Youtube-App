import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  login() {
    this.authService.isLoggedIn = !this.authService.isLoggedIn;
    this.router.navigate(['/home']);
    localStorage.setItem('token', String(this.authService.isLoggedIn));
  }
}
