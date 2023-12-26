import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CardShellComponent } from '../shared/components/card-shell/card-shell.component';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    CardShellComponent,
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthModule { }
