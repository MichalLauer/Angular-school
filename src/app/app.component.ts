import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onMenuClick() {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    if (window.innerWidth <= 1024) {
      setTimeout( () => {document.getElementById('nav-button').click(); }, 200);
    }
  }

}
