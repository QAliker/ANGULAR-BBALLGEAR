import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
  products: Product[] = []
  constructor(
    private _productService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this._productService.getProducts()
  .subscribe(data => {
    this.products = data
  })
  }
  

}
