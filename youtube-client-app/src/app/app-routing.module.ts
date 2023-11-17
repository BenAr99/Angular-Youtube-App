import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPreviewListComponent } from './youtube/pages/video-preview-list/video-preview-list.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { DetailVideoPreviewComponent } from './youtube/pages/detail-video-preview/detail-video-preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: VideoPreviewListComponent },
  { path: 'detail/:id', component: DetailVideoPreviewComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
