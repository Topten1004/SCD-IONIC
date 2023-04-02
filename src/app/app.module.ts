import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardPage } from './views/main/dashboard/dashboard.page';
import { MainPage } from './views/main/main.page';
import { CalendarPage } from './views/main/calendar/calendar.page';
import { MedicationPage } from './views/main/medication/medication.page';
import { DictionaryPage } from './views/main/dictionary/dictionary.page';

import { VerticalRangeComponent } from './shared/ui/vertical-range/vertical-range.component';
import { CircleHourComponent } from './shared/ui/circle-hour/circle-hour.component';
import { ReminderCalendarComponent } from './shared/ui/reminder-calendar/reminder-calendar.component';

import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    CalendarPage,
    MedicationPage,
    DictionaryPage,
    MainPage,
    VerticalRangeComponent,
    CircleHourComponent,
    ReminderCalendarComponent,
    // DataPickerComponent
    // WheelSelectorComponent
    // WheelSelectorComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts : () => import('echarts')
    }),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  // schemas : [
  //   NO_ERRORS_SCHEMA
  // ]
})
export class AppModule {}
