import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser = ""

  @Input() loginStream: Subject<any>

  constructor(private cd: ChangeDetectorRef) { }


  ngOnInit() {
    this.cd.detach()
    this.loginStream.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.cd.reattach()
      }
    })
  }

}
