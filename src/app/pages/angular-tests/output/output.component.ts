import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output() var = new EventEmitter<String>();
  // tslint:disable-next-line:no-output-rename
  @Output('alias') outputVar = new EventEmitter<String>();

  public value: String;

  constructor() { }

  ngOnInit() {
  }

  react(sentData: Boolean) {
    if (sentData) {
      this.outputVar.emit(this.value);
    } else {
      this.var.emit(this.value);
    }
  }
}
