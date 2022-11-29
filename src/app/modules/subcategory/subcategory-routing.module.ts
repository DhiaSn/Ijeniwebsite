import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { LottieModule } from "ngx-lottie";
import player from 'lottie-web';

export function playerFactory(): any {
  return import('lottie-web');
}
const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SubcategoryRoutingModule { }