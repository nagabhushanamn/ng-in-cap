import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-box',
  templateUrl: './counter-box.component.html',
  styleUrls: ['./counter-box.component.css']
})
export class CounterBoxComponent implements OnInit {

  total: number = 0

  constructor() { }

  ngOnInit() {
  }

  doCount(event) {
    this.total += Number.parseInt(event)
  }

}
