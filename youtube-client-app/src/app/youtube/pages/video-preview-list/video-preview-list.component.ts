import {
  Component, OnInit,
} from '@angular/core';
import {
  debounceTime, filter, map, switchMap,
} from 'rxjs';
import { VideoPreview } from '../../interfaces/video-preview.interface';
import { VideoResponseService } from '../../../core/services/video-response.service';
import { FilterChangeService } from '../../services/filter-change.service';
import { SortSetting } from '../../interfaces/sort-setting.interface';
import { VideoStatistic } from '../../interfaces/video-statistic.interface';

@Component({
  selector: 'app-video-preview-list',
  templateUrl: './video-preview-list.component.html',
  styleUrls: ['./video-preview-list.component.scss'],
})
export class VideoPreviewListComponent implements OnInit {
  videoData: VideoPreview[] = [];

  statistics?:VideoStatistic[];

  sortValue?:SortSetting;

  constructor(
    private dataService: VideoResponseService,
    public filterChangeService: FilterChangeService,
  ) {
  }

  ngOnInit(): void {
    this.filterChangeService.sortValueSubject.subscribe({
      next: (data) => {
        this.sortValue = data;
      },
    });
    this.filterChangeService.searchValueSubject.pipe(
      debounceTime(1000),
      filter((item) => item.length >= 3),
      switchMap((value) => this.dataService.getVideoList(value)),
      map((data) => {
        return data.map((video) => {
          return video.id.videoId;
        });
      }),
      switchMap((idArray) => this.dataService.getVideoPreviews(idArray)),
    ).subscribe({
      next: (data) => {
        this.videoData = data;
      },
      error: (err) => console.error(`Произошла ошибка: ${err}`),
    });
  }
}
