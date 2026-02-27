import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokedexService } from './pokedex.services';
import { CardPokedex } from './card-pokedex/card-pokedex';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, CardPokedex],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex implements OnInit {

  pokemonSpecies$: Observable<any>;
  genId: number = 1;

  currentPage: number = 1;
  limit: number = 20;

  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute
  ) {
    this.pokemonSpecies$ =this.pokedexService
    .getPokemonByGeneration(this.genId);
      route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.genId = +id;
        this.loadPokemon();
      }
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.genId = +id;
        this.loadPokemon();
      }
    });
  }


  loadPokemon() {
    this.pokemonSpecies$ = this.pokedexService
      .getPokemonByGeneration(this.genId)
      .pipe(
        map((pokemonArray: any[]) =>
          pokemonArray
            .sort((a, b) => a.id - b.id) 
            .slice(
              (this.currentPage - 1) * this.limit,
              this.currentPage * this.limit
            ) 
        )
      );
  }

  nextPage() {
    this.currentPage++;
    this.loadPokemon();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPokemon();
    }
  }
}