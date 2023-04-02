import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsPageRoutingModule } from './questions-routing.module';
import { EmojiSelectorComponent } from 'src/app/components/questions/emoji-selector/emoji-selector.component';
import { FeelPainComponent } from 'src/app/components/questions/feel-pain/feel-pain.component';
import { QuestionMedicalComponent } from 'src/app/components/questions/question-medical/question-medical.component';

import { QuestionsPage } from './questions.page';
import { PainSelectorComponent } from 'src/app/components/questions/pain-selector/pain-selector.component';
import { HowMuchSleepComponent } from 'src/app/components/questions/how-much-sleep/how-much-sleep.component';
import { WheelSelectorComponent } from 'src/app/shared/ui/wheel-selector/wheel-selector.component';
import { HowMuchWaterComponent } from 'src/app/components/questions/how-much-water/how-much-water.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule,
  ],
  declarations: [
    QuestionsPage,
    EmojiSelectorComponent,
    FeelPainComponent,
    QuestionMedicalComponent,
    PainSelectorComponent,
    HowMuchSleepComponent,
    HowMuchWaterComponent,
    WheelSelectorComponent
  ]
})
export class QuestionsPageModule {}
