import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderProfileComponent } from './components/header-profile/header-profile.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchModule } from './components/search/search.module';
import { ExitComponent } from './components/exit/exit.component';
import { ButtonComponent } from '../shared/components/button/button.component';

@NgModule({
  declarations: [
    HeaderProfileComponent,
    HeaderComponent,
    ExitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchModule,
    ButtonComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
