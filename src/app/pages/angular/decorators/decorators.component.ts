import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent {
  public inputVarHolder: String;
  public inputAliasHolder: String;

  constructor() { }

  reactOnVar() {
    alert('Reaguju na kliknutí na tlačítko s proměnnou!');
  }
  reactOnAlias(msg: String) {
    alert('Klikl si na alias! text je ' + msg);
  }
}
