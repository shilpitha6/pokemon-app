import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  private apiUrl = 'https://pokeapi.co/api/v2/generation';

  constructor(private http: HttpClient) {}
// takes generationid using apiUrl 
  getPokemonByGeneration(genId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${genId}`);
  }


  //to extract types for pokemon based on name
  getPokemonTypes(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}