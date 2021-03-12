import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.page.html',
  styleUrls: ['./edit-email.page.scss'],
})
export class EditEmailPage implements OnInit {

  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
  ) { }

  //sets validation up for form submission
  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.show();  
  });
  }

  async updateEmail(){
    //updates email in firebase
    await this.fireStore.collection("users").doc("00001").update({
      email: this.userForm.value.email,
    });
    this.router.navigate(["user-profile"]);    
  }
}
