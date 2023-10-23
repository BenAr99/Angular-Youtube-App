import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { VideoRatingListComponent } from './components/video-rating-list/video-rating-list.component';

@NgModule({
  declarations: [VideoPreviewComponent, VideoRatingListComponent, VideoRatingListComponent],
  imports: [
    CommonModule,
  ],
})
export class VideoModule { }
