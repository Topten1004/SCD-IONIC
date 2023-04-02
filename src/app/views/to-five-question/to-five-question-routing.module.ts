import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToFiveQuestionPage } from './to-five-question.page';

const routes: Routes = [
  {
    path: '',
    component: ToFiveQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToFiveQuestionPageRoutingModule {}
