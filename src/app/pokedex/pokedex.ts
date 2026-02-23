import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokedexService } from './pokedex.services';



@Component({
  selector: 'app-pokedex',
  standalone:true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex implements OnInit {

 pokemonSpecies: any[] = [];
  selectedGeneration: number = 1;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  
  loadPokemon() {
    this.pokedexService.getPokemonByGeneration(this.selectedGeneration)
      .subscribe({
        next: (res) => {
          this.pokemonSpecies = res.pokemon_species;
        },
        error: (err) => console.error(err)
      });
  }

  changeGeneration(genId: number) {
  
  this.selectedGeneration = genId;
  this.loadPokemon();
  
}

}
  


