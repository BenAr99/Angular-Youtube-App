import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchModule } from './components/search/search.module';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [HeaderProfileComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchModule,
    YoutubeModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
