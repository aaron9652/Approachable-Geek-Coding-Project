import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.page.html',
  styleUrls: ['./edit-bio.page.scss'],
})
export class EditBioPage implements OnInit {

  constructor(
    private fireStore: AngularFirestore,
    private router: Router,
  ) { }

  userForm: FormGroup = new FormGroup({
    bio: new FormControl("",[Validators.minLength(1), Validators.required]),
  });

  ngOnInit() {
  }

  async updateBio(){
    await this.fireStore.collection("users").doc("00001").update({
      bio: this.userForm.value.bio,
    });
    this.router.navigate(["user-profile"]);     
  }

}
