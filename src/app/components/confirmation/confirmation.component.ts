import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/User';
import { CartService } from 'src/app/services/Cart/cart.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  user : User;
  total : number = 0;

  constructor(private userDetails : UserService, private cart : CartService) {
    this.user = {
      name : '',
      address: '',
      card : ''
    }
  }

  ngOnInit(): void {
      // get user details from the user service
      this.userDetails.getUser().subscribe(res => {
        this.user = res;
      });

      // get the total price from the cart service
      this.cart.getCart().subscribe(res => {
        for(let i = 0; i < res.length; i++){
          this.total += res[i].quantity * res[i].price;
        }
      });
  }
}
