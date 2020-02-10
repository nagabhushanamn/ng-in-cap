import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  own_message = "CHILD"
  @Input("message") inp_message = 0

  // constructor() {
  //   console.log("Child :: constructor()")
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("Child :: ngOnChanges()")
  //   let inp_message = changes.inp_message;
  //   let n = Number.parseInt(inp_message.currentValue);
  //   if (n % 2 === 0)
  //     this.own_message = this.own_message.toLocaleLowerCase()
  //   else
  //     this.own_message = this.own_message.toUpperCase()
  // }

  // ngOnInit() {
  //   console.log("Child :: ngOnInit()")
  // }

  // ngDoCheck() {
  //   console.log("Child :: ngDoCheck()")
  // }

  // ngOnDestroy() {
  //   console.log("Child :: ngOnDestroy()")
  // }

}
