import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  private apiUrl = 'https://pokeapi.co/api/v2/generation';

  constructor(private http: HttpClient) {}

 
  getPokemonByGeneration(genId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/${genId}`);
}
}