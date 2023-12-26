import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl, FormGroup, Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoggedIn?:boolean;

  loginForm = new FormGroup({
    email: new FormControl(
      '',
      [Validators.email, Validators.required],
    ),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+$/),
      Validators.required]),
  });

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
    if (this.loginForm.valid) {
      this.authService.isLoggedIn.next(true);
      this.router.navigate(['/home']);
      localStorage.setItem('token', String(this.isLoggedIn));
    }
  }
}
