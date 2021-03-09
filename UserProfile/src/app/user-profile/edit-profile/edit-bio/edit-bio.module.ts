import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBioPageRoutingModule } from './edit-bio-routing.module';

import { EditBioPage } from './edit-bio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditBioPageRoutingModule
  ],
  declarations: [EditBioPage]
})
export class EditBioPageModule {}
