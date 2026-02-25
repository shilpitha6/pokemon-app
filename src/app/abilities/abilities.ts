import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abilities',
  imports: [],
  templateUrl: './abilities.html',
  styleUrl: './abilities.css',
})

export class Abilities implements OnInit {
  abilities: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.parent?.snapshot.params['id'];
    this.http.get(`https://pokeapi.co/api/v2/generation/${id}`)
      .subscribe((data: any) => {
        this.abilities = data.abilities;
      });
  }
}



