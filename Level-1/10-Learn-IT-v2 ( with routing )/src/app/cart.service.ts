import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []
  constructor(private http: HttpClient) { }

  cartStream: Subject<any> = new Subject()

  getCartStream() {
    return this.cartStream;
  }

  addToCart(course) {
    let url = "http://localhost:3000/api/cart"
    this.http.post(url, course)
      .subscribe((response) => {
        this.cart = this.cart.concat(course)
        this.cartStream.next(this.cart)
      })
  }

  loadCart() {
    let url = "http://localhost:3000/api/cart"
    this.http.get(url)
      .subscribe((response: any) => {
        this.cart = response;
        this.cart = this.cart.map(item => {
          return JSON.parse(item)
        })
        this.cartStream.next(this.cart)
      })
  }

  getCartCount() {
    return this.cart.length
  }

  getCart() {
    return this.cart
  }



}
