import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function emailValidator(control:AbstractControl): ValidationErrors | null {
  if (Validators.email(control)) {
    return { email: 'Адрес электронной почты для входа недействителен' };
  }
  return null;
}
