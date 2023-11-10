import {
  Component, Input,
} from '@angular/core';
import { VideoPreview } from '../../interfaces/video-preview.interface';
import { VideoResponseService } from '../../../video-response.service';
import { FilterChange } from '../../interfaces/filter-change.interface';

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
