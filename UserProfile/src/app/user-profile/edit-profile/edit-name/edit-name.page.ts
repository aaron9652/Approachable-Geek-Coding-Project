import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/shared/models/user';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.page.html',
  styleUrls: ['./edit-name.page.scss'],
})
export class EditNamePage implements OnInit {

  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
    ) { }


  test: string;
  testUser: user;

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl("",[Validators.minLength(1), Validators.required, Validators.pattern(/^\S*$/)]),
    lastName: new FormControl("",[Validators.minLength(1), Validators.required, Validators.pattern(/^\S*$/)]),
  });

  ngOnInit() {
  }

  async updateName(){
    await this.fireStore.collection("users").doc("00001").update({
      fullName: {
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName
      }
    });
    this.router.navigate(["user-profile"]);    
  }
}
