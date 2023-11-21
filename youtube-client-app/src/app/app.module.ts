import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterOutlet,
    AppRoutingModule,
    YoutubeModule,
    FormsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
