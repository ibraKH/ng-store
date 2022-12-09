import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/models/Cart/Cart';


@Injectable({
  providedIn: 'root'
})

// This service is used to store products into the cart
export class CartService {
  allProducts : Cart[] = [];

  private cart = new BehaviorSubject<Cart[]>([]);

  constructor() {}

  addToCart(product : Cart){
    let duplicated = false;
    let quantity : number = product.quantity;

    // add quantity to product if exist
    for(let i = 0; i < this.allProducts.length; i++){
      if(this.allProducts[i].id == product.id){
        duplicated = true;
        quantity+= this.allProducts[i].quantity;
        this.allProducts[i].quantity+= product.quantity;
      }
    }

    // Test for duplicated before pushing
    if(!duplicated){
      this.allProducts.push(product);
    }
    
    this.cart.next(this.allProducts);
  }

  getCart(){
    return this.cart.asObservable();
  }
}
