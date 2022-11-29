import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestalistComponent } from './components/prestalist/prestalist.component';
import { PrestataireRoutingModule } from './prestataire-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrestaprofileComponent } from './components/prestaprofile/prestaprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrestaCardGridComponent } from './components/presta-card-grid/presta-card-grid.component';
import { PrestaCardListComponent } from './components/presta-card-list/presta-card-list.component';
import { RatingDetailsComponent } from './components/rating-details/rating-details.component';
import { RatingDetailsModalComponent } from './components/rating-details-modal/rating-details-modal.component';

@NgModule({
  declarations: [
    PrestalistComponent,
    PrestaprofileComponent,
    PrestaCardGridComponent,
    PrestaCardListComponent,
    RatingDetailsComponent,
    RatingDetailsModalComponent,
  ],
  imports: [CommonModule, PrestataireRoutingModule, SharedModule, NgbModule],
})
export class PrestataireModule {}
