import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private route: Router,
  ) {}

  ngOnInit(): void {
  }


  clearSection(){
    localStorage.clear()
    this.route.navigate([''])
  }

}
