import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { validatorDate } from '../../../shared/validators/dateValidator';
import { requiredValidator } from '../../../shared/validators/requiredValidator';
import { minLengthValidator } from '../../../shared/validators/minLengthValidator';
import { maxLengthValidator } from '../../../shared/validators/maxLengthValidator';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  createCardForm: FormGroup;

  constructor() {
    this.createCardForm = this.initForm();
  }

  initForm():FormGroup {
    return new FormGroup({
      title: new FormControl('', [
        requiredValidator('название'),
        minLengthValidator(3, 'название'),
        maxLengthValidator(20, 'название'),
      ]),
      description: new FormControl('', maxLengthValidator(255, 'описание')),
      img: new FormControl('', requiredValidator('страницу')),
      video: new FormControl('', requiredValidator('видео')),
      date: new FormControl('', [
        requiredValidator('дату'),
        validatorDate,
      ]),
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
