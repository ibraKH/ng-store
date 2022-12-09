import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart/Cart';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart : Cart[] = [];
  total : number = 0;

  constructor(private cartProducts : CartService) {

  }

  ngOnInit(): void {
    // store all products from the cart service
    this.cartProducts.getCart().subscribe(res => {
      for(let i = 0; i < res.length; i++){
        this.total += res[i].quantity * res[i].price;
      }
      this.cart = res;
    });
  }

  update(product : Cart) : void {
    // Update the changed product , Delete if the quantity is 0
    this.cart.map((x,i) => {
      if(x.id == product.id){
        if(product.quantity == 0){
          this.cart.splice(i, 1);
          alert("Product deleted!")
        }else{
          this.cart[i] = product;
        }
      }
    })

    // Calculate the total of all products
    this.total = 0;
    for(let i = 0; i < this.cart.length; i++){
      this.total += this.cart[i].quantity * this.cart[i].price;
    }
  }
}
