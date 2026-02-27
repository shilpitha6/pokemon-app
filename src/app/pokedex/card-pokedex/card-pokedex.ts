import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexService } from '../pokedex.services';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-card-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pokedex.html',
  styleUrl: './card-pokedex.css',
})
export class CardPokedex implements OnInit {

  @Input() name!: string;
  @Input() id!: number;

  pokemonTypes$!: Observable<{ 
    types: string [], 
    spriteUrl: string }>;

    //These would probably work better as css classes in this scenrio, but this would be useful in
    //other scenarios where we may need to have these values in the component.
    //Somwhere like a constants file
  
  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    if (this.name) {
      this.pokemonTypes$ = this.pokedexService.getPokemonTypes(this.name)
       .pipe(map(res => ({
          types: res.types.map((t: any) => t.type.name),
           spriteUrl: res.sprites.front_default || ''
          }))
         
      );
    }
  }

}