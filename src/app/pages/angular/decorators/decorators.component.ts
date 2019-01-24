import { Component, OnInit } from '@angular/core';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {
  
  public inputVarHolder: String;
  public inputAliasHolder: String;

  constructor() { }

  ngOnInit() {
  }

  reactOnVar() {
    alert('Reaguju na kliknutí na tlačítko s proměnnou!');
  }
  reactOnAlias(msg: String) {
    alert('Klikl si na alias! text je ' + msg);
  }
}
