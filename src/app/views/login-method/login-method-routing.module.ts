import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMethodPage } from './login-method.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMethodPageRoutingModule {}
