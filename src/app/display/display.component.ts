import { Component, Input, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  @Input() pokemon:any;
  constructor() { }

  ngOnInit(): void {
  }

}
