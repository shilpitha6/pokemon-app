import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-pokedex',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './card-pokedex.html',
  styleUrl: './card-pokedex.css',
})
export class CardPokedex implements OnInit{

 @Input() name!: string;
 @Input() id!:number;
 spriteUrl: string = '';
 types: { type: string, color: string }[] = [];

  TYPE_COLORS: { [key: string]: string } = {
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    normal: '#A8A77A',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.loadPokemonData();
  }

  loadPokemonData() {
    if (!this.name) return;

    this.pokedexService.getPokemonTypes(this.name).subscribe({
      next: (res: any) => {
        
        this.types = res.types.map((t: any) => ({
          type: t.type.name,
          color: this.TYPE_COLORS[t.type.name] || '#777'
        }));

        this.spriteUrl = res.sprites.front_default || ''; 
      },
      error: (err) => {
        console.error('Not Avaiable', this.name, err);
      }
    });
  }
}
