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

  quantity : string = '';

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
      this.quantity = this.product.quantity.toString();
  }

  changeQuantity(event : any) : void {
    
    const updatedProduct : Cart = {
      id : this.product.id,
      name : this.product.name,
      price : this.product.price,
      url : this.product.url,
      description : this.product.description,
      quantity : parseInt(this.quantity)
    }
    
    // This used to send the product with new values to the parent
    this.updateProduct.emit(updatedProduct)
  }
}
