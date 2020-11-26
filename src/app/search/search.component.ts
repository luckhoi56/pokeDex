import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemons/pokemon.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public m_search_pokemon
  public m_search_value 
  constructor(
    public pokemon: PokemonService
    ) {
    
   }

  ngOnInit(): void {
    this.m_search_value = ''
  }
  public search(){
    this.pokemon.searchPokemon().subscribe(resp =>{
      this.m_search_pokemon = resp
      console.log(resp)
    })
  }

}
