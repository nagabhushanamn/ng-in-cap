import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input("value") course: any = null
  //@Output() buy = new EventEmitter()

  currentTab = 'tab1'

  reviews: any

  constructor(
    private courseService: CourseService,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  changeTab(event, tab) {
    event.preventDefault()
    this.currentTab = tab
    if (this.currentTab === "tab3") {
      //let courseService = new CourseService();
      this.courseService.getReviews(this.course.id)
        .subscribe(reviews => this.reviews = reviews)
    }
  }

  handleBuy(event) {
    let e = {
      id: this.course.id,
      name: this.course.title,
      price: this.course.price
    }
    //this.buy.emit({ value: e })
    this.cartService.addToCart(e)
  }

}
