import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { badWord } from '../custom-validators'

import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  @Output() save = new EventEmitter()

  isOpen: boolean = false
  reviewForm: FormGroup
  errorMessages = {}

  @Input() submitProgress = false

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      author: ['', [Validators.required, Validators.email]],
      stars: ['5'],
      body: ['', [Validators.required, Validators.minLength(4), badWord]]
    })

    let authorFormControl = this.reviewForm.get('author');
    authorFormControl
      .statusChanges
      .pipe(debounceTime(3000))
      .subscribe(status => {
        if (status === "INVALID") {
          let errors = authorFormControl.errors;
          if (errors.required) {
            this.errorMessages['author'] = "author is required"
          }
          if (errors.email) {
            this.errorMessages['author'] = "author must be email"
          }
        } else {
          this.errorMessages['author'] = ""
        }
      })

    let bodyFormControl = this.reviewForm.get('body');
    bodyFormControl.statusChanges.subscribe(status => {
      if (status === "INVALID") {
        let errors = bodyFormControl.errors;
        if (errors.required) {
          this.errorMessages['body'] = "body is required"
        }
        if (errors.minlength) {
          this.errorMessages['body'] = "body must be >= 4 chars"
        }
        if (errors.isBad) {
          this.errorMessages['body'] = "body must contain illegal words"
        }
      } else {
        this.errorMessages['body'] = ""
      }
    })

    this.reviewForm.get('author')
      .valueChanges.subscribe(value => {
        //console.log(value)
      })

  }

  toggleForm() {
    this.isOpen = !this.isOpen
  }
  handleForm(event) {
    event.preventDefault();
    if (this.reviewForm.valid) {
      let formModel = this.reviewForm.value
      this.save.emit({ review: formModel })
      this.toggleForm();
    }
  }

}
