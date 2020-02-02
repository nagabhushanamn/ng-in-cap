import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Learn-IT-v2';
  courses = [
    {
      id: 0o1,
      title: 'Angular 8',
      price: 10,
      description: 'Javascript Framework',
      canBuy: true,
      img_path: 'images/ng.png',
      c_code: 'USD',
      publish_date: Date.now(),
      discount: 10
    },
    {
      id: 0o2,
      title: 'React',
      price: 15,
      description: 'Javascript Framework',
      canBuy: true,
      img_path: 'images/react.png',
      c_code: 'USD',
      publish_date: Date.now()
    },

  ]

  cart = []
  addToCart(event) {
    this.cart = this.cart.concat(event.value)
  }

}
