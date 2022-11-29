import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestalistComponent } from './components/prestalist/prestalist.component';
import { PrestaprofileComponent } from './components/prestaprofile/prestaprofile.component';

const routes: Routes = [
  {
    path: '',
    component: PrestalistComponent,
  },

  {
    path: ':prestaId',
    component: PrestaprofileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestataireRoutingModule {}
