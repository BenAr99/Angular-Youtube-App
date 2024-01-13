import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoModule } from './components/video/video.module';
import { DetailVideoPreviewComponent } from './pages/detail-video-preview/detail-video-preview.component';
import { VideoPreviewListComponent } from './pages/video-preview-list/video-preview-list.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CardShellComponent } from '../shared/components/card-shell/card-shell.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { InputComponent } from '../shared/components/input/input.component';
import { CardFormComponent } from '../shared/components/card-form/card-form.component';
import { CardNameComponent } from '../shared/components/card-name/card-name.component';
import { SortColorDirective } from '../shared/directives/sort-color.directive';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    DetailVideoPreviewComponent,
    VideoPreviewListComponent,
    CreateCardComponent,
  ],
  providers: [
    HttpClient,
    DatePipe,
  ],
  imports: [
    CommonModule,
    VideoModule,
    CardShellComponent,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    CardFormComponent,
    CardNameComponent,
    SortColorDirective,
    YoutubeRoutingModule,
  ],
})
export class YoutubeModule { }
