import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/Product/Product';

@Injectable({
  providedIn: 'root'
})

// This service is used to store all products
export class ProductsService {

  constructor(private http : HttpClient) { }

  // get products from external API
  // The products list is from the udacity project starter repo
  // https://github.com/udacity/nd-0067-c3-angular-fundamentals-project-starter
  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>("https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json")
  }
}
