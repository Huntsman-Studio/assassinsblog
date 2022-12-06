import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    CategoriesComponent,
    SearchComponent
  ]
})
export class ModulesModule { }
