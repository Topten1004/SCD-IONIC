import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToFiveQuestionPageRoutingModule } from './to-five-question-routing.module';

import { ToFiveQuestionPage } from './to-five-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToFiveQuestionPageRoutingModule
  ],
  declarations: [ToFiveQuestionPage]
})
export class ToFiveQuestionPageModule {}
