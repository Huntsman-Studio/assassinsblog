import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    CategoriesComponent
  ]
})
export class ModulesModule { }
