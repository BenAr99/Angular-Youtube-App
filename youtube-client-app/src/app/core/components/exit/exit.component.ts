import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss'],
})
export class ExitComponent implements OnInit {
  valueButton = '';

  constructor(
    private authService:AuthService,
  ) {

  }

  ngOnInit(): void {
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
