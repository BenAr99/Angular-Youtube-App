import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { VideoModule } from './youtube/components/video/video.module';
import { NotFoundComponent } from './youtube/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    VideoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
