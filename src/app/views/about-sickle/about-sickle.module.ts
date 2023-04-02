import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSicklePageRoutingModule } from './about-sickle-routing.module';

import { AboutSicklePage } from './about-sickle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSicklePageRoutingModule
  ],
  declarations: [AboutSicklePage]
})
export class AboutSicklePageModule {}
