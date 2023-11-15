import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPreviewListComponent } from './youtube/pages/video-preview-list/video-preview-list.component';
import { NotFoundComponent } from './youtube/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: VideoPreviewListComponent },
  { path: 'error', component: NotFoundComponent },
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
