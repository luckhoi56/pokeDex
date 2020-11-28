import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import {PokemonService} from '../pokemons/pokemon.service'
import {NotFoundDialogComponent} from './not-found-dialog/not-found-dialog.component'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public m_search_pokemon
  public m_search_name:string
  
  public error: any; 
  constructor(
    public pokemon: PokemonService,
    public dialog: MatDialog
    ) {
    
   }

  ngOnInit(): void {
    this.m_search_name=''
  }
  public search(){
    console.log("my pokemon" +this.m_search_name)
    
    this.pokemon.searchPokemon(this.m_search_name.toLowerCase()).subscribe(resp =>{
      this.m_search_pokemon = resp
      console.log(resp)
    },error => { // second parameter is to listen for error
      console.log( error);
      this.error = error;
      this.openDialog()
    }
    )
    
  }
  public openDialog():void{
    this.dialog.open(NotFoundDialogComponent);
  }

}
