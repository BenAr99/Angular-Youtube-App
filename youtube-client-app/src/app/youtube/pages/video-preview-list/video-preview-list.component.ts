import {
  Component, DoCheck,
} from '@angular/core';
import { VideoPreview } from '../../interfaces/video-preview.interface';
import { VideoResponseService } from '../../../core/services/video-response.service';
import { FilterChange } from '../../interfaces/filter-change.interface';
import { FilterChangeService } from '../../services/filter-change.service';

@Component({
  selector: 'app-video-preview-list',
  templateUrl: './video-preview-list.component.html',
  styleUrls: ['./video-preview-list.component.scss'],
})
export class VideoPreviewListComponent implements DoCheck {
  searchValue?: FilterChange;

  videoData: VideoPreview[] = [];

  constructor(
    private dataService: VideoResponseService,
    public filterChangeService: FilterChangeService,
  ) {
    this.videoData = dataService.getData();
  }

  ngDoCheck() {
    this.searchValue = this.filterChangeService.filterChange;
  }
}
