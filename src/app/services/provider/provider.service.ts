import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getProviders() {
    return this.http.get(`${this.apiUrl}`)
  }

  getProvidersByCategoryId(categoryId: Number) {
    return this.http.get(`${this.apiUrl}/api/FindProvider/FindProviderByCategory/${categoryId}`);
  }

  getProviderById(providerId: string) {
    return this.http.get(`${this.apiUrl}/api/FindProvider/DetailedProfile/${providerId}`, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'mon-entete-personnalise': 'maValeur'

      })
    })
  }
}
