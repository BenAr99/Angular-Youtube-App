import {
  Component, Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() name?: string;

  inputValue?: string;
}
