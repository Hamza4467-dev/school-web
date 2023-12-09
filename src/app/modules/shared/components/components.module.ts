import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './sliders/blog/blog.component';
import { FeaturedCoursesComponent } from './sliders/featured-courses/featured-courses.component';
import { CoursesComponent } from './sliders/courses/courses.component';
import { StudentsComponent } from './sliders/students/students.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InformationsComponent } from './informations/informations.component';
import { VideoComponent } from './video/video.component';
import { EnrollNowComponent } from './popups/enroll-now/enroll-now.component';


const ComponentsList = [
  HeaderComponent,
  FooterComponent,
  BlogComponent,
  FeaturedCoursesComponent,
  CoursesComponent,
  StudentsComponent,
  InformationsComponent,
  VideoComponent,
  EnrollNowComponent
]


@NgModule({
  declarations: [
    ComponentsList,

 
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule

  ],
  exports:[
   ComponentsList 
  ]
})
export class ComponentsModule { }
