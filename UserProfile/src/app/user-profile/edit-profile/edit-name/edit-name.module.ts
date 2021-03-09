import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditNamePageRoutingModule } from './edit-name-routing.module';

import { EditNamePage } from './edit-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditNamePageRoutingModule
  ],
  declarations: [EditNamePage]
})
export class EditNamePageModule {}
