import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {


  // @Input() value = 0;
  value = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  ngDoCheck() {
    this.value = this.cartService.getCartCount()
  }


}
