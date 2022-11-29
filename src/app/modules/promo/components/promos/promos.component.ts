import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { PromoService } from 'src/app/services/promo/promo.service';
import { ProviderService } from 'src/app/services/provider/provider.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css'],
})
export class PromosComponent implements OnInit {
  promos = [];
  parents: Category[] = [];
  categories: Category[] = [];
  toDisplay;
  grid = true;
  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService,
    private categoryService: CategoryService,
    private promoService: PromoService
  ) {}
  providers = [];
  preload = true;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.promoService.getPromoByCategoryId(2).subscribe({
        next: (promos: any) => {
          console.log(promos);
          this.promos = promos['object'];
          console.log(this.promos);
          this.preload = false;
        },
        error: (error) => {
          console.log('error while fetching providers', error);
        },
      });
    });

    this.categoryService.getCategories().subscribe({
      next: (result) => {
        this.categories = result['object'];
        this.parents = this.categories.filter((categorie) => {
          return categorie.parentId == null || categorie.parentId == 0;
        });
      },
      error: (error) => {
        console.log('error while fetching categories', error);
      },
      complete: () => {
        let childs: any[any] = [];
        this.toDisplay = this.parents.map((parent) => {
          childs = [];
          this.categories.map((category) => {
            if (category.parentId == parent.id) {
              childs.push(category);
              return childs;
            }
          });
          return { parent: parent, categoriesChild: childs, colapsed: true };
        });
        console.log(this.toDisplay);
      },
    });
  }

  change(state: boolean) {
    this.grid = state;
  }

  filterListPromos(id: number) {
    console.log(id);
    this.preload = true;
    this.promoService.getPromoByCategoryId(id).subscribe({
      next: (promos: any) => {
        this.promos = promos['object'];
        console.log(this.promos);
        this.preload = false;
      },
      error: (error) => {
        console.log('error while fetching providers', error);
      },
    });
  }

  colapse(i: number) {
    console.log(this.toDisplay[i].colapsed);
    this.toDisplay[i].colapsed = !this.toDisplay[i].colapsed;
  }
}
