import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/Products/products.service"
import { Product } from '../../models/Product/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products : Product[] = [];
  productsLeft : Product[] = [];
  productsRight : Product[] = [];

  constructor(private postService : ProductsService) {}

  ngOnInit(): void {
      // get all products from the product service
      this.postService.getProducts().subscribe(res => {
        this.products = res;
        // This is unnecessary but for styling only
        res.map(x => {
          return x.id % 2 == 0 ? this.productsLeft.push(x) : this.productsRight.push(x);
        })
      });
  }
}
