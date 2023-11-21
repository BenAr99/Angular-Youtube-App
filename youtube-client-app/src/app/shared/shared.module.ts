import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    ButtonComponent,
  ],
})
export class SharedModule { }
