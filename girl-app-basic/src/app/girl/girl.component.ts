import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.css']
})
export class GirlComponent implements OnInit {
  @Input() girl: {type: string, name: string, bio: string};
  
  constructor() { }

  ngOnInit() {
  }

}
