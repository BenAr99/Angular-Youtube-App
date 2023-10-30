import { Component, Input, OnInit } from '@angular/core';
import { VideoPreview } from '../../../../shared/interfaces/video-preview.interface';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss'],
})
export class VideoPreviewComponent implements OnInit {
  @Input() videoCard?: VideoPreview;

  ngOnInit() {
    console.log(this.videoCard);
    console.log(this.videoCard?.snippet.title, 'sdfg');
  }
}
