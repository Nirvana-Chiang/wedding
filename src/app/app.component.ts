import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wedding';

  openMap() {    
    const url = 'https://maps.app.goo.gl/14nCbxkAgWiMWXwf8';
    window.open(url, '_blank');
  }

  goToSection(section: string) {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
