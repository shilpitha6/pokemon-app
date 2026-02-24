import { Component, Input, OnInit } from '@angular/core'; 
import { Router, RouterLink, RouterOutlet } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { PokedexService } from './pokedex.services'; 
import { CardPokedex } from './card-pokedex/card-pokedex';

@Component({ 
    selector: 'app-pokedex', 
    standalone:true, 
    imports: [RouterLink,CommonModule,RouterOutlet,CardPokedex], 
    templateUrl: './pokedex.html', 
    styleUrl: './pokedex.css', 
  })
    
export class Pokedex implements OnInit { 
  @Input() pokemonId!: number;
  pokemonSpecies: any[] = []; 
  selectedGeneration: number = 2; 
  constructor(private pokedexService: PokedexService, private httpClient:HttpClient) {
    
  } 
  ngOnInit(): void { 
    
    this.loadData(); 
  } 
  loadData() { 
    this.pokedexService.getPokemonByGeneration
    (this.selectedGeneration) 
    .subscribe({ next: (response) => { 
      this.pokemonSpecies = response.pokemon_species; }, 
        error: (err) => 
          console.error(err)
       }); 
    } 
    
    changeGeneration(genId: number) {
      this.selectedGeneration = genId; 
      this.loadData(); 
      }
    
    getIdFromUrl(url: string): number { 
      const parts = url.split('/'); 
      return +parts[parts.length - 2]; 
}
    
    }


    

 
  
     