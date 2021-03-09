import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfilePage } from './user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage
  },
  {
    path: 'edit-profile-picture',
    loadChildren: () => import('./edit-profile/edit-profile-picture/edit-profile-picture.module').then( m => m.EditProfilePicturePageModule)
  },
  {
    path: 'edit-name',
    loadChildren: () => import('./edit-profile/edit-name/edit-name.module').then( m => m.EditNamePageModule)
  },
  {
    path: 'edit-phone',
    loadChildren: () => import('./edit-profile/edit-phone/edit-phone.module').then( m => m.EditPhonePageModule)
  },
  {
    path: 'edit-email',
    loadChildren: () => import('./edit-profile/edit-email/edit-email.module').then( m => m.EditEmailPageModule)
  },
  {
    path: 'edit-bio',
    loadChildren: () => import('./edit-profile/edit-bio/edit-bio.module').then( m => m.EditBioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfilePageRoutingModule {}
