import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent implements OnInit {

  course_id: number
  course: any = {
    title: '',
    price: ''
  }

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.course_id = params.course_id
        this.courseService.get(this.course_id)
          .subscribe(response => {
            this.course = response
          })
      }
    )
  }

}
