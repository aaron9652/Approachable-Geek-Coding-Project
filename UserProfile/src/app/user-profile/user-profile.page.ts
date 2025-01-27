import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { user } from 'src/app/shared/models/user';
import { map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {
  user: user;

  constructor(
    private statusBar: StatusBar,
    private fireStore: AngularFirestore,
    private platform: Platform,
    ) { }

  async ionViewDidEnter() {

    //gets user from firebase and maps it to a user object
    await this.fireStore.collection("users").doc("00001")
    .get()
    .pipe(map(doc => {
      return { ...<object>doc.data(), uid: doc.id } as user;
    }))
    .subscribe(user => {
      this.user = user;
    });

  }

  ngOnDestroy() {
  }

  ionViewDidLeave(){
    this.ngOnDestroy();
  } 
}
