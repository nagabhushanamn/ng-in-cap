import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input("value") course: any = null
  @Output() buy = new EventEmitter()
  currentTab = 'tab1'
  constructor() { }
  ngOnInit() {
  }
  changeTab(event, tab) {
    event.preventDefault()
    this.currentTab = tab
  }
  handleBuy(event) {
    let e = {
      id: this.course.id,
      name: this.course.title,
      price: this.course.price
    }
    this.buy.emit({ value: e })
  }

}
