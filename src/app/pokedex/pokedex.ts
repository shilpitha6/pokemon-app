import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokedexService } from './pokedex.services';
import { CardPokedex } from './card-pokedex/card-pokedex';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [ 
    CommonModule, 
    CardPokedex],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})

export class Pokedex implements OnInit {
  pokemonSpecies: any[] = [];
  pokemonSpecies$: Observable<any>;
  genId: number = 1;
  constructor(
    //service are used to call apis
    private pokedexService: PokedexService,
    //used to read Url parameters
    private route: ActivatedRoute
  ) {
      this.pokemonSpecies$ =this.pokedexService.getPokemonByGeneration(this.genId);
      route.paramMap.subscribe(params => {
      const id = params.get('id');
      //converting id(string) to number and fetch the pokedex of that generation
      if (id) {
        this.genId = +id;
        this.pokemonSpecies$ = this.pokedexService.getPokemonByGeneration(this.genId);
        return;
      }
      else{
        console.log('no id provided');
      }
    });
  }

  ngOnInit(): void {

    // to extarct id
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      //converting id(string) to number and fetch the pokedex of that generation
      if (id) {
        this.genId = +id;
        this.pokedexService.getPokemonByGeneration(this.genId).subscribe(x => {
        console.log('Setting species', x)
        this.pokemonSpecies = [...x]
      })
        // console.log(this.genId);
      }
      else{
        console.log('no id provided');
      }
    });

  }

  // takes generation id and calls pokedexService to 
  // store the pokemon_species 
  loadPokemonSpecies(id: number) {


    // this.pokedexService.getPokemonByGeneration(id)
    // .subscribe(data => {

    //   this.pokemonSpecies = data.pokemon_species.map
    //   ((pokemon: any) => {
    //     const urlParts = pokemon.url.split('/');
    //     const pokemonId = +urlParts[urlParts.length - 2];
    //     const newPokemon = {
    //       name: pokemon.name,
    //       id:pokemonId, 
    //     };
    //     return newPokemon;
    //   });
    // });
  }

  

  
}