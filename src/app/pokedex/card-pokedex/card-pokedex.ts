import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-pokedex',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './card-pokedex.html',
  styleUrl: './card-pokedex.css',
})
export class CardPokedex {

 @Input() name!: string;
 @Input() pokemonId!: string;


}
