import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Rate } from 'src/app/shared/models/rate';

@Component({
  selector: 'app-rating-details-modal',
  templateUrl: './rating-details-modal.component.html',
  styleUrls: ['./rating-details-modal.component.css'],
})
export class RatingDetailsModalComponent implements OnInit {
  @Input() rateElement: any;
  rate: Rate;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.rateElement) {
      this.rate = new Rate(
        this.rateElement.politnessRate,
        this.rateElement.serviceQualityRate,
        this.rateElement.punctualityRate,
        this.rateElement.priceQualityRate,
        this.rateElement.finalRate,
        this.rateElement.totalRates
      );
    }
  }
}
