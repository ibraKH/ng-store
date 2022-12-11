import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User/User';
import { UserService } from 'src/app/services/User/user.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  // Form Validation
  cardForm = new FormGroup({
    name : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    card : new FormControl('', Validators.required,)
  })

  user : User;

  cardValue : string = '';
  isNumber = true;

  submitted = false;

  constructor(private router : Router, private createUser : UserService){
    this.user = {
      name: '',
      address: '',
      card: ''
    }
  }

  ngOnInit(): void {
      
  }

  submitForm() : void {
    this.submitted = true;

    // complete payment only if form is valid
    if(this.cardForm.valid && this.isNumber){
      this.user = {
        name: this.cardForm.value.name || '',
        address: this.cardForm.value.address || '',
        card: this.cardForm.value.card || ''
      }
      // store new user in the user service
      this.createUser.newUser(this.user)
      // go to confirmation page
      this.router.navigate(['/', 'confirmation'])
    }
  }

  numberValidate() : void {
    /^\d+$/.test(this.cardValue) ? this.isNumber = true : this.isNumber = false;
  }
}
