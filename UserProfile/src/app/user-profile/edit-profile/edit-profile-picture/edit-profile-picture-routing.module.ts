import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfilePicturePage } from './edit-profile-picture.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfilePicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfilePicturePageRoutingModule {}
