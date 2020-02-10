import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  message = ""

  constructor() { }

  ngOnInit() {
  }

  changeMessage(newMessage) {
    this.message = newMessage
  }

}
