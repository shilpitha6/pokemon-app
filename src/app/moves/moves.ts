import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-moves',
  imports: [RouterLink],
  templateUrl: './moves.html',
  styleUrl: './moves.css',
})
export class Moves implements OnInit {
  moves: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.parent?.snapshot.params['id'];
    this.http.get(`https://pokeapi.co/api/v2/generation/${id}`)
      .subscribe((data: any) => {
        this.moves = data.moves;
      });
  }
}
