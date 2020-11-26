import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  public searchPokemon(pokemon_name='ditto'){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  }
}
