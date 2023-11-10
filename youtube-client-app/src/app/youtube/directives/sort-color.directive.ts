import {
  Directive, HostBinding, Input, OnChanges,
} from '@angular/core';
import { MarkingTime } from '../enum/marking-time.enum';

@Directive({
  selector: '[appSortColor]',
})
export class SortColorDirective implements OnChanges {
  @HostBinding('style.border-bottom')
    borderBottom = 'none';

  @Input() dateVideo!: string | number | Date; // воскл знак

  todayDate = new Date().getTime();

  ngOnChanges() {
    this.dateVideo = new Date(this.dateVideo).getTime();
    this.colorDetection(this.todayDate - this.dateVideo);
  }

  colorDetection(pastTense: number) {
    if (MarkingTime.sixMonths < pastTense) {
      this.borderBottom = '5px solid red';
    }
    if (MarkingTime.oneMonths < pastTense && pastTense < MarkingTime.sixMonths) {
      this.borderBottom = '5px solid orange';
    }
    if (MarkingTime.sevenDays < pastTense && pastTense < MarkingTime.oneMonths) {
      this.borderBottom = '5px solid green';
    }
    if (MarkingTime.sevenDays > pastTense) {
      this.borderBottom = '5px solid blue';
    }
  }
}
