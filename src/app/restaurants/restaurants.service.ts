import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.baseApiUrl + "restaurants";
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(apiUrl, {headers: headers });
  }
}
