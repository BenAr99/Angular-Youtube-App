import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPreviewComponent } from './video-preview/video-preview.component';
import { VideoRatingListComponent } from './video-rating-list/video-rating-list.component';
import { VideoPreviewListComponent } from '../../pages/video-preview-list/video-preview-list.component';
import { SortColorDirective } from '../../directives/sort-color.directive';
import { FilterVideoPipe } from '../../pipes/filter-video.pipe';
import { SortVideoDataPipe } from '../../pipes/sort-video-data.pipe';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@NgModule({
  declarations: [
    VideoPreviewComponent,
    VideoPreviewListComponent,
    VideoRatingListComponent,
    SortColorDirective,
    FilterVideoPipe,
    SortVideoDataPipe,
  ],
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  exports: [
    VideoPreviewComponent,
    VideoPreviewListComponent,
    FilterVideoPipe,
    VideoRatingListComponent,
    SortColorDirective,
  ],
  providers: [
    FilterVideoPipe,
  ],
})
export class VideoModule { }
