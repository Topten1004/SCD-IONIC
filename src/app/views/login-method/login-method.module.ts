import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMethodPageRoutingModule } from './login-method-routing.module';

import { LoginMethodPage } from './login-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginMethodPageRoutingModule
  ],
  declarations: [LoginMethodPage]
})
export class LoginMethodPageModule {}
