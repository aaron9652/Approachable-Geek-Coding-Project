import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.page.html',
  styleUrls: ['./edit-email.page.scss'],
})
export class EditEmailPage implements OnInit {

  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
  ) { }

  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit() {
  }

  async updateEmail(){
    await this.fireStore.collection("users").doc("00001").update({
      email: this.userForm.value.email,
    });
    this.router.navigate(["user-profile"]);    
  }
}
