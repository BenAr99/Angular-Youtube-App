import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl, FormGroup,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { minLengthValidator } from '../../../shared/validators/minLengthValidator';
import { requiredValidator } from '../../../shared/validators/requiredValidator';
import { emailValidator } from '../../../shared/validators/emailValidator';
import { passwordValidator } from '../../../shared/validators/passwordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn?:boolean;

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = this.initForm();
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe({
      next: (value) => {
        this.isLoggedIn = value;
      },
    });
  }

  initForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(
        '',
        [requiredValidator('почту'), emailValidator],
      ),
      password: new FormControl('', [
        requiredValidator('пароль'),
        minLengthValidator(8, 'пароль'),
        passwordValidator]),
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.isLoggedIn.next(true);
      this.router.navigate(['/home']);
      localStorage.setItem('token', String(this.isLoggedIn));
    }
  }
}
