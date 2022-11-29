import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'prestataire',
    loadChildren: () => import('./modules/prestataire/prestataire.module').then(m => m.PrestataireModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/subcategory/subcategory.module').then(m => m.SubcategoryModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('./modules/promo/promo.module').then(m => m.PromoModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
