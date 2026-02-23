import { Routes } from '@angular/router';
import { Generations } from './generations/generations';
import { Moves } from './moves/moves';
import { Berries } from './berries/berries';
import { Encounters } from './encounters/encounters';
import { Abilities } from './abilities/abilities';
import { Pokedex } from './pokedex/pokedex';
import { GenId } from './gen-id/gen-id';


export const routes: Routes = [
    
    {
      path: 'generations',
      component: Generations,
      
    },
    {
      path:'generations/:id',
      component:GenId,
      children: [ 
      { path: 'abilities', component: Abilities }, 
      { path: 'moves', component: Moves }, 
      { path: 'pokedex', component: Pokedex } ]
    },
    
    {
      path: 'berries',
      component: Berries,
    },
    {
      path: 'encounters',
      component: Encounters,
    },
    
];
