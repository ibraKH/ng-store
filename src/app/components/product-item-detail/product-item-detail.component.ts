import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/Products/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/Cart/cart.service';
import { Product } from 'src/app/models/Product/Product';
import { Cart } from 'src/app/models/Cart/Cart';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product : Product;
  productId : unknown = '';
  defaultQuantity : number[] = new Array(10);
  quantity : string = '';

  constructor(private postService : ProductsService, private router : ActivatedRoute, private cart : CartService) {
    this.product = {
      id : 1,
      name : "",
      price : 1,
      url : "",
      description : ""
    }
  }

  ngOnInit(): void {
      // get the id from the router params
      this.router.paramMap.subscribe(params => {
        this.productId = params.get('id');
      })

      // get the product from its id
      this.postService.getProducts().subscribe(res => {
        for(let i = 0; i < res.length; i++){
          if(this.productId == res[i].id){
            this.product = res[i];
          }
        }
      });
  }

  submitForm() : void {
    // store product in the cart only if quantity is more than zero
    if(this.quantity == ''){
      alert("Please select a quantity!")
    }else{
      const cartProduct : Cart = {
        id : this.product.id,
        name : this.product.name,
        price : this.product.price,
        url : this.product.url,
        description : this.product.description,
        quantity : parseInt(this.quantity)
      }

      // store in the cart service
      this.cart.addToCart(cartProduct);
      
      alert(`${this.quantity} ${this.product.name} Added to cart!`)
    };
  }
}
