import {
  Component, Input,
} from '@angular/core';
import {
  FormsModule, NgControl, ReactiveFormsModule, ValidationErrors,
} from '@angular/forms';
import { ValueErrors } from '../../../auth/enum/value-errors.enum';
import { SharedModule } from '../../shared.module';

type FunctionChange = (value:string) => void;
type FunctionTouched = () => void;

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

  errorText?: string;

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  onChange: FunctionChange = () => {};

  onTouched: FunctionTouched = () => {};

  value = '';

  detectionError(error?: ValidationErrors | null) {
    this.errorText = '';
    if (error) {
      const currentError = Object.keys(error)[0];
      if (error['required']) {
        this.errorText = `Пожалуйста введите ${this.id}`;
      } else if (currentError === 'minlength' || currentError === 'maxlength') {
        this.errorText = `${this.id} ${ValueErrors[currentError as keyof typeof ValueErrors]}`;
      } else {
        this.errorText = ValueErrors[currentError as keyof typeof ValueErrors];
      }
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: FunctionChange): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: FunctionTouched): void {
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

  getErrors() {
    return this.ngControl.control?.errors;
  }
}
