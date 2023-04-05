import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netup';
  onSave(){
    console.log("hi")
  }
  onSav(event){
    console.log(event)
  }
}
