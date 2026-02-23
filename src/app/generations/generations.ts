
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Moves } from '../moves/moves';
import { Abilities } from '../abilities/abilities';
import { Pokedex } from '../pokedex/pokedex';
import { GenerationsService } from './generations.services';
import { GenId } from '../gen-id/gen-id';

interface generations{
  name:string;
}

@Component({
  selector: 'app-generations',
  standalone:true,
  imports: [ RouterOutlet, CommonModule],
  templateUrl: './generations.html',
  styleUrl: './generations.css',
})

export class Generations   {
  generations: any[] =[];
  constructor (private generationService:GenerationsService, 
    private router:Router) {}

  ngOnInit(){
    this.generationService.Generations().subscribe((data: any) => {
    this.generations = data.results});


    }

  gotoDetails(gen: any) {
  const id = gen.url.split('/').filter(Boolean).pop(); 
  this.router.navigate(['/generations', id]);
}
   
  }

  


  


 

