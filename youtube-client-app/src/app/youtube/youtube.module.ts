import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoModule } from './components/video/video.module';
import { DetailVideoPreviewComponent } from './pages/detail-video-preview/detail-video-preview.component';
import { VideoPreviewListComponent } from './pages/video-preview-list/video-preview-list.component';

const routes: Routes = [
  {
    path: '',
    component: VideoPreviewListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailVideoPreviewComponent,
  },
];

@NgModule({
  declarations: [
    DetailVideoPreviewComponent,
    VideoPreviewListComponent,
  ],
  providers: [
    DatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    VideoModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class YoutubeModule { }
