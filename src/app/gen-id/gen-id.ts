import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Params, RouterOutlet } from '@angular/router';
import { Abilities } from "../abilities/abilities";
import { Moves } from "../moves/moves";
import { Pokedex } from "../pokedex/pokedex";

@Component({
  selector: 'app-gen-id',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './gen-id.html',
  styleUrl: './gen-id.css',
})
export class GenId implements OnInit {
  genDetails: any = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        const url = `https://pokeapi.co/api/v2/generation/${id}`;
        this.loadData(url);
      }
    });
  
  }

  loadData(url: string) {
    this.http.get(url).subscribe({
      next: (data: any) => {
        this.genDetails = data;
        console.log(data);
        
      },
      error: (err: any) => {
        console.error('fetch error', err);
      }
    });
  }
}


