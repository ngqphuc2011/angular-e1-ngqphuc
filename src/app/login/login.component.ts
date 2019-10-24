import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;

  // user list
  arrUser = [
    { username: 'ngqphuc', password: '12345' },
    { username: 'a', password: 'a' }
  ];
  constructor() { }

  login() {
    const check = this.arrUser.includes(this.arrUser.find(e =>
      e.username === this.username &&
      e.password === this.password
    ));
    console.log(check);
    if (!check) {
      alert('Invalid username or password!');
      this.username = '';
      this.password = '';
    } else {
       window.location.href = '/main';
    }
  }
  ngOnInit() {
  }

}
