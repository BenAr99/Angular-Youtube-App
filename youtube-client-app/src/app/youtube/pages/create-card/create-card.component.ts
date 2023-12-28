import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorDateService } from '../../services/validator-date.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  createCardForm: FormGroup;

  constructor(private validatorDate: ValidatorDateService) {
    this.createCardForm = this.initForm();
  }

  initForm():FormGroup {
    return new FormGroup({
      title: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required]),
      description: new FormControl('', Validators.maxLength(255)),
      img: new FormControl('', Validators.required),
      video: new FormControl('', Validators.required),
      date: new FormControl('', [
        this.validatorDate.validatorDate(),
        Validators.required]),
    });
  }

  createCard(): void {
    if (this.createCardForm.valid) {
      console.log('карта создалась');
    }
  }

  reset():void {
    this.createCardForm.reset();
  }
}
