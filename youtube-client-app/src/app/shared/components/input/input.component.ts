import {
  Component, Input,
} from '@angular/core';
import {
  FormsModule, NgControl, ReactiveFormsModule, ValidationErrors,
} from '@angular/forms';
import { ValueErrors } from '../../../auth/enum/value-errors.enum';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
})
export class InputComponent {
  @Input() id!: string;

  @Input() type = 'text';

  @Input() placeholder = '';

  @Input() disabled = false;

  errorOutPut?: string;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  value = '';

  detectionError(error: ValidationErrors | null | undefined) {
    this.errorOutPut = '';
    if (error !== null && error !== undefined) {
      const currentError = Object.keys(error)[0];
      if (error['required']) {
        this.errorOutPut = `Пожалуйста введите ${this.id}`;
      } else if (currentError === 'minlength' || currentError === 'maxlength') {
        this.errorOutPut = `${this.id} ${ValueErrors[currentError as keyof typeof ValueErrors]}`;
      } else {
        this.errorOutPut = ValueErrors[currentError as keyof typeof ValueErrors];
      }
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: string): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateChanges(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
    this.onTouched();
  }
}
