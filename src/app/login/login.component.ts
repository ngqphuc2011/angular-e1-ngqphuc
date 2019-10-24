import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';


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

  constructor(private router: Router) { }

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
      this.router.navigate(['/main'], { state: { data: { username: this.username } } });
    }
  }
  ngOnInit() {
  }

}
