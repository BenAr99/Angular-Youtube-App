import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function maxLengthValidator(maxLength:number, nameForm:string) {
  return (control:AbstractControl): ValidationErrors | null => {
    if (Validators.maxLength(maxLength)(control)) {
      return { maxLength: `${nameForm} имеет минимальное значение` };
    }
    return null;
  };
}
