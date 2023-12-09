import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { OnlineTutoringComponent } from './online-tutoring/online-tutoring.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'contact-us', component:  ContactusComponent},
  { path: 'courses', component:  CoursesListComponent},
  { path: 'online-tutoring', component:  OnlineTutoringComponent},

];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
export const routedComponents = [];
