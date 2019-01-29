import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  
  public ngIfVar: String = 'false';

  public ngForCount: Number = 1;
  public dates: string[] = ['a'];

  public ngClassVar: String = '';

  public ngSwitchVar: String = '1';

  constructor() { }

  ngForClick() {
    this.dates[0] = '1';
    for (let i = 0; i < this.ngForCount; i++) {
      this.dates[i] = Date.now().toString();
    }
  }

}
