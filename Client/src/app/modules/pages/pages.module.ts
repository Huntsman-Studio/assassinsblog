import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SinglePostComponent } from './single-post/single-post.component';



@NgModule({
  declarations: [
    MainComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    SinglePostComponent
  ]
})
export class PagesModule { }
