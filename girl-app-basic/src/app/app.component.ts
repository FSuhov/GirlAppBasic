import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  girls = []

  onBlondAdded(girlData:{girlName:string, girlBio:string}){
    this.girls.push({
      type: 'blond',
      name: girlData.girlName,
      bio: girlData.girlBio
    });
  }
  onRedAdded(girlData:{girlName:string, girlBio:string}){
    this.girls.push({
      type: 'red',
      name: girlData.girlName,
      bio: girlData.girlBio
    });
  }
  onBrunAdded(girlData:{girlName:string, girlBio:string}){
    this.girls.push({
      type: 'brun',
      name: girlData.girlName,
      bio: girlData.girlBio
    });
  }
}
