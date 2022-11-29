import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProviderService } from 'src/app/services/provider/provider.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-prestalist',
  templateUrl: './prestalist.component.html',
  styleUrls: ['./prestalist.component.css'],
})
export class PrestalistComponent implements OnInit {
  parents: Category[] = [];
  categories: Category[] = [];
  toDisplay;
  grid = true;
  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService,
    private categoryService: CategoryService
  ) {}
  providers = [];
  preload = true;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      let categoryId = Number(params.get('categoryId'));
      this.providerService.getProvidersByCategoryId(categoryId).subscribe({
        next: (providers: any) => {
          this.providers = providers['object']['providers'];
          console.log(this.providers);
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

  filterListPrestataire(id: number) {
    this.providerService.getProvidersByCategoryId(id).subscribe({
      next: (providers: any) => {
        this.providers = providers['object']['providers'];
        console.log(this.providers);
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
