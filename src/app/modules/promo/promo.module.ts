import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosComponent } from './components/promos/promos.component';
import { PromoRoutingModule } from './promo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromodetailsComponent } from './components/promodetails/promodetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PromosComponent, PromodetailsComponent],
  imports: [CommonModule, PromoRoutingModule, SharedModule, NgbModule],
})
export class PromoModule {}
