import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'enter-name-info',
    loadChildren: () => import('./enter-name-info/enter-name-info.module').then( m => m.EnterNameInfoPageModule)
  },
  {
    path: 'display-name-info/:name',
    loadChildren: () => import('./display-name-info/display-name-info.module').then( m => m.DisplayNameInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
