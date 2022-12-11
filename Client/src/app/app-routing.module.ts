import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/pages/main/main.component';
import { SinglePostComponent } from './modules/pages/single-post/single-post.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', component: SinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
