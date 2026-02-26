import {  Routes } from '@angular/router';
import { Generations } from './generations/generations';
import { Moves } from './moves/moves';
import { Berries } from './berries/berries';
import { Encounters } from './encounters/encounters';
import { Abilities } from './abilities/abilities';
import { Pokedex } from './pokedex/pokedex';
import { GenId } from './gen-id/gen-id';
import { GenerationRouter } from './generations/generation-router';



export const routes: Routes = [
    
    {
      path: 'generations',
      component: GenerationRouter,
      children:
      [
        {
          path:':id',
          component:GenId,
        },
        {
          path:':id/pokedex',
          component:Pokedex
        },
        {
          path:':id/abilities',
          component:Abilities
        },
        {
          path:':id/moves',
          component:Moves
        },
        {
          path: '**',
          component: Generations
        }
      ]
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
