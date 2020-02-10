import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: any


  constructor(private courseService: CourseService, ) { }

  ngOnInit() {
    //console.log("AppComponent :: ngOnInit()")
    //let courseService = new CourseService();
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses)
  }


}
