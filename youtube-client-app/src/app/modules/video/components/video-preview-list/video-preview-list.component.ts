import {
  Component, Input, OnChanges,
} from '@angular/core';
import { filter } from 'rxjs';
import { VideoPreview } from '../../../../shared/interfaces/video-preview.interface';
import { VideoResponseService } from '../../../../video-response.service';
import { FilterChange } from '../../../../shared/interfaces/filter-change.interface';
import { SortStatus } from '../../../../shared/enum/sort-button-status.enum';

@Component({
  selector: 'app-video-preview-list',
  templateUrl: './video-preview-list.component.html',
  styleUrls: ['./video-preview-list.component.scss'],
})
export class VideoPreviewListComponent {
  @Input() searchValue?: FilterChange;

  videoData: VideoPreview[] = [];

  constructor(private dataService: VideoResponseService) {
    this.videoData = dataService.getData();
  }
}
