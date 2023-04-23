import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterNameInfoPage } from './enter-name-info.page';

const routes: Routes = [
  {
    path: '',
    component: EnterNameInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterNameInfoPageRoutingModule {}
