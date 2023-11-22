import { Component, Input } from '@angular/core';
import { VideoStatistic } from '../../../interfaces/video-statistic.interface';

@Component({
  selector: 'app-video-rating-list',
  templateUrl: './video-rating-list.component.html',
  styleUrls: ['./video-rating-list.component.scss'],
})
export class VideoRatingListComponent {
  @Input() videoCard?: VideoStatistic;
}
