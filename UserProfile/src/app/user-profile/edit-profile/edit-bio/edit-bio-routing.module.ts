import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBioPage } from './edit-bio.page';

const routes: Routes = [
  {
    path: '',
    component: EditBioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBioPageRoutingModule {}
