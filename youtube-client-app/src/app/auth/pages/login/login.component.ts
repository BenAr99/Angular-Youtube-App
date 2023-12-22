import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoggedIn?:boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    authService.isLoggedIn.subscribe({
      next: (value) => {
        this.isLoggedIn = value;
      },
    });
  }

  login() {
    this.authService.isLoggedIn.next(true);
    this.router.navigate(['/home']);
    localStorage.setItem('token', String(this.isLoggedIn));
  }
}
