import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterNameInfoPageRoutingModule } from './enter-name-info-routing.module';

import { EnterNameInfoPage } from './enter-name-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterNameInfoPageRoutingModule
  ],
  declarations: [EnterNameInfoPage]
})
export class EnterNameInfoPageModule {}
