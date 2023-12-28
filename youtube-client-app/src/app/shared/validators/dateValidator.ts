import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validatorDate(control:AbstractControl):ValidationErrors | null {
  const value = new Date(control.value).getTime();
  const todayDate = new Date().getTime();
  if (todayDate - value > 0) {
    return null;
  }
  return { date: 'Дата недействительна' };
}
