import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.page.html',
  styleUrls: ['./edit-name.page.scss'],
})
export class EditNamePage implements OnInit {

  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
    ) { }

  //sets validation up for form submission
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.minLength(1), Validators.required, Validators.pattern(/^\S*$/)]),
    lastName: new FormControl("",[Validators.minLength(1), Validators.required, Validators.pattern(/^\S*$/)]),
  });

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.show();  
  });
  }

  async updateName(){
    //updates name in firebase
    await this.fireStore.collection("users").doc("00001").update({
      fullName: {
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName
      }
    });
    this.router.navigate(["user-profile"]);    
  }
}
