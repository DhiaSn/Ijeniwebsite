import { Component, Input, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  @Input() slides;
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2150,
    infinite: true,
  };
  slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2140,
    infinite: true,
  };
  constructor() {}
  slickInit(e) {
    console.log('slick initialized');
  }

  ngOnInit(): void {}
}
