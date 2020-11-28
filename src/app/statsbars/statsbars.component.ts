import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-statsbars',
  templateUrl: './statsbars.component.html',
  styleUrls: ['./statsbars.component.css']
})
export class StatsbarsComponent implements OnInit {
  @Input() pokemon:any
  constructor() { }

  ngOnInit(): void {
  }

}
