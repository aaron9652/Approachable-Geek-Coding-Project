import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { finalize, map } from 'rxjs/operators';
import { user } from 'src/app/shared/models/user';
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
  selector: 'app-edit-profile-picture',
  templateUrl: './edit-profile-picture.page.html',
  styleUrls: ['./edit-profile-picture.page.scss'],
})
export class EditProfilePicturePage implements OnInit {
  displayPhoto: string;
  file: File;
  fileUrl: string;
  constructor(
    private fireStorage: AngularFireStorage,
    private fireStore: AngularFirestore,
    private router: Router,
    private platform: Platform,
    private statusBar: StatusBar,
  ) { }

  async ngOnInit() {
    this.displayPhoto = await this.fireStore.collection("users").doc("00001")
    .get()
    .pipe(
      map(document => (document.data() as user).photoURL))
    .toPromise();
      this.platform.ready().then(() => {
        this.statusBar.styleLightContent();
        this.statusBar.show();  
    });
  }

  async upload(event) {
    this.file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.addEventListener('load', (event) => {
      this.fileUrl = event.target.result as string;
    });
    fileReader.readAsDataURL(this.file);
  }

  async uploadImage(){
    if (!this.file) return;

    //uploads picture to firestorage
    var filePath = "users/00001/photos/profilePhotos/";
    var fileRef = this.fireStorage.ref(filePath)
    var task = this.fireStorage.upload(filePath, this.file);

    //uploads pictureURL to firebase then navigates after getting comformation
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL()
        .subscribe(async (url: string) => {
          await this.fireStore.collection('users').doc('00001').update({
            photoURL: url,
          })
          .then(() => {
            this.router.navigate(["user-profile"]); 
          });
        });
      }) 
   )
  .subscribe();  
  }
}
