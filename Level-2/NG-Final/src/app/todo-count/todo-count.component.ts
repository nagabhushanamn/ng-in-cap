import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCountComponent implements OnInit {

  count = 0

  @Input() todoStream: Subject<any>

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.todoStream.subscribe((todos) => {
      this.count = todos.length;
      this.cd.detectChanges()
    })
  }

}
