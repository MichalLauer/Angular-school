import { Component } from '@angular/core';

@Component({
  selector: 'app-data-manipulation',
  templateUrl: './data-manipulation.component.html',
  styleUrls: ['./data-manipulation.component.css']
})
export class DataManipulationComponent {
  public interpolation_string: String = 'proměnná';
  public input_backgroundColor = 'white';
  public ngModelVar = 'Přepiš mě!';
  
  constructor() { }

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
