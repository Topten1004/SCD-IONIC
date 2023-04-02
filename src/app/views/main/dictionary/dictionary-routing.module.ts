import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictionaryPage } from './dictionary.page';

const routes: Routes = [
  {
    path: '',
    component: DictionaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictionaryPageRoutingModule {}
