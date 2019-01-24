import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {
  @HostListener('mouseover') onHover() {
    document.getElementById('text').style.color = 'red';
  }
  @HostListener('mouseout') onOut() {
    document.getElementById('text').style.color = 'black';
  }
  constructor() { }

  ngOnInit() {
  }
}
