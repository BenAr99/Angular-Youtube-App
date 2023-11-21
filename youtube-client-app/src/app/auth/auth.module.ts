import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from '../shared/components/input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
  ],
})
export class AuthModule { }
