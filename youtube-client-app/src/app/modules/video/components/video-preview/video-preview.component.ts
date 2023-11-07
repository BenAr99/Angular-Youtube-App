import { Component, Input } from '@angular/core';
import { VideoPreview } from '../../../../shared/interfaces/video-preview.interface';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss'],
})
export class VideoPreviewComponent {
  @Input() videoCard?: VideoPreview;
}
