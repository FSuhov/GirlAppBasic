import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() throwNumber = new EventEmitter<number>();
  interval;


  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(() =>{
      let rndNumber = Math.floor((Math.random() * 10) + 1);
      console.log(rndNumber);
      this.throwNumber.emit(rndNumber)
    }, 2000);
  }
  onStopGame(){
    clearInterval(this.interval);
  }

  emitNumber(){
    let rndNumber = Math.floor((Math.random() * 10) + 1);
    console.log(rndNumber);
    this.throwNumber.emit(rndNumber);
  }

}
