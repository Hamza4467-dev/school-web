import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule, routedComponents } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { OnlineTutoringComponent } from './online-tutoring/online-tutoring.component';

@NgModule({
  declarations: [ routedComponents, HomeComponent, ContactusComponent, CoursesListComponent, OnlineTutoringComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
