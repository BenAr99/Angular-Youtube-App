import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoPreviewListComponent } from './pages/video-preview-list/video-preview-list.component';
import { DetailVideoPreviewComponent } from './pages/detail-video-preview/detail-video-preview.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';

const routes: Routes = [
  {
    path: '',
    component: VideoPreviewListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailVideoPreviewComponent,
  },
  {
    path: 'createCard',
    component: CreateCardComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class YoutubeRoutingModule { }
