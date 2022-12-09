import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product/Product';
import { Cart } from 'src/app/models/Cart/Cart';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  title : string = "product";
  quantity : string = '';
  defaultQuantity : number[] = new Array(10);

  // get product from parent
  @Input() product : Product;

  constructor(private cart : CartService, private router : Router) {
    this.product = {
      id : 1,
      name : "",
      price : 1,
      url : "",
      description : ""
    }
  }

  ngOnInit(): void {
    
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

  goToDetails() : void {
    // go to product details if the user clicks on the image
    this.router.navigate(['/product/', `${this.product.id}`])
  }
}
