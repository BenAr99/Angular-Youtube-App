import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [HeaderProfileComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
