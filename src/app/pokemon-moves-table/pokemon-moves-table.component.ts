import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-moves-table',
  templateUrl: './pokemon-moves-table.component.html',
  styleUrls: ['./pokemon-moves-table.component.css']
})
export class PokemonMovesTableComponent implements OnInit {
  @Input() pokemon:any
  displayedColumns: string[] = [ 'name'];
  dataSource = '';
  constructor() { }

  ngOnInit(): void {
  }

}
