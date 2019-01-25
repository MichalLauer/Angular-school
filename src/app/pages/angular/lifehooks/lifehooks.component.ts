import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-lifehooks',
  templateUrl: './lifehooks.component.html',
  styleUrls: ['./lifehooks.component.css']
})
export class LifehooksComponent implements OnInit, DoCheck {

  constructor() { }

  ngDoCheck() {

  }
  ngOnInit() {
  }
}
