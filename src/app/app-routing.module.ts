import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CalendarPage } from './views/main/calendar/calendar.page';

import { DashboardPage } from './views/main/dashboard/dashboard.page';
import { DictionaryPage } from './views/main/dictionary/dictionary.page';
import { MainPage } from './views/main/main.page';
import { MedicationPage } from './views/main/medication/medication.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-method',
    loadChildren: () => import('./views/login-method/login-method.module').then( m => m.LoginMethodPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./views/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'to-five-question',
    loadChildren: () => import('./views/to-five-question/to-five-question.module').then( m => m.ToFiveQuestionPageModule)
  },
  {
    path: 'main',
    // loadChildren: () => import('./views/main/main.module').then( m => m.MainPageModule),
    component : MainPage,
    children : [
      {
        path : 'dashboard',
        // loadChildren: () => import('./views/main/main.module').then( m => m.MainPageModule),
        component : DashboardPage
      },
      {
        path : 'calendar',
        component : CalendarPage
      },
      {
        path : 'medication',
        component : MedicationPage
      },
      {
        path : 'dictionary',
        component : DictionaryPage
      }
    ]
  },
  {
    path: 'calendar',
    loadChildren: () => import('./views/main/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'medication',
    loadChildren: () => import('./views/main/medication/medication.module').then( m => m.MedicationPageModule)
  },
  {
    path: 'dictionary',
    loadChildren: () => import('./views/main/dictionary/dictionary.module').then( m => m.DictionaryPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./views/questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./views/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./views/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'about-sickle',
    loadChildren: () => import('./views/about-sickle/about-sickle.module').then( m => m.AboutSicklePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
