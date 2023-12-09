import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule, routedComponents } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';


@NgModule({
  declarations: [
    routedComponents,
    LoginComponent,
    ForgetComponent,
    MyAccountComponent,
    LostPasswordComponent
],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
