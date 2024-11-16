import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersAdminPageRoutingModule } from './users-admin-routing.module';

import { UsersAdminPage } from './users-admin.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    UsersAdminPageRoutingModule
  ],
  declarations: [UsersAdminPage]
})
export class UsersAdminPageModule {}
