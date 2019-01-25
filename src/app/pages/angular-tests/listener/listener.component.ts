import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {

  public num: Number = Math.round(Math.random() * 10);

  @HostListener('click') onHover() {
    this.num = Math.round(Math.random() * 10);
  }

  constructor() { }

  ngOnInit() {
  }
}
