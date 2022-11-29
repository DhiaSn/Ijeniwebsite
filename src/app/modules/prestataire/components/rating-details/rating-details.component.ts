import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Rate } from 'src/app/shared/models/rate';

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.component.html',
  styleUrls: ['./rating-details.component.css'],
})
export class RatingDetailsComponent implements OnInit {
  @Input() rate: Rate;
  ratePercentage: Rate;
  finalRatePercentage: any;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.rate) {
      this.ratePercentage = new Rate(
        (this.rate.politnessRate * 100) / 5,
        (this.rate.serviceQualityRate * 100) / 5,
        (this.rate.punctualityRate * 100) / 5,
        (this.rate.serviceCostRate * 100) / 5,
        this.rate.finalRate > 5 ? 5 : this.rate.finalRate,
        this.rate.totalRates
      );

      this.finalRatePercentage = (this.rate.finalRate * 100) / 5;
    }
  }
}
