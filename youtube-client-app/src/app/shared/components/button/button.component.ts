import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [
    NgClass,
  ],
})
export class ButtonComponent {
  @Input() offBackgroundButton?: boolean;
}
