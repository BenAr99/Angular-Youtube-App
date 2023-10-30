import { Component, OnInit } from '@angular/core';
import { VideoPreview } from '../../../../shared/interfaces/video-preview.interface';
import { VideoResponseService } from '../../../../video-response.service';

@Component({
  selector: 'app-video-preview-list',
  templateUrl: './video-preview-list.component.html',
  styleUrls: ['./video-preview-list.component.scss'],
})
export class VideoPreviewListComponent implements OnInit {
  videoData?:VideoPreview[];

  constructor(private dataService: VideoResponseService) {
  }

  ngOnInit():void {
    this.videoData = this.dataService.getData();
  }
}
