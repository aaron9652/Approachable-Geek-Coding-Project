import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.page.html',
  styleUrls: ['./edit-bio.page.scss'],
})
export class EditBioPage implements OnInit {

  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
  ) { }

  //sets validation up for form submission
  userForm: FormGroup = new FormGroup({
    bio: new FormControl("",[Validators.minLength(1), Validators.required]),
  });

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.show();  
  });
  }

  async updateBio(){
    //updates bio in firebase
    await this.fireStore.collection("users").doc("00001").update({
      bio: this.userForm.value.bio,
    });
    this.router.navigate(["user-profile"]);     
  }
}
