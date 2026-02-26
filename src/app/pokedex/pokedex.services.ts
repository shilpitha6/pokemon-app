import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  private apiUrl = 'https://pokeapi.co/api/v2/generation';

  constructor(private http: HttpClient) {}
// takes generationid using apiUrl 
//I moved the mapping to here so we do not need to map in the component and can store this observable directly
  getPokemonByGeneration(genId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${genId}`).pipe(map((res: any) => {
        return res.pokemon_species.map((x: any) => {
          return {name: x.name, id: x.url.slice(0, -1).split('/').pop() }
        })
      }));
  }


  //to extract types for pokemon based on name
  getPokemonTypes(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}