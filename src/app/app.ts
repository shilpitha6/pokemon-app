import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Generations } from "./generations/generations";
import { Moves } from './moves/moves';
import { Abilities } from './abilities/abilities';
import { Pokedex } from './pokedex/pokedex';

@Component({
  selector: 'app-root',
  imports: [Header, Generations, Moves, Abilities, Pokedex, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokemon-app');
}
