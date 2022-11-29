import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromodetailsComponent } from './components/promodetails/promodetails.component';
import { PromosComponent } from './components/promos/promos.component';

const routes: Routes = [
  {
    path: '',
    component:PromosComponent,
  },
  {
    path: ':promoId',
    component:PromodetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }