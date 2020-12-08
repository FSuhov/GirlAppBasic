import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  @Output() blondHired = new EventEmitter<{girlName:string, girlBio:string}>();
  @Output() redHired = new EventEmitter<{girlName:string, girlBio:string}>();
  @Output() brunHired = new EventEmitter<{girlName:string, girlBio:string}>();
  newGirlName = '';
  newGirlBio = '';

  constructor() { }

  ngOnInit() {
  }

  onAddBlond(){
    this.blondHired.emit({girlName: this.newGirlName, girlBio: this.newGirlBio});
  }
  onAddRed(){
    this.redHired.emit({girlName: this.newGirlName, girlBio: this.newGirlBio});
  }
  onAddBrun(){
    this.brunHired.emit({girlName: this.newGirlName, girlBio: this.newGirlBio});
  }
}
