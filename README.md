# MyStore udacity project
## About the project :
in this project i created Store project using Angular.

the udacity project starter code [repo](https://github.com/udacity/nd-0067-c3-angular-fundamentals-project-starter)

Note : Product list [api](https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json)

## Tech used :
- Angular 
- TypeScript
- Bootstrap

## Models :
- Product : id , name , price , url , description
- Cart : id , name , price , url , description , quantity
- User : name , address , card

## Services :
- Cart : used to save and display products in the cart
- Products : used to store all products from external API
- User : used to save and display users

## Components and routes :
Note : this ">" indicate parent to child relationship
- NavBar components is used in all routes
- Home page : product-list > product-item : ProductsService, CartService
- Details page : product-item-detail : CartService
- Cart : Cart > payment , cart-product : CartService , UserService
- confirmation : CartService , UserService

## To start the project :
- $ git clone https://github.com/ibraKH/ng-store.git
- $ cd ng-store
- $ npm install
- $ npm install -g @angular/cli
- $ ng serve

## Pages :
Product List : http://localhost:4200/ <br />
Product Details : http://localhost:4200/product/:id <br />
Cart : http://localhost:4200/cart <br />
Payment Confirmation : http://localhost:4200/confirmation <br />