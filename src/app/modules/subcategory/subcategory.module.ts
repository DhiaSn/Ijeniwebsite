import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { LottieCacheModule, LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LottieAnimationViewModule } from 'ng-lottie';
export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    SubcategoryComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubcategoryRoutingModule,

  ]
})
export class SubcategoryModule { }
