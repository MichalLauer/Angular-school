import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() var = new EventEmitter<String>();
  @Output('alias') outputVar = new EventEmitter<String>();

  public value: String;

  constructor() { }

  react(sentData: Boolean) {
    if (sentData) {
      this.outputVar.emit(this.value);
    } else {
      this.var.emit(this.value);
    }
  }
}
