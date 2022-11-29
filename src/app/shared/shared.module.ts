import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrestaCardComponent } from './components/presta-card/presta-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { PromoCardComponent } from './components/promo-card/promo-card.component';
import { RouterModule } from '@angular/router';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrestaCardComponent,
    CategoryCardComponent,
    PromoCardComponent,
    ImageCarouselComponent,
  ],
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    PrestaCardComponent,
    CategoryCardComponent,
    PromoCardComponent,
    ImageCarouselComponent,
  ],
})
export class SharedModule {}
