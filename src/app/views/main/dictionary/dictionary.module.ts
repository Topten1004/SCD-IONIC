import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictionaryPageRoutingModule } from './dictionary-routing.module';

import { DictionaryPage } from './dictionary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictionaryPageRoutingModule
  ],
  // declarations: [DictionaryPage]
})
export class DictionaryPageModule {}
