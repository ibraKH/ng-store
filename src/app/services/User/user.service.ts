import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/User/User';

@Injectable({
  providedIn: 'root'
})

// This service is used to store and display user payment's info
export class UserService {

  private user = new BehaviorSubject<User>({name : '', address : '', card: ''});

  constructor() { }

  newUser(newUser : User) : void {
    this.user.next(newUser);
  }

  getUser(){
    return this.user.asObservable();
  }
}
