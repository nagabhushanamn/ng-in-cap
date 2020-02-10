import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'NG-Final';
  todos = []

  todoStream = new Subject()
  
  addNewTodo() {
    let newTodo = {
      id: Math.floor(Math.random() * 100),
      title: 'New one',
      completed: false
    }
    
    // this.todos.push(newTodo) // mutation 
    this.todos = this.todos.concat(newTodo) // immutation
    this.todoStream.next(this.todos)
  }

}
