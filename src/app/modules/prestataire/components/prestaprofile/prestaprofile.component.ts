import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider/provider.service';
import { Rate } from 'src/app/shared/models/rate';
@Component({
  selector: 'app-prestaprofile',
  templateUrl: './prestaprofile.component.html',
  styleUrls: ['./prestaprofile.component.css'],
})
export class PrestaprofileComponent implements OnInit {
  public id: string = '';
  public provider = null;
  profilepicture;
  rate: Rate;
  slides;
  gallerypictures: any[any] = [];
  otherExperts: any[] = [];
  preload = true;
  done = false;

  rateElementToDisplay = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private providerService: ProviderService
  ) {}

  getProfileAndGalleryPictures(providerPictures) {
    providerPictures.forEach((picture) => {
      if (picture.type == 'ProfilePicture') {
        this.profilepicture = picture.uri;
      } else {
        this.gallerypictures.push(picture.uri);
      }
    });
  }
  getProviderByCategoryId(categoryId) {
    this.providerService.getProvidersByCategoryId(categoryId).subscribe({
      next: (providers: any) => {
        this.otherExperts = providers['object']['providers']
          .filter((provider) => provider.id != this.provider.id)
          .splice(0, 5);
      },
    });
  }
  getProviderById(id) {
    this.providerService.getProviderById(id).subscribe({
      next: (result) => {
        this.provider = result['object'];
        this.rate = new Rate(
          this.provider.politenessRate,
          this.provider.qualityServiceRate,
          this.provider.ponctualityRate,
          this.provider.serviceCostRate,
          this.provider.finalRate,
          this.provider.totalRates
        );
        console.log('provider:', this.provider);

        this.getProfileAndGalleryPictures(this.provider.pictures);

        this.getProviderByCategoryId(this.provider.otherServices[0].id);
        this.preload = false;
      },

      error: (error) => {
        console.log(`couldn't get the provider `, error);
      },
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((routeParams) => {
      this.gallerypictures = new Array();
      this.getProviderById(routeParams['prestaId']);
    });
  }

  onRateDetailsDisplay(rate) {
    this.rateElementToDisplay = rate;
  }

  //
}
