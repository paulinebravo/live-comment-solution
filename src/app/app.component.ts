import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Live Comment';
  currentPageTitle;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  checkRoute() {
    if (this.router.url === '/') {
      this.currentPageTitle = 'EVENTS CATALOG';
    } else {
      this.currentPageTitle = 'POST MESSAGE';
    }
    return this.router.url !== '/';
  }

}
