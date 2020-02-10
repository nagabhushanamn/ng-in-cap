import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoBoxComponent implements OnInit {

  
  @Input('value') todos = []

  constructor() { }

  ngOnInit() {
  }


}
