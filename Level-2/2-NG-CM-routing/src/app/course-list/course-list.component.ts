import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Array<any> = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
  ) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe(data => {
        console.log(data.trainer)
        this.courses = data.courses
      })
  }

  deleteCourse(event,course_id) {
    event.preventDefault()
    this.courseService.delete(course_id)
      .subscribe(response => {
        this.courses=this.courses.filter(course=>course.id!==course_id)
      })
  }

}
