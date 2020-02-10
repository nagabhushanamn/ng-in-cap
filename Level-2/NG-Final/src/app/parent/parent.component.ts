import { Component, OnInit, SimpleChanges, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { GreetComponent } from '../greet/greet.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = 0

  @ContentChild(GreetComponent, null) contentGreetChild: GreetComponent;
  @ViewChild(ChildComponent, null) viewChild: ChildComponent;
  @ViewChild("header", null) headerEl: ElementRef;


  constructor() { }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("Parent :: ngOnChanges()")
  // }

  ngOnInit() {
    console.log("Parent :: ngOnInit()")
    let i = 0;
    setInterval(() => {
      i++
      this.message = i
    }, 2000)
  }

  // ngDoCheck() {
  //   console.log("Parent :: ngDoCheck()")
  // }

  // ngDestroy() {
  //   console.log("Parent :: ngDestroy()")
  // }

  ngAfterContentInit() {
    console.log("Parent :: ngAfterContentInit()")
    console.log(this.contentGreetChild)
  }

  ngAfterViewInit() {
    console.log("Parent :: ngAfterViewInit()")
    console.log(this.viewChild)
    this.headerEl.nativeElement.textContent = "NG-capgemini"
  }



}
