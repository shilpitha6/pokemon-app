import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-species',
  imports: [],
  templateUrl: './pokemon-species.html',
  styleUrl: './pokemon-species.css',
})
export class PokemonSpecies {
  selectedGeneration: number = 2; 
  constructor(
     private httpClient:HttpClient) {
    
  } 

}
