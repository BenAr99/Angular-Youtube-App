import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ErrorWarningDirective } from './directives/error-warning.directive';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardNameComponent } from './components/card-name/card-name/card-name.component';
import { CardFormComponent } from './components/card-form/card-form/card-form.component';

@NgModule({
  declarations: [NotFoundComponent, ErrorWarningDirective, CardNameComponent, CardFormComponent],
  imports: [
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  exports: [
    ErrorWarningDirective,
    CardNameComponent,
    CardFormComponent,
  ],
})
export class SharedModule { }
