import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayNameInfoPage } from './display-name-info.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayNameInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayNameInfoPageRoutingModule {}
