import {
  Component, OnInit,
} from '@angular/core';
import {
  debounceTime, filter,
} from 'rxjs';
import { VideoPreview } from '../../interfaces/video-preview.interface';
import { VideoResponseService } from '../../../core/services/video-response.service';
import { FilterChangeService } from '../../services/filter-change.service';

@Component({
  selector: 'app-video-preview-list',
  templateUrl: './video-preview-list.component.html',
  styleUrls: ['./video-preview-list.component.scss'],
})
export class VideoPreviewListComponent implements OnInit {
  videoData: VideoPreview[] = [];

  constructor(
    private dataService: VideoResponseService,
    public filterChangeService: FilterChangeService,
  ) {
  }

  ngOnInit(): void {
    this.filterChangeService.filterChangeBySubject.pipe(
      debounceTime(1000),
      filter((item) => item.length > 3),
    ).subscribe({
      next: (data) => {
        this.dataService.getData(data).subscribe((item) => {
          this.videoData = item;
        });
      },
      error: (err) => console.error(`Произошла ошибка: ${err}`),
    });
  }
}
