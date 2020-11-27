import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import {PokemonService} from '../pokemons/pokemon.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public m_search_pokemon

  @Input() public m_search_name:string
  
  @Output() valueChange = new EventEmitter<string>()
  
  updateValue(value){
    this.m_search_name = value
    this.valueChange.emit(this.m_search_name)
  }
  constructor(
    public pokemon: PokemonService
    ) {
    
   }

  ngOnInit(): void {
    
  }
  public search(){
    console.log("my pokemon" +this.m_search_name)
    /*
    this.pokemon.searchPokemon(this.m_search_value).subscribe(resp =>{
      this.m_search_pokemon = resp
      console.log(resp)
    })
    */
    
  }

}
