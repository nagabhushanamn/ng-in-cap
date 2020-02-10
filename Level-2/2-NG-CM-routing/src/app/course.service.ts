import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get("http://localhost:3000/api/courses")
  }
  get(id) {
    return this.httpClient.get("http://localhost:3000/api/courses/" + id)
  }
  post(course) {
    return this.httpClient.post("http://localhost:3000/api/courses", course)
  }
  put(course) {
    return this.httpClient.put("http://localhost:3000/api/courses/" + course.id, course)
  }
  delete(id) {
    return this.httpClient.delete("http://localhost:3000/api/courses/" + id)
  }

}
