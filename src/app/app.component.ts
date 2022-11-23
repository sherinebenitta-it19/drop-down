import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpened:boolean=false;
  toggleMenu():void{
    this.isMenuOpened=!this.isMenuOpened;
  }
  clickOutside():void{
    this.isMenuOpened=false;
  }
  myimage:string="/assets/images/moon.jpg";
}
