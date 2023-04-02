import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationPage } from './medication.page';

const routes: Routes = [
  {
    path: '',
    component: MedicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicationPageRoutingModule {}
