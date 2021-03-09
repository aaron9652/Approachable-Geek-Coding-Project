import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.page.html',
  styleUrls: ['./edit-phone.page.scss'],
})
export class EditPhonePage implements OnInit {
  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
    ) { }

  userForm: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
  });

  ngOnInit() {
  }

  async updatePhone(){
    await this.fireStore.collection("users").doc("00001").update({
      phone: this.userForm.value.phone,
    });
    this.router.navigate(["user-profile"]);    
    this.router.dispose();
  }

}
