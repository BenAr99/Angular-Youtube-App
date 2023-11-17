import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VideoModule } from './components/video/video.module';
import { DetailVideoPreviewComponent } from './pages/detail-video-preview/detail-video-preview.component';

@NgModule({
  declarations: [
    DetailVideoPreviewComponent,
  ],
  providers: [
    DatePipe,
  ],
  imports: [
    CommonModule,
    VideoModule,
  ],
})
export class YoutubeModule { }
