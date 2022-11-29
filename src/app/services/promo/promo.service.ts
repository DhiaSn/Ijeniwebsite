import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }
  getLastPromos(){
    return this.http.get(`${this.apiUrl}/api/Promo/Trend`)
  }
  getPromoByCategoryId(categoryId){
    return this.http.get(`${this.apiUrl}/api/Promo/Category/${categoryId}`)
  }
  

 getPromoDetailed(id){
  return this.http.get(`${this.apiUrl}/api/Promo/Detailed/${id}`)

 }
  
}
