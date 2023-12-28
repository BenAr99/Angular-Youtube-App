import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function passwordValidator(control:AbstractControl): ValidationErrors | null {
  if (Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+$/)) {
    return {
      password: 'введите надежный пароль:'
        + 'сочетание как прописных, так и строчных букв\n'
        + 'смесь букв и цифр\n'
        + 'включение хотя бы одного специального символа, например, ! @ # ? ]',
    };
  }
  return null;
}
