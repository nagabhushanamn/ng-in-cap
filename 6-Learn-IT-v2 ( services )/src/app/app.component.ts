import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title: string = 'Learn-IT-v2';
  courses = []
  
  constructor(private courseService:CourseService,){}
  
  ngOnInit() {
    //console.log("AppComponent :: ngOnInit()")
    //let courseService = new CourseService();
    this.courses = this.courseService.getCourses()
  }
}
