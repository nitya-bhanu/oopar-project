import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DisplayNameInfoPageRoutingModule } from './display-name-info-routing.module';
import { DisplayNameInfoPage } from './display-name-info.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DisplayNameInfoPageRoutingModule
  ],
  declarations: [DisplayNameInfoPage]
})
export class DisplayNameInfoPageModule {}
