import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CategoryService } from 'src/app/services/category/category.service';
import { PromoService } from 'src/app/services/promo/promo.service';
import { Category } from 'src/app/shared/models/category';
import { keywords } from 'src/app/shared/const';
import { StatsService } from 'src/app/services/stats/stats.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Categories: Category[] = [];
  Parents: Category[] = [];
  lastPromos = [];
  promoLoaded: boolean = false;
  stats;
  categoriesDisplayed;
  constructor(
    private categoryService: CategoryService,
    private promoService: PromoService,
    private title: Title,
    private meta: Meta,
    private statsService: StatsService
  ) {}
  toDisplay;

  ngOnInit(): void {
    this.title.setTitle(keywords.TITLE);
    this.meta.addTag({ name: 'description', content: keywords.DESCRIPTION });

    this.statsService.getStats().subscribe({
      next: (result) => {
        this.stats = result['object'];
        console.log(this.stats);
      },
    });
    this.categoryService.getCategories().subscribe({
      next: (result) => {
        this.Categories = result['object'];
        this.Parents = this.Categories.filter((categorie) => {
          return categorie.parentId == null || categorie.parentId == 0;
        });
      },
      error: (error) => {
        console.log('error while fetching categories', error);
      },
      complete: () => {
        let childs: any[any] = [];
        this.toDisplay = this.Parents.map((parent) => {
          childs = [];
          this.Categories.map((category) => {
            if (category.parentId == parent.id) {
              childs.push(category);
              return childs;
            }
          });
          return { parent: parent, categoriesChild: childs };
        });
        console.log(this.toDisplay);
        this.toDisplay = this.toDisplay.filter((item) => {
          return item.categoriesChild.length == 1;
        });

        console.log('toDisplay', this.toDisplay);
      },
    });

    // Last Promos !
    this.promoService.getLastPromos().subscribe({
      next: (result) => {
        this.lastPromos = result['object'];
        this.promoLoaded = true;
        console.log(this.lastPromos);
      },
      error: (error) => {
        console.log('error while getting promos', error);
      },
    });
  }
}
