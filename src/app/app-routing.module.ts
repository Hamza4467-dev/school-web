import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./modules/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'user',
    loadChildren:() => import('./modules/shared/shared.module').then(m => m.SharedModule)
  },
  {
    path:'user',
    loadChildren:() => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
