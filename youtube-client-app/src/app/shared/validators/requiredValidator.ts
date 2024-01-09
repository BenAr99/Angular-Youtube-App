import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function requiredValidator(nameForm:string) {
  return (control:AbstractControl): ValidationErrors | null => {
    if (Validators.required(control)) {
      return { required: `Пожалуйста введите ${nameForm}` };
    }
    return null;
  };
}
