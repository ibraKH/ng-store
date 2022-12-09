import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/models/Cart/Cart';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  // get product from parent
  @Input() product : Cart;
  // send product with new quantity
  @Output() updateProduct = new EventEmitter<Cart>();


  constructor() {
    this.product = {
      id : 1,
      name : "",
      price : 1,
      url : "",
      description : "",
      quantity : 0
    }
  }

  ngOnInit(): void {
      
  }

  changeQuantity(event : any) : void {
    let quantity = event.target.value;
    
    const updatedProduct : Cart = {
      id : this.product.id,
      name : this.product.name,
      price : this.product.price,
      url : this.product.url,
      description : this.product.description,
      quantity : quantity
    }
    
    // This used to send the product with new values to the parent
    this.updateProduct.emit(updatedProduct)
  }
}
