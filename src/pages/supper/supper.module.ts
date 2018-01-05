import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupperPage } from './supper';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    SupperPage,
  ],
  imports: [
    IonicPageModule.forChild(SupperPage),
  ],
})
export class SupperPageModule {}
