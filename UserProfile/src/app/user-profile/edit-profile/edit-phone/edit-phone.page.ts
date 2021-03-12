import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.page.html',
  styleUrls: ['./edit-phone.page.scss'],
})
export class EditPhonePage {
  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
    ) { }

  //sets validation up for form submission
  userForm: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
  });

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.show();  
  });
  }

  async updatePhone(){
    //updates phone number in firebase
    await this.fireStore.collection("users").doc("00001").update({
      phone: this.userForm.value.phone,
    });
    this.router.navigate(["user-profile"]);    
  }
}
