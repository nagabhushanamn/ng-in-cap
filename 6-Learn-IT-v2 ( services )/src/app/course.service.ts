import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { 
    console.log("CourseService instance created..")
  }

  courses: Array<any> = [
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

  reviews: Array<any> = [
    {
      author: 'who@mail.com',
      stars: 5,
      body: 'sample review-1'
    },
    {
      author: 'who@mail.com',
      stars: 3,
      body: 'sample review-1'
    }
  ]

  getCourses() {
    return this.courses;
  }
  getReviews() {
    return this.reviews
  }

}
