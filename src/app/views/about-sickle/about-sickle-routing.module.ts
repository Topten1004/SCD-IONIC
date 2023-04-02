import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSicklePage } from './about-sickle.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSicklePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSicklePageRoutingModule {}
