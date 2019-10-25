import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private state$: Observable<object>;
  username: string;
  constructor(public router: Router) {
    this.username = this.router.getCurrentNavigation().extras.state.username;
  }

  ngOnInit() {

  }
}