import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []
  constructor() { }

  addToCart(course) {
    this.cart = this.cart.concat(course)
    console.log(this.cart)
  }
  getCartCount() {
    return this.cart.length
  }
  getCart() {
    return this.cart
  }

}
