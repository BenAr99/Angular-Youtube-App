import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderProfileComponent, HeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
