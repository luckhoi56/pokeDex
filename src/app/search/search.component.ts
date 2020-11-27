import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import {PokemonService} from '../pokemons/pokemon.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public m_search_pokemon
  public m_search_name:string
  
  constructor(
    public pokemon: PokemonService
    ) {
    
   }

  ngOnInit(): void {
    this.m_search_name=''
  }
  public search(){
    console.log("my pokemon" +this.m_search_name)
    
    this.pokemon.searchPokemon(this.m_search_name).subscribe(resp =>{
      this.m_search_pokemon = resp
      console.log(resp)
    })
    
    
  }

}
