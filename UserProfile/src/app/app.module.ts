import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from 'rxjs';

var firebaseConfig = {
  apiKey: "AIzaSyBI6F3RMut1hHgA-pS1OwUMJg5Dgc6GfzY",
  authDomain: "approachablegeekproject.firebaseapp.com",
  projectId: "approachablegeekproject",
  storageBucket: "approachablegeekproject.appspot.com",
  messagingSenderId: "432646528571",
  appId: "1:432646528571:web:fe8acf9dea26c9101d061e",
  measurementId: "G-KQP5TCGD0L"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [StatusBar, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],
})
export class AppModule {}
