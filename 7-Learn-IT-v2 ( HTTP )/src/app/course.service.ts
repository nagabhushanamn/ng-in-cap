import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  courses: Array<any> = []
  reviews: Array<any> = []

  base_url = "http://localhost:3000/api"

  getCourses() {
    let stream = this.http.get(`${this.base_url}/courses`)
    // stream.subscribe(response => {
    //   console.log(response)
    // }, error => {
    //   console.log(error)
    // })
    return stream;
  }
  getReviews(course_id) {
    return this.http.get(`${this.base_url}/courses/${course_id}/reviews`)
  }

}
