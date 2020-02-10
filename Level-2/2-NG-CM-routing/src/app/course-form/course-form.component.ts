import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseForm: FormGroup
  isEdit = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private courseService: CourseService) { }

  ngOnInit() {

    this.courseForm = this.fb.group({
      id: [''],
      title: [''],
      price: ['']
    })

    this.route.data.subscribe(
      data => {
        let course = data.course
        if (course)
          this.courseForm.patchValue(course)
          this.isEdit = true
      }
    )


  }
  handleForm(event) {
    event.preventDefault()
    if (!this.isEdit) {
      this.courseService.post(this.courseForm.value)
        .subscribe(response => {
          this.router.navigate(['all'])
        })
    } else {
      this.courseService.put(this.courseForm.value)
        .subscribe(response => {
          this.router.navigate(['all'])
          this.isEdit=false
        })
    }

  }

}
