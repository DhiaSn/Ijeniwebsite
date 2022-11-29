import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  Categories: Category[] = [];
  Parents: Category[] = [];
  toDisplay: any[any];
  isLoading: boolean = true;
  preload = true;
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(private categoryService: CategoryService) {
    this.lottieConfig = {
      path: 'assets/pinjump.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true,
    };
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (result) => {
        this.Categories = result['object'];
        this.Parents = this.Categories.filter((categorie) => {
          return categorie.parentId == null || categorie.parentId == 0;
        });
        this.isLoading = false;
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
        this.preload = false;
      },
    });

    console.log('to Display: ', this.toDisplay);
  }
}
