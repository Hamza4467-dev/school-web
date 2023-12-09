import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';



const SharedList = [
  ComponentsModule,


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedList,
   
  ],
  exports: [
    SharedList
  ]
})
export class SharedModule { }
