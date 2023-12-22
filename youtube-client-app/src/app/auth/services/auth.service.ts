import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.isLoggedIn.next(false);
  }
}
