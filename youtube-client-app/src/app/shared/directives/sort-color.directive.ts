import {
  Directive, HostBinding, Input, OnChanges,
} from '@angular/core';
import { MarkingTime } from '../../youtube/enum/marking-time.enum';

@Directive({
  selector: '[appSortColor]',
  standalone: true,
})

export class SortColorDirective implements OnChanges {
  @HostBinding('style.border-bottom')
    borderBottom = 'none';

  @Input() dateVideo?: Date;

  todayDate = new Date();

  ngOnChanges() {
    if (this.dateVideo) {
      this.colorDetection(this.todayDate.getTime() - this.dateVideo.getTime());
    }
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
