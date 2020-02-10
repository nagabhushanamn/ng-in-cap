import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    //..
    localStorage.setItem('auth_token', "123456sdsdfsdfs.4567sdfsdfsdf.3456789sdfsfsdf")
    this.router.navigate(['all'])
  }

}
