import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';


import { Login } from '../pages/login/login';

import {ResetPassword}from '../pages/reset-password/reset-password';
import {Signup} from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthData } from '../providers/auth-data';
import { CookaRestobarPage } from '../pages/cooka-restobar/cooka-restobar';
import { ButecoDuPage } from '../pages/buteco-du/buteco-du';
import { BaresPage } from '../pages/bares/bares';
import { ListPage } from '../pages/list/list';

import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ListPage,
    BaresPage,
    ButecoDuPage,
    CookaRestobarPage,
      Login,
      ResetPassword,
      Signup
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ListPage,
    BaresPage,
    ButecoDuPage,
    CookaRestobarPage,
      Login,
      ResetPassword,
      Signup
  ],
  providers: [
      AuthData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook

  ]
})
export class AppModule {}
