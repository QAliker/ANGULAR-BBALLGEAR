import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  configURL = "assets/mock/product.json"

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(this.configURL)
  }
}
