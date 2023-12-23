import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss'],
})
export class ExitComponent {
  valueButton = '';

  constructor(
    private authService:AuthService,
  ) {
    this.authService.isLoggedIn.subscribe({
      next: (value) => {
        this.valueButton = 'login';
        if (value) {
          this.valueButton = 'exit';
        }
      },
    });
  }
}
