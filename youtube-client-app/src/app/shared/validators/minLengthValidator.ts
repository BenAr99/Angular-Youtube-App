import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function minLengthValidator(minLength:number, nameForm:string) {
  return (control:AbstractControl): ValidationErrors | null => {
    if (Validators.minLength(minLength)(control)) {
      return { minLength: `${nameForm} имеет минимальное значение` };
    }
    return null;
  };
}
