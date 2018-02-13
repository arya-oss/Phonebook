import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from "@ionic/storage";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactProvider } from '../providers/contact/contact';
import { AddContactPage } from '../pages/add-contact/add-contact';
import { EditContactPage } from '../pages/edit-contact/edit-contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddContactPage,
    EditContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddContactPage,
    EditContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider
  ]
})
export class AppModule {}
