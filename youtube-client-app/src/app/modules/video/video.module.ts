import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { VideoRatingListComponent } from './components/video-rating-list/video-rating-list.component';
import { VideoPreviewListComponent } from './components/video-preview-list/video-preview-list.component';

@NgModule({
  declarations: [VideoPreviewComponent, VideoPreviewListComponent, VideoRatingListComponent],
  imports: [
    CommonModule,
  ],
})
export class VideoModule { }
