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
      }
      this.pokedexService.getPokemonByGeneration(this.genId).subscribe(x => this.pokemonSpecies = x);
    });
  }

  ngOnInit(): void {
  }
}