import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ErrorWarningDirective } from './directives/error-warning.directive';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent, ErrorWarningDirective],
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  exports: [
    ErrorWarningDirective,
  ],
})
export class SharedModule { }
