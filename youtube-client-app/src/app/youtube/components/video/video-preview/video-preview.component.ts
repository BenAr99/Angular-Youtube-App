import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoPreview } from '../../../interfaces/video-preview.interface';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss'],
})
export class VideoPreviewComponent {
  @Input() videoCard?: VideoPreview;

  constructor(private router: Router) {
  }

  navigateToDetailCard() {
    this.router.navigate([`home/detail/${this.videoCard?.id}`]);
  }
}
