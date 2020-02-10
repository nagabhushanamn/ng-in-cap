import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'Learn-IT-v2';

  constructor(private cartService:CartService){}

  ngOnInit(){
    this.cartService.loadCart()
  }
  
}
