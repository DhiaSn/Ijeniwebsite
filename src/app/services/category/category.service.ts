import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   apiUrl=environment.apiUrl

getCategories():Observable<Category>{
  return this.http.get<Category>(`${this.apiUrl}/api/Category/Categories`);

}

  constructor(private http:HttpClient) { }
}
