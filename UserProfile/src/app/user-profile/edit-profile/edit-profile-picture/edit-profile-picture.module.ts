import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePicturePageRoutingModule } from './edit-profile-picture-routing.module';

import { EditProfilePicturePage } from './edit-profile-picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditProfilePicturePageRoutingModule
  ],
  declarations: [EditProfilePicturePage]
})
export class EditProfilePicturePageModule {}
