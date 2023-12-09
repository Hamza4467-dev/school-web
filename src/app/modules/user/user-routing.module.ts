import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'forgot' , component: ForgetComponent },
  { path: 'my-acount' , component: MyAccountComponent },
  { path: 'lost-password' , component: LostPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
export const routedComponents = [LoginComponent,ForgetComponent];