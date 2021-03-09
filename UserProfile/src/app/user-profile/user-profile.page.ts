import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { user } from 'src/app/shared/models/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {
  user: user;
  name: 'name';
  constructor(
    private statusBar: StatusBar,
    private router: Router,
    private fireStore: AngularFirestore,
    ) { }

  async ionViewDidEnter() {
    if(this.statusBar){
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#fffff');
    }
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
