import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CardShellComponent } from '../shared/components/card-shell/card-shell.component';
import { CardFormComponent } from '../shared/components/card-form/card-form.component';
import { CardNameComponent } from '../shared/components/card-name/card-name.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CardShellComponent,
    CardFormComponent,
    CardNameComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthModule { }
