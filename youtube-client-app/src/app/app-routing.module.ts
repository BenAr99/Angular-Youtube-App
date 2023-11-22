import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPreviewListComponent } from './youtube/pages/video-preview-list/video-preview-list.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { DetailVideoPreviewComponent } from './youtube/pages/detail-video-preview/detail-video-preview.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: LoginComponent },
  { path: 'home', component: VideoPreviewListComponent, canActivate: [authGuard] },
  { path: 'detail/:id', component: DetailVideoPreviewComponent, canActivate: [authGuard] },
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
