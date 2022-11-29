import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  postContact(contact: any) {
    console.log(contact)
    return this.http.post(this.apiUrl + "/api/WebContact/Post", contact);
  }
}
