import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-manipulation',
  templateUrl: './data-manipulation.component.html',
  styleUrls: ['./data-manipulation.component.css']
})
export class DataManipulationComponent implements OnInit {
  public interpolation_string: String = 'proměnná';
  public input_backgroundColor = 'white';
  public ngModelVar = 'Přepiš mě!';
  
  constructor() { }

  ngOnInit() {
  }
  saveInterp() {
    this.interpolation_string = (<HTMLInputElement>document.getElementById('interp-input')).value;
  }
  changeColor() {
    this.input_backgroundColor = (<HTMLInputElement>document.getElementById('div-color')).value;
  }
  updateEventColor(color: string) {
    (<HTMLInputElement>document.getElementById('event-div')).style.backgroundColor = color;
  }
}
