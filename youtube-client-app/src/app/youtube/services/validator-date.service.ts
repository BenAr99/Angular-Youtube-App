import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorDateService {
  validatorDate():ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
      const value = new Date(control.value).getTime();
      const todayDate = new Date().getTime();
      if (todayDate - value > 0) {
        return null;
      }
      return { date: true };
    };
  }
}
